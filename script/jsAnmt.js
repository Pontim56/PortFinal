


function mostrarMenu(event){
    var menu = document.getElementById("menu");
    var estilo = window.getComputedStyle(menu);
    var nav = document.getElementById("nav");
    var content2 = document.getElementById("content2");
    var imgM = document.getElementById("imgM");
    var imgC = document.getElementById("imgC");
    if (estilo.display==="none") {
        menu.style.display="block";
        // nav.style.backgroundColor="rgb(134, 197, 218)";
        nav.style.backgroundColor="rgb(173,216,230)";
        content2.style.display="none";
        imgC.style.display="block"
        imgM.style.display="none"
    }else{
        imgM.style.display="block"
        imgC.style.display="none"
        menu.style.display="none";
        nav.style.backgroundColor="rgb(207, 229, 236)";
        content2.style.display="block";
    }
}

function fecharMenu() {
    var imgM = document.getElementById("imgM");
    var imgC = document.getElementById("imgC");
    var nav = document.getElementById("nav");
    var content2 = document.getElementById("content2");
    var menu = document.getElementById("menu");
    imgM.style.display="block"
    imgC.style.display="none"
    menu.style.display = "none";
    nav.style.backgroundColor="rgb(207, 229, 236)";
    content2.style.display="block";
}

var linksDoMenu = document.querySelectorAll('.menu a');

linksDoMenu.forEach(function (link) {
    link.addEventListener('click', function () {
        fecharMenu();
    });
});





function sandra(){
    var rafa=document.getElementById("liberato");
    var estilo = window.getComputedStyle(liberato);
    var sandraCTT = document.getElementById("sandraContent");
    if (estilo.display==="flex") {
      rafa.style.display="none";
      sandraCTT.style.display="block";
      document.getElementById('sandraContent').scrollIntoView({});
  
  }else{
    rafa.style.display="flex";
    sandraCTT.style.display="none"
  }
  }


var sobre =document.getElementById("sobre");
var obras = document.getElementById("obras");
var sobretxt = document.getElementById("sobretxt");
var obrastxt = document.getElementById("obrastxt");

function obrasF(){
    sobre.style.backgroundColor="var(--fundo3)";
    obras.style.backgroundColor="var(--fundo2)";
    sobretxt.style.display="none";
    obrastxt.style.display="flex";
}
function sobreF(){
    obras.style.backgroundColor="var(--fundo3)";
    sobre.style.backgroundColor="var(--fundo2)";
    obrastxt.style.display="none";
    sobretxt.style.display="flex";
}