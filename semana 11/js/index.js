//alert("ejemplo");
//variables: String number boolean [] date
// tipo objetos

// diferencias es el scope=ambito
/*var nombre = "Pedro";
let apellido = "Perez";*/
// let es local dentro de su ambito
// si defino una variable var se combierte en global

if (true) {
  var name = "Camila";
  let apellido = "Sanchez";
}

alert(name);
// alert(apellido);

let bandera = true;
let edad = 15;
let precio = 3.35;

let lista = [];

let fecha = new Date().getDate();
alert(fecha);

// aunque tipos de datos distintos se van a comparar ya que lo que hace es comparar el valor, esto se llama coercion
if (5 == "5") {
  alert("siiii");
} else if (5 < 3) {
} else {
}

// triple igual lo que hace es validar el tipo de dato y luego el valor
// compara primero el tipo de dato por este motivo va a salir no
if (5 === "5") {
  alert("siiii");
} else {
  alert("noooo");
}
// es diferente entonces entra al si
if (5 !== "5") {
  alert("siiii");
} else {
  alert("noooo");
}
// mismo tipo de dato
if (5 === 5) {
  alert("siiii");
} else {
  alert("noooo");
}
// LAS CONSTANTES POR NOMENCLATURA SE TIENE QUE ESCRIBIR EN MAYUSCULA
const PI = 3.14;

const Persona = {
  cedula: "118010167",
  nombre: "Camila",
  lastName1: "Sanchez",
  lastName2: "Bejarano",
  edad: "22",
};

// string template
alert(
  `El nombre de la persona es ${Persona.nombre} y tiene una edad de ${Persona.edad}`
);

let tiene = Persona.hasOwnProperty("edad");
alert(tiene);

let tienePerro = true;
alert(tienePerro);
tienePerro = null;

if (tienePerro) {
  alert("tiene perro");
} else {
  alert("no tiene perro");
}

let ListaColores = ["Rojo", "Verde", "Azul"];
alert(ListaColores[1]);
alert(ListaColores.length);

for (let i = 0; i < ListaColores.length; i++) {
  console.log(ListaColores[i]);
}

console.log("Foreach");
ListaColores.forEach((valor, index) => {
  if (index % 2 == 0) {
    console.log(`El valor es: ${valor} y el indice es ${index}`);
  }
});

console.log("map");
ListaColores.map((valor, index) => {
  console.log(`El valor es: ${valor} y el indice es ${index}`);
}).filter((x) => x == "Rojo");

const ListaPersonas = [
  {
    id: "7777",
    nombre: "Camila",
    lastName1: "Sanchez",
    lastName2: "Bejarano",
    edad: "22",
  },
  {
    id: "888888",
    nombre: "Marta",
    lastName1: "Perex",
    lastName2: "hernandez",
    edad: "29",
  },
  {
    id: "555",
    nombre: "elena",
    lastName1: "acosta",
    lastName2: "madrigal",
    edad: "40",
  },
  {
    id: "66666",
    nombre: "Luis",
    lastName1: "Peraza",
    lastName2: "Rodriguez",
    edad: "12",
  },
];

const ListaResults = ListaPersonas.map((persona, index) => {
  let nombre = `Mi nombre es ${persona.nombre} ${persona.lastName1}`;
  return {
    id: index,
    cedula: persona.id,
    nombre: nombre,
    edad: persona.edad,
  };
}).filter((x) => x.edad > 18);
console.log(...ListaResults);

/*function saludar2() {
  alert(prueba);
}
function saludar() {
  var prueba = 5;
}
saludar2;
saludar();*/
