//Check off to do by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//click on x to delete to do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
       $(this).remove(); 
    });
    event.stopImmediatePropagation();
});

$("input[type=text]").keypress(function(event){
    if(event.which === 13){
        //grabs nex text
        var todoText = $(this).val();
        $(this).val("");
        // new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus-square-o").click(function(){
    $("input[type=text]").fadeToggle();
});