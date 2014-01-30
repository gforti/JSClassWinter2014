/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var userdata = {};

function showResults() {
    console.clear();
    console.log(userdata);
}

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);
