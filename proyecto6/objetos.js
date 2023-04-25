//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const obj= {
     nombre: 'Veronica', 
     apellido: 'Gaitan',
     edad: '22',
     altura: '1.60',
     eresDesarrollador: true 
}

//Una variable que obtenga tu edad a partir del objeto anterior
const obtener='edad'
console.log(obj[obtener])
//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales 
//de tus dos mejores amig@s
const datosLista=[{
    nombre: 'Veronica', 
    apellido: 'Gaitan',
    edad: '22',
    altura: '1.60',
    eresDesarrollador: true },
    {nombre: 'David', 
    apellido: 'Garzon',
    edad: '24',
    altura: '1.80',
    eresDesarrollador: false },
    {nombre: 'Linda', 
    apellido: 'Lopez',
    edad: '23',
    altura: '1.70',
    eresDesarrollador: false} ]
    console.log(datosLista)

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
datosLista.sort((a,b)=>b.edad-a.edad)
console.log('Ordenado por edad',datosLista)