function getparagraph1(){
    var inputs= [];
    for(var s= 1; s<=6; s++){
        inputs.push(document.getElementById("para1_input_box_"+ s).value);
    }
    document.getElementById("showparagraph1").innerHTML= inputs.join(". ");
}

function getparagraph2(){
    var inputs2= [];
    for(var y= 7; y<=12; y++){
        inputs2.push(document.getElementById("para2_input_box_"+ y).value);
    }
    document.getElementById("showparagraph2").innerHTML= inputs2.join(". ");
}