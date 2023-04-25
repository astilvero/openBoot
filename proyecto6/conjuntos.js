//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
//Un nuevo Set con los nombres de tu familia
const familia=new Set()
const nombres=[{padre:'Homero',madre:'Maria',hermana:'Laura',yo:'Veronica'}]
familia.add(nombres)
console.log(familia.nombres)
//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add({padre:'Homero',madre:'Maria',hermana:'Laura',yo:'Veronica', yo:'Veronica'})
console.log(familia)
//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;
familia.add({padre:'Homero',madre:'Maria',hermana:'Laura',yo:'Veronica', yo:'Veronica',nombre:'Javascript'})
console.log(familia)