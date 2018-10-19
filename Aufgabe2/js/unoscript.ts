/* Aufgabe: Aufgabe 2
Name: Nico Herrmann
Matrikel: 259242
Datum: 19.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace uno { //Interface f¸r Karten
    interface Karte {
        name: string;
        rot: number;
        gelb: number;
        gruen: number;
        blau: number;
    }
    let k0: Karte = {
        name: "0",
        rot: 1,
        gelb: 1,
        gruen: 1,
        blau: 1,
    }

    let k1: Karte = {
        name: "1",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k2: Karte = {
        name: "2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k3: Karte = {
        name: "3",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k4: Karte = {
        name: "4",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k5: Karte = {
        name: "5",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k6: Karte = {
        name: "6",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k7: Karte = {
        name: "7",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k8: Karte = {
        name: "8",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k9: Karte = {
        name: "9",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k10: Karte = {
        name: "R",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k11: Karte = {
        name: "+2",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let k12: Karte = {
        name: "A",
        rot: 2,
        gelb: 2,
        gruen: 2,
        blau: 2,
    }

    let s1: number = 4; //Schwarze +4
    let s2: number = 4; //Schwarze Farbwahl

    let c: string = ""; //Farbcode

    let AlleKarten = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12] //Array
    /*   FUNKTIONEN           */
    function random(_n: number): number { //Random wert von 0 bis _n
        return Math.floor(Math.random() * Math.floor(_n));
    }



    function placeDiv(_color: string, _n: string, _x: number): void {
        //let text: string = "div id=a";
        //text += _x;
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _x) //div ID in Abh‰ngigkeit von _x (aktuelle Karte die gegeben wird)

        document.getElementById("a" + _x).innerHTML += _n; //Bezeichnung der Karte als HTML in div
        //console.log(_color, _n, _x);
        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 50 + "px";
        s.height = 130 + "px";
        s.left = (_x + 0.5) * 100 + "px";
        s.bottom = 40 + "px";
        


        if (_color == "#000000") { //Wenn Hintergrund Schwarz -> Schrift weiﬂ
            s.color = "white";
        }

        if (_color == "#0000ff") { //Wenn Hintergrund Blau -> Schrift weiﬂ
            s.color = "white";
        }
    }


    /*   FUNKTIONEN ENDE  */
    function main(): void {
        let z: number;
        let i: string = prompt("Wie viele Karten pro Spieler?");
        z = Number(i);
        for (let d: number = 0; d < z; d++) { //d = aktuelle Karte die gegeben wird
            let l: number = random(15); //l = Zufallswert von 0-14 (alle Karten)
            if (l == 13 && s1 > 0) { //Wenn l = 13 & s1 > 0 dann generiere schwarze +4
                c = "#000000";
                s1--;
                placeDiv(c, "+4", d);
                continue;

            }
            else if (l == 13 && s1 <= 0) { //Wenn l = 13 & s1 <= 0 dann continue (d--) da sonst Karte ¸bersprungen
                d--;
                continue;
            }
            else {
                if (l == 14 && s2 > 0) { //Wenn l = 14 & s2 > 0 dann generiere schwarze Farbwahl
                    c = "#000000";
                    s2--;
                    placeDiv(c, "F", d);
                    continue;
                }
                else if (l == 14 && s2 <= 0) { //Wenn l = 14 & s2 <= 0 dann continue (d-- da sonst Karte ¸bersprungen)
                    d--;
                    continue;
                }
                else { //Wenn l =/= 13 || 14 dann vergebe Farbe an Kartenwert
                    let r: number = random(4); //random Zahl von 0-3 jeweils eine Farbe
                    switch (r) {
                        case 0: //Wenn r = 0 dann rote Farbe
                            c = "#ff0000"; //rot
                            if (AlleKarten[l].rot > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].rot--;
                                continue;
                            }
                            else { //Wenn Kombination aus Wert und Farbe <= 0 dann continue (d-- da sonst Karte ¸bersprungen)
                                d--;
                                continue;
                            }
                        case 1: //Wenn r = 1 dann gr¸ne Farbe
                            c = "#00ff00"; //gr¸n
                            if (AlleKarten[l].gruen > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].gruen--;
                                continue;
                            }
                            else { //Wenn Kombination aus Wert und Farbe <= 0 dann continue (d-- da sonst Karte ¸bersprungen)
                                d--;
                                continue;
                            }
                        case 2: //Wenn r = 2 dann blaue Farbe
                            c = "#0000ff"; //blau
                            if (AlleKarten[l].blau > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].blau--;
                                continue;
                            }
                            else { //Wenn Kombination aus Wert und Farbe <= 0 dann continue (d-- da sonst Karte ¸bersprungen)
                                d--;
                                continue;
                            }
                        case 3: //Wenn r = 3 dann gelbe Farbe
                            c = "#ffff00"; //gelb
                            if (AlleKarten[l].gelb > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].gelb--;
                                continue;
                            }
                            else { //Wenn Kombination aus Wert und Farbe <= 0 dann continue (d-- da sonst Karte ¸bersprungen)
                                d--;
                                continue;
                            }
                    }
                }


            }

        }

        function Stapel(_n: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            //div.setAttribute("id", "a"+_    
            //document.getElementById("a" + _x).innerHTML += _n;
            //console.log(_color,_n,_x);
            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = "#f0f0f0";
            s.width = 50 + "px";
            s.height = 130 + "px";
            s.left = (_n + 0.5) * 20 + "px";
            s.top = (_n + 0.5) * 10 + "px";
        }

        function Ablage(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage")

            document.getElementById("Ablage").innerHTML += "Ablage";
            //console.log(_color,_n,_x);
            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = "white";
            s.width = 70 + "px";
            s.height = 150 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }

        for (let i: number = 0; i < 3; i++) {
            Stapel(i);
        }

        Ablage();
    }
    document.addEventListener('DOMContentLoaded',main);
}
