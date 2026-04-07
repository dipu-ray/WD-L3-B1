$(document).ready(function() {

    // Alert with Text
    $("#btn1").click(function() {
        alert($("#test").text());
    });

    // Alert with HTML
    $("#btn2").click(function() {
        alert($("#test").html());
    })
});