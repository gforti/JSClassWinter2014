/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function noSpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z]+/;
        return alphaRegex.test(str);			
}


function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}



function submitform() {
			
        var fname = document.getElementById('fname');

        if ( !fname.value.length ) {
                console.log("Fname needs a length");
        } else if ( noSpaceAlphaValidate( fname.value ) == false ) {
                console.log("Fname needs Alpha chars");
        } else {
                console.log("Fname is good");
        }

}