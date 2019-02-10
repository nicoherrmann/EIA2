namespace RHT {
    window.addEventListener("load", showMainScreen);
    export let crc2: CanvasRenderingContext2D;
    let sun: Sun;
    let bg: Background;
    let bgImg: any;
    let allObjects: baseStats[] = [];
    let childrenArray: children[] = [];
    let snowballs: snowball[] = [];
    let score: number = 0;

    function showMainScreen(): void {
        allObjects = [];
        childrenArray = [];
        snowballs = [];
        
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "initial";
        document.getElementById("start").addEventListener("click", startGame);
    }

    function startGame(_event: Event): void {
        score = 0;
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("score").style.display = "initial";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        canvas.addEventListener("click", throwSnowball);
        crc2 = canvas.getContext("2d");

        bg = new Background();
        bg.draw();
        bgImg = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);


        for (let i: number = 0; i < 8; i++) {
            createChild();
        }

        for (let i: number = 0; i < 6; i++) {
            crc2.beginPath();
            crc2.moveTo(0, crc2.canvas.height - 100);
            crc2.lineTo(crc2.canvas.width, 150);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(0, crc2.canvas.height);
            crc2.closePath();
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            if (crc2.isPointInPath(x, y)) {

                let tree: Tree = new Tree();
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
        for (let i: number = 0; i < 6; i++) {
            let cloud: Cloud = new Cloud();
            cloud.x = Math.random() * crc2.canvas.width;
            cloud.y = Math.random() * 100;
            cloud.dx = (Math.random() * 2) / 20;
            cloud.dy = 0;
            cloud.color = "#1f9fd4";

            allObjects.push(cloud);
        }

        for (let i: number = 0; i < 25; i++) {
            let snowflake: Snowflakes = new Snowflakes();
            snowflake.x = Math.random() * crc2.canvas.width;
            snowflake.y = Math.random() * 100;
            snowflake.dy = (Math.random() * 2) / 5;
            snowflake.dx = 0;
            snowflake.color = "#ffffff";

            allObjects.push(snowflake);
        }





        sun = new Sun();
        sun.x = Math.random() * crc2.canvas.width;
        sun.y = Math.random() * 50;
        sun.color = "#fffa00";

        update();


    }

    function createChild(): void {
        let child: children = new children();
        child.x = crc2.canvas.width;
        child.y = Math.random() * crc2.canvas.height + 150;
        child.dx = (Math.random() - 10) / 7;
        child.dy = (Math.random() + 2) / 5;
        child.state = "ridedown";

        childrenArray.push(child);
    }

    function throwSnowball(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let ball: snowball = new snowball();
        ball.x = x;
        ball.y = y;
        ball.timer = 25;
        snowballs.push(ball);
    }

    function update(): void {

        window.setTimeout(update, 1000 / 25);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(bgImg, 0, 0);
        sun.draw();
        for (let i: number = 0; i < allObjects.length; i++) {
            allObjects[i].move();
            allObjects[i].draw();
        }
        for (let i: number = 0; i < childrenArray.length; i++) {
            childrenArray[i].move();
            childrenArray[i].draw();
            if (childrenArray[i].x < -10 || childrenArray[i].y > (crc2.canvas.height + 10)) {
                childrenArray.splice(i, 1);
                createChild();
                console.log("length:" + childrenArray.length);
            }
        }

        for (let i: number = 0; i < snowballs.length; i++) {
            if (snowballs[i].timer > 0) {
                snowballs[i].draw();
                //snowballs[i].checkIfHit(childrenArray[i].x, childrenArray[i].y);
            }
            else {
                if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                    console.log("timer:" + snowballs[i].timer);
                    for (let i2: number = 0; i2 < childrenArray.length; i2++) {
                        console.log("TASDGFSDF:" + children.length);
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
}     