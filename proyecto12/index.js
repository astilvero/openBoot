//Función que admita parametros num y devuelva una lista con esa cantidad de numeros de 
//la seucnecua de Fibonacci
function fibo(num){
    let numeros=[0,1]
    for (let i = 2; i < num; i++) {
        numeros[i] = numeros[i-2]+numeros[i-1];
    }
        return numeros
}

const datos=fibo(10)
console.log(datos)