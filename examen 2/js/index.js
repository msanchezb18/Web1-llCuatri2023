let Ingresar = "";
let Operacion = "";
let resultado = 0;

function numero(number) {
  Ingresar += number;
  actualizar();
}

function operaciones(operator) {
  if (Ingresar !== "") {
    Operacion = operator;
    resultado = parseFloat(Ingresar);
    Ingresar = "";
    actualizar();
  }
}

function calcular() {
  if (Ingresar !== "") {
    const inputNumber = parseFloat(Ingresar);
    switch (Operacion) {
      case "+":
        resultado += inputNumber;
        break;
      case "-":
        resultado -= inputNumber;
        break;
      case "*":
        resultado *= inputNumber;
        break;
      case "/":
        resultado /= inputNumber;
        break;
    }
    Ingresar = resultado.toString();
    Operacion = "";
    actualizar();
  }
}

function limpiar() {
  Ingresar = "";
  Operacion = "";
  resultado = 0;
  actualizar();
}

function actualizar() {
  const display = document.getElementById("display");
  display.value =
    Ingresar !== "" ? Ingresar : Operacion !== "" ? Operacion : resultado;
}
