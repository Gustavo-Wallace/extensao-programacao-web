Promise
As Promises são um objeto em JavaScript que representa a eventual conclusão ou falha de uma operação assíncrona. Elas são usadas para lidar com operações assíncronas de maneira mais elegante e evitar o chamado "callback hell".

Descrição
Uma Promise pode estar em um dos três estados:

Pending: Estado inicial, ainda não foi resolvida nem rejeitada.
Fulfilled (Realizada): A operação foi bem-sucedida.
Rejected (Rejeitada): A operação falhou.
A função associada à Promise é executada de forma assíncrona e pode levar a uma resolução ou rejeição.

Exemplo (Código)

const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simula o sucesso da operação
  
  if (success) {
    resolve('Operação bem-sucedida!');
  } else {
    reject('Operação falhou.');
  }
});

// Manipulando a Promise
myPromise
  .then((message) => {
    console.log('Sucesso:', message);
  })
  .catch((message) => {
    console.error('Erro:', message);
  });