const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
⚠ ATTENTION! ⚠

⚠ Mohon gunakan Bot ini dengan bijak dengan tidak melakukan spam, panggilan suara atau panggilan video 🔇. 
Jika hal tersebut terjadi kami akan memblokir nomor anda dari bot ini!
⚠ Dengan menggunakan bot ini maka anda menyetujui Kebijakan Layanan sebagai berikut:
✔ Kami tidak menyimpan data personal anda.
✔ Kami tidak bertanggung jawab atas segala bentuk sticker yang telah anda buat.
✔ Kami tidak memperjual belikan layanan bot ini.
⛔ Dilarang keras untuk mengkomersilkan segala bentuk yang diberikan oleh layanan bot ini.
✔ Dengan menggunakan bot ini pengguna setuju atas segala kebijakan dan resiko yang ada.
✔ Kebijakan dapat berubah suatu waktu bila diperlukan ☛☜

Best regards, M2-BOT.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Sebelum menggunakan bot ini mohon untuk patuhi peraturan yang telah kami buat.

PERATURAN BOT.
DILARANG KERAS TELFON/VC ATAU KAKAK DIBLOKIR, KARNA BOT NYA UDAH DI PROGRAM OTOMATIS.

Berikut adalah beberapa fitur yang ada pada bot ini!🤖

Creator:
-❥ *${prefix}sticker*
-❥ *${prefix}gif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

Islam:
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*


Fun Menu (Group):
-❥ *${prefix}katakasar*
		┷-❥ *${prefix}klasmen*

Download:
-❥ *${prefix}tiktok*
└Mendownload Video Tiktok Tanpa Watermark
-❥ *${prefix}insta*
└Mendownload Video dan Images Instagram
-❥ *${prefix}ytmus*
└Mendownload Audio dari Youtube
-❥ *${prefix}ytvid*
└Mendownload Video dari Youtube
-❥ *${prefix}twimg*
└Mengunduh Photo dari twitter
-❥ *${prefix}twvid*
Mengunduh Video dari twitter
(Dimohon untuk menggunakan semua fitur ini dengan bijak)

Primbon:
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

Search Any:
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}whatanime*

Random Teks:
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*

Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Lain-lain:
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}alayfont*

Tentang Bot:
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-❥ *${prefix}ban* - banned
-❥ *${prefix}bc* - promosi
-❥ *${prefix}leaveall* - keluar semua grup
-❥ *${prefix}clearall* - hapus semua chat

Hope you have a great day!✨
Jangan lupa untuk bersyukur, beramal dan bahagia!😃
Terimakasih telah menggunakan bot ini do'a ku hari ini, semoga hari mu lebih baik dari hari kemarin 😊`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}tagall*
-❥ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-❥ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hallo ${pushname}! terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

OVO : *-*
DANA : *-*
BCA : *-*
a.n MUHAMMAD MAULANA

Doakan agar project bot ini bisa terus berkembang,
Doakan agar para developer selalu diberi kesehatan dan keberkahan.

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. ~M2-BOT`
}
