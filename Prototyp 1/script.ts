window.addEventListener("load", test);

function handleChange1(_event) {
    var string1: string ="background-color:rgb(";
    let target: any = _event.target;
    target.setAttribute("value", target.value);
    console.log("test");
    let attribute = document.getElementById("slider1").getAttribute("value");
    console.log(attribute);
    string1 += attribute + ",0,0);";
    document.getElementById("fieldset1").setAttribute("style", string1);
    colorges();
}

function handleChange2(_event) {
    var string2 ="background-color:rgb(0,";
    let target = _event.target;
    target.setAttribute("value", target.value);
    console.log("test");
    let attribute = document.getElementById("slider2").getAttribute("value");
    console.log(attribute);
    string2 += attribute + ",0);";
    document.getElementById("fieldset2").setAttribute("style", string2);
    colorges();
}

function handleChange3(_event) {
    var string2 ="background-color:rgb(0, 0, ";
    let target = _event.target;
    target.setAttribute("value", target.value);
    console.log("test");
    let attribute = document.getElementById("slider3").getAttribute("value");
    console.log(attribute);
    string2 += attribute + ");";
    document.getElementById("fieldset3").setAttribute("style", string2);
    colorges();
}

function test(){
    console.log("start");
    document.getElementById("slider1").addEventListener("change", handleChange1);
    document.getElementById("slider2").addEventListener("change", handleChange2);
    document.getElementById("slider3").addEventListener("change", handleChange3);
    neededColor();
    update();
}

function colorges(){
    var string ="background-color:rgb(";
    let attribute1 = document.getElementById("slider1").getAttribute("value");
    let attribute2 = document.getElementById("slider2").getAttribute("value");
    let attribute3 = document.getElementById("slider3").getAttribute("value");
    string += attribute1 +", ";
    string += attribute2 +", ";
    string += attribute3 +");";
    document.getElementById("cc").setAttribute("style", string);
}

function neededColor(){
    let colorr = Math.floor(Math.random()*255);
    let colorb = Math.floor(Math.random()*255);
    let colorg = Math.floor(Math.random()*255);
    var string ="background-color:rgb(" + colorr + " ," + colorb + " ," + colorg + ");";
    document.getElementById("neededcolor").setAttribute("style", string);
    document.getElementById("neededcolor").setAttribute("red", colorr);
    document.getElementById("neededcolor").setAttribute("blue", colorb);
    document.getElementById("neededcolor").setAttribute("green", colorg);
    console.log("needed red:" + colorr + "blue" + colorb + "green" + colorg)
}

function checkColor(){
    let colorTakenr = document.getElementById("slider1").getAttribute("value");
    let colorTakeng = document.getElementById("slider2").getAttribute("value");
    let colorTakenb = document.getElementById("slider3").getAttribute("value");
    let colorGivenr = document.getElementById("neededcolor").getAttribute("red");
    let colorGiveng = document.getElementById("neededcolor").getAttribute("green");
    let colorGivenb = document.getElementById("neededcolor").getAttribute("blue");
}

let timer: number = 10; //Sekunden
let frames1: number = 25; //Frames

function update(){
    window.setTimeout(update, 1000 / 25);
    console.log(frames1);
    if(timer == 0){
        endscreen();
    }

    if(frames1 == 0){
        timer--;
        frames1=26;
        document.getElementById("timer").innerText = timer.toString();
    }
    frames1--;
    
}

function endscreen(){
    score :Number;
    givenr = document.getElementById("neededcolor").getAttribute("red");
    givenb = document.getElementById("neededcolor").getAttribute("blue");
    giveng = document.getElementById("neededcolor").getAttribute("green");
    chosenr = document.getElementById("slider1").getAttribute("value");
    chosenb = document.getElementById("slider2").getAttribute("value");
    choseng = document.getElementById("slider3").getAttribute("value");
    score1 = givenr - chosenr;
    score2 = givenb - chosenb;
    score3 = giveng - choseng;
    score = "DifR:" + score1 + "DifB:" + score2 + "DifG:" + score3;
    document.getElementById("checker").style.display = "none";
    document.getElementById("score").innerText = score + "%";
    
}