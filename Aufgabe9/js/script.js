var A9;
(function (A9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        for (let i = 0; i < 500; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawStar(x, y);
        }
    }
    function drawStar(_x, _y) {
        crc2.fillStyle = "#FF9000";
        crc2.strokeStyle = "#ff0000";
        crc2.lineWidth = 3;
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y + 10);
        crc2.lineTo(_x, _y - 20);
        crc2.lineTo(_x + 20, _y + 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y - 10);
        crc2.lineTo(_x + 20, _y - 10);
        crc2.lineTo(_x, _y + 20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=script.js.map