let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('ARKHAM PROPERTIES')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  
    
    var imagen1 = document.getElementById("imagen1");
    var imagen2 = document.getElementById("imagen2");
    var imagen3 = document.getElementById("imagen3");
    var imagen4 = document.getElementById("imagen4");

    
    function mostrarInformacion(imagen) {
      var habitaciones = imagen.getAttribute("data-habitaciones");
      var banos = imagen.getAttribute("data-banos");
      var area = imagen.getAttribute("data-area");

      alert("Habitaciones: " + habitaciones + "\nBaños: " + banos + "\nÁrea: " + area);
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

