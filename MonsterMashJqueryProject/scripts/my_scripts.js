$(document).ready(function () {
    var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
    lightning_one(4000);
    lightning_two(5000);
    lightning_three(7000);
    $("#head").click(function () {
        if (headclix < 9) {
            $(this).animate({left:"-=367px"},500);
            headclix += 1;
        }
        else {
            $(this).animate({left:"0px"},500);
            headclix = 0;
        }
    });
    $("#eyes").click(function(){
        if(eyeclix < 9){
            $(this).animate({left:"-=367px"},500);
            eyeclix += 1;
        }
        else{
            $(this).animate({left:"0px"},500);
            eyeclix = 0;
        }
    });
    $("#nose").click(function(){
        if(noseclix < 9){
            $(this).animate({left:"-=367px"},500);
            noseclix += 1;
        }
        else{
            $(this).animate({left:"0px"},500);
            noseclix = 0;
        }
    });
    $("#mouth").click(function(){
        if(mouthclix < 9){
            $(this).animate({left:"-=367px"},500);
            mouthclix += 1;
        }
        else{
            $(this).animate({left:"0px"},500);
            mouthclix = 0;
        }
    });

    
});

goLightning();
window.onblur = stopLightning;
window.onfocus = goLightning;
var int1, int2, int3;
function goLightning(){
    int1 = setInterval(function(){
        lightning_one();
    },
    4000
    );
    int2 = setInterval(function(){
        lightning_two();
    },
    5000
    );
    int3 = setInterval(function(){
        lightning_three();
    },
    7000
    );
}

function stopLightning(){
    window.clearInterval(int1);
    window.clearInterval(int2);
    window.clearInterval(int3);
}

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

