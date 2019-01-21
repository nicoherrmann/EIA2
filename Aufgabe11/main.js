var A11;
(function (A11) {
    window.addEventListener("load", init);
    let sun;
    let bg;
    let bgImg;
    let allObjects = [];
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        A11.crc2 = canvas.getContext("2d");
        bg = new A11.Background();
        bg.draw();
        bgImg = A11.crc2.getImageData(0, 0, A11.crc2.canvas.width, A11.crc2.canvas.height);
        for (let i = 0; i < 15; i++) {
            let child = new A11.children();
            child.x = A11.crc2.canvas.width;
            child.y = Math.random() * A11.crc2.canvas.height + 150;
            child.dx = Math.random() - 10;
            child.dy = Math.random() + 2;
            child.state = "ridedown";
            allObjects.push(child);
        }
        for (let i = 0; i < 6; i++) {
            A11.crc2.beginPath();
            A11.crc2.moveTo(0, A11.crc2.canvas.height - 100);
            A11.crc2.lineTo(A11.crc2.canvas.width, 150);
            A11.crc2.lineTo(A11.crc2.canvas.width, A11.crc2.canvas.height);
            A11.crc2.lineTo(0, A11.crc2.canvas.height);
            A11.crc2.closePath();
            let x = Math.random() * A11.crc2.canvas.width;
            let y = Math.random() * A11.crc2.canvas.height;
            if (A11.crc2.isPointInPath(x, y)) {
                let tree = new A11.Tree();
                tree.x = x;
                tree.y = y;
                tree.color = "#9c6012";
                tree.color2 = "#1bb00f";
                allObjects.push(tree);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 6; i++) {
            let cloud = new A11.Cloud();
            cloud.x = Math.random() * A11.crc2.canvas.width;
            cloud.y = Math.random() * 100;
            cloud.dx = (Math.random() * 2) / 20;
            cloud.dy = 0;
            cloud.color = "#1f9fd4";
            allObjects.push(cloud);
        }
        for (let i = 0; i < 25; i++) {
            let snowflake = new A11.Snowflakes();
            snowflake.x = Math.random() * A11.crc2.canvas.width;
            snowflake.y = Math.random() * 100;
            snowflake.dy = (Math.random() * 2) / 5;
            snowflake.dx = 0;
            snowflake.color = "#ffffff";
            allObjects.push(snowflake);
        }
        sun = new A11.Sun();
        sun.x = Math.random() * A11.crc2.canvas.width;
        sun.y = Math.random() * 50;
        sun.color = "#fffa00";
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / 25);
        A11.crc2.clearRect(0, 0, A11.crc2.canvas.width, A11.crc2.canvas.height);
        A11.crc2.putImageData(bgImg, 0, 0);
        sun.draw();
        for (let i = 0; i < allObjects.length; i++) {
            allObjects[i].move();
            allObjects[i].draw();
        }
    }
})(A11 || (A11 = {}));
//# sourceMappingURL=main.js.map