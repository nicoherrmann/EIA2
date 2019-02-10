var RHT;
(function (RHT) {
    window.addEventListener("load", showMainScreen);
    let sun;
    let bg;
    let bgImg;
    let allObjects = [];
    let childrenArray = [];
    let snowballs = [];
    let score = 0;
    function showMainScreen() {
        allObjects = [];
        childrenArray = [];
        snowballs = [];
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "initial";
        document.getElementById("start").addEventListener("click", startGame);
    }
    function startGame(_event) {
        score = 0;
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("score").style.display = "initial";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", throwSnowball);
        RHT.crc2 = canvas.getContext("2d");
        bg = new RHT.Background();
        bg.draw();
        bgImg = RHT.crc2.getImageData(0, 0, RHT.crc2.canvas.width, RHT.crc2.canvas.height);
        for (let i = 0; i < 8; i++) {
            createChild();
        }
        for (let i = 0; i < 6; i++) {
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(0, RHT.crc2.canvas.height - 100);
            RHT.crc2.lineTo(RHT.crc2.canvas.width, 150);
            RHT.crc2.lineTo(RHT.crc2.canvas.width, RHT.crc2.canvas.height);
            RHT.crc2.lineTo(0, RHT.crc2.canvas.height);
            RHT.crc2.closePath();
            let x = Math.random() * RHT.crc2.canvas.width;
            let y = Math.random() * RHT.crc2.canvas.height;
            if (RHT.crc2.isPointInPath(x, y)) {
                let tree = new RHT.Tree();
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
            let cloud = new RHT.Cloud();
            cloud.x = Math.random() * RHT.crc2.canvas.width;
            cloud.y = Math.random() * 100;
            cloud.dx = (Math.random() * 2) / 20;
            cloud.dy = 0;
            cloud.color = "#1f9fd4";
            allObjects.push(cloud);
        }
        for (let i = 0; i < 25; i++) {
            let snowflake = new RHT.Snowflakes();
            snowflake.x = Math.random() * RHT.crc2.canvas.width;
            snowflake.y = Math.random() * 100;
            snowflake.dy = (Math.random() * 2) / 5;
            snowflake.dx = 0;
            snowflake.color = "#ffffff";
            allObjects.push(snowflake);
        }
        sun = new RHT.Sun();
        sun.x = Math.random() * RHT.crc2.canvas.width;
        sun.y = Math.random() * 50;
        sun.color = "#fffa00";
        update();
    }
    function createChild() {
        let child = new RHT.children();
        child.x = RHT.crc2.canvas.width;
        child.y = Math.random() * RHT.crc2.canvas.height + 150;
        child.dx = (Math.random() - 10) / 7;
        child.dy = (Math.random() + 2) / 5;
        child.state = "ridedown";
        childrenArray.push(child);
    }
    function throwSnowball(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let ball = new RHT.snowball();
        ball.x = x;
        ball.y = y;
        ball.timer = 25;
        snowballs.push(ball);
    }
    function update() {
        window.setTimeout(update, 1000 / 25);
        RHT.crc2.clearRect(0, 0, RHT.crc2.canvas.width, RHT.crc2.canvas.height);
        RHT.crc2.putImageData(bgImg, 0, 0);
        sun.draw();
        for (let i = 0; i < allObjects.length; i++) {
            allObjects[i].move();
            allObjects[i].draw();
        }
        for (let i = 0; i < childrenArray.length; i++) {
            childrenArray[i].move();
            childrenArray[i].draw();
            if (childrenArray[i].x < -10 || childrenArray[i].y > (RHT.crc2.canvas.height + 10)) {
                childrenArray.splice(i, 1);
                createChild();
                console.log("length:" + childrenArray.length);
            }
        }
        for (let i = 0; i < snowballs.length; i++) {
            if (snowballs[i].timer > 0) {
                snowballs[i].draw();
            }
            else {
                if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                    console.log("timer:" + snowballs[i].timer);
                    for (let i2 = 0; i2 < childrenArray.length; i2++) {
                        console.log("TASDGFSDF:" + RHT.children.length);
                        if (snowballs[i].checkIfHit(childrenArray[i2].x, childrenArray[i2].y) == true && childrenArray[i2].state == "ridedown") {
                            childrenArray[i2].state = "dead";
                            score += childrenArray[i2].getSpeed() * 10;
                            console.log("score:" + score);
                        }
                        else {
                            console.log("else");
                        }
                    }
                }
            }
        }
        document.getElementById("score").innerText = score.toString();
    }
})(RHT || (RHT = {}));
//# sourceMappingURL=main.js.map