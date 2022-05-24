function tabuada(){

    let numero = parseInt(prompt("Digite um numero"));
    let resultado = parseInt(0);
    let tabuada = parseInt(0);


    for (let i=1; i<=10; i++)

    tabuada += numero + " X " + i + " = " + numero * i + "<br/>";
    resultado = tabuada
    document.write(resultado);
}