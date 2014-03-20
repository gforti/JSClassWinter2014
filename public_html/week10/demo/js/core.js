/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 function Module(els){
    this.elements = [];
    this.timer;

     for (var i=0; i<els.length; i++) {

        var element = els[i];

        if (typeof element === 'string') {
          element = document.getElementById(element);
        }
        if (element) this.elements.push(element);
        element = null;
      }

      return this;
}


Module.prototype.each = function(fn){
     var i=  this.elements.length;

     while ( i-- ) {
         fn(this.elements[i]);
     }
     return this;
  };