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

function checkBoxChange() {
    var checkBox = document.getElementById("meuCheckBox");
    var continer = document.querySelector('main');
    
    if (checkBox.checked) {
        document.documentElement.style.setProperty('--fundo','rgb(255, 214, 157)');
        document.documentElement.style.setProperty('--fundo2','rgb(255, 193, 108)');
        document.documentElement.style.setProperty('--fundo3','rgb(255, 148, 48)');
        document.documentElement.style.setProperty('--destaq','rgb(248, 56, 57)');
        // continer.classList.add('animate__animated', 'animate__lightSpeedInLeft');
        continer.classList.add('animate__animated', 'animate__shakeX','animate__faster','animate__infinite');
        // continer.classList.add('animate__animated', 'animate__tada');
    } else {
        // continer.classList.remove('animate__animated', 'animate__lightSpeedInLeft');
        continer.classList.remove('animate__animated', 'animate__shakeX','animate__faster', 'animate__infinite');
        // continer.classList.remove('animate__animated', 'animate__tada');
        document.documentElement.style.setProperty('--fundo','rgb(207, 229, 236)');
        document.documentElement.style.setProperty('--fundo2','rgb(173,216,230)');
        document.documentElement.style.setProperty('--fundo3','rgb(134, 197, 218)');
        document.documentElement.style.setProperty('--destaq','rgb(215, 173, 230)');
    }
}




var links = document.getElementById("link-personagens");
var checkBox = document.getElementById("checkbox");

function menu(){
    if (checkBox.checked) {
        links.style.display="flex"
    } else {
        links.style.display="none"
    }
}
function closeMenu() {
    links.style.display = "none";
    checkBox.checked = false;
}