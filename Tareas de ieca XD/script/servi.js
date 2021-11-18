function cambiar_imagen(){
 var select_servicio = document.getElementById("select_servicio");
 console.log(select_servicio.value);
 if("manufactura"== select_servicio.value) {document.getElementById("div_contenedor_imagenes").innerHTML ='<img src="images spe/manufactura 2.png" width="750px" alt="">'}
 if("selecciona"== select_servicio.value) {document.getElementById("div_contenedor_imagenes").innerHTML ='<img src="images spe/servicios.png" width="750px" alt="">'}
 if("tecnologias de la informacion"== select_servicio.value) {document.getElementById("div_contenedor_imagenes").innerHTML ='<img src="images spe/ti 2.png" width="750px" alt="">'}
 if("comercio"== select_servicio.value) {document.getElementById("div_contenedor_imagenes").innerHTML ='<img src="images spe/comercio 2.png" width="750px" alt="">'}
 
}
