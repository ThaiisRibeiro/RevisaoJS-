function encontrarMaiorNumero(numeros) {
    //Inicializa a variável maiorNumero com o primeiro elemento do array
    let maiorNumero = numeros[0];

    // Percorre o array começando do segundo elemento (índice 1)
    for (let i = 1; i < numeros.length; i++) {
        // Se o elemento atual for maior do que maiorNumero, atualiza maiorNumero
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }

     // Retorna o valor de maiorNumero
    return maiorNumero;
}
