$(document).ready(function(){
    $("#btn button").click(function(){
        $(".forma").removeClass("aktivan");
        $($(this).data("formular")).addClass("aktivan")
    })
})