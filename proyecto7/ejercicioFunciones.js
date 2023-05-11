//Una función sin parámetros que devuelva siempre "true"
function sinparametros(){    
        return true
    }
    
console.log(sinparametros())


//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const asincrono=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hola soy una promesa")
    },5000)
})

asincrono
.then(()=>console.log(asincrono))
.catch(()=>console.log("error"))

//Una función generadora de índices pares automáticos
function* another(i){
    yield i+2
}

function* indices(start=1, end=10){
    for(let i=start; i<=end; i++)
    yield i=i+1;
}

let s = indices();

for(let datos of s){
    console.log(datos)
}