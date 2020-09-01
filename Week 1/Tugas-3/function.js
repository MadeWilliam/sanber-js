// ============ 
// == SOAL 1 == 
// ============ 

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var gabungKata;
// OPERATION
kataKedua = kataKedua[0].toUpperCase() + kataKedua.substring(1, kataKedua.length);
kataKeempat = kataKeempat.toUpperCase();

gabungKata = `${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat}`;

// SHOW OUTPUT
console.log('Soal 1')
console.log(gabungKata)
console.log('\n')

// ============ 
// == SOAL 2 == 
// ============ 

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var arrayOfKata = [kataPertama, kataKedua, kataKetiga, kataKeempat];
var arrayOfNumber = [];
var number = 0;
var sum = 0;

// OPERATION
arrayOfKata.forEach(string => arrayOfNumber.push(parseInt(string)));

// ALTERNATIVE
// function handleParseInt(string) {
// 	var number = parseInt(string);
// 	// console.log(number);
// 	arrayOfNumber.push(number)
// }

arrayOfNumber.forEach(number => sum += number)

// ALTERNATIVE
// var add = (a, b) => a + b
// var sum = arrayOfNumber.reduce(add)

// SHOW OUTPUT
console.log('Soal 2')
console.log(sum)
console.log('\n')

// ============ 
// == SOAL 3 == 
// ============ 

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua= kalimat.substring(
	kataPertama.length+1, 
	kataPertama.length+1 + 'javascript'.length
); // do your own! 
var kataKetiga= kalimat.substring(
	kataPertama.length+1 + kataKedua.length+1, 
	kataPertama.length+1 + kataKedua.length+1 + 'itu'.length
); // do your own! 
var kataKeempat= kalimat.substring(
	kataPertama.length+1 + kataKedua.length+1 + kataKetiga.length+1, 
	kataPertama.length+1 + kataKedua.length+1 + kataKetiga.length+1 + 'keren'.length
); // do your own! 
var kataKelima= kalimat.substring(
	kataPertama.length+1 + kataKedua.length+1 + kataKetiga.length+1 + kataKeempat.length+1, 
	kataPertama.length+1 + kataKedua.length+1 + kataKetiga.length+1 + kataKeempat.length+1 + 'sekali'.length
); // do your own! 

console.log('Soal 3')
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
console.log('\n')

// ============ 
// == SOAL 4 == 
// ============ 

var nilai = 75;
var indeks;

// REQUIREMENTS
// nilai >= 80 indeksnya A
// nilai >= 70 dan nilai < 80 indeksnya B
// nilai >= 60 dan nilai < 70 indeksnya c
// nilai >= 50 dan nilai < 60 indeksnya D
// nilai < 50 indeksnya E

// OPERATION
switch (true) {
  case (nilai < 50): indeks = "E"; break;
  case (nilai < 60): indeks = "D"; break;
  case (nilai < 70): indeks = "C"; break;
  case (nilai < 80): indeks = "B"; break;
  default: indeks = "A"; break;
}

// SHOW OUTPUT
console.log('Soal 4')
console.log(indeks)
console.log('\n')

// ============ 
// == SOAL 5 == 
// ============ 

var tanggal = 30;
var bulan = 7;
var tahun = 1994;

// OPERATION
switch (bulan) {
  case (1): bulan = "Januari"; break;
  case (2): bulan = "Februari"; break;
  case (3): bulan = "Maret"; break;
  case (4): bulan = "April"; break;
  case (5): bulan = "Mei"; break;
  case (6): bulan = "Juni"; break;
  case (7): bulan = "Juli"; break;
  case (8): bulan = "Agustus"; break;
  case (9): bulan = "September"; break;
  case (10): bulan = "Oktober"; break;
  case (11): bulan = "November"; break;
  case (12): bulan = "Desember"; break;
}

// SHOW OUTPUT
console.log('Soal 5')
console.log(tanggal, bulan, tahun)
console.log('\n')
