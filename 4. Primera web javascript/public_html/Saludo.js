/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ejecuta(){
  /*el documento detecta las etiquetas con el nombre py retorna un array con todos
   * ellos, escojo el primero y al hacer click en el ejecuta saludo */
  /*elemento.metodod(nombre)[posicion].evento=funcion*/
  document.getElementsByTagName("p")[0].onclick=saludo;
  
}

function saludo(){
  alert ("¡¡¡¡FBI alto hijo de tu pota madreee >:v!!!");
}

/*Evento de ventana: Hace q la funcion saludo sea lo primero en llamarse al abrir
 *la pagina*/
window.onload=saludo;