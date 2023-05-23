///Replica el ejercicio completo del video
//Añade dos parrafos mas en cada sección
//Pon un icono papalera para eliminar parrafos
//Añade el codigo necesario para arrastrar el fragmento del puzzle a la papelera, este se elimine.

const parrafos=document.querySelectorAll(".parrafo")
const secciones=document.querySelectorAll(".seccion")
const papelera=document.getElementById("papelera")

//lo de papelera
parrafos.forEach(parrafo =>{
    parrafo.addEventListener('dragstart', event=> {dragStart(event)
    parrafo.classList.add("dragging")
    event.dataTransfer.setData("id",parrafo.id)  
    })

    parrafo.addEventListener("dragend", ()=>{
        parrafo.classList.remove("dragging")        
    })

})

secciones.forEach(seccion=>{
    seccion.addEventListener("dragover", event=>{
        event.preventDefault()
    })
    seccion.addEventListener("drop", event=>{
        //console.log("drop")
        const id_parrafo=event.dataTransfer.getData("id")
        const parrafo=document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)                
    })
})

papelera.addEventListener('dragover', event=>dragOver(event));
papelera.addEventListener('drop', event=>drop(event));

let draggedFragmento = null

const dragStart=event=>{
    draggedFragmento=event.target
}

const dragOver=event=>{
    event.preventDefault();
}

const drop = event =>{
    event.preventDefault();
    
    if(draggedFragmento){
    event.target.appendChild(draggedFragmento)
    draggedFragmento.style.position;
    draggedFragmento.style.left;
    draggedFragmento.style.top;
    draggedFragmento = null
    }
}

