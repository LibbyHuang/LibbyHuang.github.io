var initial = function() {
    $("#header").show();
    $("#magic-1").hide();
    $("#magic-2").hide();
    $("#foresee").hide();
    $("#pre").hide();
    $("#magic-3-1").hide();
    $("#magic-3-2").hide();
    $("#f1").hide();
    $("#f2").hide();

}

$(document).ready(function() {
    initial();
})



$("#start").click(function() {
    $("#header").hide();
    $("#magic-1").hide();
    $("#magic-2").hide();
    $("#foresee").show();
    $("#pre").hide();
    $("#magic-3-1").hide();
    $("#magic-3-2").hide();
    $("#f1").hide();
    $("#f2").hide();
})

$("#next-1").click(function() {
    $("#header").hide();
    $("#magic-2").hide();
    $("#magic-1").show();
    $("#foresee").hide();
    $("#pre").hide();
    $("#magic-3-1").hide();
    $("#magic-3-2").hide();
    $("#f1").hide();
    $("#f2").hide();

})

$("#next-2").click(function() {
    $("#header").hide();
    $("#magic-1").hide();
    $("#magic-2").show();
    $("#foresee").hide();
    $("#pre").hide();
    $("#magic-3-1").hide();
    $("#magic-3-2").hide();
    $("#f1").hide();
    $("#f2").hide();
})

$("#black").click(function() {
    $("#magic-3-1").show();
    $("#header").hide();
    $("#magic-1").hide();
    $("#magic-2").hide();
    $("#pre").hide();
    $("#magic-3-2").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#foresee").hide();

})

$("#red").click(function() {
    $("#magic-3-1").hide();
    $("#magic-3-2").show();
    $("#header").hide();
    $("#magic-1").hide();
    $("#magic-2").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#foresee").hide();
    $("#pre").hide();

})

$(".c1").click(function() {
    $("#magic-3-1").hide();
    $("#magic-3-2").hide();
    $("#header").hide();
    $("#magic-1").hide();
    $("#magic-2").hide();
    $("#f1").show();
    $("#f2").hide();
    $("#foresee").hide();
    $("#pre").hide();
})

$(".c2").click(function() {
    $("#magic-3-1").hide();
    $("#magic-3-2").hide();
    $("#header").hide();
    $("#magic-1").hide();
    $("#magic-2").hide();
    $("#f2").show();
    $("#f1").hide();
    $("#foresee").hide();
    $("#pre").hide();

})

$("#goback2").click(function() {
    $("#magic-3-2").hide();
    $("#magic-3-1").hide();
    $("#header").hide();
    $("#magic-1").hide();
    $("#magic-2").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#foresee").hide();
    $("#pre").show();

    alert("Click the card!!!");

})

$("#goback").click(function() {
    $("#pre").show();
    $("#magic-3-1").hide();
    $("#header").hide();
    $("#magic-1").hide();
    $("#magic-2").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#foresee").hide();
    $("#magic-3-2").hide();

    alert("Click the card!!!");

})