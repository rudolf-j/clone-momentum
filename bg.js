const body = document.querySelector("body");

const IMG_COUNT = 5;

function handleLoad(){
    console.log("loaded!!")
}

body.addEventListener("load", handleLoad);

function paintBody(img){
    body.style.backgroundImage = `url(images/${img+1}.jpg)`;
    body.style.backgroundSize = `cover`;
    body.style.backgroundRepeat = `no-repeat`;
    body.style.backgroundPosition = `center`;
    body.style.backgroundAttachment = `fixed`;
}
function selectRandom(){
    const img = Math.floor(Math.random()*IMG_COUNT);
    paintBody(img);   
}

function init(){
    selectRandom();
}

init();