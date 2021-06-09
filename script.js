// Ejercicio 1
/* Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error. */

let medidametro = parseFloat(prompt("Ingrese medida en metros"));
if (isNaN(medidametro)) {
    alert("El dato ingresado no es válido, por favor ingrese un valor numérico");
} else {
    // Defino las constantes equivalentes a metros.
    const medidacentimetro = 100;
    const medidapies = 3.281;
    const medidapulgadas = 39.37;
    // Convierto las medidas
    let centimetro = medidametro * medidacentimetro;
    let pies = medidametro * medidapies;
    let pulgadas = medidametro * medidapulgadas;
    // Muestro las medidas convertidas
    console.log("Pies: " + pies);
    console.log("Centímetros: " + centimetro);
    console.log("Pulgadas: " + pulgadas);
}

// Ejercicio 2
/* Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor . */
let edad = parseInt(prompt("Ingrese su edad"));
if (edad < 18) {
    alert("Usted es menor de edad");
} else {
    alert("Usted es mayor de edad");
}

// Ejercicio 3
/*Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.*/
let sabores = prompt("¿Qué sabores desea?");
let cobertura = prompt("¿Desea agregarle cobertura de chocolate?(si/no)");
if (cobertura === "si") {
    alert("Su helado sabor " + sabores + " con cobertura de chocolate cuesta $180");
} else {
    alert("Su helado sabor " + sabores + " sin cobertura de chocolate cuesta $150");
}

// Ejercicio 4
/* Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar. */
let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));
let suma = num1 + num2;
console.log(suma);
alert(suma);
if (suma % 2 === 0) {
    console.log("El número resultante es Par");
    alert("El número resultante es Par");
} else {
    console.log("El número resultante es Impar");
    alert("El número resultante es Impar");
}

// Ejercicio 5
/* Solicitar al usuario un número e indicar si es positivo, negativo o cero. */
let num = parseInt(prompt("Ingrese un número"));
if (num >= 1) {
    alert("El número ingresado es positivo");
} else if (num <= -1) {
    alert("El número ingresado es negativo");
} else {
    alert("El número ingresado es cero");
}

/* Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centimetros y pulgadas. Mostrar por consola los tres resultados.*/
let medidametro = parseInt(prompt("Ingrese medida en metros"));
// Defino las constantes equivalentes a metros.
const medidacentimetro = 100;
const medidapies = 3.281;
const medidapulgadas = 39.37;
// Convierto las medidas
let centimetro = medidametro * medidacentimetro;
let pies = medidametro * medidapies;
let pulgadas = medidametro * medidapulgadas;
// Muestro las medidas convertidas
console.log("Pies: " + pies);
console.log("Centímetros: " + centimetro);
console.log("Pulgadas: " + pulgadas);

/* Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.*/

// Ejercicio 6
/* Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar. */
let monto = parseFloat(prompt("Ingrese un monto"));
if (monto > 2000) {
    monto = monto - (monto * 0.1); // Al monto le aplico el 10% de descuento
    alert("El total con su 10% de descuento a pagar es: $" + monto);
} else {
    alert("Para acceder al descuento debe superar los $2000, por lo que su total a pagar es: $" + monto);
}

// Ejercicio 7
/* Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.) */
let texto = prompt("Ingrese un texto");
let posicion = parseInt(prompt("Ingrese una posición (número)"));
let posiciontexto = texto.charAt(posicion); // Lo obtengo para ver de que caracter se trata la posición.
if (posiciontexto === "a" || posiciontexto === "e" || posiciontexto === "i" || posiciontexto === "o" || posiciontexto === "u") {
    alert("El dígito de la posición " + posicion + " ingresada es una vocal y corresponde a la letra: " + posiciontexto);
} else {
    alert("El dígito de la posición " + posicion + " ingresada no es una vocal y corresponde al caracter: " + posiciontexto);
}

// Ejercicio 8
/* Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. */
let nota = parseInt(prompt("Ingrese una nota del 1 al 10"));
if (nota >= 1 && nota <= 3) {
    alert("El alumno se encuentra aplazado");
} else if (nota === 4 || nota === 5) {
    alert("El alumno se encuentra reprobado");
} else if (nota >= 6 && nota <= 10) {
    alert("El alumno se encuentra aprobado");
} else {
    alert("La nota ingresada no es del 1 al 10");
}

