alert("Iremos utilizar operadores matemáticos"); //prompt com interação

let numberOne = prompt("digite o primeiro número"); //escolha dos números
let numberTwo = prompt("digite o segundo número");

numberOne = Number(numberOne); //transformar string em number
numberTwo = Number(numberTwo);

let sum = numberOne + numberTwo; //montar os cálculos para gerar os resultados.
let sub = numberOne / numberTwo; //utilizar let invés do const para atualizar com toFixed.
let multi = numberOne * numberTwo;
let div = numberOne / numberTwo;
let restDiv = numberOne % numberTwo; //resto da divisão

sub = sub.toFixed();
div = div.toFixed();

alert("Soma: " + sum); //concatenar o texto/string com o cálculo desejado.
alert("Subtração: " + sub);
alert("Multiplicação: " + multi);
alert("Divisão: " + div);
alert("Resto da divisão: " + restDiv);

//Pela lógica, o número é par quando dividido por 2 a sobra é 0.
if (sum % 2 == 0) {
  alert("A soma dos dois números é par: " + sum);
} else {
  alert("A soma dos dois números é ímpar: " + sum);
}

//Saber se os números são iguais
if (numberOne == numberTwo) {
  alert("Os números inseridos são iguais!");
} else {
  alert("Os números inseridos são diferentes!");
}
