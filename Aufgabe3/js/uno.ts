/* Aufgabe: Aufgabe 3: Events-Uno
Name: Nico Herrmann
Matrikel: 259242
Datum: 07.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace unonew {
    let allcards: string[] = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "rA", "rA", "r+2", "r+2", "rR", "rR", "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "gA", "gA", "g+2", "g+2", "gR", "gR", "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "bA", "bA", "b+2", "b+2", "bR", "bR", "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "yA", "yA", "y+2", "y+2", "yR", "yR", "k+4", "k+4", "k+4", "k+4", "kF", "kF", "kF", "kF"];
    let hand: string[] = [];
    let ablage: string[] = [];





    function setup(): void {
        let node: HTMLElement = document.getElementById("hand");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }

        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("id", "hand");
        document.getElementsByTagName("body")[0].appendChild(div);
    }

    function setupAblage(): void {
        let node: HTMLElement = document.getElementById("ablage");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }

        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("id", "ablage");
        document.getElementsByTagName("body")[0].appendChild(div);
    }

    function drawCard(_cards: number): void {
        if (allcards.length > 0) {
            for (let i: number = 0; i < _cards; i++) {

                let randomCardnum: number = random(allcards.length);
                let card: string = allcards.splice(randomCardnum, 1)[0];
                hand.push(card);
            }
        }
    }

    function drawCardEvent(): void {
        drawCard(1);
        setup();
        placeCard(hand);
    }

    function drawCardSpace(_event: KeyboardEvent): void {
        var keyCode: number = _event.keyCode;
        if (keyCode == 32) {
            drawCard(1);
            setup();
            placeCard(hand);
        }
    }

    function sort(): void {
        hand.sort();
        setup();
        placeCard(hand);
    }

    function spielen(_event: MouseEvent): void {


        _event.preventDefault();
        let handcard: HTMLElement = document.getElementById("hand");
        let domCard: HTMLElement = <HTMLElement>_event.target;
        if (domCard != handcard) {
            let index: number;
            let domAttribute: string = domCard.getAttribute("id");
            domAttribute = domAttribute.substr(1);
            index = parseInt(domAttribute);
            let card: string = hand.splice(index, 1)[0];
            ablage.push(card);
            setup();
            placeCard(hand);
            setupAblage();
            playCard2(ablage);
        }
    }

    function main(): void {
        document.getElementById("nachzieh").addEventListener("click", drawCardEvent);
        document.getElementById("sort").addEventListener("click", sort);
        document.addEventListener("keydown", drawCardSpace);


        let numCards: number = parseInt(prompt("Wie viele Karten pro Spieler?"));

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
    function random(_maxnum: number): number {
        return Math.floor(Math.random() * Math.floor(_maxnum));
    }
    function placeCard(_array: string[]): void {
        document.getElementById("hand").addEventListener("click", spielen);
        for (let iPlace: number = 0; iPlace < _array.length; iPlace++) {
            let color: string = _array[iPlace].substr(0, 1);
            let colordiv: string;

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


            let name: string = _array[iPlace].substr(1);
            let div: HTMLDivElement = document.createElement("div");
            // document.createElement("div");
            document.getElementById("hand").appendChild(div);
            div.setAttribute("id", "a" + iPlace);
            document.getElementById("a" + iPlace).innerHTML += name;

            let s: CSSStyleDeclaration = div.style;
            s.backgroundColor = colordiv;
            if (colordiv == "#0000ff" || colordiv == "#000000") {
                s.color = "#ffffff";
            }
        }
    }

    function playCard2(_array: string[]): void {

        let _card2: string = _array[_array.length - 1];
        //console.log(_card2);
        let color: string = _card2.substr(0, 1);
        let colordiv: string;
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


        let name: string = _card2.substr(1);
        let div: HTMLDivElement = document.createElement("div");
        // document.createElement("div");
        document.getElementById("ablage").appendChild(div);
        div.setAttribute("id", "showcard");
        document.getElementById("showcard").innerHTML += name;

        let s: CSSStyleDeclaration = div.style;
        s.backgroundColor = colordiv;
        if (colordiv == "#0000ff" || colordiv == "#000000") {
            s.color = "#ffffff";
        }
    }

    document.addEventListener("DOMContentLoaded", main);
}