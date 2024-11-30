//const hotels = [];
const hotels = [
    new Hotel("Hotel Palace", 500, 20, 3000),
    new Hotel("Hotel Ritz", 600, 25, 4000),
    new Hotel("Hotel Majestic", 700, 30, 5000),
    new Hotel("Hotel W", 300, 15, 2500),
];
let posicion;
console.table(hotels);

function buscar(valor) {
    let encontrado = false;
    let indice = -1;
    let i = 0;
    let vueltas = hotels.length;
    while (i < vueltas && !encontrado) {
        if (valor === hotels[i].nombre) {
            indice = i;
            encontrado = true;
        }
        i++;
    }
    return indice;
}

function crearHotel() {
    let message = "";
    let nombre = prompt("Introduce el nombre del Hotel", "Hotel Arts");
    let habitaciones = prompt("Introduce el numero de habitaciones", "1050");
    let plantas = prompt("Introduce numeros de plantas", "35");
    let superficie = prompt("Escribe el superficie del hotel", '2500');
    let newHotel = new Hotel(nombre, habitaciones, plantas, superficie);
    hotels.push(newHotel);
    message = newHotel.toString() + newHotel.calcularMantenimiento();
    document.getElementById('result').innerHTML = message;
    console.table(newHotel);
    //document.getElementById('image1').style.display = "block";
}

function mostrar() {
    let message = "";
    let mostrarHotel = prompt("Indica el nombre del hotel que quieres ver");
    let indice = buscar(mostrarHotel);
    if (indice >= 0) {
        message = hotels[indice].toString() + "<br>" + hotels[indice].calcularMantenimiento();
    } else {
        alert("El hotel que estas buscando no esta existe!");
    }
    document.getElementById('result').innerHTML = message;
    console.log(mostrarHotel);
    //document.getElementById('image2').style.display = "block";
}
function modificar() {
    let message = ""
    let modificarHotel = prompt("Introduce el nombre del hotel que quieres modificar");
    let indice = buscar(modificarHotel);
    if (indice >= 0) {
        let newNombre = prompt("Introduce el nuevo nombre de hotel.");
        let numHabitaciones = prompt("Introduce el numero de habitaciones");
        let numPlantas = prompt("Introduce numeros de plantas");
        let newSuperficie = prompt("Escribe el superficie del hotel");

        message = hotels[indice].nombre = "El hotel: " + newNombre + "<br>";
        message = hotels[indice].habitacion = "Tiene habitciones: " + numHabitaciones + "<br>";
        message = hotels[indice].plantas = "Tiene numero de plantas:" + numPlantas + "<br>";
        message = hotels[indice].superficie = "Tiene superficie: " + newSuperficie + " m2." + "<br>";
        message = hotels[indice].toString();
    } else {
        alert("El hotel que estas buscando para modificar no esta existe.")
    }
    document.getElementById('result').innerHTML = message;
    console.log(modificarHotel);
    //document.getElementById('image3').style.display = "block";
}
function eliminar() {
    let eliminaHotel = prompt("Introduce nombre del hotel que quieres eliminar.");
    let indice = buscar(eliminaHotel);
    if (indice < 0) {
        alert("El hotel que quieres eliminar no esta existe.");
    } else {
        let hotel = hotels[indice];
        alert("¿Desea eliminar este hotel?\n" + hotel.toString());
        let message;
        confirmEliminar = confirm(message);
        if (confirmEliminar) {
            hotels.splice(indice, 1);
            alert("hotel esta elminado.");
        } else {
            alert("El hotel no esta eliminado esta mantiene registrado.");
        }
        console.table(hotels);
    }
}