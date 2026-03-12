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