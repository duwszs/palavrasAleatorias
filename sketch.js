let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria()
}

function palavraAleatoria(){
  let palavras = ["gustavo", "camila", "corinthians"];
  return  random(palavras);
}

function inicializaCores(){
  background("pink");
  fill("purple");
  textSize(50);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, width, maximo, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text (texto, 200, 200);
  
   /* if(mouseX < 50){
    let palavra = "g";
    text(palavra, 200, 200);
  } else if(mouseX < 100){
    let palavra = "gu";
    text(palavra, 200, 200);
  } else if(mouseX < 150){
    let palavra = "gus";
    text(palavra, 200, 200);
  } else if(mouseX < 200){
    let palavra = "gust";
    text(palavra, 200, 200);
  } else if(mouseX < 250){
    let palavra = "gusta";
    text(palavra, 200, 200);
  } */
  
}