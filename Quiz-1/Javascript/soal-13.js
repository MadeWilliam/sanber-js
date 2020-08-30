// 13. buatlah daftar alat tulis dengan menggunakan perulangan WHILE *

var daftarAlatTulis = [
	"2. Pensil",
	"5. Penghapus",
	"3. Pulpen",
	"4. Penggaris",
	"1. Buku"
]

daftarAlatTulis.sort()
var i = 0;
while (i < daftarAlatTulis.length) {
	console.log(daftarAlatTulis[i])
	i++;
}