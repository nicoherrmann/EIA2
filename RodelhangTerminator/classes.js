var RHT;
(function (RHT) {
    class baseStats {
        move() { }
        draw() { }
    }
    RHT.baseStats = baseStats;
    class movement extends baseStats {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    RHT.movement = movement;
    class Cloud extends movement {
        draw() {
            if (this.x > (RHT.crc2.canvas.width + 15)) {
                this.x = -15;
                this.drawCloud();
            }
            else if (this.x < -15) {
                this.x = RHT.crc2.canvas.width += 15;
                this.drawCloud();
            }
            else {
                this.drawCloud();
            }
        }
        drawCloud() {
            RHT.crc2.strokeStyle = "#ffffff";
            RHT.crc2.fillStyle = this.color;
            RHT.crc2.lineWidth = 3;
            RHT.crc2.beginPath();
            RHT.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            RHT.crc2.arc(this.x + 10, this.y + 5, 7, 0, 2 * Math.PI);
            RHT.crc2.arc(this.x + 6, this.y - 4, 7, 0, 2 * Math.PI);
            RHT.crc2.closePath;
            RHT.crc2.stroke();
            RHT.crc2.fill();
        }
    }
    RHT.Cloud = Cloud;
    class Sun extends baseStats {
        draw() {
            RHT.crc2.lineWidth = 3;
            RHT.crc2.fillStyle = this.color;
            RHT.crc2.strokeStyle = this.color;
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(this.x, this.y);
            RHT.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            RHT.crc2.closePath();
            RHT.crc2.fill();
            RHT.crc2.stroke();
        }
    }
    RHT.Sun = Sun;
    class Tree extends baseStats {
        draw() {
            RHT.crc2.fillStyle = this.color;
            RHT.crc2.strokeStyle = this.color;
            RHT.crc2.lineWidth = 2;
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(this.x + 5, this.y + 10);
            RHT.crc2.lineTo(this.x - 5, this.y + 10);
            RHT.crc2.lineTo(this.x - 5, this.y - 20);
            RHT.crc2.lineTo(this.x + 5, this.y - 20);
            RHT.crc2.closePath();
            RHT.crc2.fill();
            RHT.crc2.stroke();
            RHT.crc2.fillStyle = this.color2;
            RHT.crc2.strokeStyle = this.color2;
            RHT.crc2.lineWidth = 2;
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(this.x - 15, this.y - 21);
            RHT.crc2.lineTo(this.x, this.y - 45);
            RHT.crc2.lineTo(this.x + 15, this.y - 21);
            RHT.crc2.closePath();
            RHT.crc2.fill();
            RHT.crc2.stroke();
        }
    }
    RHT.Tree = Tree;
    class Background extends baseStats {
        draw() {
            let width = RHT.crc2.canvas.width;
            let height = RHT.crc2.canvas.height;
            RHT.crc2.fillStyle = "#206dc5";
            RHT.crc2.strokeStyle = "#206dc5";
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(0, 0);
            RHT.crc2.lineTo(width, 0);
            RHT.crc2.lineTo(width, height);
            RHT.crc2.lineTo(0, height);
            RHT.crc2.closePath();
            RHT.crc2.fill();
            RHT.crc2.stroke();
            RHT.crc2.fillStyle = "#dcdcdc";
            RHT.crc2.strokeStyle = "#dcdcdc";
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(0, height - 100);
            RHT.crc2.lineTo(width, 150);
            RHT.crc2.lineTo(width, height);
            RHT.crc2.lineTo(0, height);
            RHT.crc2.closePath();
            RHT.crc2.fill();
            RHT.crc2.stroke();
        }
    }
    RHT.Background = Background;
    class Snowflakes extends movement {
        draw() {
            RHT.crc2.strokeStyle = "#ffffff";
            RHT.crc2.lineWidth = 2;
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(this.x, this.y - 4);
            RHT.crc2.lineTo(this.x, this.y + 4);
            RHT.crc2.closePath;
            RHT.crc2.stroke();
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(this.x - 4, this.y);
            RHT.crc2.lineTo(this.x + 4, this.y);
            RHT.crc2.closePath;
            RHT.crc2.stroke();
        }
        move() {
            if (this.y >= RHT.crc2.canvas.height) {
                this.y = 0;
            }
            else {
                this.y += this.dy;
            }
        }
    }
    RHT.Snowflakes = Snowflakes;
    class snowball extends baseStats {
        move() {
        }
        draw() {
            if (this.timer >= 0) {
                console.log(">=0");
                RHT.crc2.fillStyle = "#ffffff";
                RHT.crc2.strokeStyle = "#ffffff";
                RHT.crc2.lineWidth = 1;
                RHT.crc2.beginPath();
                RHT.crc2.moveTo(this.x, this.y);
                RHT.crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                RHT.crc2.closePath();
                RHT.crc2.fill();
                RHT.crc2.stroke();
                this.timer--;
            }
        }
        checkIfHitDown(_x, _y) {
            RHT.crc2.lineWidth = 5;
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(_x, _y);
            RHT.crc2.lineTo(_x - 7, _y + 2);
            RHT.crc2.moveTo(_x, _y);
            RHT.crc2.lineTo(_x - 6, _y + 4);
            RHT.crc2.moveTo(_x, _y);
            RHT.crc2.lineTo(_x, _y - 15);
            RHT.crc2.arc(_x, _y - 15, 15, 0, 2 * Math.PI);
            RHT.crc2.moveTo(_x, _y - 10);
            RHT.crc2.lineTo(_x - 6, _y + 2);
            RHT.crc2.moveTo(_x, _y - 12);
            RHT.crc2.lineTo(_x - 7, _y - 2);
            RHT.crc2.moveTo(_x + 8, _y + 5);
            RHT.crc2.lineTo(_x - 10, _y + 7);
            RHT.crc2.moveTo(_x + 4, _y + 6);
            RHT.crc2.lineTo(_x + 3, _y + 12);
            RHT.crc2.moveTo(_x - 6, _y + 7);
            RHT.crc2.lineTo(_x - 8, _y + 14);
            RHT.crc2.moveTo(_x + 8, _y + 12);
            RHT.crc2.lineTo(_x - 10, _y + 15);
            RHT.crc2.closePath();
            console.log("bum");
            if (RHT.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        checkIfHitUp(_x, _y) {
            RHT.crc2.lineWidth = 50;
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(_x, _y);
            RHT.crc2.lineTo(_x - 2, _y + 7);
            RHT.crc2.moveTo(_x, _y);
            RHT.crc2.lineTo(_x + 1, _y + 8);
            RHT.crc2.moveTo(_x, _y);
            RHT.crc2.lineTo(_x, _y - 15);
            RHT.crc2.arc(_x, _y - 15, 15, 0, 2 * Math.PI);
            RHT.crc2.moveTo(_x, _y - 10);
            RHT.crc2.lineTo(_x - 6, _y + 2);
            RHT.crc2.moveTo(_x, _y - 12);
            RHT.crc2.lineTo(_x - 7, _y - 2);
            RHT.crc2.moveTo(_x - 8, _y + 5);
            RHT.crc2.lineTo(_x - 28, _y + 7);
            RHT.crc2.moveTo(_x - 12, _y + 6);
            RHT.crc2.lineTo(_x - 15, _y + 12);
            RHT.crc2.moveTo(_x - 22, _y + 7);
            RHT.crc2.lineTo(_x - 25, _y + 14);
            RHT.crc2.moveTo(_x - 8, _y + 12);
            RHT.crc2.lineTo(_x - 30, _y + 15);
            RHT.crc2.closePath();
            console.log("bum");
            if (RHT.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    RHT.snowball = snowball;
    class children extends movement {
        draw() {
            if (this.state == "ridedown") {
                this.drawChildDown();
            }
            if (this.state == "dead") {
                this.drawChildDead();
            }
            if (this.state == "pullup") {
                this.drawChildUp();
            }
        }
        drawChildDead() {
            RHT.crc2.fillStyle = "#000000";
            RHT.crc2.strokeStyle = "#000000";
            RHT.crc2.lineWidth = 1;
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(this.x + 8, this.y + 5);
            RHT.crc2.lineTo(this.x - 10, this.y + 7);
            RHT.crc2.moveTo(this.x + 4, this.y + 6);
            RHT.crc2.lineTo(this.x + 3, this.y + 12);
            RHT.crc2.moveTo(this.x - 6, this.y + 7);
            RHT.crc2.lineTo(this.x - 8, this.y + 14);
            RHT.crc2.moveTo(this.x + 8, this.y + 12);
            RHT.crc2.lineTo(this.x - 10, this.y + 15);
            RHT.crc2.closePath();
            RHT.crc2.fill();
            RHT.crc2.stroke();
        }
        drawChildDown() {
            RHT.crc2.fillStyle = "#000000";
            RHT.crc2.strokeStyle = "#000000";
            RHT.crc2.lineWidth = 1;
            this.drawPath(this.x, this.y);
            RHT.crc2.fill();
            RHT.crc2.stroke();
        }
        drawChildUp() {
            RHT.crc2.fillStyle = "#000000";
            RHT.crc2.strokeStyle = "#000000";
            RHT.crc2.lineWidth = 1;
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(this.x, this.y);
            RHT.crc2.lineTo(this.x - 2, this.y + 7);
            RHT.crc2.moveTo(this.x, this.y);
            RHT.crc2.lineTo(this.x + 1, this.y + 8);
            RHT.crc2.moveTo(this.x, this.y);
            RHT.crc2.lineTo(this.x, this.y - 15);
            RHT.crc2.arc(this.x, this.y - 15, 2, 0, 2 * Math.PI);
            RHT.crc2.moveTo(this.x, this.y - 10);
            RHT.crc2.lineTo(this.x - 6, this.y + 2);
            RHT.crc2.moveTo(this.x, this.y - 12);
            RHT.crc2.lineTo(this.x - 7, this.y - 2);
            RHT.crc2.moveTo(this.x - 8, this.y + 5);
            RHT.crc2.lineTo(this.x - 28, this.y + 7);
            RHT.crc2.moveTo(this.x - 12, this.y + 6);
            RHT.crc2.lineTo(this.x - 15, this.y + 12);
            RHT.crc2.moveTo(this.x - 22, this.y + 7);
            RHT.crc2.lineTo(this.x - 25, this.y + 14);
            RHT.crc2.moveTo(this.x - 8, this.y + 12);
            RHT.crc2.lineTo(this.x - 30, this.y + 15);
            RHT.crc2.closePath();
            RHT.crc2.fill();
            RHT.crc2.stroke();
        }
        move() {
            if (this.state == "ridedown") {
                if (this.x < 0 || this.y > RHT.crc2.canvas.height) {
                    this.state = "pullup";
                }
            }
            if (this.state == "pullup" && this.x > RHT.crc2.canvas.width) {
                this.state = "ridedown";
            }
            if (this.state == "pullup") {
                this.x -= (this.dx / 2);
                this.y -= (this.dy / 2);
            }
            if (this.state == "ridedown" || this.state == "dead") {
                this.x += this.dx;
                this.y += this.dy;
            }
        }
        getSpeed() {
            if (this.state == "ridedown") {
                return Math.floor(this.dx * this.dy * -1 * 200);
            }
            if (this.state == "pullup") {
                return Math.floor(this.dx * this.dy * -1 * 100);
            }
        }
        drawPath(_x, _y) {
            RHT.crc2.beginPath();
            RHT.crc2.moveTo(_x, _y);
            RHT.crc2.lineTo(_x - 7, _y + 2);
            RHT.crc2.moveTo(_x, _y);
            RHT.crc2.lineTo(_x - 6, _y + 4);
            RHT.crc2.moveTo(_x, _y);
            RHT.crc2.lineTo(_x, _y - 15);
            RHT.crc2.arc(_x, _y - 15, 2, 0, 2 * Math.PI);
            RHT.crc2.moveTo(_x, _y - 10);
            RHT.crc2.lineTo(_x - 6, _y + 2);
            RHT.crc2.moveTo(_x, _y - 12);
            RHT.crc2.lineTo(_x - 7, _y - 2);
            RHT.crc2.moveTo(_x + 8, _y + 5);
            RHT.crc2.lineTo(_x - 10, _y + 7);
            RHT.crc2.moveTo(_x + 4, _y + 6);
            RHT.crc2.lineTo(_x + 3, _y + 12);
            RHT.crc2.moveTo(_x - 6, _y + 7);
            RHT.crc2.lineTo(_x - 8, _y + 14);
            RHT.crc2.moveTo(_x + 8, _y + 12);
            RHT.crc2.lineTo(_x - 10, _y + 15);
            RHT.crc2.closePath();
        }
    }
    RHT.children = children;
})(RHT || (RHT = {}));
//# sourceMappingURL=classes.js.map