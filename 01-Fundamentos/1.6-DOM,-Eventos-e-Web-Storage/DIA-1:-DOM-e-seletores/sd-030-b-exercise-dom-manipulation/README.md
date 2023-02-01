# Boas vindas ao exercício Desafio Técnico: manipulação de DOM

É hora de aplicar seus conhecimentos em manipular os elementos do HTML! 🤩

Imagine que você recebeu um desafio técnico para uma vaga de emprego em que o objetivo é mostrar suas habilidades em manipulação de DOM. O projeto já veio parcialmente implementado e você deve realizar algumas modificações definidas em Requisitos do Projeto.

Abaixo vamos simular o desafio que você recebeu. 😉

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu exercício você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />
<br />

Desafio Técnico: manipulação de DOM

Utilize o código abaixo e siga as instruções que vem a seguir:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício</title>
    
    <style>
      main, section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <header> 
      <h1 class="title">Desafio - JavaEscripito</h1>
    </header>    
    <main class="main-content">
      <section class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </section>
    </main>
    <p>Último parágrafo.</p>
    <script>
      // Seu código aqui
    </script>
  </body>
</html>
```

Para avaliar seus conhecimentos de HTML, você deve modificar os elementos já existentes utilizando apenas as funções:

- `document.getElementById();`
- `document.getElementsByClassName();`
- `document.getElementsByTagName();`

</details>

<br />

# Orientações
  
<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:tryber/sd-030-b-exercise-dom-manipulation.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-030-b-exercise-dom-manipulation`

2. Instale as dependências e inicialize o projeto

- Instale as dependências:
  - `npm install`

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se você não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto:
  - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`;
  - Exemplo: `git checkout -b maria-soares-exercise-dom-manipulation`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:

- Verifique que você está na raiz do projeto:
  - Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/maria/code/**sd-030-b-exercise-dom-manipulation**_
- Crie os arquivos index.html e style.css:
  - Exemplo: `touch index.html style.css`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_:
  - Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
- Adicione o novo arquivo ao _stage_ do Git:
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (devem aparecer listados os arquivos em verde)
- Faça o `commit` inicial:
  - Exemplo:
    - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin maria-soares-exercise-dom-manipulation`

7. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-030-b-exercise-dom-manipulation/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção** - Coloque um título para o seu _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_

- Adicione uma descrição para o _Pull Request_, um título nítido que o identifique, e clique no botão verde _"Create pull request"_

 <img width="1335" alt="Exemplo de pull request" src="https://user-images.githubusercontent.com/42356399/166255109-b95e6eb4-2503-45e5-8fb3-cf7caa0436e5.png">

- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-030-b-exercise-dom-manipulation/pulls) e confira que o seu _Pull Request_ está criado

</details>
<details>
<summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente pois assim você garante visibilidade para o time da Trybe e treina essa prática para o mercado de trabalho :) ;
- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;
- Os comandos que você utilizará com mais frequência são:

1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

2. `git add` _(para adicionar arquivos ao stage do Git)_;

3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>
  
<details>
<summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a `main`. Sinta-se à vontade!

**Atenção!**: Ao criar o PR,  você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Para isso, clique no _base repository_ como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

> 💡 Realize esse processo para cada PR que abrir.

</details>

<br />

# Requisitos

## Exercício 1 - Alterando o texto

- Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos.

<details>
  <summary><strong>O que será testado:</strong></summary>
- O texto do parágrafo não pode ser <code>-----</code>.
</details>

## Exercício 2 - Alterando a cor - quadrado amarelo

- Crie e execute uma função que mude a cor do quadrado amarelo para `rgb(76, 164, 109)`.

<details>
  <summary><strong>O que será testado:</strong></summary>
- A nova cor do quadrado amarelo deve ser <code>rgb(76, 164, 109)</code>.
</details>

## Exercício 3 - Alterando a cor - quadrado vermelho

- Crie e execute uma função que mude a cor do quadrado vermelho para branco.

<details>
  <summary><strong>O que será testado:</strong></summary>
- A nova cor do quadrado vermelho deve ser branca.
</details>

## Exercício 4 - Corrigindo o título

- Crie e execute uma função que corrija o texto da tag `<h1>`.

<details>
  <summary><strong>O que será testado:</strong></summary>
- O título existente
- O texto do título deve ser <code>'Desafio - JavaScript'</code>;
</details>

## Exercício 5 - Letras maiúsculas

- Crie e execute uma função que modifique o texto da primeira tag `<p>` para letras maiúsculas.

<details>
  <summary><strong>O que será testado:</strong></summary>
- O texto do parágrafo deve estar em letras maiúsculas.
</details>

## Exercício 6 - Exibindo tags

- Crie e execute uma função que exiba o conteúdo de todas as tags `<p>` da seção principal (`center-content`) dentro do parágrafo do rodapé, separados por espaços. Exemplo: `Texto do parágrafo 1 Texto do parágrafo 2 Texto do parágrafo 3`.

> Atenção ⚠️: Não se preocupe caso sinta dificuldade para resolver o exercício. É importante que você pratique para consolidar o seu aprendizado e ter dúvidas faz parte do processo.

<details>
  <summary><strong>O que será testado:</strong></summary>
- O parágrafo do rodapé deve conter o conteúdo da tag <code>p</code>.
</details>
