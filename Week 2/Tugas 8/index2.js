var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
const promiseBook = _ =>{
	console.log('Soal 2')
    readBooksPromise(10000, books[0])
        .then((book) =>{
            readBooksPromise(book, books[1])
                .then(book =>{
                    readBooksPromise(book, books[2])
                })
        })
}
promiseBook()