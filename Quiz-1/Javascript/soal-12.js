// Soal Function
// 12. buatlah function perhitungan luas lingkaran, luas segitiga dan luas persegi, sesuaikan parameternya dan tampilkan panggil functionnya dengan console.log lengkap dengan mengisi parameternya *

function handleLuasLingkaran (jariJari) {
	return isNaN(jariJari) 
	? "Harus masukkan jari-jari berupa nominal angka"
	: 3.14*jariJari*jariJari; 
}

function handleLuasSegitiga (alas, tinggi) {
	return isNaN(alas) || isNaN(tinggi) 
	? "Harus masukkan alas dan tinggi berupa nominal angka"
	: 0.5*alas*tinggi; 
}

function handleLuasPersegi (sisi) {
	return isNaN(sisi) 
	? "Harus masukkan sisi persegi berupa nominal angka"
	: sisi*sisi; 
}

// Show Output
console.log(handleLuasLingkaran(5)) //78.5
console.log(handleLuasSegitiga(5,2)) //5
console.log(handleLuasPersegi(5)) //25