var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};
var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};
var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};

var penguins = [gunter, ramon, fred];

for (var i = 0; i < penguins.length; i++) {
  alert(penguins[i].name);
}

alert(`La cantidad de pingüinos es de ${penguins.length}`);

for (var i = 0; i < penguins.length; i++) {
  penguins[i].numberOfFeet = Math.floor(Math.random() * 5) + 1;
}

for (var i = 0; i < penguins.length; i++) {
  if (penguins[i].canFly) {
    alert(penguins[i].name + " si puede volar");
  }
}

var penguins2Feet = [];

for (var i = 0; i < penguins.length; i++) {
  if (penguins[i].numberOfFeet > 2) {
    penguins2Feet.push(penguins[i].name);
  }
}

alert(`pingüinos con más de dos pies ${penguins2Feet}`);

for (var i = 0; i < penguins.length; i++) {
  penguins[i].favoriteFoods = ["Fish", "Squid", "Shrimp", "Krill", "Plankton"];
}

for (var i = 0; i < penguins.length; i++) {
  var secondFood = penguins[i].favoriteFoods[1];
  alert(`La segunda comida favorita de ${penguins[i].name} es: ${secondFood}`);
}

for (var i = 0; i < penguins.length; i++) {
  penguins[i].favoriteFoods[4] = "piñas";
}

for (var i = 0; i < penguins.length; i++) {
  alert(`Las comidas favoritas de ${penguins[i].name} son:`);
  for (var j = 0; j < penguins[i].favoriteFoods.length; j++) {
    alert(`${penguins[i].favoriteFoods[j]}`);
  }
}
