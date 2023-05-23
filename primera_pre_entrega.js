function saludoUsuario(){
let nombreUsuario = prompt("Ingrese su nombre");
alert("Bienvenido/a " + nombreUsuario);
while (nombreUsuario == "") {
  alert("Nombre Incorrecto");
  nombreUsuario = prompt("Ingrese su nombre");
}
}
saludoUsuario()
let mensaje = prompt("¿Deseas comprar algún producto? (s-si)");
let total = 0;

while (mensaje.toLowerCase() == "s") {
  let producto = prompt(
    "1 - Buzo de frisa $4000\n2 - Remera de algodón $2500\n3 - Jean Elastizado $5000\n4 - Remera manga larga $3000\n5 - Campera de frisa $6000"
  );
  switch (producto) {
    case "1":
      alert("Se te agregó el Buzo de frisa");
      incrementarTotal(4000);
      break;
    case "2":
      alert("Se te agregó la Remera de algodón");
      incrementarTotal(2500);
      break;
    case "3":
      alert("Se te agregó el Jean Elastizado");
      incrementarTotal(5000);
      break;
    case "4":
      alert("Se te agregó la Remera manga larga");
      incrementarTotal(3000);
      break;
    case "5":
      alert("Se te agregó la Campera de frisa");
      incrementarTotal(6000);
      break;
    default:
      alert("Este producto no existe");
      break;
  }

  mensaje = prompt("¿Quieres comprar otro producto más? (s-si)");
}

alert("Precio total a pagar: $" + total);

function incrementarTotal(precio) {
  total = total + precio;
  alert("Precio a pagar hasta el momento: $" + total);
}








