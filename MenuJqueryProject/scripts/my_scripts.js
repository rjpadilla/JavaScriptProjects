
$(document).ready(function(){
    var v = false;
    $("button#vegOn").click(function(){
        
        if(v == false){
            v = true;
            $f = $(".fish").parent().parent().detach();
            $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
            $(".meat").after("<li class='tofu'><em>Tofu</em></li>");
            $m = $(".meat").detach();
        }
    }); //end button
    $("button#restoreMe").click(function(){
        if(v == true){
            
            $(".menu_entrees li").first().before($f);
            $(".portobello").replaceWith("<li class = 'hamburger'>Hamburger</li>");
            $(".tofu").each(function(i){
                $(this).after($m[i]);
            });
            $(".tofu").remove();
            v = false;
        }
    }); //end button
}); //end document ready