//Se necesitan variables globales como:
let marker, map;

function initMap(){
    //console.log("inicando maps")
    
    const posicion={
        lat: -25.363,
        lng: 131.044
    }

    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: posicion
    })

    //Marcador
    const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posicion Inicial"
    })
    //marker.setPosition({lat, lng})
    geoPosiciona()
}

function geoPosiciona(){
    if(navigator.geolocation){
    const geoLoc = navigator.geolocation
    const options={timeout:60000}
    const watchPos = geoLoc.watchPosition(centraMap, onError, options)
  
   } else{
        alert("Tu navegador no admite geolocalizacion")
    }
}

function centraMapa(position){
    const nuevaPos={
        lat: position.coords.latitud,
        lng: posotion.coords.longitud
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.log("Se ha producido un error y se ha gestionado")
    console.error(error)
}