// Ejercicio 9
// Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.
let num1 = parseInt(prompt("Ingrese número 1"));
let num2 = parseInt(prompt("Ingrese número 2"));
if (num1 > num2) {
    alert("El número " + num1 + " es mayor que " + num2);
} else if (num2 > num1) {
    alert("El número " + num2 + " es mayor que " + num1);
} else {
    alert("Los números " + num1 + " y " + num2 + " son iguales");
}

// Ejercicio 10
// Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.
let nromes = parseInt(prompt("Ingrese un mes del 1 al 12"));
switch (nromes) {
    case 1:
        alert("El mes de Enero tiene 31 días");
        break;
    case 2:
        alert("El mes de Febrero tiene 28/29 días");
        break;
    case 3:
        alert("El mes de Marzo tiene 31 días");
        break;
    case 4:
        alert("El mes de Abril tiene 30 días");
        break;
    case 5:
        alert("El mes de Mayo tiene 31 días");
        break;
    case 6:
        alert("El mes de Junio tiene 30 días");
        break;
    case 7:
        alert("El mes de Julio tiene 31 días");
        break;
    case 8:
        alert("El mes de Agosto tiene 31 días");
        break;
    case 9:
        alert("El mes de Septiembre tiene 30 días");
        break;
    case 10:
        alert("El mes de Octubre tiene 31 días");
        break;
    case 11:
        alert("El mes de Noviembre tiene 30 días");
        break;
    case 12:
        alert("El mes de Diciembre tiene 31 días");
        break;
    default:
        alert("Debe ingresar un nro de mes válido. (Del 1 al 12)");
}

//Ejercicio 11
//Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

if (num1 > num2 && num1 > num3) {
    alert("El mayor de los 3 números ingresados es: " + num1);
} else if (num2 > num1 && num2 > num3) {
    alert("El mayor de los 3 números ingresados es: " + num2);
} else {
    alert("El mayor de los 3 números ingresados es: " + num3);
}

// Ejercicio 12
/* Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
(Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error). */
let edad = parseInt(prompt("Ingrese su edad"));
let bebida = prompt("Ingrese su bebida: Puede ser cerveza, jugo o agua");
const cerveza = 150;
const jugo = 100;
const agua = 50;

if (bebida === "cerveza" && edad < 18) {
    alert("Usted es menor, no puede comprar alcohol");
} else {
    if (bebida === "cerveza") {
        alert("El costo de la cerveza es: $" + cerveza);
    } else if (bebida === "jugo") {
        alert("El costo del jugo es: $" + jugo);
    } else if (bebida === "agua") {
        alert("El costo del agua es: $" + agua);
    }

    let dineroabonado = parseInt(prompt("¿Con cuánto dinero va a abonar?"));
    let vuelto = 0;
    switch (bebida) {
        case "cerveza":
            if (dineroabonado < cerveza) {
                alert("El dinero abonado $" + dineroabonado + " es menor a: $" + cerveza + " que es el costo de la cerveza");
            } else {
                vuelto = dineroabonado - cerveza;
                alert("Su vuelto es: $" + vuelto);
            }
            break;
        case "jugo":
            if (dineroabonado < jugo) {
                alert("El dinero abonado $" + dineroabonado + " es menor a: $" + jugo + " que es el costo del jugo");
            } else {
                vuelto = dineroabonado - jugo;
                alert("Su vuelto es: $" + vuelto);
            }
            break;
        case "agua":
            if (dineroabonado < agua) {
                alert("El dinero abonado $" + dineroabonado + " es menor a: $" + agua + " que es el costo del agua");
            } else {
                vuelto = dineroabonado - agua;
                alert("Su vuelto es: $" + vuelto);
            }
            break;
    }
}


// Ejercicio 13
// Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).
let nromes = parseInt(prompt("Ingrese un mes del 1 al 12"));
switch (nromes) {
    case 1:
        alert("El mes ingresado corresponde a Enero");
        break;
    case 2:
        alert("El mes ingresado corresponde a Febrero");
        break;
    case 3:
        alert("El mes ingresado corresponde a Marzo");
        break;
    case 4:
        alert("El mes ingresado corresponde a Abril");
        break;
    case 5:
        alert("El mes ingresado corresponde a Mayo");
        break;
    case 6:
        alert("El mes ingresado corresponde a Junio");
        break;
    case 7:
        alert("El mes ingresado corresponde a Julio");
        break;
    case 8:
        alert("El mes ingresado corresponde a Agosto");
        break;
    case 9:
        alert("El mes ingresado corresponde a Septiembre");
        break;
    case 10:
        alert("El mes ingresado corresponde a Octubre");
        break;
    case 11:
        alert("El mes ingresado corresponde a Noviembre");
        break;
    case 12:
        alert("El mes ingresado corresponde a Diciembre");
        break;
    default:
        alert("Debe ingresar un nro de mes válido. (Del 1 al 12)");
}

