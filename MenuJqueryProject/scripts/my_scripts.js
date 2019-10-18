$(document).ready(function(){
    var v = f;
    $("button#vegOn").click(function(){
        if(v== false){
            v = true;
        }
    }); //end button
    $("button#restoreMe").click(function(){
        if(v == true){
            v = false;
        }
    }); //end button
}); //end document ready