//VERIFICA APROVAÇÃO

function verificaAprovacao() {
  let nota = document.getElementById("nota").value;
  console.log("Nota inserida: ", nota);

  if (nota >= 7) {
    document.getElementById("resultado").innerHTML = "Aluna(o) aprovada(o)!";
    alert("Aluna(o) aprovada(o)!");
  } else {
    document.getElementById("resultado").innerHTML = "Aluna(o) reprovada(o)!";
    alert("Aluna(o) reprovada(o)!");
  }
}

//VERIFICA PREÇO

function verificaPreco() {
  let valor = document.getElementById("valor").value;
  console.log("Valor do produto: ", valor);

  let desconto = document.getElementById("desconto").value;
  console.log("Valor do desconto: ", desconto);

  let totalDesconto = (desconto * valor) / 100;
  console.log("Valor descontado: ", totalDesconto);

  let precoFinal = valor - totalDesconto;
  console.log("Preço final: ", precoFinal);

  if (precoFinal >= 0 && desconto >= 0 && desconto <= 100) {
    document.getElementById("precoFinal").innerHTML =
      "Valor: R$ " +
      valor +
      " Desconto: " +
      desconto +
      "% " +
      " Valor descontado: R$ " +
      totalDesconto +
      " Preço Final: R$ " +
      precoFinal;
    alert(
      "Valor: R$ " +
        valor +
        " Desconto: " +
        desconto +
        "% " +
        " Valor descontado: R$ " +
        totalDesconto +
        " Preço Final: R$ " +
        precoFinal,
    );
  } else {
    document.getElementById("precoFinal").innerHTML =
      "Existem um ou mais valores inválidos. Valores negativos não são permitidos. Valor Máximo de desconto: 100";
    alert(
      "Existem um ou mais valores inválidos. Valores negativos não são permitidos. Valor Máximo de desconto: 100",
    );
  }
}

//Troca de cor//

function trocaCor() {
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");
  const div3 = document.getElementById("div3");

  div1.style.backgroundColor = "red";
  div2.style.backgroundColor = "lightgreen";
  div3.style.backgroundColor = "lightblue";
}

function retornaCor() {
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");
  const div3 = document.getElementById("div3");

  div1.style.backgroundColor = "";
  div2.style.backgroundColor = "";
  div3.style.backgroundColor = "";
}

//Calculadora Básica//

function efetuaOperacao() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operador = document.getElementById("operador").value;
  let resultado;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 == 0) {
        resultado = "Divisão por 0 é inválida";
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      resultado = "Operador Inválido";
  }

  document.getElementById("resultadoCalcBasic").innerHTML =
    "Resultado: " + resultado;
  console.log(resultado);
}

//Desafio//

function selecionaLingua() {
  let idioma = document.getElementById("idioma").value;
  console.log(idioma);
  let idiomaSelecionado;

  switch (idioma) {
    case "portugues":
      idiomaSelecionado = "Seja Bem Vindo";
      break;

    case "ingles":
      idiomaSelecionado = "Welcome";
      break;

    case "espanhol":
      idiomaSelecionado = "Bien-Venido";
      break;

    case "frances":
      idiomaSelecionado = "Vouilá";
      break;
  }
  console.log(idiomaSelecionado);

  document.getElementById("benvindo").innerHTML = idiomaSelecionado;
  alert(idiomaSelecionado);
}

//Array Vetor//

const listaDeCompras = ["Arroz", "feijao", "ovos"];
console.log(listaDeCompras);

listaDeCompras[3] = "farofa";
console.log(listaDeCompras);

listaDeCompras.push("maçã");
console.log(listaDeCompras);

console.log(listaDeCompras.length); //.length                           (verifica tamanho total do array)//
listaDeCompras[listaDeCompras.length] = "peixe"; // meuArray[meuArray.length-1]      (saber último valor do vetor)//

console.log(listaDeCompras);

//Repetição//

const carros = ["Uno", "Fusca", "Escort", "Gol", "Prisma"];

const conteudo = document.getElementById("conteudo");

var dados = ""; //criado variável global para não criar uma nova a cada iteração
var i = 0; //valores das variáveis são reescritos a cada iteração

while (i < 5) {
  dados += "<p>" + carros[i] + "</p>"; //adicionar o + concatena os valores do array na variavel dados//
  i++; //adiciona +1 ao contador//
}

const secao = document.createElement("div"); //Cria uma div nova no HTML//
secao.innerHTML = "<h2>Loop While</h2>" + dados; //Coloca conteúdo dentro dela//
conteudo.appendChild(secao); //Adiciona essa div dentro de outro elemento da página//

dados = "";
i = 0;

while (i < carros.length) {
  //define o limite pelo tamanho do array//
  dados += "<p>" + carros[i] + "</p>";
  i++;
}

const secao2 = document.createElement("div");
secao2.innerHTML = "<h2>Loop While Melhorado</h2>" + dados;
conteudo.appendChild(secao2);

function criaSecao(titulo, dadosF) {
  //Feita uma função para criar a seção automaticamente
  //a cada looping
  let secao = document.createElement("div");
  secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
  conteudo.appendChild(secao);
}

dados = "";
i = 0;

