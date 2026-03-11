function verificaPreco()
{

    let valor = document.getElementById("valor").value;
    console.log("Valor do produto: ",valor);

    let desconto = document.getElementById("desconto").value;
    console.log("Valor do desconto: ",desconto);

    let totalDesconto = (desconto * valor)/100;
    console.log("Valor descontado: ",totalDesconto);

    let precoFinal = (valor - totalDesconto);
    console.log("Preço final: ",precoFinal);

    if(precoFinal >=0 && desconto >=0 && desconto <=100)
    {
        document.getElementById("precoFinal").innerHTML = "Valor: R$ " +valor+ " Desconto: " +desconto+ "% " + " Valor descontado: R$" +totalDesconto+ " Preço Final: R$ " +precoFinal;
        alert("Valor: R$ " +valor+ " Desconto: " +desconto+ "% " + " Valor descontado: R$" +totalDesconto+ " Preço Final: R$ " +precoFinal);
    }
    else
    {
        document.getElementById("precoFinal").innerHTML = "Valores negativos não são permitidos.";
        alert("Valores negativos não são permitidos.");
    }
}
