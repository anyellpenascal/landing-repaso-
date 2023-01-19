function enviarFormulario() {
  let nombre = document.getElementById("nombre").value;

  let correo = document.getElementById("correo").value;

  let comentario = document.getElementById("comentario").value;

  let datos = {
    nombre: nombre,
    correo: correo,
    comentario: comentario,
  };

  let datosJson = JSON.stringify(datos);

  localStorage.getItem("datos", datosJson);


  alert(datosJson);
}