// BONUS //

// Ejercicio 1
/* Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto menor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible. */

let claveingresada = parseInt(prompt("Ingrese su clave de 4 dígitos"));
let montoaretirar = parseInt(prompt("Ingrese el monto que desea retirar"));
let balance = 50000;
const clave = 1234;

if (clave === claveingresada && montoaretirar < balance) {
    balance = balance - montoaretirar;
    alert("El monto retirado es: $" + montoaretirar + " y su balance disponible es de: $" + balance);
} else {
    alert("La clave " + claveingresada + " es incorrecta y/o el monto $" + montoaretirar + " es mayor a su balance de $" + balance);
}

// Ejercicio 2.
/* Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal. */
let dianacimiento = parseInt(prompt("Ingrese su día de nacimiento"));
let mesnacimiento = prompt("Ingrese su mes de nacimiento");

if (dianacimiento >= 21 && mesnacimiento === "Marzo" ||
    dianacimiento <= 20 && mesnacimiento === "Abril") {
    alert("Tu signo zodiacal es Aries");
} else if (dianacimiento >= 21 && mesnacimiento === "Abril" ||
    dianacimiento <= 20 && mesnacimiento === "Mayo") {
    alert("Tu signo zodiacal es Tauro");
} else if (dianacimiento >= 21 && mesnacimiento === "Mayo" ||
    dianacimiento <= 21 && mesnacimiento === "Junio") {
    alert("Tu signo zodiacal es Géminis");
} else if (dianacimiento >= 22 && mesnacimiento === "Junio" ||
    dianacimiento <= 22 && mesnacimiento === "Julio") {
    alert("Tu signo zodiacal es Cancer");
} else if (dianacimiento >= 23 && mesnacimiento === "Julio" ||
    dianacimiento <= 22 && mesnacimiento === "Agosto") {
    alert("Tu signo zodiacal es Leo");
} else if (dianacimiento >= 23 && mesnacimiento === "Agosto" ||
    dianacimiento <= 22 && mesnacimiento === "Septiembre") {
    alert("Tu signo zodiacal es Virgo");
} else if (dianacimiento >= 23 && mesnacimiento === "Septiembre" ||
    dianacimiento <= 22 && mesnacimiento === "Octubre") {
    alert("Tu signo zodiacal es Libra");
} else if (dianacimiento >= 23 && mesnacimiento === "Octubre" ||
    dianacimiento <= 22 && mesnacimiento === "Noviembre") {
    alert("Tu signo zodiacal es Escorpio");
} else if (dianacimiento >= 23 && mesnacimiento === "Noviembre" ||
    dianacimiento <= 21 && mesnacimiento === "Diciembre") {
    alert("Tu signo zodiacal es Sagitario");
} else if (dianacimiento >= 22 && mesnacimiento === "Diciembre" ||
    dianacimiento <= 20 && mesnacimiento === "Enero") {
    alert("Tu signo zodiacal es Capricornio");
} else if (dianacimiento >= 21 && mesnacimiento === "Enero" ||
    dianacimiento <= 18 && mesnacimiento === "Febrero") {
    alert("Tu signo zodiacal es Acuario");
} else if (dianacimiento >= 19 && mesnacimiento === "Febrero" ||
    dianacimiento <= 20 && mesnacimiento === "Marzo") {
    alert("Tu signo zodiacal es Piscis");
}

// Ejercicio 3.
/* Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días.*/

let hora = parseFloat(prompt("Ingrese la hora"));
let nombre = prompt("Ingrese su nombre");

if (hora >= 12 && hora < 19) {
    alert("Buenas tardes " + nombre);
} else if (hora >= 19 && hora < 5 || hora >= 0 && hora < 5) {
    alert("Buenas noches " + nombre);
} else if (hora >= 5 && hora < 12) {
    alert("Buenos días " + nombre);
}