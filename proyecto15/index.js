//Crea un objeto
let objeto={nombre:'Veronica', apellido: 'Gaitan'}

//Almacena el objeto con tu nombre y apellido en SessionStorage
sessionStorage.setItem('objeto', JSON.stringify({nombre:'Veronica', apellido: 'Gaitan'}))

//Almacena el objeto con tu nombre y apellido en LocalStorage
localStorage.setItem('objeto', JSON.stringify({nombre:'Veronica', apellido: 'Gaitan'}))
console.log(localStorage.getItem('objeto'))

function cookies(nombre, valor){
    let fecha=new Date(2023,4,19)
    fecha.setTime(fecha.getTime()+(2*60*1000))
    let expira=";expira="+fecha.toUTCString()
    document.cookie=nombre+"="+encodeURIComponent(JSON.stringify(valor))+expira+";path=/"
}

cookies("laCookie",objeto)
console.log(document.cookie)

