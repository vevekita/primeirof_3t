let tabuada = 13;

function escreva(){
document.write ("Tabuada do " + tabuada + "<br>")
document.write (tabuada + " x 1 = " + (tabuada * 1) + "<br>");
document.write (tabuada + " x 2 = " + (tabuada*2) + "<br>");
document.write (tabuada + " x 3 = " + (tabuada*3) + "<br>");
document.write (tabuada + " x 4 = " + (tabuada*4) + "<br>");
document.write (tabuada + " x 5 = " + (tabuada*5) + "<br>");
document.write (tabuada + " x 6 = " + (tabuada*6) + "<br>");
document.write (tabuada + " x 7 = " + (tabuada*7) + "<br>");
document.write (tabuada + " x 8 = " + (tabuada*8) + "<br>");
document.write (tabuada + " x 9 = " + (tabuada*9) + "<br>");
document.write (tabuada + " x 10 = " + (tabuada*10) + "<br>");
}

let lista = ["cardigan", "the last great american dynasty", "betty", "right where you left me", "closure", "its time to go"]

function mostra(){
    document.write(lista.length + "<br>");
         for(let i = 0; i < lista.length; i++){
            document.write(lista[i] + "<br>")
    }
    
}

function mostratabuada(){
    for(let i = 1; i <= 10; i++){ 
    document.write("O valor do i " + i + "<br>")
    }
}
function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if (!Number(v)) {
        alert("O campo Capital deve numérico.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    if (!Number(j)) {
        alert("O campo Juros Meses deve numérico.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
    }
    if (!Number(t)) {
        alert("O campo Número de Meses deve numérico.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return
    }
    let r = 0;
    for(let i =1; i <= t; i++){ 
        r = v * (1+(j/100));
        document.write ("Mês " + i + " - valor: " + moeda(r) + "<br>")
        v = r;   
    }
    document.write ("Resultado: " + moeda(r));

}

function somaNota(){
    let n1 = document.getElementById("b1").value;
    let n2 = document.getElementById("b2").value;
    let n3 = document.getElementById("b3").value;
    let n4 = document.getElementById("b4").value;

    let r = Number(n1)+Number(n2)+Number(n3)+Number(n4);

    document.getElementById("result").innerHTML = "Soma: " + r;

}

function media1(){
    let n1 = document.getElementById("b1").value;
    let n2 = document.getElementById("b2").value;
    let n3 = document.getElementById("b3").value;
    let n4 = document.getElementById("b4").value;
    let mes = 4

    let r = (Number(n1)+Number(n2)+Number(n3)+Number(n4))/4;

    document.getElementById("result1").innerHTML = "Média: " + r;

}

function subtracao(){
    let n1 = document.getElementById("b1").value;
    let n2 = document.getElementById("b2").value;
    let n3 = document.getElementById("b3").value;
    let n4 = document.getElementById("b4").value;
    let sub = 240

    let r = Number(n1)+Number(n2)+Number(n3)+Number(n4)-sub;

    document.getElementById("result2").innerHTML = "Menos 240: " + r;

}
