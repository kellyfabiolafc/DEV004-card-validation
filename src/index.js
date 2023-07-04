import validator from './validator.js';
//Este código  utiliza el DOM (Document Object Model) para manipular elementos HTML.
const input = document.getElementById("cardnumber");
input.addEventListener("input", function() {
  if (!/^\d+$/.test(this.value)) {
    this.value = this.value.replace(/[^\d]+/g, ""); 
    alert("Solo puedes ingresar numeros");
  }
});


const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {//La función comprueba si el campo "cardnumber" está vacío. 
  const input = document.getElementById("cardnumber");
  if (input.value.trim().length === 0) {
    // El campo está vacío, se detiene el envío del formulario
    event.preventDefault();
    alert("El campo número de tarjeta no puede estar vacío");/*Si está vacío, se detiene el envío del formulario y 
    se muestra una alerta al usuario indicando que el campo no puede estar vacío.*/
  }
  else { 
    const valid = validator.isValid(document.getElementById("cardnumber").value);
    const maskify=validator.maskify(document.getElementById("cardnumber").value);
    const brand= validator.getBrand(document.getElementById("cardnumber").value);
    event.preventDefault();
    if (valid){  

      alert("Genial, el número de  tarjeta insertada  es correcta" )
      const elemento = document.querySelector("#resultadoFinal");
      const resultado = document.createElement("p");
      const franquicia = document.createElement("p");
      const enmascaramiento = document.createElement("p");

      resultado.textContent = "Tarjeta Valida";
      franquicia.textContent = "Franquicia: " + brand;
      enmascaramiento.textContent = maskify;

      elemento.appendChild(resultado);
      elemento.appendChild(franquicia);
      elemento.appendChild(enmascaramiento);
    }
    else {
      // Show error message in div#result
      alert( "Lo sentimos,intente con otro número de tarjeta" );
      const elemento = document.querySelector("#resultadoFinal");
      const resultado = document.createElement("p");
      const franquicia = document.createElement("p");
      const enmascaramiento = document.createElement("p");

      resultado.textContent = "Tarjeta Invalida";
      franquicia.textContent = "Franquicia: " + brand;
      enmascaramiento.textContent = maskify;

      elemento.appendChild(resultado);
      elemento.appendChild(franquicia);
      elemento.appendChild(enmascaramiento);
    }
  }
  //}
});

