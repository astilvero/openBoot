const boton=document.querySelector("#btn")
console.log(boton)

boton.addEventListener('click',()=>{
    alert("click en el botón")
})

$(()=>{
    $("#elbtn").click(()=>{
        console.log("Hola estoy utilizando jQuery")
    })
})
