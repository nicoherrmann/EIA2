var A9;
(function (A9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        console.log("Canvas started");
        let num = parseInt(prompt("Anzahl Baeume?"));
        drawCanvas(num);
    }
    function drawCanvas(_num) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawBackground();
        drawSnow();
        drawSun();
        drawClouds();
        drawKid1(8);
        drawKid2(4);
        drawTree(_num);
    }
    function drawClouds() {
        let rndmAmount = Math.random() * Math.floor(8);
        for (let i = 0; i < rndmAmount; i++) {
            let randomX = Math.random() * crc2.canvas.width;
            let randomY = Math.random() * 60;
            crc2.strokeStyle = "#ffffff";
            crc2.fillStyle = "#ffffff";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc(randomX, randomY, 7, 0, 2 * Math.PI);
            crc2.arc(randomX + 10, randomY + 5, 7, 0, 2 * Math.PI);
            crc2.arc(randomX + 6, randomY - 4, 7, 0, 2 * Math.PI);
            crc2.closePath;
            crc2.stroke();
            crc2.fill();
        }
    }
    function drawSun() {
        let randomX = Math.random() * crc2.canvas.width;
        let randomY = Math.random() * Math.floor(60);
        crc2.fillStyle = "#fffa00";
        crc2.strokeStyle = "#fffa00";
        crc2.beginPath();
        crc2.moveTo(randomX, randomY);
        crc2.arc(randomX, randomY, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    let bgY;
    function drawTree(_amount) {
        let max = _amount;
        for (let i = 0; i < max; i++) {
            let _x = Math.random() * crc2.canvas.width;
            let _y = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width, bgY - 50);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(0, crc2.canvas.height);
            crc2.lineTo(0, bgY);
            crc2.quadraticCurveTo(crc2.canvas.width / 2 - 25, bgY - 40, crc2.canvas.width, bgY - 50);
            crc2.closePath();
            if (crc2.isPointInPath(_x, _y)) {
                crc2.fillStyle = "#76590A";
                crc2.strokeStyle = "#76590A";
                crc2.lineWidth = 2;
                crc2.beginPath();
                crc2.moveTo(_x + 5, _y + 10);
                crc2.lineTo(_x - 5, _y + 10);
                crc2.lineTo(_x - 5, _y - 20);
                crc2.lineTo(_x + 5, _y - 20);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
                crc2.fillStyle = "#1A950C";
                crc2.strokeStyle = "#1A950C";
                crc2.lineWidth = 2;
                crc2.beginPath();
                crc2.moveTo(_x - 15, _y - 21);
                crc2.lineTo(_x, _y - 45);
                crc2.lineTo(_x + 15, _y - 21);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
            }
            else {
                max++;
            }
        }
    }
    function drawBackground() {
        let width = crc2.canvas.width;
        bgY = Math.random() * Math.floor(200);
        bgY += 100;
        console.log(bgY);
        crc2.fillStyle = "#dcdcdc";
        crc2.strokeStyle = "#dcdcdc";
        crc2.beginPath();
        crc2.moveTo(width, bgY - 50);
        crc2.lineTo(width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.lineTo(0, bgY);
        crc2.quadraticCurveTo(width / 2 - 25, bgY - 40, width, bgY - 50);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#00ffff";
        crc2.strokeStyle = "#00ffff";
        crc2.beginPath();
        crc2.moveTo(width, bgY - 50);
        crc2.lineTo(width, 0);
        crc2.lineTo(0, 0);
        crc2.lineTo(0, bgY);
        crc2.quadraticCurveTo(width / 2 - 25, bgY - 40, width, bgY - 50);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSnow() {
        let rndmAmount = Math.random() * Math.floor(40);
        for (let i = 0; i < rndmAmount; i++) {
            let randomX = Math.random() * crc2.canvas.width;
            let randomY = Math.random() * crc2.canvas.height;
            crc2.strokeStyle = "#ffffff";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(randomX, randomY - 4);
            crc2.lineTo(randomX, randomY + 4);
            crc2.closePath;
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(randomX - 4, randomY);
            crc2.lineTo(randomX + 4, randomY);
            crc2.closePath;
            crc2.stroke();
        }
    }
    function drawKid2(_amount) {
        let max = _amount;
        for (let i = 0; i < max; i++) {
            let _x = Math.random() * crc2.canvas.width;
            let _y = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width, bgY - 50);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(0, crc2.canvas.height);
            crc2.lineTo(0, bgY);
            crc2.quadraticCurveTo(crc2.canvas.width / 2 - 25, bgY - 40, crc2.canvas.width, bgY - 50);
            crc2.closePath();
            if (crc2.isPointInPath(_x, _y)) {
                crc2.fillStyle = "#000000";
                crc2.strokeStyle = "#000000";
                crc2.lineWidth = 1;
                crc2.beginPath();
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x - 2, _y + 7);
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x + 1, _y + 8);
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x, _y - 15);
                crc2.arc(_x, _y - 15, 2, 0, 2 * Math.PI);
                crc2.moveTo(_x, _y - 10);
                crc2.lineTo(_x - 6, _y + 2);
                crc2.moveTo(_x, _y - 12);
                crc2.lineTo(_x - 7, _y - 2);
                crc2.moveTo(_x - 8, _y + 5);
                crc2.lineTo(_x - 28, _y + 7);
                crc2.moveTo(_x - 12, _y + 6);
                crc2.lineTo(_x - 15, _y + 12);
                crc2.moveTo(_x - 22, _y + 7);
                crc2.lineTo(_x - 25, _y + 14);
                crc2.moveTo(_x - 8, _y + 12);
                crc2.lineTo(_x - 30, _y + 15);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
            }
            else {
                max++;
            }
        }
    }
    function drawKid1(_amount) {
        let max = _amount;
        for (let i = 0; i < max; i++) {
            let _x = Math.random() * crc2.canvas.width;
            let _y = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width, bgY - 50);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(0, crc2.canvas.height);
            crc2.lineTo(0, bgY);
            crc2.quadraticCurveTo(crc2.canvas.width / 2 - 25, bgY - 40, crc2.canvas.width, bgY - 50);
            crc2.closePath();
            if (crc2.isPointInPath(_x, _y)) {
                crc2.fillStyle = "#000000";
                crc2.strokeStyle = "#000000";
                crc2.lineWidth = 1;
                crc2.beginPath();
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x - 7, _y + 2);
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x - 6, _y + 4);
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x, _y - 15);
                crc2.arc(_x, _y - 15, 2, 0, 2 * Math.PI);
                crc2.moveTo(_x, _y - 10);
                crc2.lineTo(_x - 6, _y + 2);
                crc2.moveTo(_x, _y - 12);
                crc2.lineTo(_x - 7, _y - 2);
                crc2.moveTo(_x + 8, _y + 5);
                crc2.lineTo(_x - 10, _y + 7);
                crc2.moveTo(_x + 4, _y + 6);
                crc2.lineTo(_x + 3, _y + 12);
                crc2.moveTo(_x - 6, _y + 7);
                crc2.lineTo(_x - 8, _y + 14);
                crc2.moveTo(_x + 8, _y + 12);
                crc2.lineTo(_x - 10, _y + 15);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
            }
            else {
                max++;
            }
        }
    }
    function drawCloud(_x, _y) {
        crc2.fillStyle = "#76590A";
        crc2.strokeStyle = "#76590A";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(_x - 5, _y + 10);
        crc2.quadraticCurveTo(_x, _y + 40, _x + 5, _y + 20);
        crc2.moveTo(_x + 10, _y + 25);
        crc2.quadraticCurveTo(_x, _y + 50, _x + 25, _y + 40);
        crc2.quadraticCurveTo(_x - 25, _y - 40, _x - 5, _y - 20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#1A950C";
        crc2.strokeStyle = "#1A950C";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(_x - 15, _y - 21);
        crc2.lineTo(_x, _y - 45);
        crc2.lineTo(_x + 15, _y - 21);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=script.js.map