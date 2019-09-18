/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ejecuta(){
  /*apunta al primer elemeto con el classname "importante"*/
  /*document.querySelector(".importante").onclick=saludo;*/
  
  /*apunta al ultimo elemento p con classname "importante" hijo del div con id
   * "principal"*/
  document.querySelector("#principal p:last-child").onclick=saludo;
}

function saludo(){
  alert("¡¡¡¡FBI alto hijo de tu pota madreee >:v!!!");
}

/*Evento de ventana: Hace q la funcion saludo sea lo primero en llamarse al abrir
 *la pagina*/
window.onload=ejecuta;