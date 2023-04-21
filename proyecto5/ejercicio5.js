//Crea un archivo JS que contenga las siguientes líneas
//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista=['leche', 'huevos','pasta','sal','carne']
//Modifica la lista de la compra y añádele "Aceite de Girasol"
lista.push('Aceite de Girasol')
console.log(lista)
//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista.pop('Aceite de Girasol')
console.log(lista)
//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
peliculas=[{
        titulo: 'John Wick 4',
        director: 'Chad Stahelski',
        fecha:'23-03-2023'
    },
    {
        titulo: 'Guardianes de la galaxia 3',
        director: 'James Gunn',
        fecha:'4-05-2023'
    },
    {
        titulo: 'Shazam Furia de los dioses',
        director: 'David F. Sandberg',
        fecha:'16-03-2023'
    }
];
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2023 (utilizando filter)
const filtro=peliculas.filter(e=>e.fecha > '01-01-2023')
console.log("Peliculas posteriores a enero de 2023",filtro)
//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores=peliculas.map(e=>e.director)
console.log('Directores', directores)
//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaPeliculas = peliculas.map(e=>e.titulo)
console.log(listaPeliculas)
//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const union=directores.concat('',listaPeliculas)
console.log(union)
//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const union2 = [...directores,...listaPeliculas]
console.log(union2)