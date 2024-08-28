const prompt = require('prompt-sync');
const entrada = prompt();

var quantosNumeros = entrada('Quantos números você quer somar?:' );
let numero = 0;
let soma = 0;


for (let i = 0; i < quantosNumeros; i++){
  numero = entrada('Digite um número: ');
  soma += parseInt(numero);
}

console.log(soma);