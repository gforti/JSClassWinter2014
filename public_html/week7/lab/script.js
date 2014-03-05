
$("a").mouseover(function(){
   $(this).css('color', 'white').css('background-color', 'red').animate({"margin-top": "-5px"}, 100); 
}).mouseout(function(){
     $(this).animate({"margin-top": "5px", "color": "#000000", "background-color":"#FFFFFF"}, 100); 
});



$('.button-color-1 a').click(function(){
    $("#nav2,#nav3,#nav4").hide();
    deg = 0
     $("#nav1").show("slow");
});

$('.button-color-2 a').click(function(){
    $("#nav1,#nav3,#nav4").hide();
    deg = 0
     $("#nav2").show("slow");
});

$('.button-color-3 a').click(function(){
    $("#nav1,#nav2,#nav4").hide();
    deg = 0
     $("#nav3").show("slow");
});

$('.button-color-4 a').click(function(){
    $("#nav1,#nav2,#nav3").hide();
    deg = 0
     $("#nav4").show("slow");
});



var deg = 0;
 
 function rotateObj(){
    if (deg == 360) deg = 0;
     deg++;
    $("#nav1,#nav2,#nav3,#nav4").css({ WebkitTransform: 'rotate(' + deg + 'deg)'});
     timer = setTimeout(rotateObj,1);
 }
 
 
  
  var timer;
 
$(window).load(function(){
    $("#nav1,#nav2,#nav3,#nav4").addClass('contentBox').hide();
    $("#nav1").show();
    timer = setTimeout(rotateObj,25);
});

