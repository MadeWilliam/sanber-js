// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
const callbackBook = _ =>{
    console.log('Soal 1')
    readBooks(10000,books[0], (book)=> {
        readBooks(book, books[1], (book)=> {
            readBooks(book, books[2], (book)=> {
                readBooks(book, books[3], (book)=>{})
            })
        })
    })
}
callbackBook()