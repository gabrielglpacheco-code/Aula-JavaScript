//Troca de cor//

function trocaCor()
{
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");

    div1.style.backgroundColor = "red";
    div2.style.backgroundColor = "lightgreen";
    div3.style.backgroundColor = "lightblue";

}

function retornaCor()
{
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");

    div1.style.backgroundColor = "";
    div2.style.backgroundColor = "";
    div3.style.backgroundColor = "";
    
}

//Calculadora Básica//

function efetuaOperacao()
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    switch (operador)
    {
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
            if(num2 == 0)
            {
                resultado = "Divisão por 0 é inválida"
            }
            else 
            {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = "Operador Inválido"
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}

//Desafio//

function selecionaLingua()
{
    let idioma = document.getElementById("idioma").value;
    console.log(idioma);
    let idiomaSelecionado;

    switch (idioma)
    {
        case "portugues":
            idiomaSelecionado = "Seja Bem Vindo";
        break;

        case "ingles":
            idiomaSelecionado = "Welcome";
        break;

        case "espanhol":
            idiomaSelecionado = "Bien-Venido"
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


const listaDeCompras = ["Arroz","feijao","ovos"];
console.log(listaDeCompras);

listaDeCompras[3] = "farofa";
console.log(listaDeCompras);

listaDeCompras.push("maçã");
console.log(listaDeCompras);

console.log(listaDeCompras.length);                      //.length                           (verifica tamanho total do array)//
listaDeCompras[listaDeCompras.length] = "peixe";         // meuArray[meuArray.length-1]      (saber último valor do vetor)//

console.log(listaDeCompras);

//Repetição//

const carros = ["uno", "fusca", "escort","gol","prisma","santana","opala"];

const conteudo = document.getElementById("conteudo");

var dados = "";                                         //criado variável global para não criar uma nova a cada iteração
var i = 0;                                              //valores das variáveis são reescritos a cada iteração

while(i < 7)
{
    dados += "<p>" + carros[i]+"</p>";                //adicionar o + concatena os valores do array na variavel dados//
    i++;                                              //adiciona +1 ao contador//
}

const secao = document.createElement("div");            //Cria uma div nova no HTML//
secao.innerHTML = "<h2>Loop While</h2>" + dados;        //Coloca conteúdo dentro dela//
conteudo.appendChild(secao);                            //Adiciona essa div dentro de outro elemento da página//

dados = "";
i = 0;

while(i < carros.length)                               //define o limite pelo tamanho do array//
{
    dados += "<p>" + carros[i]+"</p>";                
    i++;                                              
}

const secao2 = document.createElement("div");
secao2.innerHTML = "<h2>Loop While Melhorado</h2>" + dados;
conteudo.appendChild(secao2);

function criaSecao(titulo,dadosF)                               //Feita uma função para criar a seção automaticamente
{                                                               //a cada looping
    let secao = document.createElement("div");
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
    conteudo.appendChild(secao);
}

dados = "";
i = 0;

while(i < carros.length)
{
    dados += "<p>" + carros[i] + "</p>";
    i++;
}

criaSecao("Loop While Ainda Melhor", dados);

dados = "";
i = 0;

do{
    dados += "<p>" + carros[i] + "</p>";
    i++;
}while(i < carros.length)
criaSecao("Loop While invertido", dados);

//FOR

dados = "";
for(i = 0; i < carros.length; i++)
{
    dados += "<p>" + carros[i] + "</p>";
}
criaSecao("Loop For", dados);

//FOR OFF (executa o loop para cada elemnto do array) (continue; faz com que o codígo não execute para o parametro e pule para o próximo)

dados = "";

for(let carro of carros)
{
    dados += "<p>" + carro + "</p>";
}
criaSecao("Loop For OFF", dados);

//Matriz (array de arrays)

let carro1 = {marca: "Ford", modelo:"Ka", ano:"2015"};
let carro2 = {marca:"Fiat", modelo:"Uno", ano: "2000"};

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);

console.log(carros2);

//FOR IN (para estruturas de listas mais completas(cada elemnto da lista tem mais de 1 valor))

dados = "";

for(let carro of carros2)
{
    let propriedades = "";

    for(let prop in carro)
    {
        propriedades += carro[prop] + " | ";
    }

    dados += "<p>"+propriedades+"</p>";

}

criaSecao("Loop For IN", dados);

//FOR EACH

dados = "";

carros.forEach((carro) => {
    dados += "<p>"+carro+"</p>";
})

criaSecao("Loop For EACH", dados);

//DESAFIO 2

let frutas = ["maca", "banana", "pera", "uva"];

let continuar = true;

i = 0;

do
{
    
    alert("fruta: " + frutas[i]);

    i++

    continuar = confirm("Deseja ver a próxima fruta?");

}while (i < frutas.length && continuar)