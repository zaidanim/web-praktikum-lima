//Javascript Doucment
function validasi() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "" && pass == "") {
		alert("Silahkan Masukkan Username/Password Dengan Benar");
		return false;
	}
	else if (user == "admin" && pass == "admin"){
		alert('Anda Berhasil Login');
		window.location = "home.html";
		return false;
	}else{
		alert("Silahkan Masukkan Username/Password Dengan Benar");
	}
		
}