namespace RHT {


    export class baseStats {
        x: number;
        y: number;
        color: string;
        move(): void { }
        draw(): void { }
    }

    export class movement extends baseStats {
        dx: number;
        dy: number;
        move(): void {
            this.y += this.dy;
            this.x += this.dx;
        }
    }

    export class Cloud extends movement {
        draw(): void {
            if (this.x > (crc2.canvas.width + 15)) {
                this.x = -15;
                this.drawCloud();
            }
            else if (this.x < -15) {
                this.x = crc2.canvas.width += 15;
                this.drawCloud();
            }
            else {
                this.drawCloud();
            }

        }
        drawCloud(): void {
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
    }

    export class Sun extends baseStats {
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

    export class Tree extends baseStats {
        color2: string;
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y + 10);
            crc2.lineTo(this.x - 5, this.y - 20);
            crc2.lineTo(this.x + 5, this.y - 20);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = this.color2;
            crc2.strokeStyle = this.color2;
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y - 21);
            crc2.lineTo(this.x, this.y - 45);
            crc2.lineTo(this.x + 15, this.y - 21);
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }

    }
    export class Background extends baseStats {
        draw(): void {
            let width: number = crc2.canvas.width;
            let height: number = crc2.canvas.height;
            crc2.fillStyle = "#206dc5";
            crc2.strokeStyle = "#206dc5";
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(width, 0);
            crc2.lineTo(width, height);
            crc2.lineTo(0, height);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "#dcdcdc";
            crc2.strokeStyle = "#dcdcdc";

            crc2.beginPath();
            crc2.moveTo(0, height - 100);
            crc2.lineTo(width, 150);
            crc2.lineTo(width, height);
            crc2.lineTo(0, height);
            crc2.closePath();


            crc2.fill();
            crc2.stroke();

        }
    }
    export class Snowflakes extends movement {
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

    export class snowball extends baseStats {

        timer: number;
        move(): void {

        }
        draw(): void {

            if (this.timer >= 0) {
                console.log(">=0");
                crc2.fillStyle = "#ffffff";
                crc2.strokeStyle = "#ffffff";
                crc2.lineWidth = 1;

                crc2.beginPath();
                crc2.moveTo(this.x, this.y);
                crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
                this.timer--;
            }


        }

        checkIfHit(_x: number, _y: number): boolean {
            crc2.lineWidth = 50;
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
            console.log("bum");
            if (crc2.isPointInStroke(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    export class children extends movement {
        state: string;
        draw(): void {
            if (this.state == "ridedown") {
                this.drawChild1();
            }
            if (this.state == "dead") {
                this.drawChild2();
            }

        }
        drawChild2(): void {
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;

            crc2.beginPath();
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

        drawChild1(): void {
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;
            this.drawPath(this.x, this.y);
            crc2.fill();
            crc2.stroke();
        }


        move(): void {
            this.x += this.dx;
            this.y += this.dy;

        }

        getSpeed(): number {
            return Math.floor(this.dx * this.dy * -1 * 200);
        }

        drawPath(_x: number, _y: number): void {
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
        }




    }
}
