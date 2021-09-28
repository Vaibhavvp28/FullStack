jQuery(function(){
    $("#button").click(function(){
       $("#button").addClass("hide-me");
    });
});

$(document).ready(function(e){
    e.stopImmediatePropagation();
    $('.nav li').removeClass('active');//or $('.active').removeClass('active');
 });