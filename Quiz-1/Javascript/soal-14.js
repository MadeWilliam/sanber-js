// 14. var pesertaLomba= [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]]. ubahlah variable tersebut menjadi array of object, lalu tampilkan data nya dengan console.log *

var pesertaLomba= [
	["Budi", "Pria", "172cm"], 
	["Susi", "Wanita", "162cm"], 
	["Lala", "Wanita", "155cm"], 
	["Agung", "Pria", "175cm"]
]

var objPesertaLomba = pesertaLomba.map(function(peserta) { 
  return { 
    Nama: peserta[0], 
    "Jenis Kelamin": peserta[1],
    Tinggi: peserta[2]
  }; 
});

console.log(objPesertaLomba);