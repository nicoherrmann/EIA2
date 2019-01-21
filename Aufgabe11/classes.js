var A11;
(function (A11) {
    class baseStats {
        move() { }
        draw() { }
    }
    A11.baseStats = baseStats;
    class movement extends baseStats {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    A11.movement = movement;
    class Cloud extends movement {
        draw() {
            A11.crc2.strokeStyle = "#ffffff";
            A11.crc2.fillStyle = this.color;
            A11.crc2.lineWidth = 3;
            A11.crc2.beginPath();
            A11.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            A11.crc2.arc(this.x + 10, this.y + 5, 7, 0, 2 * Math.PI);
            A11.crc2.arc(this.x + 6, this.y - 4, 7, 0, 2 * Math.PI);
            A11.crc2.closePath;
            A11.crc2.stroke();
            A11.crc2.fill();
        }
    }
    A11.Cloud = Cloud;
    class Sun extends baseStats {
        draw() {
            A11.crc2.fillStyle = this.color;
            A11.crc2.strokeStyle = this.color;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
    }
    A11.Sun = Sun;
    class Tree extends baseStats {
        draw() {
            A11.crc2.fillStyle = this.color;
            A11.crc2.strokeStyle = this.color;
            A11.crc2.lineWidth = 2;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x + 5, this.y + 10);
            A11.crc2.lineTo(this.x - 5, this.y + 10);
            A11.crc2.lineTo(this.x - 5, this.y - 20);
            A11.crc2.lineTo(this.x + 5, this.y - 20);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.fillStyle = this.color2;
            A11.crc2.strokeStyle = this.color2;
            A11.crc2.lineWidth = 2;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x - 15, this.y - 21);
            A11.crc2.lineTo(this.x, this.y - 45);
            A11.crc2.lineTo(this.x + 15, this.y - 21);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
    }
    A11.Tree = Tree;
    class Background extends baseStats {
        draw() {
            let width = A11.crc2.canvas.width;
            let height = A11.crc2.canvas.height;
            A11.crc2.fillStyle = "#206dc5";
            A11.crc2.strokeStyle = "#206dc5";
            A11.crc2.beginPath();
            A11.crc2.moveTo(0, 0);
            A11.crc2.lineTo(width, 0);
            A11.crc2.lineTo(width, height);
            A11.crc2.lineTo(0, height);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
            A11.crc2.fillStyle = "#dcdcdc";
            A11.crc2.strokeStyle = "#dcdcdc";
            A11.crc2.beginPath();
            A11.crc2.moveTo(0, height - 100);
            A11.crc2.lineTo(width, 150);
            A11.crc2.lineTo(width, height);
            A11.crc2.lineTo(0, height);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
    }
    A11.Background = Background;
    class Snowflakes extends movement {
        draw() {
            A11.crc2.strokeStyle = "#ffffff";
            A11.crc2.lineWidth = 2;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y - 4);
            A11.crc2.lineTo(this.x, this.y + 4);
            A11.crc2.closePath;
            A11.crc2.stroke();
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x - 4, this.y);
            A11.crc2.lineTo(this.x + 4, this.y);
            A11.crc2.closePath;
            A11.crc2.stroke();
        }
        move() {
            if (this.y >= A11.crc2.canvas.height) {
                this.y = 0;
            }
            else {
                this.y += this.dy;
            }
        }
    }
    A11.Snowflakes = Snowflakes;
    class children extends movement {
        draw() {
            if (this.state == "ridedown") {
                this.drawChild1();
            }
            if (this.state == "pullup") {
                this.drawChild2();
            }
            else { }
        }
        drawChild2() {
            A11.crc2.fillStyle = "#000000";
            A11.crc2.strokeStyle = "#000000";
            A11.crc2.lineWidth = 1;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x - 2, this.y + 7);
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x + 1, this.y + 8);
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x, this.y - 15);
            A11.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            A11.crc2.moveTo(this.x, this.y - 10);
            A11.crc2.lineTo(this.x - 6, this.y + 2);
            A11.crc2.moveTo(this.x, this.y - 12);
            A11.crc2.lineTo(this.x - 7, this.y - 2);
            A11.crc2.moveTo(this.x - 8, this.y + 5);
            A11.crc2.lineTo(this.x - 28, this.y + 7);
            A11.crc2.moveTo(this.x - 12, this.y + 6);
            A11.crc2.lineTo(this.x - 15, this.y + 12);
            A11.crc2.moveTo(this.x - 22, this.y + 7);
            A11.crc2.lineTo(this.x - 25, this.y + 14);
            A11.crc2.moveTo(this.x - 8, this.y + 12);
            A11.crc2.lineTo(this.x - 30, this.y + 15);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
        drawChild1() {
            A11.crc2.fillStyle = "#000000";
            A11.crc2.strokeStyle = "#000000";
            A11.crc2.lineWidth = 1;
            A11.crc2.beginPath();
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x - 7, this.y + 2);
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x - 6, this.y + 4);
            A11.crc2.moveTo(this.x, this.y);
            A11.crc2.lineTo(this.x, this.y - 15);
            A11.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            A11.crc2.moveTo(this.x, this.y - 10);
            A11.crc2.lineTo(this.x - 6, this.y + 2);
            A11.crc2.moveTo(this.x, this.y - 12);
            A11.crc2.lineTo(this.x - 7, this.y - 2);
            A11.crc2.moveTo(this.x + 8, this.y + 5);
            A11.crc2.lineTo(this.x - 10, this.y + 7);
            A11.crc2.moveTo(this.x + 4, this.y + 6);
            A11.crc2.lineTo(this.x + 3, this.y + 12);
            A11.crc2.moveTo(this.x - 6, this.y + 7);
            A11.crc2.lineTo(this.x - 8, this.y + 14);
            A11.crc2.moveTo(this.x + 8, this.y + 12);
            A11.crc2.lineTo(this.x - 10, this.y + 15);
            A11.crc2.closePath();
            A11.crc2.fill();
            A11.crc2.stroke();
        }
        move() {
            if (this.state == "ridedown") {
                if (this.y > A11.crc2.canvas.height) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "pullup";
                }
                else if (this.x < 0) {
                    this.x -= this.dx;
                    this.y -= this.dy;
                    this.state = "pullup";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }
            if (this.state == "pullup") {
                if (this.x > A11.crc2.canvas.width) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.state = "ridedown";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }
            else { }
        }
    }
    A11.children = children;
})(A11 || (A11 = {}));
//# sourceMappingURL=classes.js.map