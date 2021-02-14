const { create, Client } = require('@open-wa/wa-automate')
const figlet = require('figlet')
const options = require('./utils/options')
const { color, messageLog } = require('./utils')
const HandleMsg = require('./HandleMsg')

const start = (m2 = new Client()) => {
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('M2 BOT', { font: 'Ghost', horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color('[DEV]'), color('M2', 'yellow'))
    console.log(color('[~>>]'), color('BOT Started!', 'green'))

    // Mempertahankan sesi agar tetap nyala
    m2.onStateChanged((state) => {
        console.log(color('[~>>]', 'red'), state)
        if (state === 'CONFLICT' || state === 'UNLAUNCHED') m2.forceRefocus()
    })

    // ketika bot diinvite ke dalam group
    m2.onAddedToGroup(async (chat) => {
    const groups = await m2.getAllGroups()
    // kondisi ketika batas group bot telah tercapai,ubah di file settings/setting.json
    if (groups.length > groupLimit) {
    await m2.sendText(chat.id, `Sorry, the group on this Bot is full\nMax Group is: ${groupLimit}`).then(() => {
          m2.leaveGroup(chat.id)
          m2.deleteChat(chat.id)
      }) 
    } else {
    // kondisi ketika batas member group belum tercapai, ubah di file settings/setting.json
        if (chat.groupMetadata.participants.length < memberLimit) {
        await m2.sendText(chat.id, `Sorry, Bot comes out if the group members do not exceed ${memberLimit} people`).then(() => {
          m2.leaveGroup(chat.id)
          m2.deleteChat(chat.id)
        })
        } else {
        await m2.simulateTyping(chat.id, true).then(async () => {
          await m2.sendText(chat.id, `Hi buddy~, I m M2 BOT but you can call me M. To find out the commands for this bot services type ${prefix}menu or ${prefix}help`)
        })
        }
    }
    })

    // ketika seseorang masuk/keluar dari group
    m2.onGlobalParicipantsChanged(async (event) => {
        const host = await m2.getHostNumber() + '@c.us'
        const welcome = JSON.parse(fs.readFileSync('./settings/welcome.json'))
        const isWelcome = welcome.includes(event.chat)
        let profile = await m2.getProfilePicFromServer(event.who)
        if (profile == '' || profile == undefined) profile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
        // kondisi ketika seseorang diinvite/join group lewat link
        if (event.action === 'add' && event.who !== host && isWelcome) {
            await m2.sendFileFromUrl(event.chat, profile, 'profile.jpg', '')
            await m2.sendTextWithMentions(event.chat, `Hello, Welcome to the group @${event.who.replace('@c.us', '')} \n\nHave fun with us ✨`)
        }
        // kondisi ketika seseorang dikick/keluar dari group
        if (event.action === 'remove' && event.who !== host) {
            await m2.sendFileFromUrl(event.chat, profile, 'profile.jpg', '')
            await m2.sendTextWithMentions(event.chat, `Good bye @${event.who.replace('@c.us', '')}, We'll miss you 😭`)
        }
    })

    m2.onIncomingCall(async (callData) => {
        // ketika seseorang menelpon nomor bot akan mengirim pesan
        await m2.sendText(callData.peerJid, 'Maaf sedang tidak bisa menerima panggilan.\n\n-bot')
        .then(async () => {
            // bot akan memblock nomor itu
            await m2.contactBlock(callData.peerJid)
        })
    })

    // ketika seseorang mengirim pesan
    m2.onMessage(async (message) => {
        m2.getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[m2]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    m2.cutMsgCache()
                }
            })
        HandleMsg(m2, message)    
    
    })
    
    // Message log for analytic
    m2.onAnyMessage((anal) => { 
        messageLog(anal.fromMe, anal.type)
    })
}

//create session
create(options(true, start))
    .then((m2) => start(m2))
    .catch((err) => new Error(err))