while (i < carros.length) {
  dados += "<p>" + carros[i] + "</p>";
  i++;
}

criaSecao("Loop While Ainda Melhor", dados);

dados = "";
i = 0;

do {
  dados += "<p>" + carros[i] + "</p>";
  i++;
} while (i < carros.length);
criaSecao("Loop While invertido", dados);

//FOR

dados = "";
for (i = 0; i < carros.length; i++) {
  dados += "<p>" + carros[i] + "</p>";
}
criaSecao("Loop For", dados);

//FOR OFF (executa o loop para cada elemnto do array) (continue; faz com que o codígo não execute para o parametro e pule para o próximo)

dados = "";

for (let carro of carros) {
  dados += "<p>" + carro + "</p>";
}
criaSecao("Loop For OFF", dados);

//Matriz (array de arrays)

let carro1 = { marca: "Ford", modelo: "Ka", ano: "2015" };
let carro2 = { marca: "Fiat", modelo: "Uno", ano: "2000" };

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);

console.log(carros2);

//FOR IN (para estruturas de listas mais completas(cada elemnto da lista tem mais de 1 valor))

dados = "";

for (let carro of carros2) {
  let propriedades = "";

  for (let prop in carro) {
    propriedades += carro[prop] + " | ";
  }

  dados += "<p>" + propriedades + "</p>";
}

criaSecao("Loop For IN", dados);

//FOR EACH

dados = "";

carros.forEach((carro) => {
  dados += "<p>" + carro + "</p>";
});

criaSecao("Loop For EACH", dados);

//DESAFIO 2

let frutas = ["Maçã", "Banana", "Pera", "Uva"];

let continuar = true;

i = 0;

do {
  alert("fruta: " + frutas[i]);

  i++;

  continuar = confirm("Deseja ver a próxima fruta?");
} while (i < frutas.length && continuar);

//AULA FUNÇÕES

function mostraSaudacao() {
  const nome = document.getElementById("nome").value;
  const hora = parseInt(document.getElementById("hora").value, 10);
  const mensagem = document.getElementById("mensagem");
  mensagem.innerHTML = saudacaoPersonalizada(nome, hora);
}

function saudacaoPersonalizada(nome, hora) {
  if (hora < 12) {
    return "Bom dia, " + nome + "!";
  } else if (hora >= 12 && hora < 18) {
    return "Boa Tarde, " + nome + "!";
  } else if (hora >= 18) {
    return "Boa Noite, " + nome + "!";
  } else {
    return "";
  }
}

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

document.getElementById("redButton").addEventListener("click", function () {
  setBackgroundColor("red");
});
document.getElementById("greenButton").addEventListener("click", function () {
  setBackgroundColor("green");
});
document.getElementById("blueButton").addEventListener("click", function () {
  setBackgroundColor("blue");
});

document
  .getElementById("inputBox")
  .addEventListener("keypress", function (event) {
    alert("Tecla Pressionada: " + event.key);
  });

//crie uma funçao clientepedido que receba um parametro numeropedido
//dentro dessa funçao, considere as condiçoes a a seguir
//se numeropedido for igual a 1, retorne pizza calabresa
//se numeropedido for igual a 2, retorne pizza frango
//se numeropedido for igual a 3, retorne pizza portuguesa
//se numeropedido for igual a 4, retorne pizza chocolate
//se numeropedido nao entrar nas condiçoes acima retorne pedido invalido

//JOGO DA VELHA

const celulas = document.querySelectorAll(".celula"); //recupera todos elementos de uma mesma classe, poderia ter sido usado o getElementByClass

let vezDoX = true;

document.getElementById("reiniciar").addEventListener("click", iniciarJogo);

function iniciarJogo() {
  celulas.forEach((celula) => {
    celula.textContent = "";
    celula.addEventListener("click", tratarClique, { once: true });
  });
}

function tratarClique(evento) {
  evento.target.textContent = vezDoX ? "X" : "O";
  vezDoX = !vezDoX;
}

iniciarJogo();

//DESAFIO

//1 crie seu arquivo html e adicione um elemento h1, um campo input para o usuario digitar a tarefa,
// com id nesse elemento.
//adicione tambem um botao para qeu o usuario possa adicionar uma tarefa na lista.

//2 depois adicione uma lista nao ordena, tag <ul> com id, nesse elemento serão adicionadas as
// tarefas que o usuário digitar.

//3 depois manipule o DOM da pagina, crie uma funçao que pega o valor digitado e cria um novo elemento,
// tag <li> dentro da tag da lista nao ordenada,
//tag <ul>. Adicione um evento no botao que acione a funçao que voce criou.

//VALIDAÇOES

function validateForm() {
  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Todos os campos são obrigatórios");
    return false;
  }

  if (name.length < 3 || name.length > 50) {
    alert("o nome deve ter entre 3 e 50 caracteres");
    return false;
  }

  if (email.length < 5 || email.length > 50) {
    alert("o email deve ter entre 5 e 50 caracteres");
    return false;
  }

  const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //valida emails

  if (!emailPatern.test(email)) {
    alert("Por favor insira um email válido");
    return false;
  }

  return true;
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    if(validateForm()){
        alert("Formulário validado!");
    }
});