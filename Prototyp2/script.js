"use strict";
window.addEventListener("load", init);
let crc2;
let canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#FF0000";
    crc2.fillRect(20, 20, 200, 200);
    canvas = document.getElementsByTagName("canvas")[1];
    crc2 = canvas.getContext("2d");
    crc2.fillStyle = "#FFFF00";
    crc2.fillRect(20, 20, 100, 100);
    document.getElementById("selected_color").addEventListener("click", test);
}
function test() {
    console.log("klappt");
    var x = document.getElementById("selected_color");
    console.log(x);
}
//# sourceMappingURL=script.js.map