//soal 1
console.log("soal 1")

function halo() {
    return '"Halo Sanbers!"'
}

console.log(halo());
console.log("\n")

//soal 2
console.log("soal 2")

var num1 = 12
var num2 = 4

function kalikan(num1, num2) {
    return num1 * num2
}

var hasilKali = kalikan(num1, num2)
console.log(hasilKali);
console.log("\n")

//soal 3
console.log("soal 3")

function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age +
        " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!"
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 
console.log("\n")

//soal 4
console.log("soal 4")

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]

var objectDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
}

console.log(objectDaftarPeserta);
console.log("\n")

//soal 5
console.log("soal 5")

var listBuah = [{
        nama: "strawberry",
        warna: "merah",
        adaBijinya: "tidak",
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        adaBijinya: "ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: "tidak",
        harga: 5000
    }
]

console.log(listBuah[0]);
console.log("\n")

//soal 6
console.log("soal 6")

var dataFilm = []

var film = {
    nama: "Doraemon",
    durasi: "1.5 jam",
    genre: "Animasi",
    tahun: 2000
}

dataFilm.push(film)
console.log(dataFilm);

