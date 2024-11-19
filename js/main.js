

function simulador(){
    const interes1 = 0.008
    const interes2 = 0.013
    const interes3 = 0.017
    let total = 0
    let ganancias = 0
    const campoNombre = document.getElementById("nombres").value
    const campoTelefono = document.getElementById("telefono").value
    const campoEmail = document.getElementById("email").value
    const campoInversion = parseInt(document.getElementById("inversion").value)
    const campoTiempo = parseInt(document.getElementById("tiempo").value)
    const showTiempo = document.getElementById("tiempo-show")
    const showInterest = document.getElementById("interes-show")
    const showNombres = document.getElementById("nombres-show")
    const showEmail = document.getElementById("email-show")
    const showtotal = document.getElementById("total-show")
    const showGanancias = document.getElementById("ganancia-show")
    const Pre = document.getElementById("pre")
    const Post = document.getElementById("post")
    
    
    Post.classList.remove("disabled")
    Pre.classList.add("disabled")

    switch (campoTiempo){
        
        case 1:
            showTiempo.innerText = "12 meses"
            showInterest.innerText = "0.8%"
            ganancias = (campoInversion * interes1) * 12
            total = ganancias + campoInversion
            showtotal.innerText = total
            showGanancias.innerText = ganancias


            break;

        case 2: 
            showTiempo.innerText = "24 meses"
            showInterest.innerText = "1.3%"
            ganancias = (campoInversion * interes2) * 24
            total = ganancias + campoInversion
            showtotal.innerText = total
            showGanancias.innerText = ganancias               
            
            break;

        case 3:
            showTiempo.innerText = "36 meses"
            showInterest.innerText = "1.7%"
            ganancias = (campoInversion * interes3) * 36
            total = ganancias + campoInversion
            showtotal.innerText = total
            showGanancias.innerText = ganancias
            break;    
        default:
            break;


    }

    showNombres.innerText = campoNombre;
    showEmail.innerText = campoEmail

    


}

const button = document.getElementById("simulador-btn");
button.addEventListener("click", simulador); 

