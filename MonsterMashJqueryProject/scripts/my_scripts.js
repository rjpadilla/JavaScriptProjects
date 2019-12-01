$(document).ready(function () {
    var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
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
