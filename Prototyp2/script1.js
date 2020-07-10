"use strict";
window.addEventListener("load", init);
let crc2;
let ctx;
let eK1;
let canvas;
let canvas2;
let canvas3;
var komplementar = 0;
var monochrom = 0;
let innerColor;
let outerColor = "#F1970F";
function init() {
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
    monochromaussen();
    document.getElementById("extraKaro1").style.display = "none";
    document.getElementById("selected_color").addEventListener("input", FarbeAussen);
    document.getElementById("selected_color2").addEventListener("input", FarbeInnen);
    document.getElementById("komplementaer").addEventListener("click", switchkomp);
    document.getElementById("monochrom").addEventListener("click", switchmono);
    document.getElementById("canvas").style.animation = "init1 3s 1 ease";
    document.getElementById("canvas2").style.animation = "init2 4s 1";
    document.getElementById("komplementaer").style.animation = "init3 4s 1";
    document.getElementById("monochrom").style.animation = "init4 4s 1";
    setTimeout(function () { document.getElementById("komplementaer").style.animation = ""; }, 4000);
    setTimeout(function () { document.getElementById("monochrom").style.animation = ""; }, 4000);
}
function FarbeAussen() {
    console.log("außen");
    var x = document.getElementById("selected_color");
    outerColor = x.value;
    monochromaussen();
    crc2.clearRect(0, 0, 200, 200);
    crc2.fillStyle = x.value;
    crc2.fillRect(0, 0, 200, 200);
}
function FarbeInnen() {
    console.log("innen");
    monochromaussen();
    var x = document.getElementById("selected_color2");
    innerColor = x.value;
    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = x.value;
    ctx.fillRect(0, 0, 100, 100);
}
function padZero(str, len = 2) {
    len = len || 2;
    var zeros = new Array(len).join("0");
    return (zeros + str).slice(-len);
}
function invertColor(hex) {
    if (hex.indexOf("#") === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error("Invalid HEX color.");
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16), g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16), b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}
function komplementaraussen() {
    console.log("kompAußen");
    var x = document.getElementById("selected_color");
    outerColor = x.value;
    var color = invertColor(x.value);
    innerColor = color;
    monochromaussen();
    crc2.clearRect(0, 0, 200, 200);
    crc2.fillStyle = x.value;
    crc2.fillRect(0, 0, 200, 200);
    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 100, 100);
    console.log(outerColor, innerColor);
}
function komplementarinnen() {
    console.log("kompInnen");
    var x = document.getElementById("selected_color2");
    innerColor = x.value;
    var color = invertColor(x.value);
    outerColor = color;
    monochromaussen();
    crc2.clearRect(0, 0, 200, 200);
    crc2.fillStyle = color;
    crc2.fillRect(0, 0, 200, 200);
    ctx.clearRect(0, 0, 100, 100);
    ctx.fillStyle = x.value;
    ctx.fillRect(0, 0, 100, 100);
    console.log(outerColor);
}
function switchkomp() {
    if (komplementar == 0) {
        document.getElementById("extraKaro1").style.display = "none";
        document.getElementById("canvas").style.animation = "eckeAbrunden 2s 1";
        document.getElementById("canvas2").style.animation = "eckeAbrunden2 2s 1";
        setTimeout(function () { document.getElementById("canvas").style.animation = ""; }, 2000);
        setTimeout(function () { document.getElementById("canvas2").style.animation = ""; }, 2000);
        document.getElementById("extraKaro1").style.display = "none";
        document.getElementById("canvas2").style.display = "block";
        document.getElementById("selected_color2").style.display = "block";
        document.getElementById("selected_color").removeEventListener("input", FarbeAussen);
        document.getElementById("selected_color2").removeEventListener("input", FarbeInnen);
        document.getElementById("selected_color").addEventListener("input", komplementaraussen);
        document.getElementById("selected_color2").addEventListener("input", komplementarinnen);
        document.getElementById("selected_color").removeEventListener("input", monochromaussen);
        komplementar = 1;
        monochrom = 0;
        document.getElementById("komplementaer").style.backgroundColor = "#4D4D4D";
        document.getElementById("komplementaer").style.color = "#ffffff";
        document.getElementById("monochrom").style.backgroundColor = "#b1b1b1";
        document.getElementById("komplementaer").classList.remove("hover");
        document.getElementById("komplementaer").addEventListener("mouseout", function () { document.getElementById("komplementaer").classList.add("hover"); });
    }
    else if (komplementar == 1) {
        document.getElementById("extraKaro1").style.display = "none";
        document.getElementById("canvas").style.animation = "home1 2s 1";
        document.getElementById("canvas2").style.animation = "home2 2s 1";
        setTimeout(function () { document.getElementById("canvas").style.animation = ""; }, 2000);
        setTimeout(function () { document.getElementById("canvas2").style.animation = ""; }, 2000);
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
        document.getElementById("komplementaer").style.backgroundColor = "#b1b1b1";
        document.getElementById("komplementaer").style.color = "#383838";
        document.getElementById("monochrom").style.backgroundColor = "#b1b1b1";
        document.getElementById("komplementaer").classList.remove("hover");
        document.getElementById("komplementaer").addEventListener("mouseout", function () { document.getElementById("komplementaer").classList.add("hover"); });
    }
}
function switchmono() {
    if (monochrom == 0) {
        document.getElementById("canvas").style.animation = "eckeAbrunden 2s 1";
        document.getElementById("extraKaro1").style.animation = "eckeAbrunden3 2s 1";
        document.getElementById("canvas2").style.animation = "eckeAbrunden2 2s 1";
        setTimeout(function () { document.getElementById("canvas").style.animation = ""; }, 2000);
        setTimeout(function () { document.getElementById("extraKaro1").style.animation = ""; }, 2000);
        setTimeout(function () { document.getElementById("canvas2").style.animation = ""; }, 2000);
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
        document.getElementById("monochrom").style.backgroundColor = "#4D4D4D";
        document.getElementById("monochrom").style.color = "#ffffff";
        document.getElementById("komplementaer").style.backgroundColor = "#b1b1b1";
        document.getElementById("monochrom").classList.remove("hover");
        document.getElementById("monochrom").addEventListener("mouseout", function () { document.getElementById("monochrom").classList.add("hover"); });
    }
    else if (monochrom == 1) {
        document.getElementById("extraKaro1").style.animation = "eckeAbrunden4 2s 1";
        document.getElementById("canvas").style.animation = "home1 2s 1";
        document.getElementById("canvas2").style.animation = "home2 2s 1";
        setTimeout(function () { document.getElementById("canvas").style.animation = ""; }, 2000);
        setTimeout(function () { document.getElementById("canvas2").style.animation = ""; }, 2000);
        setTimeout(function () { document.getElementById("extraKaro1").style.animation = ""; document.getElementById("extraKaro1").style.display = "none"; }, 2000);
        document.getElementById("canvas2").style.display = "initial";
        document.getElementById("selected_color2").style.display = "initial";
        document.getElementById("selected_color").addEventListener("input", FarbeAussen);
        document.getElementById("selected_color2").addEventListener("input", FarbeInnen);
        document.getElementById("selected_color").removeEventListener("input", komplementaraussen);
        document.getElementById("selected_color2").removeEventListener("input", komplementarinnen);
        document.getElementById("selected_color").removeEventListener("input", monochromaussen);
        monochrom = 0;
        komplementar = 0;
        document.getElementById("monochrom").style.backgroundColor = "#b1b1b1";
        document.getElementById("monochrom").style.color = "#383838";
        document.getElementById("komplementaer").style.backgroundColor = "#b1b1b1";
        document.getElementById("monochrom").classList.remove("hover");
        document.getElementById("monochrom").addEventListener("mouseout", function () { document.getElementById("monochrom").classList.add("hover"); });
    }
}
let l = 0;
function monochromaussen() {
    var x = outerColor;
    console.log(outerColor);
    if (monochrom == 1) {
        x = document.getElementById("selected_color").value;
    }
    crc2.clearRect(0, 0, 200, 200);
    crc2.fillStyle = x;
    crc2.fillRect(0, 0, 200, 200);
    let HSL = hexToHSL(x);
    let random1 = 0;
    let random2 = 0;
    let random3 = 0;
    let random4 = 0;
    if (l <= 20) {
        random1 = random20(20, 20);
        random2 = random20(20, 40);
        random3 = random20(20, 60);
        random4 = random20(20, 80);
    }
    else if (l > 20 && l <= 40) {
        random1 = random20(20, 0);
        random2 = random20(20, 40);
        random3 = random20(20, 60);
        random4 = random20(20, 80);
    }
    else if (l > 40 && l <= 60) {
        random1 = random20(20, 0);
        random2 = random20(20, 20);
        random3 = random20(20, 60);
        random4 = random20(20, 80);
    }
    else if (l > 60 && l <= 80) {
        random1 = random20(20, 0);
        random2 = random20(20, 20);
        random3 = random20(20, 40);
        random4 = random20(20, 80);
    }
    else if (l > 80 && l <= 100) {
        random1 = random20(20, 0);
        random2 = random20(20, 20);
        random3 = random20(20, 40);
        random4 = random20(20, 60);
    }
    else {
        console.log("else???");
    }
    canvas3 = document.getElementsByTagName("canvas")[2];
    eK1 = canvas3.getContext("2d");
    eK1.fillStyle = hexToHSL2(x, random1);
    eK1.fillRect(0, 0, 40, 40);
    eK1.fillStyle = hexToHSL2(x, random2);
    eK1.fillRect(0, 55, 40, 40);
    eK1.fillStyle = hexToHSL2(x, random3);
    eK1.fillRect(0, 110, 40, 40);
    eK1.fillStyle = hexToHSL2(x, random4);
    eK1.fillRect(0, 165, 40, 40);
}
function random20(multi, min) {
    let random;
    random = Math.floor(Math.random() * multi) + min;
    return random;
}
function hexToHSL(H) {
    l = 0;
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    }
    else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0;
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return "hsl(" + h + "," + s + "%," + l + "%)";
}
function hexToHSL2(H, l2) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    }
    else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return "hsl(" + h + "," + s + "%," + l2 + "%)";
}
//# sourceMappingURL=script1.js.map