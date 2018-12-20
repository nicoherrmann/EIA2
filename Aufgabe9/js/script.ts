namespace A9 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        console.log(crc2);

        for (let i: number = 0; i < 500; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;            
            drawStar(x, y);
        }
    }

    function drawStar(_x: number, _y: number): void {
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
}