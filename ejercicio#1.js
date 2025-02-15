/*ejercicio #1*/
const montoCompra = parseInt(promt ("Ingrese el monto de la compra: "))
let montoResultante = 0


if(montoCompra >= 100 && m,montoCompra < 200){
    montoResultante = (montoCompra * (montoCompra * 0.10))
} else if (montoCompra >= 200){
    montoResultante = (montoCompra - (montoCompra * 0.20))
} else {
    montoResultante = montoCompra
}

alert("el monto total a pagar es: " + montoResultante)
