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
  /*1º se crea l array con todas las posiciones y despues se le asigna el evento
   * a cada una dentro del ciclo for*/
  /*hace un arry de todos los elementos p y span*/
  var elementos= document.querySelectorAll("#principal p, span");
  for(var i=0; i<elementos.length; i++){
    
    elementos[i].onclick=saludo;
  }
}

function saludo(){
  alert("¡¡¡¡FBI alto hijo de tu pota madreee >:v!!!");
}

/*Evento de ventana: Hace q la funcion saludo sea lo primero en llamarse al abrir
 *la pagina*/
window.onload=ejecuta;