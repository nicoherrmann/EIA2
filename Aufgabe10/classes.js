var A10;
(function (A10) {
    class Cloud {
        draw() {
            A10.crc2.strokeStyle = "#ffffff";
            A10.crc2.fillStyle = this.color;
            A10.crc2.lineWidth = 3;
            A10.crc2.beginPath();
            A10.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            A10.crc2.arc(this.x + 10, this.y + 5, 7, 0, 2 * Math.PI);
            A10.crc2.arc(this.x + 6, this.y - 4, 7, 0, 2 * Math.PI);
            A10.crc2.closePath;
            A10.crc2.stroke();
            A10.crc2.fill();
        }
        move() {
            if (this.x >= A10.crc2.canvas.width) {
                this.x = 0;
            }
            else {
                this.x += this.dx;
            }
        }
    }
    A10.Cloud = Cloud;
    class Sun {
        draw() {
            A10.crc2.fillStyle = this.color;
            A10.crc2.strokeStyle = this.color;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
        }
    }
    A10.Sun = Sun;
    class Tree {
        draw(_max) {
            for (let i = 0; i < _max; i++) {
                let x = Math.random() * A10.crc2.canvas.width;
                let y = Math.random() * A10.crc2.canvas.height;
                A10.crc2.beginPath();
                A10.crc2.moveTo(A10.crc2.canvas.width, A10.bgY - 50);
                A10.crc2.lineTo(A10.crc2.canvas.width, A10.crc2.canvas.height);
                A10.crc2.lineTo(0, A10.crc2.canvas.height);
                A10.crc2.lineTo(0, A10.bgY);
                A10.crc2.quadraticCurveTo(A10.crc2.canvas.width / 2 - 25, A10.bgY - 40, A10.crc2.canvas.width, A10.bgY - 50);
                A10.crc2.closePath();
                if (A10.crc2.isPointInPath(x, y)) {
                    A10.crc2.fillStyle = this.color1;
                    A10.crc2.strokeStyle = this.color1;
                    A10.crc2.lineWidth = 2;
                    A10.crc2.beginPath();
                    A10.crc2.moveTo(x + 5, y + 10);
                    A10.crc2.lineTo(x - 5, y + 10);
                    A10.crc2.lineTo(x - 5, y - 20);
                    A10.crc2.lineTo(x + 5, y - 20);
                    A10.crc2.closePath();
                    A10.crc2.fill();
                    A10.crc2.stroke();
                    A10.crc2.fillStyle = this.color2;
                    A10.crc2.strokeStyle = this.color2;
                    A10.crc2.lineWidth = 2;
                    A10.crc2.beginPath();
                    A10.crc2.moveTo(x - 15, y - 21);
                    A10.crc2.lineTo(x, y - 45);
                    A10.crc2.lineTo(x + 15, y - 21);
                    A10.crc2.closePath();
                    A10.crc2.fill();
                    A10.crc2.stroke();
                }
                else {
                    i--;
                }
            }
        }
    }
    A10.Tree = Tree;
    class Background {
        draw() {
            let width = A10.crc2.canvas.width;
            A10.bgY = Math.random() * Math.floor(50);
            A10.bgY += 100;
            console.log(A10.bgY);
            A10.crc2.fillStyle = "#dcdcdc";
            A10.crc2.strokeStyle = "#dcdcdc";
            A10.crc2.beginPath();
            A10.crc2.moveTo(width, A10.bgY - 50);
            A10.crc2.lineTo(width, A10.crc2.canvas.height);
            A10.crc2.lineTo(0, A10.crc2.canvas.height);
            A10.crc2.lineTo(0, A10.bgY);
            A10.crc2.quadraticCurveTo(width / 2 - 25, A10.bgY - 40, width, A10.bgY - 50);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
            A10.crc2.fillStyle = "#00ffff";
            A10.crc2.strokeStyle = "#00ffff";
            A10.crc2.beginPath();
            A10.crc2.moveTo(width, A10.bgY - 50);
            A10.crc2.lineTo(width, 0);
            A10.crc2.lineTo(0, 0);
            A10.crc2.lineTo(0, A10.bgY);
            A10.crc2.quadraticCurveTo(width / 2 - 25, A10.bgY - 40, width, A10.bgY - 50);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
        }
    }
    A10.Background = Background;
    class Snow {
        draw() {
            A10.crc2.strokeStyle = "#ffffff";
            A10.crc2.lineWidth = 2;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y - 4);
            A10.crc2.lineTo(this.x, this.y + 4);
            A10.crc2.closePath;
            A10.crc2.stroke();
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x - 4, this.y);
            A10.crc2.lineTo(this.x + 4, this.y);
            A10.crc2.closePath;
            A10.crc2.stroke();
        }
        move() {
            if (this.y >= A10.crc2.canvas.height) {
                this.y = 0;
            }
            else {
                this.y += this.dy;
            }
        }
    }
    A10.Snow = Snow;
    class Kid1 {
        draw() {
            A10.crc2.fillStyle = "#000000";
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.lineWidth = 1;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x - 2, this.y + 7);
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x + 1, this.y + 8);
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x, this.y - 15);
            A10.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            A10.crc2.moveTo(this.x, this.y - 10);
            A10.crc2.lineTo(this.x - 6, this.y + 2);
            A10.crc2.moveTo(this.x, this.y - 12);
            A10.crc2.lineTo(this.x - 7, this.y - 2);
            A10.crc2.moveTo(this.x - 8, this.y + 5);
            A10.crc2.lineTo(this.x - 28, this.y + 7);
            A10.crc2.moveTo(this.x - 12, this.y + 6);
            A10.crc2.lineTo(this.x - 15, this.y + 12);
            A10.crc2.moveTo(this.x - 22, this.y + 7);
            A10.crc2.lineTo(this.x - 25, this.y + 14);
            A10.crc2.moveTo(this.x - 8, this.y + 12);
            A10.crc2.lineTo(this.x - 30, this.y + 15);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
        }
        move() {
            if (this.y >= A10.crc2.canvas.height) {
                this.y = this.backupy;
            }
            else if (this.x >= A10.crc2.canvas.width) {
                this.x = 0;
            }
            else {
                this.x += this.dx;
                this.y += this.dy;
            }
        }
    }
    A10.Kid1 = Kid1;
    class Kid2 {
        draw() {
            A10.crc2.fillStyle = "#000000";
            A10.crc2.strokeStyle = "#000000";
            A10.crc2.lineWidth = 1;
            A10.crc2.beginPath();
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x - 7, this.y + 2);
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x - 6, this.y + 4);
            A10.crc2.moveTo(this.x, this.y);
            A10.crc2.lineTo(this.x, this.y - 15);
            A10.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            A10.crc2.moveTo(this.x, this.y - 10);
            A10.crc2.lineTo(this.x - 6, this.y + 2);
            A10.crc2.moveTo(this.x, this.y - 12);
            A10.crc2.lineTo(this.x - 7, this.y - 2);
            A10.crc2.moveTo(this.x + 8, this.y + 5);
            A10.crc2.lineTo(this.x - 10, this.y + 7);
            A10.crc2.moveTo(this.x + 4, this.y + 6);
            A10.crc2.lineTo(this.x + 3, this.y + 12);
            A10.crc2.moveTo(this.x - 6, this.y + 7);
            A10.crc2.lineTo(this.x - 8, this.y + 14);
            A10.crc2.moveTo(this.x + 8, this.y + 12);
            A10.crc2.lineTo(this.x - 10, this.y + 15);
            A10.crc2.closePath();
            A10.crc2.fill();
            A10.crc2.stroke();
        }
        move() {
            if (this.y >= A10.crc2.canvas.height) {
                this.y = this.backupy;
            }
            else if (this.x >= A10.crc2.canvas.width) {
                this.x = A10.crc2.canvas.width;
            }
            else {
                this.x += this.dx;
                this.y += this.dy;
            }
        }
    }
    A10.Kid2 = Kid2;
})(A10 || (A10 = {}));
//# sourceMappingURL=classes.js.map