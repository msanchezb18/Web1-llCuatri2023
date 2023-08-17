var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
for (var i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}

//ejercicio 2
//2.1
var valores = [true, 5, false, "hola", "adios", 2];

var text1 = valores[3];
var text2 = valores[4];

if (text1.length > text2.length) {
  console.log(`${text1} es mayor que ${text2}`);
} else if (text2.length > text1.length) {
  console.log(`${text2} es mayor que ${text1}`);
} else {
  console.log("Los dos textos tienen el mismo largo");
}

//2.2
var valorB1 = valores[0];
var valorB2 = valores[2];

console.log(valorB1 || valorB2);
console.log(valorB1 && valorB2);

//2.3
var num1 = valores[1];
var num2 = valores[5];

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//Ejercicio 3

var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
  console.log("numero1 no es mayor que numero2");
}

if (numero2 > 0) {
  console.log("numero2 es positivo");
}
if (numero1 < 0 || numero1 !== 0) {
  console.log("numero1 es negativo o distinto a cero");
}

if (numero1 + 1 <= numero2) {
  console.log(
    "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
  );
}

//Ejercicio 4
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}

var numero = 5;
var factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${factorial}`);

//Ejercicio 5
function ParOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

function verificar() {
  var number = document.getElementById("number").value;
  var resultado = ParOImpar(Number(number));
  var resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = `El numero es ${resultado}`;
}

//Ejercicio 6
function analizar(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "La cadena solo tiene mayúsculas.";
  } else if (cadena === cadena.toLowerCase()) {
    return "La cadena solo tiene minúsculas.";
  } else {
    return "La cadena tiene mayúsculas y minúsculas.";
  }
}

var texto = "QUEboNitoDIa";
var resultado = analizar(texto);
console.log(resultado);
