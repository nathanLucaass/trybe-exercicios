let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

//Primeiro Exercicio
console.log('Bem vinda ' + info.personagem);

//Segundo Exercicio
console.log(info.recorrente);

//Terceiro Exercicio
for (let index in info) {
  console.log(index);
};

//Quarto Exercicio
for (let key in info) {
  console.log(info[key]);
};

//Quinto Exercicio
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',

};

//Leitura de Obejetos
//Primeiro Exercicio
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
  ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' Se chama ' + leitor.livrosFavoritos[0].titulo);

//Quinto Exercicio
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');