namespace A11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let sun: Sun;
    let bg: Background;
    let bgImg: any;
    let allObjects: baseStats[] = [];

    function init(_event: Event): void {
        console.log("Canvas started");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        bg = new Background();
        bg.draw();
        bgImg = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);


        for (let i: number = 0; i < 15; i++) {
            let child: children = new children();
            child.x = crc2.canvas.width;
            child.y = Math.random() * crc2.canvas.height + 150;
            child.dx = Math.random() - 10;
            child.dy = Math.random() + 2;
            child.state = "ridedown";

            allObjects.push(child);
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


    function update(): void {
        window.setTimeout(update, 1000 / 25);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(bgImg, 0, 0);
        sun.draw();
        for (let i: number = 0; i < allObjects.length; i++) {
            allObjects[i].move();
            allObjects[i].draw();
        }
    }
}     