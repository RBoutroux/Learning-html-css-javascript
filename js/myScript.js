function writeText(){
    document.write("This is my text");
}

function writeText2() {
    alert("This is my text");
}

function changeColor(aColor){
    var aRef= document.getElementById("mytext");
    if(aRef!==null){
        aRef.style.color = aColor;
    }
}

function changeColor(aRef, aColor){
    console.log(aRef.parentNode.style);
    if(aRef!==null){
        aRef.parentNode.style.color = aColor;
    }
}