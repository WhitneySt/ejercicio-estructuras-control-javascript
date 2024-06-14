//Estuctura condicional simple: if

let edad = 45;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

//Estructura condicional doble: if...else

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Todavía eres menor de edad");
}

//Estructura condicional doble: operador ternario

const mensaje =
  edad >= 18
    ? "Eres mayor de edad - ternario"
    : "Eres menor de edad - ternario";

console.log(mensaje);

//Estructura condicional múltiple: else if

if (edad < 12) {
  console.log("Eres muy pequeño");
} else if (edad < 19) {
  console.log("Eres un adolecente");
} else if (edad < 35) {
  console.log("Aún sigues siendo joven");
} else {
  console.log("Debes cuidarte un poco");
}

//Estructura condicional múltiple: switch case

let fruta = "uchuva";

switch (fruta) {
  case "naranja":
    console.log("La fruta es una naranja");
    break;
  case "manzana":
    console.log("La fruta es una manzana");
    break;
  case "banana":
    console.log("La fruta es una banana");
    break;
  case "uva":
    console.log("La fruta es una uva");
  default:
    console.log("La fruta es una exótica");
    break;
}

//Ejemplo con switch

let tipoPoblación = "menor de edad";

switch (tipoPoblación) {
  case "menor de edad":
    console.log("Es un niño");
    //...
    break;
  case "adulto mayor":
    console.log("Es mayor");
    break;
  default:
    console.log("No pertenece a una población específica");
    break;
}

//Estructuras repetitivas

//while

let contrasena;
const contrasenaCorrecta = "12345";

while (contrasena !== contrasenaCorrecta) {
  contrasena = prompt("Introduzca la contraseña");
}

console.log("Contraseña correcta ingresada");

//do.. while
let opcion;

do {
  opcion = prompt(
    "Seleccione una opción: \n1. Opción 1\n2. Opción 2\n3. Salir"
  );
  console.log("Has seleccionado la opción " + opcion);
} while (opcion !== "3");

console.log("Has salido del menú");

//Ejercicio Factorial
let numero;
let resultado = 1;

//Evaluar si el dato ingresado por el usuario es un número entero

while (!Number.isInteger(numero)) {
  numero = prompt("Ingrese un numero");
  numero = Number(numero);
  console.log(numero);
}

// do {
//   numero = prompt('Ingrese un numero');
//   numero = parseInt(numero);
// } while (isNaN(numero)) ;

console.log("el número ingresado " + numero);

for (let i = numero; i >= 1; i--) {
  resultado = resultado * i;
  console.log("contador: " + i);
  console.log("Resultado iteración: " + resultado);
}

console.log("El factorial de " + numero + " es: " + resultado);

//---------------------------------------------------------------

//1. Preguntar la cantidad de productos a comprar
let cantidadProductos;
let subtotal = 0;
let total = 0;

while (!Number.isInteger(cantidadProductos)) {
  cantidadProductos = prompt("Ingrese la cantidad de productos a comprar");
  cantidadProductos = Number(cantidadProductos);
  console.log(cantidadProductos);
}

for (let i = 0; i < cantidadProductos; i++) {
  let descuento;
  const nombreProducto = prompt(
    "Ingrese el nombre del producto No. " + (i + 1)
  );
  let precioProducto = prompt("Ingrese el precio del producto No. " + (i + 1));

  precioProducto = Number(precioProducto);
  if (precioProducto > 20000) {
    descuento = 0.2;
  } else if (precioProducto > 10000) {
    descuento = 0.1;
  } else if (precioProducto > 5000) {
    descuento = 0.05;
  } else {
    descuento = 0;
  }

  const precioConDescuento = precioProducto - precioProducto * descuento;
  subtotal = subtotal + precioProducto;
  total = total + precioConDescuento;
  // const precioConDescuento = precioProducto * (1 - descuento);

  console.log("Nombre del producto No. " + (i + 1) + ": " + nombreProducto);
  console.log("Precio del producto No. " + (i + 1) + ": " + precioProducto);
  console.log(
    "Descuento aplicado al producto No. " + (i + 1) + ": " + descuento
  );
  console.log(
    "Precio del producto No. " + (i + 1) + " con descuento: " + precioConDescuento
  );
}

console.log("Subtotal de la compra: " + subtotal);
console.log("Total a pagar: " + total);
