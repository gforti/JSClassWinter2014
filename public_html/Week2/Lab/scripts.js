/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function submitForm() {
    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    
    
    if ( fullname.value.length > 0 ) {
        fullname.className = "good";
        fullnameErr.innerHTML = "Ok!";
        fullnameErr.className = "valid";
    } else {
        fullname.className = "bad";
        fullnameErr.innerHTML = "Full name is not entered.";
        fullnameErr.className = "error";
    }
    
    
    
}

