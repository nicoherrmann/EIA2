/* Aufgabe: Aufgabe 2 - DynHTML-Uno
Name: Nico Herrmann
Matrikel: 259242
Datum: 26.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var unonew;
(function (unonew) {
    let allcards = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rA", "rA", "r+2", "r+2", "rR", "rR", "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gA", "gA", "g+2", "g+2", "gR", "gR", "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bA", "bA", "b+2", "b+2", "bR", "bR", "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yA", "yA", "y+2", "y+2", "yR", "yR", "k+4", "k+4", "k+4", "k+4", "kF", "kF", "kF", "kF"];
    function main() {
        let numCards = parseInt(prompt("Wie viele Karten pro Spieler?"));
        if (numCards > 10 || numCards < 5) {
            numCards = 6;
        }
        for (let i = 0; i < numCards; i++) {
            let randomCardnum = random(allcards.length);
            placeCard(allcards[randomCardnum], i);
            allcards.splice(randomCardnum, 1);
        }
    }
    function random(_maxnum) {
        return Math.floor(Math.random() * Math.floor(_maxnum));
    }
    function placeCard(_karte, _forint) {
        let color = _karte.substr(0, 1);
        let colordiv;
        switch (color) {
            case "r":
                colordiv = "#ff0000";
                break;
            case "g":
                colordiv = "#00ff00";
                break;
            case "b":
                colordiv = "#0000ff";
                break;
            case "y":
                colordiv = "#ffff00";
                break;
            case "k":
                colordiv = "#000000";
                break;
        }
        let name = _karte.substr(1);
        let div = document.createElement("div");
        document.getElementById("main").appendChild(div);
        div.setAttribute("id", "a" + _forint);
        document.getElementById("a" + _forint).innerHTML += name;
        let s = div.style;
        s.backgroundColor = colordiv;
        if (colordiv == "#0000ff" || colordiv == "#000000") {
            s.color = "#ffffff";
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(unonew || (unonew = {}));
//# sourceMappingURL=uno.js.map