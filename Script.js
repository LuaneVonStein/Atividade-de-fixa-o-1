//Exercício 1
let letra = 1;

if ((letra % 4 === 0 && letra % 100 !== 0) || (letra % 400 === 0)) {
    console.log("O caractere é uma vogal");
  } else {
    console.log("O caractere é uma consoante");
  }


//Exercício 2
let valor nota = 10

if (nota === 50) {
  console.log("a")
} 

else if (nota === 60) {
    console.log("b")
} 

else if (nota === 70) {
    console.log("c")
}

else if (nota === 80) {
    console.log("d")
}

else if (nota === 90) {
    console.log("e")
}

else if (nota === 100) {
    console.log("f")
}


//Exercício 3
let valor = 0

if (valor % 3 === 0 && valor % 5 === 0 ) {
  console.log("O número é divisível por 3 ou por 5");
} 

else {
  console.log("O número não é divisível por 3 ou por 5");
}


// Exercício 4
let valor = 10;

if(valor % 2 === 0) {
    console.log("O número informado é par");
}

else{
    console.log("O número informado é impar");
}


//Exercício 5
let numero = 16;

if(numero > 0) {
console.log("O número informado é positivo");
}

else{
console.log("O número informado é negativo");
}


//Exercício 6
let times = ["Corinthians", "São Paulo", "Flamengo"];

times.forEach(function(times) {
  console.log(times);


//Exercício 7
let nome = "Damasceno";

for (let caractere of nome) {
  console.log(caractere);
}


//Exercício 8
let numero = 1;
while (true) {
  if (numero % 5 === 0 && numero % 7 === 0) {
    console.log("O  número divisível por 5 e 7 é" , numero);
    break;
  }
  numero++;
}


//Exercício 9
let i = 0;
do {
  if (i % 2 !== 0) {
    i++;
}
  console.log(i);
  i++;
} 
while (i <= 10);


//Exercício 10
let cidades = ["Nova Andradina", "Ivinhema", "Taquarussu"];

for (let city in cidades) {
  console.log(city);
}


//Exercício 11
while (number % 2 !== 0 || number % 3 !== 0 || number % 5 !== 0) {
  number++;
}
console.log("O menor número divisível por 2, 3 e 5 é" , number);


//Exercício 12
let letras = ["a", "b", "c", "d"];

for (let [indice, letra] of letras.entries()) {
  console.log("Letra", letra, "na posição", indice);
}


//Exercício 13
let numero = 1;

while (numero <= 10) {
  console.log(numero);
  numero += 2;
}


//Exercício 14
let respostas;
do {
  respostas = prompt("Deseja sair? (sim/não)");
} while (respostas !== "sim");
console.log("Ok, saída confirmada!");


//Exercício 15
let palavra = "garrafa";

for (let indice in palavra) {
  console.log(indice);
}


//Exercício 16
const numero = parseInt(prompt("Digite um número inteiro positivo: "));

if (numero < 2) {
  console.log("O número não é primo.");
} 
else {
  let NumPrimo = true;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      NumPrimo = false;
      break;
    }
  }

  if (NumPrimo) {
    console.log("O número é primo.");
  } 
  else {
    console.log("O número não é primo.");
  }
}


//Exercício 17
numeber = 10

while number >= 1
    console.log(number)
    number -= 1


//Exercício 18
let numero1;

do {
  numero = parseInt(prompt("Digite dois números inteiros"));
} 
while (numero1 < 1 || numero1 > 100);

if(valor&2 === 0) {    
}
console.log("Você digitou o número " + numero1);


//Execício 19
let notas;
    do {
   let nota = parseInt(prompt("Digite dois números inteiros"));    
}
    while (notas < 1 || notas > 10; i++) {
        let soma = 0;
    }
console.log("O valor da soma é: " + soma);


//Exercício 20
 
