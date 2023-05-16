class Estudiante{

    constructor(nombre, asignaturas){
        this.nombre = nombre
        this.asignaturas = ['Javascript','HTML','CSS']
    }

    obtenDatos(){
        console.log(`estudiante: ${this.nombre} y este semestre cursara las siguiente asignaturas: ${this.asignaturas}`)
    }
}

class nuevaInstancia extends Estudiante{
    constructor(nombre){
        super(nombre)
    }
}


const nuevoEstudiante=new nuevaInstancia('Laila')
console.log(nuevoEstudiante)
nuevoEstudiante.obtenDatos()