import './App.css'



function Mostrarholax(prompt) {
return(
<>
  <h1>Hola, {prompt.name}!</h1>
  <h1>¿De donde eres?</h1>
  <p>Soy de {prompt.pais}.</p>
  <h1>¿Qué edad tienes?</h1>
  <p>Tengo {prompt.edad} años</p>
</>
);
}

export default Mostrarholax


