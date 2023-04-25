//Crea un archivo llamado fechas.js que contenga las siguientes líneas
//La fecha de hoy
const fecha=new Date()
console.log(fecha)
//La fecha de tu nacimiento
const nacimiento=new Date('Febrero 1, 1991')
//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparacion=fecha.getTime()>nacimiento.getTime()
console.log(comparacion)
//Una variable que contenga el día de tu nacimiento
const dia=nacimiento.getDate()
console.log('día ',dia)
//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes=nacimiento.getMonth()
console.log('mes ',mes+1)
//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anio=nacimiento.getFullYear()
console.log('anio ',anio)