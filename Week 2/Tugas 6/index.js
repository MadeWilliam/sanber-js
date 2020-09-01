//Soal 1
let kelilingLingkaran = r => (Math.PI * r * 2).toFixed(2)
const luasLingkaran = r =>  (Math.PI * r * r).toFixed(2)

console.log('Soal 1'); 
console.log(kelilingLingkaran(14));
console.log(luasLingkaran(14));
console.log('\n');

//Soal 2
let kalimat = '';

const tambahKata = (kataPertama, kataKedua, kataKetiga, kataKeempat, kataKelima) => 
kalimat = `${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat} ${kataKelima}`

console.log('Soal 2'); 
console.log(tambahKata("saya","adalah","seorang","frontend","developer"));
console.log('\n');

//Soal 3
const showName = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: console.log(`${firstName} ${lastName}`)
    }
}

console.log('Soal 3'); 
showName("William", "Imoh").fullName
console.log('\n');

//Soal 4
const destr = () => {
    const newObject = {
        firstName: "Harry",
        lastName: "Potter Holt",
        destination: "Hogwarts React Conf",
        occupation: "Deve-wizard Avocado",
        spell: "Vimulus Renderus!!!"
    }

    const {
        firstName,
        lastName,
        destination,
        occupation,
        spell
    } = newObject

    return `${firstName} ${lastName} ${destination} ${occupation}`
}

console.log('Soal 4'); 
console.log(destr());
console.log('\n');

//soal 5
const spreadArray = () => {
    const west = ["Will", "Chris", "Sam", "Holly"]
    const east = ["Gill", "Brian", "Noel", "Maggie"]
    const combined = [...west, ...east]
    return combined
}

console.log('Soal 5'); 
console.log(spreadArray())
