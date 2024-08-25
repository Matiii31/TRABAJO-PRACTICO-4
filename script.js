function enviar() {
    let nombre = document.getElementById("nombre").value

    let apellido = document.getElementById("apellido").value

    let edad = document.getElementById("edad").value

    let pais = document.getElementById("pais").value

    let posicion = document.getElementById("posicion").value

    if(posicion == 1){
        document.getElementById("mostrarnombre").innerHTML = nombre

        document.getElementById("mostrarapellido").innerHTML = apellido

        document.getElementById("mostraredad").innerHTML = edad

        document.getElementById("mostrarpais").innerHTML = pais

        document.getElementById("mostrarposicion").innerHTML = posicion
        }
    
    else if(posicion == 2){
        document.getElementById("mostrarnombre2").innerHTML = nombre

        document.getElementById("mostrarapellido2").innerHTML = apellido

        document.getElementById("mostraredad2").innerHTML = edad

        document.getElementById("mostrarpais2").innerHTML = pais

        document.getElementById("mostrarposicion2").innerHTML = posicion
        }

    else {
        document.getElementById("mostrarnombre3").innerHTML = nombre

        document.getElementById("mostrarapellido3").innerHTML = apellido

        document.getElementById("mostraredad3").innerHTML = edad

        document.getElementById("mostrarpais3").innerHTML = pais

        document.getElementById("mostrarposicion3").innerHTML = posicion
        }   
    }

