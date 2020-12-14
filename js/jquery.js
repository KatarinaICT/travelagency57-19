$(document).ready(function(){
    $("#btn button").click(function(){
        $(".forma").removeClass("aktivan");
        $($(this).data("formular")).addClass("aktivan")
    })
})

$(window).load(function(){
    var tajmer = 10000;
setTimeout ("$('#com').html( $('#com2').html() );", tajmer );
    });