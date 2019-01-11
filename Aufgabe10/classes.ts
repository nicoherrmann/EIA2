namespace A10 {

    export class Cloud {
        x: number;
        y: number;
        dx: number;
        color: string;
        draw(): void {
            crc2.strokeStyle = "#ffffff";
            crc2.fillStyle = this.color;
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 10, this.y + 5, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 6, this.y - 4, 7, 0, 2 * Math.PI);
            crc2.closePath
            crc2.stroke();
            crc2.fill();
        }
        move(): void {
            if (this.x >= crc2.canvas.width) {
                this.x = 0;
            }
            else {
                this.x += this.dx;
            }
        }
    }

    export class Sun {
        x: number;
        y: number;
        color: string;
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }

    export let bgY: number;

    export class Tree {
        color1: string;
        color2: string;
        draw(_max: number): void {
            for (let i: number = 0; i < _max; i++) {
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
                    crc2.fillStyle = this.color1;
                    crc2.strokeStyle = this.color1;
                    crc2.lineWidth = 2;

                    crc2.beginPath();
                    crc2.moveTo(x + 5, y + 10);
                    crc2.lineTo(x - 5, y + 10);
                    crc2.lineTo(x - 5, y - 20);
                    crc2.lineTo(x + 5, y - 20);
                    crc2.closePath();

                    crc2.fill();
                    crc2.stroke();

                    crc2.fillStyle = this.color2;
                    crc2.strokeStyle = this.color2;
                    crc2.lineWidth = 2;

                    crc2.beginPath();
                    crc2.moveTo(x - 15, y - 21);
                    crc2.lineTo(x, y - 45);
                    crc2.lineTo(x + 15, y - 21);
                    crc2.closePath();

                    crc2.fill();
                    crc2.stroke();
                }
                else {
                    i--;
                }

            }
        }
    }
    export class Background {
        draw(): void {
            let width: number = crc2.canvas.width;
            bgY = Math.random() * Math.floor(50)
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
    }
    export class Snow {
        x: number;
        y: number;
        dy: number;
        draw(): void {
            crc2.strokeStyle = "#ffffff";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 4);
            crc2.lineTo(this.x, this.y + 4);
            crc2.closePath
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(this.x - 4, this.y);
            crc2.lineTo(this.x + 4, this.y);
            crc2.closePath
            crc2.stroke();
        }
        move(): void {
            if (this.y >= crc2.canvas.height) {
                this.y = 0;
            }
            else {
                this.y += this.dy;
            }
        }
    }

    export class Kid1 {
        x: number;
        y: number;
        backupx: number;
        backupy: number;
        dx: number;
        dy: number;
        draw(): void {
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 2, this.y + 7);
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 1, this.y + 8);
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 15);
            crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            crc2.moveTo(this.x, this.y - 10);
            crc2.lineTo(this.x - 6, this.y + 2);
            crc2.moveTo(this.x, this.y - 12);
            crc2.lineTo(this.x - 7, this.y - 2);


            crc2.moveTo(this.x - 8, this.y + 5);
            crc2.lineTo(this.x - 28, this.y + 7);
            crc2.moveTo(this.x - 12, this.y + 6);
            crc2.lineTo(this.x - 15, this.y + 12);
            crc2.moveTo(this.x - 22, this.y + 7);
            crc2.lineTo(this.x - 25, this.y + 14);
            crc2.moveTo(this.x - 8, this.y + 12);
            crc2.lineTo(this.x - 30, this.y + 15);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }


        move(): void {
            if (this.y >= crc2.canvas.height) {
                this.y = this.backupy;
            }
            else if (this.x >= crc2.canvas.width) {
                this.x = 0;
            }
            else {
                this.x += this.dx;
                this.y += this.dy;
            }
        }


    }

    export class Kid2 {
        x: number;
        y: number;
        backupx: number;
        backupy: number;
        dx: number;
        dy: number;
        draw(): void {
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 7, this.y + 2);
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 6, this.y + 4);
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 15);
            crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            crc2.moveTo(this.x, this.y - 10);
            crc2.lineTo(this.x - 6, this.y + 2);
            crc2.moveTo(this.x, this.y - 12);
            crc2.lineTo(this.x - 7, this.y - 2);
            crc2.moveTo(this.x + 8, this.y + 5);
            crc2.lineTo(this.x - 10, this.y + 7);
            crc2.moveTo(this.x + 4, this.y + 6);
            crc2.lineTo(this.x + 3, this.y + 12);
            crc2.moveTo(this.x - 6, this.y + 7);
            crc2.lineTo(this.x - 8, this.y + 14);
            crc2.moveTo(this.x + 8, this.y + 12);
            crc2.lineTo(this.x - 10, this.y + 15);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }
        move(): void {
            if (this.y >= crc2.canvas.height) {
                this.y = this.backupy;
            }
            else if (this.x >= crc2.canvas.width) {
                this.x = crc2.canvas.width;
            }
            else {
                this.x += this.dx;
                this.y += this.dy;
            }
        }



    }
}
