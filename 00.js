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
✔ Kebijakan dapat berubah suatu waktu bila diperlukan 👉👈

Best regards, M2-BOT.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
_Sebelum menggunakan bot ini mohon untuk patuhi peraturan yang telah kami buat._
*PERATURAN BOT.
DILARANG KERAS TELFON/VC ATAU KAKAK DIBLOKIR, KARNA BOT NYA UDAH DI PROGRAM OTOMATIS.*

Berikut adalah beberapa fitur yang ada pada bot ini! 🤖

Sticker Creator Services:
-❥ *${prefix}sttext*    ERROR
-❥ *${prefix}sticker*   OK
-❥ *${prefix}gif*       OK
-❥ *${prefix}giphy*     OK
-❥ *${prefix}meme*      OK
-❥ *${prefix}quotemaker*    ERROR   
-❥ *${prefix}nulis*     ERROR

Islamic Services:
-❥ *${prefix}listsurah* OK
-❥ *${prefix}infosurah* OK
-❥ *${prefix}surah*     OK
-❥ *${prefix}tafsir*    OK
-❥ *${prefix}ALaudio*   OK
-❥ *${prefix}jsolat*    ERROR

Fun Menu (In Group Only):
-❥ *${prefix}simisimi*  ERROR
-❥ *${prefix}katakasar* OK
	┷-❥ *${prefix}klasmen*

Download Services:
-❥ *${prefix}ytmp3* ERROR
-❥ *${prefix}ytmp4* ERROR
-❥ *${prefix}facebook*  ERROR

Primbon:
-❥ *${prefix}cekzodiak* OK
-❥ *${prefix}artinama*  OK  
-❥ *${prefix}cekjodoh*  OK

Search Any:
-❥ *${prefix}dewabatch* ERROR
-❥ *${prefix}images*    OK
-❥ *${prefix}sreddit*   OK
-❥ *${prefix}resep*     OK
-❥ *${prefix}stalkig*   ERROR
-❥ *${prefix}wiki*      OK
-❥ *${prefix}cuaca*     OK
-❥ *${prefix}chord*     OK
-❥ *${prefix}lirik*     OK
-❥ *${prefix}play*      ERROR
-❥ *${prefix}movie*     ERROR

Random Teks:
-❥ *${prefix}motivasi*  ERROR
-❥ *${prefix}howgay*    ERROR
-❥ *${prefix}fakta*     OK
-❥ *${prefix}pantun*    OK
-❥ *${prefix}katabijak* OK
-❥ *${prefix}quote*     OK  
-❥ *${prefix}cerpen*    ERROR
-❥ *${prefix}cerdew*    ERROR
-❥ *${prefix}puisi*     ERROR

Random Images:
-❥ *${prefix}anime*     DISABLED
-❥ *${prefix}kpop*      DISABLED
-❥ *${prefix}memes*     OK

Lain-lain:
-❥ *${prefix}tts*       OK
-❥ *${prefix}translate* ERROR
-❥ *${prefix}covidindo* OK
-❥ *${prefix}ceklokasi* ERROR
-❥ *${prefix}alayfont*  OK
-❥ *${prefix}grouplink* OK
-❥ *${prefix}revoke*    OK

Tentang Bot:
-❥ *${prefix}tnc*       OK
-❥ *${prefix}donasi*    OK
-❥ *${prefix}botstat*   OK
-❥ *${prefix}join*      ERROR
-❥ *${prefix}ping*      OK

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-❥ *${prefix}ban* - banned
-❥ *${prefix}bc* - promosi
-❥ *${prefix}leaveall* - keluar semua grup
-❥ *${prefix}clearall* - hapus semua chat

Hope you have a great day! ✨
Jangan lupa untuk bersyukur, beramal dan bahagia! 😃
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
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*
-❥ *${prefix}welcome*

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

Doakan agar project bot ini bisa terus berkembang,
Doakan agar para developer selalu diberi kesehatan dan keberkahan.

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. ~M2-BOT`
}
