
function verificaAprovacao()
{

    let nota = document.getElementById("nota").value;
    console.log("Nota inserida: ",nota);

    if(nota >= 7)
    {
        document.getElementById("resultado").innerHTML = "Aluna(o) aprovada(o)!";
        alert("Aluna(o) aprovada(o)!");
    }
    else
    {
        document.getElementById("resultado").innerHTML = "Aluna(o) reprovada(o)!";
        alert("Aluna(o) reprovada(o)!");
    }

}