/* Aufgabe: Aufgabe 3: Events-Uno
Name: Nico Herrmann
Matrikel: 259242
Datum: 07.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var unonew;
(function (unonew) {
    let allcards = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rA", "rA", "r+2", "r+2", "rR", "rR", "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gA", "gA", "g+2", "g+2", "gR", "gR", "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bA", "bA", "b+2", "b+2", "bR", "bR", "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yA", "yA", "y+2", "y+2", "yR", "yR", "k+4", "k+4", "k+4", "k+4", "kF", "kF", "kF", "kF"];
    let hand = [];
    let ablage = [];
    function setup() {
        let node = document.getElementById("hand");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        let div = document.createElement("div");
        div.setAttribute("id", "hand");
        document.getElementsByTagName("body")[0].appendChild(div);
    }
    function setupAblage() {
        let node = document.getElementById("ablage");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        let div = document.createElement("div");
        div.setAttribute("id", "ablage");
        document.getElementsByTagName("body")[0].appendChild(div);
    }
    function drawCard(_cards) {
        if (allcards.length > 0) {
            for (let i = 0; i < _cards; i++) {
                let randomCardnum = random(allcards.length);
                let card = allcards.splice(randomCardnum, 1)[0];
                hand.push(card);
            }
        }
    }
    function drawCardEvent() {
        drawCard(1);
        setup();
        placeCard(hand);
    }
    function drawCardSpace(_event) {
        var keyCode = _event.keyCode;
        if (keyCode == 32) {
            drawCard(1);
            setup();
            placeCard(hand);
        }
    }
    function sort() {
        hand.sort();
        setup();
        placeCard(hand);
    }
    function spielen(_event) {
        _event.preventDefault();
        let handcard = document.getElementById("hand");
        let domCard = _event.target;
        if (domCard != handcard) {
            let index;
            let domAttribute = domCard.getAttribute("id");
            domAttribute = domAttribute.substr(1);
            index = parseInt(domAttribute);
            let card = hand.splice(index, 1)[0];
            ablage.push(card);
            setup();
            placeCard(hand);
            setupAblage();
            playCard2(ablage);
        }
    }
    function main() {
        document.getElementById("nachzieh").addEventListener("click", drawCardEvent);
        document.getElementById("sort").addEventListener("click", sort);
        document.addEventListener("keydown", drawCardSpace);
        let numCards = parseInt(prompt("Wie viele Karten pro Spieler?"));
        if (numCards <= 0) {
            numCards = 5;
        }
        else if (numCards > 108) {
            numCards = 108;
        }
        setup();
        drawCard(numCards);
        placeCard(hand);
    }
    function random(_maxnum) {
        return Math.floor(Math.random() * Math.floor(_maxnum));
    }
    function placeCard(_array) {
        document.getElementById("hand").addEventListener("click", spielen);
        for (let iPlace = 0; iPlace < _array.length; iPlace++) {
            let color = _array[iPlace].substr(0, 1);
            let colordiv;
            if (color == "r") {
                colordiv = "#ff0000";
            }
            else if (color == "g") {
                colordiv = "#00ff00";
            }
            else if (color == "b") {
                colordiv = "#0000ff";
            }
            else if (color == "y") {
                colordiv = "#ffff00";
            }
            else if (color == "k") {
                colordiv = "#000000";
            }
            let name = _array[iPlace].substr(1);
            let div = document.createElement("div");
            // document.createElement("div");
            document.getElementById("hand").appendChild(div);
            div.setAttribute("id", "a" + iPlace);
            document.getElementById("a" + iPlace).innerHTML += name;
            let s = div.style;
            s.backgroundColor = colordiv;
            if (colordiv == "#0000ff" || colordiv == "#000000") {
                s.color = "#ffffff";
            }
        }
    }
    function playCard2(_array) {
        let _card2 = _array[_array.length - 1];
        //console.log(_card2);
        let color = _card2.substr(0, 1);
        let colordiv;
        //console.log(_card2);
        if (color == "r") {
            colordiv = "#ff0000";
        }
        else if (color == "g") {
            colordiv = "#00ff00";
        }
        else if (color == "b") {
            colordiv = "#0000ff";
        }
        else if (color == "y") {
            colordiv = "#ffff00";
        }
        else if (color == "k") {
            colordiv = "#000000";
        }
        let name = _card2.substr(1);
        let div = document.createElement("div");
        // document.createElement("div");
        document.getElementById("ablage").appendChild(div);
        div.setAttribute("id", "showcard");
        document.getElementById("showcard").innerHTML += name;
        let s = div.style;
        s.backgroundColor = colordiv;
        if (colordiv == "#0000ff" || colordiv == "#000000") {
            s.color = "#ffffff";
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(unonew || (unonew = {}));
//# sourceMappingURL=uno.js.map