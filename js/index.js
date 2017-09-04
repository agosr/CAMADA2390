do{
    var primerNumero = Number(prompt('ingresa un numero'), 0)
    var segundoNumero = Number(prompt('ingresa otro numero'), 0)   
}while(isNaN(primerNumero) && isNaN(segundoNumero))

var sumar = primerNumero + segundoNumero
var restar = primerNumero - segundoNumero
var multiplicar = primerNumero * segundoNumero
var dividir = primerNumero / segundoNumero

alert(sumar)
alert(restar)
alert(multiplicar)
alert(dividir)

