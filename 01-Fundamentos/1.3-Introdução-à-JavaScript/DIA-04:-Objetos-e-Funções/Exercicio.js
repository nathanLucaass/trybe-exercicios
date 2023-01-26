let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  //Primeiro Exercicio
  console.log('Bem vinda ' + info.personagem );

  //Segundo Exercicio
  console.log(info.recorrente);

  //Terceiro Exercicio
  for(let index in info){
    console.log(index);
  }

  //Quarto Exercicio
  for(let key in info){
    console.log(info[key]);
  }