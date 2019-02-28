$(".fortune").click(function(){
    var ansi=$(".q1").val();
    var ansu=$(".q2").val();
    var ansan=parseInt($(".q3").val());
    var ansoar=88 - ansu;
    var ansne=ansan + 1;
    $("p").text("You will live for at least " +ansoar+ " more years. In 2020 "+ansi+" will die down but will still have its community to keep it going, and you will have a chance to speak "+ansne+" languages.");
});