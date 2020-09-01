// Soal 1
function firstLoop() {
    let number = 10
    let firstLimit = 22
    let secondLimit = 2

    console.log('LOOPING PERTAMA');
    while (secondLimit <= 20) {
        console.log(secondLimit + ' - I love coding');
        secondLimit += 2
    }
    console.log('LOOPING KEDUA');
    while (number > 0) {
        firstLimit -= 2
        number--
        console.log(firstLimit + ' - I will become a frontend developer');
    }
}


//soal 2
function secondLoop() {
    let odds = ' - santai'
    let even = ' - Berkualitas'
    let words = ' - I Love Coding'

    for (let i = 1; i <= 20; i++) {
        if ((i % 3 === 0) && (i % 2 != 0)) {
            console.log(i + words);
        } else if (i % 2 === 0) {
            console.log(i + even);
        } else {
            console.log(i + odds);
        }
    }
}

//soal 3
function thirdLoop() {
    for (let i = 0; i <= 7; i++) {
        let str = ''
        for (let j = 1; j <= i; j++) {
            str += '#'
        };
        console.log(str);

    }
}

//soal 4
function firstArray() {
    const string = "saya sangat senang belajar javascript"
    
    let result = string.split(' ')
    console.log(result);
}

//soal 5
function secondArray() {
    const arr = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// show Hasil
console.log('Soal 1');
firstLoop()
console.log('\n');

console.log('Soal 2');
secondLoop()
console.log('\n');

console.log('Soal 3');
thirdLoop()
console.log('\n');

console.log('Soal 4');
firstArray()
console.log('\n');

console.log('Soal 5');
secondArray()