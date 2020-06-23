const firstName = prompt ("Siapa nama depanmu ?")
const lastName = prompt ("Siapa nama belakangmu?")
const pertanyaan = prompt ("Apakah anda ingin bekerja di bidang IT (ya/tidak) ?")

const user = {
	name : {
		first : firstName,
		last : lastName,
},
	pertanyaan : pertanyaan,
};

if (user.pertanyaan === "ya"){
	alert("Semoga tercapai !" + user.name.first +" "+ user.name.last);
} else {
	alert("Tetap semangat !" + user.name.first +" "+ user.name.last);
};
