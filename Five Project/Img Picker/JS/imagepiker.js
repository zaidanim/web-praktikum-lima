// JavaScript Document
function pilih(){
 var choose=document.getElementById("isi").pic.value;
  if (choose=="1")
    {
        document.getElementById("img").innerHTML="<img src='IMG/1.jpg' style='width:320px;height:290px'>";
		window.alert("Lets go Gundam Zero");
    }
	else if (choose=="2")
    {
        document.getElementById("img").innerHTML="<img src='IMG/2.jpg' style='width:280px;height:260px'>";
		window.alert("Lets go RX Unicorn");
    }
	else if (choose=="3")
    {
        document.getElementById("img").innerHTML="<img src='IMG/3.jpg' style='width:280px;height:260px'>";
		window.alert("Lets go Tallgeese");
    }
	else if (choose=="4")
    {
        document.getElementById("img").innerHTML="<img src='IMG/4.jpg' style='width:280px;height:260px'>";
		window.alert("Lets go Barbatos Iron Blood Orphans");
    }
	else if (choose=="5")
    {
        document.getElementById("img").innerHTML="<img src='IMG/5.jpg' style='width:280px;height:260px'>";
		window.alert("Lets go Exia Ignition ");
    }
	
}
