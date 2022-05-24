function SomarMaioresNumeros(){

    let N1 = parseInt(prompt("Digite um valor: "));
    let N2 = parseInt(prompt("Digite um valor"));
    let N3 = parseInt(prompt("Digite um valor"));

    if (N3 < N1 && N1 < N2) {
        alert (N1 + N2);
    }
    
    else if (N2 < N1 && N1 < N3){
        alert(N1 + N3);
    }

        else{
            alert(N2 + N3);
        }
    


}