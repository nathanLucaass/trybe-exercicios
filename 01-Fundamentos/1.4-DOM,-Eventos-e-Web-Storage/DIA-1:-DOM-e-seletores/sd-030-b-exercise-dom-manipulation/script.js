//Primeiro Requisito
document.getElementById('futuro').innerHTML = 'Me vejo em uma vida foda, com um carro foda, e com as vidas dos meus pais mudadas';

//Segundo Requisito
document.getElementById('req2').style.backgroundColor = 'rgb(76, 164, 109)';

//Terceiro Requisito
document.getElementById('req3').style.backgroundColor = 'white';

//Quarto Requisito
document.getElementById('req4').innerHTML = 'Desafio - JavaScript';

//Quinto Requisito
let elemento = document.getElementById('req5');
elemento.innerText = elemento.innerHTML.toUpperCase();

//Sexto Requisito
let req6 = document.getElementById('req3');
let texto = req3.children;
let frase = '';
for(index = 0; index < texto.length; index +=1){
    frase += texto[index].innerHTML + " ";
}
document.getElementById('rodape').innerHTML = frase;