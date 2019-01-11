namespace A10 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let clouds: Cloud[] = [];
    let snowflakes: Snow[] = [];
    let kid1s: Kid1[] = [];
    let kid2s: Kid2[] = [];
    let sun: Sun;
    let bg: Background;
    let bgImg: any;

    function init(_event: Event): void {
        console.log("Canvas started");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        bg = new Background();
        bg.draw();

        let tree: Tree = new Tree();
        tree.color1 = "#753c0f";
        tree.color2 = "#238f0a";
        tree.draw(8);


        bgImg = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);


        for (let i: number = 0; i < 6; i++) {
            let cloud: Cloud = new Cloud();
            cloud.x = Math.random() * crc2.canvas.width;
            cloud.y = Math.random() * 100;
            cloud.dx = (Math.random() * 2) / 20;
            cloud.color = "#1f9fd4";

            clouds.push(cloud);
        }

        for (let i: number = 0; i < 25; i++) {
            let snowflake: Snow = new Snow();
            snowflake.x = Math.random() * crc2.canvas.width;
            snowflake.y = Math.random() * 100;
            snowflake.dy = (Math.random() * 2) / 5;

            snowflakes.push(snowflake);
        }


        for (let i: number = 0; i < 8; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width, bgY - 50);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(0, crc2.canvas.height);
            crc2.lineTo(0, bgY);
            crc2.quadraticCurveTo(crc2.canvas.width / 2 - 25, bgY - 40, crc2.canvas.width, bgY - 50);

            crc2.closePath();
            if (crc2.isPointInPath(x, y)) {
                let kid1: Kid1 = new Kid1();
                kid1.x = x;
                kid1.y = y;
                kid1.backupx = x;
                kid1.backupy = y;
                kid1.dx = (Math.random() * 2) / 10;
                kid1.dy = (Math.random() - 1) / 100;

                kid1s.push(kid1);
            }
            else {
                i--;
            }
        }
        
        for (let i: number = 0; i < 8; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(crc2.canvas.width, bgY - 50);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(0, crc2.canvas.height);
            crc2.lineTo(0, bgY);
            crc2.quadraticCurveTo(crc2.canvas.width / 2 - 25, bgY - 40, crc2.canvas.width, bgY - 50);

            crc2.closePath();
            if (crc2.isPointInPath(x, y)) {
                let kid: Kid2 = new Kid2();
                kid.x = x;
                kid.y = y;
                kid.backupx = x;
                kid.backupy = y;
                kid.dx = (Math.random() - 1) / 10;
                kid.dy = Math.random() / 100;

                kid2s.push(kid);
            }
            else {
                i--;
            }
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
        for (let i: number = 0; i < 6; i++) {
            let cloud: Cloud = clouds[i];
            cloud.move();
            cloud.draw();
        }

        for (let i: number = 0; i < 25; i++) {
            let snowflake: Snow = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }

        for (let i: number = 0; i < 8; i++) {
            let kid: Kid1 = kid1s[i];
            kid.move();
            kid.draw();
        }
        
        for (let i: number = 0; i < 8; i++) {
            let kid: Kid2 = kid2s[i];
            kid.move();
            kid.draw();
        }
    }
}     