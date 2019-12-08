$(document).ready(function () {
    var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
    lightning_one(4000);
    lightning_two(5000);
    lightning_three(7000);
    $("#head").click(function () {
        if (headclix < 9) {
            headclix += 1;
        }
        else {
            headclix = 0;
        }
    });
    $("#eyes").click(function(){
        if(eyeclix < 9){
            eyeclix += 1;
        }
        else{
            eyeclix = 0;
        }
    });
    $("#nose").click(function(){
        if(noseclix < 9){
            noseclix += 1;
        }
        else{
            noseclix = 0;
        }
    });
    $("#mouth").click(function(){
        if(mouthclix < 9){
            mouthclix += 1;
        }
        else{
            mouthclix = 0;
        }
    });

    
});

function lightning_one(t){
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout("lightning_one()",t);
};
function lightning_two(t){
    $("#container #lightning2").fadeIn("500").fadeOut("500");
    setTimeout("lightning_two()", t);
};
function lightning_three(t){
    $("#container #lightning3").fadeIn("1000").fadeOut("1000");
    setTimeout("lightning_three()", t);
};

