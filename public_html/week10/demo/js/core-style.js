/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 Module.prototype.setStyle = function(prop, val){

    var setElemStyle = function(el) {
         el.style[prop] = val;
    };

     this.each(setElemStyle);

     return this;
  };
  
  
  Module.prototype.css = function(props){
    
        for ( var x in props) {
            this.setStyle(x,props[x]);
        }
    
      return this;
  };
  
    Module.prototype.fade = function(props){
        if ( this.timer === null)
        for ( var x in props) {
            this.setStyle(x,props[x]);
        }
    
      return this;
  };