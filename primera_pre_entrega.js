let nombreUsuario= prompt ("Ingrese su nombre");

while(nombreUsuario == ""){
    alert("Nombre Incorrecto");
    nombreUsuario= prompt ("Ingrese su nombre");
}

alert("Bienvenido/a" + nombreUsuario);

let mensaje = prompt("Deseas comprar algun producto (s-si)");
let total = 0;
while(mensaje.toLowerCase() == "s");{
    let producto = prompt("1 - Buzo de frisa $4000\n2 - Remera de algodon $2500\n3 - Jean Elastizado $5000\n4 - Remera manga larga $3000\n5 - Campera de frisa $6000");
    switch(producto){
        case 1:
            alert("Se te agrego el  Buzo de frisa");
            break;
        case 2:
            alert("Se te agrego la Remera de algodon");
            break;
        case 3:
            alert("Se te agrego el Jean Elastizad");
            break;
        case 3:
            alert("Se te agrego la Remera manga larga");
            break;   
        default:
            alert("Este producto no existe");
            break;

    }
    
    mensaje = prompt("Quiere comprar otro producto mas ? (s-si)");

}

alert ("Precio total a pagar$"+ total)  

function incrementarTotal (precio){
    total = total + precio;
    alert("precio a pagar hasta el momento $" +total);
}









