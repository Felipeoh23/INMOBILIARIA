//Letrero movil//
let app = document.querySelector('#typewriter');


let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});


typewriter
  .pauseFor(2500) 
  .typeString('ARKHAM PROPERTIES') 
  .pauseFor(200) 
  .deleteChars(10) 
  .pauseFor(1000) 
  .start(); 



let btnVenta = document.querySelector("btn-venta");
  let btnAlquiler = document.querySelector("btn-alquiler")

   // Evento de galeria que no funciono ;) Venta Alquiler//
   btnVenta.addEventListener("click", () => mostrarGaleria("venta"));
   btnAlquiler.addEventListener("click", () => mostrarGaleria("alquiler"));


  // Contenido de la galería 
  let galeriaContenido = {
    venta: [
      { imagen: "imagen1", descripcion: "Descripción de la imagen 1" },
      { imagen: "imagen2", descripcion: "Descripción de la imagen 2" },
      { imagen: "imagen3", descripcion: "Descripción de la imagen 3" },
      { imagen: "imagen4", descripcion: "Descripción de la imagen 4" },
      { imagen: "imagen5", descripcion: "Descripción de la imagen 5" },
      { imagen: "imagen6", descripcion: "Descripción de la imagen 6" },
      { imagen: "imagen7", descripcion: "Descripción de la imagen 7" },
      { imagen: "imagen8", descripcion: "Descripción de la imagen 8" },
      
    ],
    alquiler: [
      { imagen: "imagen9", descripcion: "Descripción de la imagen 9" },
      { imagen: "imagen10", descripcion: "Descripción de la imagen 10" },
      { imagen: "imagen11", descripcion: "Descripción de la imagen 11" },
      { imagen: "imagen12", descripcion: "Descripción de la imagen 12" },
      { imagen: "imagen13", descripcion: "Descripción de la imagen 13" },
      { imagen: "imagen14", descripcion: "Descripción de la imagen 14" },
      { imagen: "imagen15", descripcion: "Descripción de la imagen 15" },
      { imagen: "imagen16", descripcion: "Descripción de la imagen 16" },
      
    ]
  };


  // Función para mostrar la galería cuando se hace clic en un botón
  function mostrarGaleria(tipo) {
    let galeria = document.querySelector("galeria");
    galeria.innerHTML = ""; // Limpiar contenido previo de la galería

    galeriaContenido[tipo].forEach(item => {
      let imagen = document.createElement("img");
      imagen.src = item.imagen;
      imagen.alt = item.descripcion;

      let descripcion = document.createElement("p");
      descripcion.textContent = item.descripcion;

      galeria.appendChild(imagen);
      galeria.appendChild(descripcion);
    });
  }

imagen1.addEventListener("click", function() {
    mostrarInformacion(imagen1);
});

imagen2.addEventListener("click", function() {
    mostrarInformacion(imagen2);
});

imagen3.addEventListener("click", function() {
    mostrarInformacion(imagen3);
});

imagen4.addEventListener("click", function() {
    mostrarInformacion(imagen4);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen5);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen6);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen7);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen8);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen9);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen10);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen11);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen12);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen13);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen14);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen15);
});

imagen4.addEventListener("click", function() {
  mostrarInformacion(imagen16);
});



 
//formulario Botones Registrarse e Iniciar sesion

function mostrarFormulario(idFormulario) {
    
    var formularios = document.querySelectorAll('.formulario');
    for (var i = 0; i < formularios.length; i++) {
        formularios[i].style.display = 'none';
    }

  
    var formulario = document.querySelector('#' + idFormulario); 
    formulario.style.display = 'block';
}

function cancelarInicioSesion() {
    var formularioIniciarSesion = document.querySelector('#formularioIniciarSesion'); 
    formularioIniciarSesion.style.display = 'none';
}


//BOTON CALENDARIO//
//en internet dice que se usa el evento DOMContentLoaded o libreriass//
/*
 document.addEventListener("DOMContentLoaded", function() {
  // BOTON
  let openCalendarBtn = document.querySelector("abrir-calendar-btn");
  let calendarContainer = document.querySelector("calendar-container");

  
  
  openCalendarBtn.addEventListener("click", function() {
    // OCULTAR
    if (calendarContainer.classList.contains("d-block")) {
      calendarContainer.classList.remove("d-block");
      calendarContainer.classList.add("d-none");
    } else {
      //MOSTRAR
      calendarContainer.classList.remove("d-none");
      calendarContainer.classList.add("d-block");
    }
    
  });
  
});
*/



