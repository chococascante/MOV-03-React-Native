// Tipos en JS
// number
// string
// boolean
// Objetos
// Arrays

// Coercion
if (5 !== "5") {
  // console.log("Hola");
}

const obj = {
  nombre: "Luis",
  apellido: "Cascante",
  edad: 204,
  perros: 3,
};

const tieneApellido = obj.hasOwnProperty("apellido");

console.log(obj.apellido);

if (obj.apellido) {
  // console.log("Tiene apellido");
}

console.log(tieneApellido);

for (let atributo in obj) {
  // console.log(obj[atributo]);
}

const llaves = Object.keys(obj);

const arreglo = ["rojo", "azul", "blanco", "verde"];

const coloresConIndexTemplate = arreglo.map(
  (valor, index) => `${valor}-${index}`
);

const coloresConIndexNormal = arreglo.map(
  (valor, index) => valor + "-" + index
);

const foreach = arreglo.forEach((valor, index) => valor + "-" + index);

const arregloPersonas = [
  {
    nombre: "Luis",
    apellido: "Cascante",
    edad: 204,
    perros: 3,
  },
  {
    nombre: "Juan Carlos",
    apellido: "Rojas",
    edad: 204,
  },
  {
    nombre: "Miguel",
    apellido: " Gutierrez",
    edad: 204,
    perros: 1,
  },
  {
    nombre: "Irene",
    apellido: " Cruz",
    edad: 204,
    perros: 2,
  },
  {
    nombre: "Felipe",
    apellido: " Ramirez",
    edad: 204,
    gatos: 1,
  },
];

const personas = arregloPersonas.map((persona, indice) => {
  const nombreApellido = `${persona.nombre} ${persona.apellido}`;

  return {
    numero: indice,
    nombreApellido,
  };
});

const personasSinReturn = arregloPersonas
  .map((persona, indice) => ({
    numero: indice,
    nombreApellido: `${persona.nombre} ${persona.apellido}`,
    tienePerros: persona.perros && true,
    perros: persona.perros ? persona.perros : 0,
  }))
  .filter((persona) => persona.tienePerros)
  .find((persona) => persona.perros === 1);

console.log(personasSinReturn);

const personasConPerros = arregloPersonas
  .filter((persona) => persona.perros)
  .findIndex((_, indice) => {
    return indice > 0;
  });

console.log(personasConPerros);
