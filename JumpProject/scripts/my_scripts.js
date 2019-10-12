

$(document).ready(function(){
    $(".guess_box").click(function(){
        $(".guess_box p").remove();
        var discount = Math.floor((Math.random()*5) + 5);
        var discount_msg = "<p>Your Discount is " + discount +"%</p>";
        //alert(discount); //this pops up alert box
        $(this).append(discount_msg);

        //loop
        $(".guess_box").each(function(){
            $(this).unbind("click");
        });
        
    });//end click function
});//end doc ready