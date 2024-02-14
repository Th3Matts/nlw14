//estrutura das perguntas
const perguntas = [
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Document Object Model" ,
        "Dynamic Object Management",
        "Data Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes NÃO é um tipo de dado em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "Float",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'getElementById' em JavaScript?",
      respostas: [
        "Para obter um elemento pelo nome da classe",
        "Para obter um elemento pelo ID",
        "Para obter um elemento pelo nome da tag",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador utilizado para comparação de igualdade em valor e tipo?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes métodos converte uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "toFixed()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array",
        "Adiciona um elemento no final do array",
        "Inverte a ordem dos elementos do array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "/* Este é um comentário de uma linha */",
        "' Este é um comentário de uma linha",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos remove o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "unshift()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'slice()' faz em JavaScript?",
      respostas: [
        "Remove elementos específicos de um array",
        "Copia parte de um array para um novo array",
        "Adiciona elementos em uma posição específica de um array",
      ],
      correta: 1
    },
  ];
  
  //cria uma variável para alocarmos a quantidade de perguntas com alteranativas corretas
  const notaFinal = new Set();
  
  //captura o tamanho do objeto perguntas para colocarmos "Acertos : x de xx"
  const totalDePerguntas = perguntas.length
  
  //captura o span(elemento filho do elemento com o id='acertos')
  const mostrarTotal = document.querySelector('#acertos span')
  
  //altera o conteúdo da variável mostrarTotal
  mostrarTotal.textContent = notaFinal.size + ' de ' + totalDePerguntas
  
  //busca no html o elemento com o id = quiz
  const quiz = document.querySelector('#quiz');
  
  //busca no html o elemento com o tipo template
  const template = document.querySelector('template');
  
  //loop ou laço de repetição ou repetição que mostrará as perguntas e respostas
  for(let item of perguntas){
  
    //copia o item pergunta da variável template
    const quizItem = template.content.cloneNode(true);
  
    //altera as informações da pergunta utilizando para o item pergunta do objeto perguntas
    quizItem.querySelector('h3').textContent = item.pergunta
    
    //repetição para mostrar as respostas 3 vezes
    for(let reposta of item.respostas){
  
      //copia a resposta do item dt que é filho do item dl HTML
      const quizDt = quizItem.querySelector('dl dt').cloneNode(true);
      
      //altera a variável quizDt para mostrar o item resposta do objeto item
      quizDt.querySelector('span').textContent = reposta;
      
      //atribui um valor diferente no atributo nome do input//estrutura das perguntas
const perguntas = [
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Document Object Model" ,
        "Dynamic Object Management",
        "Data Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes NÃO é um tipo de dado em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "Float",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'getElementById' em JavaScript?",
      respostas: [
        "Para obter um elemento pelo nome da classe",
        "Para obter um elemento pelo ID",
        "Para obter um elemento pelo nome da tag",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador utilizado para comparação de igualdade em valor e tipo?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes métodos converte uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "toFixed()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array",
        "Adiciona um elemento no final do array",
        "Inverte a ordem dos elementos do array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "/* Este é um comentário de uma linha */",
        "' Este é um comentário de uma linha",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos remove o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "unshift()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'slice()' faz em JavaScript?",
      respostas: [
        "Remove elementos específicos de um array",
        "Copia parte de um array para um novo array",
        "Adiciona elementos em uma posição específica de um array",
      ],
      correta: 1
    },
  ];
  
  //cria uma variável para alocarmos a quantidade de perguntas com alteranativas corretas
  const notaFinal = new Set();
  
  //captura o tamanho do objeto perguntas para colocarmos "Acertos : x de xx"
  const totalDePerguntas = perguntas.length
  
  //captura o span(elemento filho do elemento com o id='acertos')
  const mostrarTotal = document.querySelector('#acertos span')
  
  //altera o conteúdo da variável mostrarTotal
  mostrarTotal.textContent = notaFinal.size + ' de ' + totalDePerguntas
  
  //busca no html o elemento com o id = quiz
  const quiz = document.querySelector('#quiz');
  
  //busca no html o elemento com o tipo template
  const template = document.querySelector('template');
  
  //loop ou laço de repetição ou repetição que mostrará as perguntas e respostas
  for(let item of perguntas){
  
    //copia o item pergunta da variável template
    const quizItem = template.content.cloneNode(true);
  
    //altera as informações da pergunta utilizando para o item pergunta do objeto perguntas
    quizItem.querySelector('h3').textContent = item.pergunta
    
    //repetição para mostrar as respostas 3 vezes
    for(let reposta of item.respostas){
  
      //copia a resposta do item dt que é filho do item dl HTML
      const quizDt = quizItem.querySelector('dl dt').cloneNode(true);
      
      //altera a variável quizDt para mostrar o item resposta do objeto item
      quizDt.querySelector('span').textContent = reposta;
      
      //atribui um valor diferente no atributo nome do input que carrega cada resposta
      quizDt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
  
      //atribui um valor diretamente para o atributo valor 
      quizDt.querySelector('input').value = item.respostas.indexOf(reposta);
  
      //seleciona o elemento input do HTML e quando algo é alterado nele realiza uma função
      quizDt.querySelector('input').onchange = (event) =>{
        
        /*
        verifica se há um item no valor da variável notaFinal e o deleta caso não
        tenha, é utilizado para mudar a contagem de número de questões acertadas
        caso a alternativa errada seja selecionada
        */
        notaFinal.delete(item)
        
        /*verifica se a alternativa selecionada é o mesmo número do item correta
        do objeto item*/
        const estaCorreta = event.target.value == item.correta;
  
        /*condição que verifica o valor da variável estaCorreta, que no caso é um 
        true ou false, caso seja true um item é adicionado na variável notaFial e
        caso contrario nada é feito e o valor notaFinal é removido normalmente.
        if(estaCorreta){
          notaFinal.add(item)
        } <= Aqui temos duas maneiras de escrever o if, a maneira comum está comentada,
        a maneira simplificada está em produção
         */
        estaCorreta ? notaFinal.add(item) : undefined
  
         /*altera o conteúdo da estrutura do HTML para mostrar a quantidade de 
         acertos após o evento de selecionar uma alterantiva começa*/
         mostrarTotal.textContent = notaFinal.size + ' de ' + totalDePerguntas
      } 
  
      //copia a reposta do HTML e muda os dados para aasd reposta do objeto perguntas
      quizItem.querySelector('dl').appendChild(quizDt);
    }
  
    //remove a primeira resposta (Resposta A)
    quizItem.querySelector('dt').remove();
  
    //traz as perguntas para a tela com a resposta
    quiz.appendChild(quizItem);
  }
  
      quizDt.querySelector('input').value = item.respostas.indexOf(reposta);
  
      //seleciona o elemento input do HTML e quando algo é alterado nele realiza uma função
      quizDt.querySelector('input').onchange = (event) =>{
        
        /*
        verifica se há um item no valor da variável notaFinal e o deleta caso não
        tenha, é utilizado para mudar a contagem de número de questões acertadas
        caso a alternativa errada seja selecionada
        */
        notaFinal.delete(item)
        
        /*verifica se a alternativa selecionada é o mesmo número do item correta
        do objeto item*/
        const estaCorreta = event.target.value == item.correta;
  
        /*condição que verifica o valor da variável estaCorreta, que no caso é um 
        true ou false, caso seja true um item é adicionado na variável notaFial e
        caso contrario nada é feito e o valor notaFinal é removido normalmente.
        if(estaCorreta){
          notaFinal.add(item)
        } <= Aqui temos duas maneiras de escrever o if, a maneira comum está comentada,
        a maneira simplificada está em produção
         */
        estaCorreta ? notaFinal.add(item) : undefined
  
         /*altera o conteúdo da estrutura do HTML para mostrar a quantidade de 
         acertos após o evento de selecionar uma alterantiva começa*/
         mostrarTotal.textContent = notaFinal.size + ' de ' + totalDePerguntas
      } 
  
      //copia a reposta do HTML e muda os dados para aasd reposta do objeto perguntas
      quizItem.querySelector('dl').appendChild(quizDt);
    }
  
    //remove a primeira resposta (Resposta A)
    quizItem.querySelector('dt').remove();
  
    //traz as perguntas para a tela com a resposta
    quiz.appendChild(quizItem);
  }
  