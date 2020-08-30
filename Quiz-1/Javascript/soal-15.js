var daftarNama= [];

function tambahNama (nama, jenisKelamin) {
	var hasilNama = ""
	var obj = {
		nama: nama,
		jenisKelamin: jenisKelamin,
		panggilan: ""
	}

	daftarNama.push(obj)

	switch (jenisKelamin.toLowerCase()) {
		case "laki-laki":
			obj.panggilan="bapak";
			break;
		case "perempuan":
			obj.panggilan="ibu";
			break;
		default:
			obj.panggilan="-";
			break;
	}
}

tambahNama("Asep", "laki-laki")
tambahNama("Siti", "perempuan")
tambahNama("Yeni", "perempuan")
tambahNama("Rudi", "laki-laki")
tambahNama("Adit", "laki-laki")

for (var i = 0; i < daftarNama.length; i++) {
	switch (daftarNama[i].panggilan.toLowerCase()) {
		case "bapak":
			daftarNama[i].panggilan="Bapak";
			break;
		case "ibu":
			daftarNama[i].panggilan="Ibu";
			break;
		default:
			daftarNama[i].panggilan="-";
			break;
	}
	console.log(`${i+1}. ${daftarNama[i].panggilan} ${daftarNama[i].nama}`)
}
