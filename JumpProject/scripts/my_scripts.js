

$(document).ready(function(){

    $(".guess_box").click(checkForCode);
    function getRandom(num){
        var my_num = Math.floor(Math.random()*num);
        return my_num;
    }
    var hideCode = function(){
        var numRand = getRandom(4);
        $(".guess_box").each(function(index,value){
            if(numRand == index){
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
    }
    hideCode();
    function checkForCode(){
        var discount;
        if($.contains(this, document.getElementById("has_discount")))
        {
            var my_num = getRandom(100);
            discount = "<p>Your Code: CODE" + my_num + "</p>";
        }else{
            discount = "<p>Sorry, no discount this time!</p>";
        }
        $(this).append(discount);
        $(".guess_box").each(function(){
            if($.contains(this, document.getElementById("has_discount"))){
                $(this).addClass("discount");
            }else{
                $(this).addClass("no_discount");
            }
            $(this).unbind();
        });
        $("#result").append(discount);
    }

    $(".guess_box").hover(
        function(){
            $(this).addClass("my_hover");
        },
        function(){
            $(this).removeClass("my_hover");
        }
    );


    // $(".guess_box").click(checkForCode);
    // function checkForCode(){
    //     var my_num = Math.floor((Math.random() * 5) + 5);
    //     var discount = "<p>Your Discount is " +my_num+"%</p>";
    //     $(this).append(discount);
       
    //     $(".guess_box").each(function(){
    //         $(this).unbind('click');
    //     });
    // }




    // $(".guess_box").click(function(){
    //     $(".guess_box p").remove();
    //     var discount = Math.floor((Math.random()*5) + 5);
    //     var discount_msg = "<p>Your Discount is " + discount +"%</p>";
    //     //alert(discount); //this pops up alert box
    //     $(this).append(discount_msg);

    //     //loop
    //     $(".guess_box").each(function(){
    //         $(this).unbind("click");
    //     });
        
    // });//end click function
});//end doc ready