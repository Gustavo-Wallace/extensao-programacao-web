function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;
  
    if (colunasA !== linhasB) {
      console.log("Não é possível calcular");
      return null;
    }
  
    const matrizC = new Array(linhasA).fill(0).map(() => new Array(colunasB).fill(0));
  
    for (let i = 0; i < linhasA; i++) {
      for (let j = 0; j < colunasB; j++) {
        for (let k = 0; k < colunasA; k++) {
          matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
  
    return matrizC;
  }
  
  const matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  
  const matrizB = [
    [7, 8],
    [9, 10]
  ];
  
  console.log("Matriz A:");
  imprimirMatriz(matrizA);
  
  console.log("\nMatriz B:");
  imprimirMatriz(matrizB);
  
  const matrizC = multiplicarMatrizes(matrizA, matrizB);
  
  if (matrizC) {
    console.log("\nMatriz Resultante C (AxB):");
    imprimirMatriz(matrizC);
  }
  
  function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join('\t'));
    }
  }
  