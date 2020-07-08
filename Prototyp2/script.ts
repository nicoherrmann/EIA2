window.addEventListener("load", init);
let crc2: CanvasRenderingContext2D;
let ctx: CanvasRenderingContext2D;
let eK1: CanvasRenderingContext2D;

let canvas: HTMLCanvasElement;
let canvas2: HTMLCanvasElement;
let canvas3: HTMLCanvasElement;

var komplementar: number = 0;
var monochrom: number = 0;

function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#F1970F";
    crc2.fillRect(0, 0, 200, 200);
    canvas2 = document.getElementsByTagName("canvas")[1];
    ctx = canvas2.getContext("2d");
    ctx.fillStyle = "#535353";
    ctx.fillRect(0, 0, 100, 100);
    //
    canvas3 = document.getElementsByTagName("canvas")[2];
    eK1 = canvas3.getContext("2d");
    eK1.fillStyle = "#FF00FF";
    eK1.fillRect(0, 0, 40, 40);
    eK1.fillStyle = "#FFFF0F";
    eK1.fillRect(0, 55, 40, 40);
    eK1.fillStyle = "#0FF0FF";
    eK1.fillRect(0, 110, 40, 40);
    eK1.fillStyle = "#0000FF";
    eK1.fillRect(0, 165, 40, 40);


    document.getElementById("extraKaro1").style.display = "none";

    document.getElementById("selected_color").addEventListener("input", FarbeAussen);
    document.getElementById("selected_color2").addEventListener("input", FarbeInnen);
    document.getElementById("komplementaer").addEventListener("click", switchkomp);
    document.getElementById("monochrom").addEventListener("click", switchmono);
}

function FarbeAussen(): void {
    console.log("klappt");
    var x: any = document.getElementById("selected_color");
    console.log(x.value);
    
    crc2.clearRect(0, 0, 200, 200);
    crc2.fillStyle = x.value;
    crc2.fillRect(0, 0, 200, 200);

    console.log("Farbe:" + x.value + "Invert:" + invertColor(x.value));
}

function FarbeInnen(): void {
    console.log("klappt");
    var x: any = document.getElementById("selected_color2");
    console.log(x.value);
    
    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = x.value;
    ctx.fillRect(0, 0, 100, 100);
}

function padZero(str: any, len: any = 2): string {
    len = len || 2;
    var zeros = new Array(len).join("0");
    return (zeros + str).slice(-len);
}

function invertColor(hex: string): string {
    if (hex.indexOf("#") === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}



function komplementaraussen(): void {
    console.log("klappt");
    var x: any = document.getElementById("selected_color");
    console.log(x.value);
    var color: string = invertColor(x.value);
    console.log(color);
    crc2.clearRect(0, 0, 200, 200);
    crc2.fillStyle = x.value;
    crc2.fillRect(0, 0, 200, 200);

    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 100, 100);

}

function komplementarinnen(): void {
    console.log("klappt");
    var x: any = document.getElementById("selected_color2");
    console.log(x.value);
    var color: string = invertColor(x.value);
    console.log(color);
    crc2.clearRect(0, 0, 200, 200);
    crc2.fillStyle = color;
    crc2.fillRect(0, 0, 200, 200);

    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = x.value;
    ctx.fillRect(0, 0, 100, 100);

}

function switchkomp(): void {
    document.getElementById("extraKaro1").style.display = "none";
    if (komplementar == 0) {
        document.getElementById("extraKaro1").style.display = "none";
        document.getElementById("canvas2").style.display = "initial";
        document.getElementById("selected_color2").style.display = "initial";
        
        document.getElementById("selected_color").removeEventListener("input", FarbeAussen);
        document.getElementById("selected_color2").removeEventListener("input", FarbeInnen);
        document.getElementById("selected_color").addEventListener("input", komplementaraussen);
        document.getElementById("selected_color2").addEventListener("input", komplementarinnen);
        document.getElementById("selected_color").removeEventListener("input", monochromaussen);
        komplementar = 1;
        monochrom = 0;
        console.log("komp1");
        document.getElementById("komplementaer").style.backgroundColor = "#1b1b1b";
        document.getElementById("monochrom").style.backgroundColor = "#cccccc";
    }
    else if (komplementar == 1) {
        document.getElementById("extraKaro1").style.display = "none";
        document.getElementById("canvas2").style.display = "initial";
        document.getElementById("selected_color2").style.display = "initial";
        document.getElementById("selected_color").addEventListener("input", FarbeAussen);
        document.getElementById("selected_color2").addEventListener("input", FarbeInnen);
        document.getElementById("selected_color").removeEventListener("input", komplementaraussen);
        document.getElementById("selected_color2").removeEventListener("input", komplementarinnen);
        document.getElementById("selected_color").removeEventListener("input", monochromaussen);
        komplementar = 0;
        monochrom = 0;
        console.log("komp0");
        document.getElementById("komplementaer").style.backgroundColor = "#cccccc";
        document.getElementById("monochrom").style.backgroundColor = "#cccccc";
    }
    console.log("komp");
}

function switchmono(): void {
    
    if (monochrom == 0) {
        document.getElementById("extraKaro1").style.display = "initial";
        document.getElementById("canvas2").style.display = "none";
        document.getElementById("selected_color2").style.display = "none";
        
        document.getElementById("selected_color").removeEventListener("input", FarbeAussen);
        document.getElementById("selected_color2").removeEventListener("input", FarbeInnen);
        document.getElementById("selected_color").removeEventListener("input", komplementaraussen);
        document.getElementById("selected_color2").removeEventListener("input", komplementarinnen);
        document.getElementById("selected_color").addEventListener("input", monochromaussen);
        monochrom = 1;
        komplementar = 0;
        console.log("mono1");
        document.getElementById("monochrom").style.backgroundColor = "#1b1b1b";
        document.getElementById("komplementaer").style.backgroundColor = "#cccccc";
    }
    else if (monochrom == 1) {
        document.getElementById("extraKaro1").style.display = "none";
        document.getElementById("canvas2").style.display = "initial";
        document.getElementById("selected_color2").style.display = "initial";
        document.getElementById("selected_color").addEventListener("input", FarbeAussen);
        document.getElementById("selected_color2").addEventListener("input", FarbeInnen);
        document.getElementById("selected_color").removeEventListener("input", komplementaraussen);
        document.getElementById("selected_color2").removeEventListener("input", komplementarinnen);
        document.getElementById("selected_color").removeEventListener("input", monochromaussen);
        monochrom = 0;
        komplementar = 0;
        console.log("mono0");
        document.getElementById("monochrom").style.backgroundColor = "#cccccc";
        document.getElementById("komplementaer").style.backgroundColor = "#cccccc";
    }
    console.log("mono");
}

function monochromaussen(): void {
    var x: any = document.getElementById("selected_color");
    console.log(x.value);
    
    crc2.clearRect(0, 0, 200, 200);
    crc2.fillStyle = x.value;
    crc2.fillRect(0, 0, 200, 200);
    console.log("Farbe:" + x.value + "Invert:" + invertColor(x.value));
}

