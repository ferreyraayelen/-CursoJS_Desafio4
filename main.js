//Funcion mostrar el precio de un servicio

let nombre = prompt("Por favor ingresa tu nombre");

alert("Hola " + nombre + " te cuento que tengo disponibles los siguientes servicios:\n One Page\n Página web \nTienda Online");

let precioOnePage = 10000;
let precioPaginaWeb = 25000;
let precioTiendaOnline = 40000;
let servicioElegido = prompt("Ingresa el servicio deseado, así te cuento cuál es el costo ");

function mostrarPrecio(servicio) {
    switch (servicio) {
        case "One Page":
            return ("El servicio elegido: One Page, tiene un costo de  $ " + precioOnePage);
            break;
        case "Página web":
            return ("El servicio elegido: Página web, tiene un costo de $ " + precioPaginaWeb);
            break;
        case "Tienda online":
            return ("El servicio elegido: Tienda online, tiene un costo de $ " + precioPaginaWeb);
            break;
        default:
            return ("La opción elegida no es correcta")
            break;
    }
}

alert(mostrarPrecio(servicioElegido));

//Funcion sin parametros

/* function ingresarNombre(dato1, dato2) {
    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("Ingresa tu apellido");
    let nombreCompleto = nombre + (" ") + apellido;
    alert("Hola " + " " + nombreCompleto);
}
ingresarNombre(); */

//Funcion con parametros

/* alert("Hola, te cuento que tengo disponibles los siguientes horarios para que coordinemos una reunión:\nOpción 1: 15 a 16 \nOpción 2: 16 a 17 \nOpción 3: 17 a 18 \nOpción 4: 18 a 19 \nOpción 5: 19 a 20");
let nombreCompleto = prompt("Hola, ingresa tu nombre completo");
let cita = prompt("Ingresa la opción que mejor te quede para que nos juntenemos. Si no podés en ningún horario ingresá ESC"); */

/* function reservarCita(opcion) {
    switch (opcion.toLowerCase()) {
        case "opcion 1":
            return ("Hola " + nombreCompleto + " nos vemos de 15 a 16 , ya que legiste la: " + cita);
            break;
        case "opcion 2":
            return ("Hola " + nombreCompleto + " nos vemos de 16 a 17 , ya que legiste la: " + cita);
            break;
        case "opcion 3":
            return ("Hola " + nombreCompleto + " nos vemos de 17 a 18 , ya que legiste la: " + cita);
            break;
        case "opcion 4":
            return ("Hola " + nombreCompleto + " nos vemos de 18 a 19 , ya que legiste la: " + cita);
            break;
        case "opcion 5":
            return ("Hola " + nombreCompleto + " nos vemos de 19 a 20 , ya que legiste la: " + cita);
            break;
        default:
            return ("No hay problema, coordinamos para otro día")
            break;
    }
}
alert(reservarCita(cita)); */










