//Una variable que contenga tu altura en centímetros (entero)
let altura=1.62
console.log(parseInt(altura*100))
//Una variable que contenga tu altura en metros (número de coma flotante)
let altura2=162
console.log(parseFloat(altura2/100))
//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso=60
console.log(parseFloat(peso)+' kg')
//Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(Math.ceil(altura2))

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(Math.floor(peso))

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 
//es igual al máximo valor que se puede obtener en Javascript
texto1='Javascript'+1
texto2='Javascript'
if(texto1.length==texto2.length){
    console.log('Es igual entre estos dos')
}else{
    console.log('Es diferente, Javascript+1: '+texto1.length)
    console.log('Javascript:'+texto2.length)
}