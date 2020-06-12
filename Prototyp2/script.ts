window.addEventListener("load", init);
let crc2: CanvasRenderingContext2D;

let canvas: HTMLCanvasElement;
function init(): void {
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

function test(): void {
    console.log("klappt");
    var x: any = document.getElementById("selected_color");
    console.log(x);
}