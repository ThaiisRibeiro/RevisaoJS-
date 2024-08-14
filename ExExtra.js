function encontrarMenorNumero(numeros) {
    // Inicializa a variável menorNumero com o primeiro elemento do array
    let menorNumero = numeros[0];

    // Percorre o array começando do segundo elemento (índice 1)
    for (let i = 1; i < numeros.length; i++) {
        // Se o elemento atual for menor do que menorNumero, atualiza menorNumero
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }

      // Retorna o valor de menorNumero
    return menorNumero;
}
