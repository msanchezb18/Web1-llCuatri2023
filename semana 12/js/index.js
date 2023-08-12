function validar() {
  const nombre = document.getElementById("nombre").value;

  if (!nombre || nombre.lenght == 0) {
    alert("FALTA NOMBRE");
    return false;
  }
  const edad = document.getElementById("edad").value;
  if (isNaN(edad)) {
    alert("FALTA EDAD");
    return false;
  }
  const opciones = document.getElementById("opciones").selectedIndex;
  if (opciones == null || opciones == 0) {
    alert("FALTA SELECCIONAR");
    return false;
  }
  const correo = document.getElementById("correo").value;
  if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo)) {
    alert("FALTA CORREO");
    return false;
  }
  var anho = document.getElementById("anho").value;
  var mes = document.getElementById("mes").value;
  var dia = document.getElementById("dia").value;
  fecha = new Date(anho, mes, dia);
  if (!isNaN(fecha)) {
    alert("FALTA FECHA");
    return false;
  }
  const cedula = document.getElementById("cedula").value;
  if (isNaN(cedula)) {
    alert("FALTA CEDULA");
    return false;
  }
  const telefono = document.getElementById("telefono").value;
  if (!/^\d{8}$/.test(telefono)) {
    alert("FALTA TELEFONO");
    return false;
  }
  const elemento = document.getElementById("elemento");
  if (!elemento.checked) {
    alert("FALTA CHECK");
    return false;
  }
  const radio = document.getElementsByName("radio");
  if (!radio) {
    alert("FALTA SELECCION");

    return false;
  }

  alert("Todo OK");
  return true;
}

/*var global = 0;

function cambiarColor() {
  const titulo = document.querySelector(".titulo");
  titulo.style.color = "White";
  titulo.style.background = "Blue";

  alert(global);
}

function accion() {
  //alert("Hola accion");
}

function EnviarMensaje(mensaje, numero) {
  const ValorInput = document.getElementById("Valor").value;
  const Valor = document.getElementById("5").value;
  //alert(`El mensaje es: ${mensaje} y el valor del numero es: ${numero}`);
  //alert(ValorInput);
  alert(Valor);

  global = Valor;

  alert(partirMensaje());
  document.getElementById("Valor").value = 20;
}

function partirMensaje() {
  return "Mensaje partido";
}
*/
