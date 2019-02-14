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
    let timer = 60;
    let helpTimer = 25;
    let snowballReadyCheck;
    function showMainScreen() {
        allObjects = [];
        childrenArray = [];
        snowballs = [];
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("retry").style.display = "none";
        document.getElementById("highscore").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "initial";
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("highscores").addEventListener("click", highscores);
    }
    function startGame(_event) {
        snowballReadyCheck = true;
        score = 0;
        allObjects = [];
        childrenArray = [];
        snowballs = [];
        timer = 60;
        helpTimer = 25;
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("retry").style.display = "none";
        document.getElementById("highscore").style.display = "none";
        document.getElementById("score").style.display = "initial";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", throwSnowball);
        RHT.crc2 = canvas.getContext("2d");
        bg = new RHT.Background();
        bg.draw();
        sun = new RHT.Sun();
        sun.x = Math.random() * RHT.crc2.canvas.width;
        sun.y = Math.random() * 50;
        sun.color = "#fffa00";
        for (let i = 0; i < 6; i++) {
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(0, RHT.crc2.canvas.height - 100);
            RHT.crc2.lineTo(RHT.crc2.canvas.width, 150);
            RHT.crc2.lineTo(RHT.crc2.canvas.width, 180);
            RHT.crc2.lineTo(0, RHT.crc2.canvas.height - 70);
            RHT.crc2.closePath();
            let x = Math.random() * RHT.crc2.canvas.width;
            let y = Math.random() * RHT.crc2.canvas.height;
            if (RHT.crc2.isPointInPath(x, y)) {
                let tree = new RHT.Tree();
                tree.x = x;
                tree.y = y;
                tree.color = "#9c6012";
                tree.color2 = "#1bb00f";
                tree.draw();
            }
            else {
                i--;
            }
        }
        bgImg = RHT.crc2.getImageData(0, 0, RHT.crc2.canvas.width, RHT.crc2.canvas.height);
        for (let i = 0; i < 4; i++) {
            createChild();
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
        update();
    }
    function createChild() {
        let child = new RHT.children();
        child.x = RHT.crc2.canvas.width;
        child.y = (Math.random() * 100) + 150;
        child.dx = Math.random() * (-3);
        child.dy = child.dx * -0.25;
        child.state = "ridedown";
        childrenArray.push(child);
    }
    function throwSnowball(_event) {
        if (snowballReadyCheck == true) {
            snowballReadyCheck = false;
            let x = _event.clientX;
            let y = _event.clientY;
            let ball = new RHT.snowball();
            ball.x = x;
            ball.y = y;
            ball.timer = 25;
            snowballs.push(ball);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
    }
    let address = "https://nodeservereia.herokuapp.com/";
    function sendRequestWithCustomData() {
        console.log("requestcustom");
        let xhr = new XMLHttpRequest();
        let sendString = "";
        sendString += "name:" + document.getElementById("textInput").getAttribute("value") + "&" + "score:" + score;
        xhr.open("GET", address + "?" + sendString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        highscores();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    function endscreen() {
        document.getElementById("endscore").innerText = score.toString();
        document.getElementById("endscore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        document.getElementById("retry").style.display = "initial";
        document.getElementById("retry").addEventListener("click", startGame);
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
        document.getElementById("button").addEventListener("click", sendRequestWithCustomData);
    }
    function highscores() {
        document.getElementById("endscore").innerText = score.toString();
        document.getElementById("endscore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("highscore").style.display = "initial";
        document.getElementById("retry").style.display = "initial";
        document.getElementById("retry").addEventListener("click", startGame);
    }
    function update() {
        if (document.getElementsByTagName("canvas")[0].getAttribute("style") == "display: initial;") {
            window.setTimeout(update, 1000 / 25);
            if (helpTimer == 0) {
                timer--;
                helpTimer = 26;
                snowballReadyCheck = true;
            }
            helpTimer--;
            RHT.crc2.clearRect(0, 0, RHT.crc2.canvas.width, RHT.crc2.canvas.height);
            RHT.crc2.putImageData(bgImg, 0, 0);
            sun.draw();
            for (let i = 0; i < childrenArray.length; i++) {
                childrenArray[i].move();
                childrenArray[i].draw();
                if (childrenArray[i].state == "dead" && childrenArray[i].x < -10 || childrenArray[i].y > (RHT.crc2.canvas.height + 10)) {
                    childrenArray.splice(i, 1);
                    createChild();
                    console.log("length:" + childrenArray.length);
                }
            }
            for (let i = 0; i < allObjects.length; i++) {
                allObjects[i].move();
                allObjects[i].draw();
            }
            for (let i = 0; i < snowballs.length; i++) {
                if (snowballs[i].timer > 0) {
                    snowballs[i].draw();
                }
                else if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                    for (let i2 = 0; i2 < childrenArray.length; i2++) {
                        if (snowballs[i].checkIfHitDown(childrenArray[i2].x, childrenArray[i2].y) == true && childrenArray[i2].state == "ridedown") {
                            score += childrenArray[i2].getSpeed() * 10;
                            childrenArray[i2].state = "dead";
                            console.log("hit");
                        }
                        if (snowballs[i].checkIfHitUp(childrenArray[i2].x, childrenArray[i2].y) == true && childrenArray[i2].state == "pullup") {
                            score += childrenArray[i2].getSpeed() * 10;
                            childrenArray[i2].state = "dead";
                            console.log("hit");
                        }
                        else {
                            console.log("else");
                        }
                    }
                }
            }
            document.getElementById("score").innerText = "Time:" + timer.toString() + "s" + " | Snowballs:" + (20 - snowballs.length).toString() + " | Snowball Ready: " + snowballReadyCheck.toString() + " | Score:" + score.toString();
            if (snowballs.length > 19) {
                console.log(timer);
                if (snowballs[19].timer == 0) {
                    endscreen();
                }
            }
            if (timer == 0) {
                endscreen();
            }
        }
    }
})(RHT || (RHT = {}));
//# sourceMappingURL=main.js.map