var flipTimeout;

function flipCard(card) {
  clearTimeout(flipTimeout); 
  card.querySelector('.flip-card-inner').style.transform = 'rotateY(-180deg)';
}

function unflipCard(card) {
  clearTimeout(flipTimeout); 
  flipTimeout = setTimeout(function() {
    card.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
  }, 220);
}



function rafa(){
  var sandra=document.getElementById("sandra");
  var estilo = window.getComputedStyle(sandra);
  var liberatoCTT = document.getElementById("liberatoContent");
  if (estilo.display==="flex") {
    sandra.style.display="none";
    liberatoCTT.style.display="block";
    document.getElementById('liberatoContent').scrollIntoView({});

}else{
  sandra.style.display="flex";
  liberatoCTT.style.display="none"
}
}
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

const myObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      if(entry.isIntersecting){
          entry.target.classList.add('show')
      }else{
          entry.target.classList.remove('show')
      }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element)=>myObserver.observe(element))
