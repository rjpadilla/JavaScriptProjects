
$(document).ready(function(){
    var v = false;
    $("button#vegOn").click(function(){
        
        if(v == false){
            v = true;
            $("li.fish").detach();
        }
    }); //end button
    $("button#restoreMe").click(function(){
        if(v == true){
            v = false;
        }
    }); //end button
}); //end document ready