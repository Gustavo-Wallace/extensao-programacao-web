function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join('\t'));
    }
  }
  
  function transporMatriz(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    const transposta = new Array(colunas).fill(0).map(() => new Array(linhas).fill(0));
  
    for (let i = 0; i < linhas; i++) {
      for (let j = 0; j < colunas; j++) {
        transposta[j][i] = matriz[i][j];
      }
    }
  
    return transposta;
  }
  
  const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log("Matriz A:");
  imprimirMatriz(matrizA);
  
  const matrizTranspostaA = transporMatriz(matrizA);
  
  console.log("\nMatriz Transposta A:");
  imprimirMatriz(matrizTranspostaA);
  