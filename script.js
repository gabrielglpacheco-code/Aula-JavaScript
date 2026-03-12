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

    let valorF = valor.toLocalString('pt-BR', {style: 'currency', currency: 'BRL'});
    let totalDescontoF = totalDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let precoFinalF = precoFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    if(precoFinal >=0 && desconto >=0 && desconto <=100)
    {
        document.getElementById("precoFinal").innerHTML = "Valor: R$ " +valorF+ " Desconto: " +desconto+ "% " + " Valor descontado: R$" +totalDescontoF+ " Preço Final: R$ " +precoFinalF;
        alert("Valor: R$ " +valorF+ " Desconto: " +desconto+ "% " + " Valor descontado: R$" +totalDescontoF+ " Preço Final: R$ " +precoFinalF);
    }
    else
    {
        document.getElementById("precoFinal").innerHTML = "Existem um ou mais valores inválidos. Valores negativos não são permitidos. Valor Máximo de desconto: 100";
        alert("Existem um ou mais valores inválidos. Valores negativos não são permitidos. Valor Máximo de desconto: 100");
    }
}
