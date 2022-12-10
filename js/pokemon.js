function accion(pokemon){
  //alert(pokemon)
  if(pokemon === "excadrill"){
    document.getElementById("id_texto_inicial").style.color="yellow"
    document.getElementById("id_mensaje").innerText="Felicitaciones, has seleccionado la opción correcta"
    document.getElementById("id_imagen_inicial").src="/img/pcolor.jpg"
    document.getElementById("id_mensaje").style.display="block"

  }else{
    document.getElementById("id_texto_inicial").style.color="red"
    document.getElementById("id_mensaje").innerText="Pokémon incorrecto, la respuesta es: excadrill"
    document.getElementById("id_imagen_inicial").src="/img/pcolor.jpg"
    document.getElementById("id_mensaje").style.display="block"
  }
}

function reiniciar(){
  document.getElementById("id_texto_inicial").style.color="black"
  document.getElementById("id_imagen_inicial").src="/img/pnegro.jpg"
  document.getElementById("id_mensaje").style.display="none"
}


