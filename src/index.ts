import "./styles.css";
//let rotulo1 = document.getElementById("rotulo1");
//let rotulo2 = document.getElementById("rotulo2");
let btnValidar = document.getElementById("btnValidar");
let usuarioPP: string = document.getElementById("usuario");
let passwordPP: string = document.getElementById("password");

btnValidar.addEventListener("click", () => {
  let usuariook: string = "juan";
  let passwordok: string = "clave";
  let usuarioIngresado: string = usuarioPP.value;
  let passwordIngresado: string = passwordPP.value;
  if (usuariook === usuarioIngresado && passwordok === passwordIngresado) {
    console.log("Su usuario y password ingresados coinciden");
  } else {
    console.log("Alguno de los datos ingresados son incorrectos");
  }
});
