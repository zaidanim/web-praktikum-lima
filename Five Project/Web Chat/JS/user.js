// JavaScript Document
var kolomchat = document.getElementById("kolomchat");
var submitpesan = document.getElementById("submitpesan");
var penggunapsn= document.getElementById("penggunapsn");
var pengguna = document.getElementById("pengguna");


submitpesan.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = pengguna.value + " : " + penggunapsn.value;
     kolomchat.appendChild(newMessage);
     penggunapsn.value = "";
});

function openform(){
		document.getElementById("myform").style.display="block";
		}
		function closeform(){
		document.getElementById("myform").style.display="none";
		}



	