//Primeiro Requisito
let trybeTrip = document.createElement('h1');
trybeTrip.innerHTML = 'TrybeTrip - Agência de Viagens'
trybeTrip.classList.add('title');
document.body.appendChild(trybeTrip);

//Segundo Requisito
let main = document.createElement('main');
main.classList.add('main-content');
document.body.appendChild(main)


//Terceiro Requisito
let section = document.createElement('section');
section.classList.add('center-content');
main.style.backgroundColor = 'green';
main.appendChild(section);

//Quarto Requisito
let para = document.createElement('p');
para.innerHTML = 'Diretamente para disney'
section.appendChild(para);

//Quinto Requisito
let section2 = document.createElement('section');
section.classList.add('left-content');
main.appendChild(section2);

//Sexto Requisito 
let section3 = document.createElement('section');
section.classList.add('right-content');
section3.style.marginRight = auto;
main.appendChild(section3);

//Setimo Requisito
let imagem = document.createElement('img');
imagem.classList.add('small-image');
imagem.src = 'https://picsum.photos/200';
section2.appendChild(imagem);

//Oitavo Requisito
let listaSOrdem = document.createElement('ul');
let listaExtenso = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito']
for (let index = 0; index < listaExtenso.length; index += 1) {
    let lista = listaExtenso[index];
    
    let listaItem = document.createElement('li');
    listaItem.innerText = lista;
    listaSOrdem.appendChild(listaItem);
}

section3.appendChild(listaSOrdem)

//Nono Requisito
let h31 = document.createElement('h3');
h31.classList.add('description');
main.appendChild(h31);

let h32 = document.createElement('h3');
main.appendChild(h32);
h32.classList.add('description');

let h33 = document.createElement('h3');
main.appendChild(h33);
h33.classList.add('description');

main.removeChild('left-content');

