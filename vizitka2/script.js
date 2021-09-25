var butt = document.getElementById("convert");
var inpt = document.getElementById("input");
var ress = document.getElementById("result");

var inpt2 = document.getElementById("input2");
var ress2 = document.getElementById("result2");

var inpt3 = document.getElementById("input3");
var ress3 = document.getElementById("result3");

function converter(){
    var res = inpt.value;
    ress.value = res;
}
function converter2(){
    var res2 = inpt2.value;
    ress2.value = res2;
}
function converter3(){
    var res3 = inpt3.value;
    ress3.value = res3;
}

butt.addEventListener("click", converter2);
butt.addEventListener("click", converter);
butt.addEventListener("click", converter3);