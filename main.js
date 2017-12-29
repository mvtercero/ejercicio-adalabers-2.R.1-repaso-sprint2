"use strict";


// EJERCICIO Adalabers
//
// Estamos en una clase de Adalab, y queremos saber conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:
// María, 29 años, diseñadora
// Lucía, 31 años, ingeniera química
// Susana, 34 años, periodista
// Rocío, 25 años, actriz
// Inmaculada, 21 años, diseñadora
// En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.
// Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.
// Una función countAdalabers que devuelve el número de adalabers en el listado
// Una función averageAge que devuelve la media de edad de listado
// Una función theYoungest que devuelve el nombre de la adalaber más joven
// Una función countDesigners que devuelve el número de adalabers que son diseñadoras
// Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento. Al final, modificad la estructura de datos para añadir, modificar o quitar adalabers. Y probad que las funciones siguen devolviendo el valor correcto.

var adalabers= [
  {
    name: "María",
    age: 29,
    job:"diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job:"ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job:"periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job:"actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job:"diseñadora",
  }
];


// Una función countAdalabers que devuelve el número de adalabers en el listado
function countAdalabers(adalabers) {
  return adalabers.length
}

alert (countAdalabers(adalabers));

// Una función averageAge que devuelve la media de edad de listado


function averageAge(adalabers) {
  var acumulador= 0;
  for (var i = 0; i < adalabers.length; i++) {
    acumulador += adalabers[i].age;
  }
  return acumulador / adalabers.length;
}

alert (averageAge(adalabers));

// Una función theYoungest que devuelve el nombre de la adalaber más joven

function theYoungest(adalabers) {
  var currentPerson= 0;
  var youngest= null;

  for (var i = 0; i < adalabers.length; i++) {
    currentPerson = adalabers[i];
    youngest= adalabers[i];

  }
  if (youngest.age == null || youngest.age > currentPerson.age) {
    youngest= currentPerson;
  }
  return youngest.name;
};

alert (theYoungest(adalabers));

// Una función countDesigners que devuelve el número de adalabers que son diseñadoras

function countDesigners(adalabers) {
  var currentPerson= "";
  var counter= 0;

  for (var i = 0; i < adalabers.length; i++) {
    currentPerson += adalabers[i].job;
  }

if (currentPerson === "diseñadora") {
  counter= counter+1;

}
return counter;
};

alert (countDesigners(adalabers));
