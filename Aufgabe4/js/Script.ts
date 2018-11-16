/* Aufgabe: Aufgabe 4: Weihnachtsbaumkonfigurator
Name: Nico Herrmann
Matrikel: 259242
Datum: 16.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace WBKonfig {

    window.addEventListener("load", init);

    let gesPrice: number = 0;
    let cmbPrice: number;
    let lamPrice: number;
    let cndlPrice: number;
    let treePrice: number;
    let holderPrice: number;
    let shipmentPrice: number;

    let cbNum: number;
    let lamettaNum: number;
    let candleNum: number;


    function init(): void {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
    }

    function fillFieldset(): void {
        let node: HTMLElement = document.getElementsByTagName("fieldset")[0];
        let HTML: string = "";
        HTML += "<h2>Weihnachtskugeln:</h2>";
        HTML += "<select id=christmasBall name=ChristmasBalls>";
        HTML += "<option value=0 selected></option>";
        for (let i: number = 0; i < christmasBall.length; i++) {
            HTML += "<option value=";
            HTML += "CMB" + i;
            HTML += ">";
            HTML += christmasBall[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=CMBAnzahl name=anzahl>";
        HTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 35; i += 5) {
            HTML += "<option value=CMBnum";
            HTML += i;
            HTML += " id=CBMnum";
            HTML += i;
            HTML += ">";
            HTML += i;
            HTML += "</option>";
        }
        HTML += "</select>";

        HTML += "<h2>Lametta:</h2>";
        HTML += "<select id=lametta name=Lametta>";
        HTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < lametta.length; i++) {
            HTML += "<option value=";
            HTML += "lam" + i;
            HTML += ">";
            HTML += lametta[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=lamettaAnzahl name=anzahl>";
        HTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 60; i += 10) {
            HTML += "<option value=lamettanum";
            HTML += i;
            HTML += " id=lamettanum";
            HTML += i;
            HTML += ">";
            HTML += i;
            HTML += "</option>";
        }
        HTML += "</select>";

        HTML += "<h2>Kerzen:</h2>";
        HTML += "<select id=candle name=Candle>";
        HTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < candle.length; i++) {
            HTML += "<option value=";
            HTML += "cndl" + i;
            HTML += ">";
            HTML += candle[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=candleAnzahl name=anzahl>";
        HTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < 22; i += 2) {
            HTML += "<option value=candlenum";
            HTML += i;
            HTML += " id=candlenum";
            HTML += i;
            HTML += ">";
            HTML += i;
            HTML += "</option>";
        }
        HTML += "</select>";

        HTML += "<h2>Weihnachtsbaum:</h2>";
        HTML += "<select id=tree name=Tree>";
        HTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < tree.length; i++) {
            HTML += "<option value=";
            HTML += "tree" + i;
            HTML += ">";
            HTML += tree[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";

        HTML += "<h2>Halter:</h2>";
        HTML += "<input id=ja type=radio name=Radiogroup value=ja>";
        HTML += "<label for=ja>Ja</label>";
        HTML += "<input id=nein type=radio name=Radiogroup value=nein>";
        HTML += "<label for=nein>Nein</label>";
        HTML += "<br>";
        HTML += "<select id=holder name=Holder>";
        HTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < holder.length; i++) {
            HTML += "<option value=hld";
            HTML += i;
            HTML += ">";
            HTML += holder[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";

        HTML += "<h2>Versand:</h2>";
        HTML += "<p>Express-Lieferung</p>";
        HTML += "<input id=ja1 type=radio name=Radiogroup1 value=ja1>";
        HTML += "<label for=ja1>Ja</label>";
        HTML += "<input id=nein1 type=radio name=Radiogroup1 value=nein1>";
        HTML += "<label for=nein1>Nein</label>";
        HTML += "<br>";
        HTML += "<select id=shipment name=Shipment>";
        HTML += "<option value=clear selected></option>";
        for (let i: number = 0; i < shipment.length; i++) {
            HTML += "<option value=";
            HTML += "shipment" + i;
            HTML += ">";
            HTML += shipment[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h2>Adresse:</h2>";
        HTML += "<input id=adressID type=text name=Text placeholder=Adresse>";

        node.innerHTML += HTML;

    }

    function calcPrice(): void {
        
        let cBallsCalc: number = 0;
        let lamettaCalc: number = 0;
        let candleCalc: number = 0;
        
        if (cmbPrice > 0 || cbNum > 0) {
        cBallsCalc = cmbPrice * cbNum;
            }
        
        if (lamPrice > 0 || lamettaNum > 0) {
        lamettaCalc = lamPrice * lamettaNum;
            }
        
        if (cndlPrice > 0 || candleNum > 0) {
        candleCalc = cndlPrice * candleNum;
            }
        
        console.log(cBallsCalc);
        
        

        gesPrice = 0;
        if (cBallsCalc > 0) {
            gesPrice += cBallsCalc;
        }
        if (lamettaCalc > 0) {
            gesPrice += lamettaCalc;
        }
        if (candleCalc > 0) {
            gesPrice += candleCalc;
        }
        if (treePrice > 0) {
            gesPrice += treePrice;
        }
        if (holderPrice > 0) {
            gesPrice += holderPrice;
        }
        if (shipmentPrice > 0) {
            gesPrice += shipmentPrice;
        }

        let HTML: string = "";
        HTML += gesPrice;
        
        
        document.getElementById("price").innerHTML = HTML;
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);
        console.log(target.id);


        if (target.id == "christmasBall") {
            let convertedString: string = target.value.substr(3);
            let index: number = Number(convertedString);
            let HTML: string = "<p id=GKcolor>";
            HTML += christmasBall[index].name;
            HTML += "</p>";
            cmbPrice = christmasBall[index].price;
            let node: HTMLElement = document.getElementById("co1");
            node.innerHTML = HTML;
        }

        if (target.id == "CMBAnzahl") {
            cbNum = Number(target.value.substr(6));
            let HTML: string = "";
            HTML = "<p id=GKnum value=";
            HTML += target.value.substr(6);
            HTML += ">";
            HTML += target.value.substr(6);
            HTML += "</p>";
            let node: HTMLElement = document.getElementById("co2");
            node.innerHTML = HTML;
        }

        if (target.id == "lametta") {
            let convertedString: string = target.value.substr(3);
            let index: number = Number(convertedString);
            let HTML: string = lametta[index].name;
            lamPrice = lametta[index].price;
            let node: HTMLElement = document.getElementById("Lcolor");
            node.innerHTML = HTML;
        }

        if (target.id == "lamettaAnzahl") {
            lamettaNum = Number(target.value.substr(10));
            let HTML: string = "";
            HTML = target.value.substr(10);
            let node: HTMLElement = document.getElementById("Lnum");
            node.innerHTML = HTML;
        }

        if (target.id == "candle") {
            let convertedString: string = target.value.substr(4);
            let index: number = Number(convertedString);
            let HTML: string = candle[index].name;
            cndlPrice = candle[index].price;
            let node: HTMLElement = document.getElementById("CNDLcolor");
            node.innerHTML = HTML;
        }

        if (target.id == "candleAnzahl") {
            candleNum = Number(target.value.substr(9));
            let HTML: string = "";
            HTML = target.value.substr(9);
            let node: HTMLElement = document.getElementById("CNDLnum");
            node.innerHTML = HTML;
        }

        if (target.id == "tree") {
            let convertedString: string = target.value.substr(4);
            let index: number = Number(convertedString);
            let HTML: string = tree[index].name;
            treePrice = tree[index].price;
            let node: HTMLElement = document.getElementById("christtree");
            node.innerHTML = HTML;
        }

        if (target.id == "ja") {
            let HTML: string = "Ja";
            let node: HTMLElement = document.getElementById("HolderYN");
            node.innerHTML = HTML;
        }

        if (target.id == "nein") {
            let HTML: string = "Nein";
            let node: HTMLElement = document.getElementById("HolderYN");
            node.innerHTML = HTML;
        }

        if (target.id == "holder") {
            let convertedString: string = target.value.substr(3);
            let index: number = Number(convertedString);
            let HTML: string = holder[index].name;
            holderPrice = holder[index].price;
            let node: HTMLElement = document.getElementById("HolderCheckout");
            node.innerHTML = HTML;
        }

        if (target.id == "ja1") {
            let HTML: string = "Ja";
            let node: HTMLElement = document.getElementById("express");
            node.innerHTML = HTML;
        }

        if (target.id == "nein1") {
            let HTML: string = "Nein";
            let node: HTMLElement = document.getElementById("express");
            node.innerHTML = HTML;
        }

        if (target.id == "shipment") {
            let convertedString: string = target.value.substr(8);
            console.log(convertedString);
            let index: number = Number(convertedString);
            let HTML: string = shipment[index].name;
            shipmentPrice = shipment[index].price;
            let node: HTMLElement = document.getElementById("shipmentCheckout");
            node.innerHTML = HTML;
        }

        if (target.id == "adressID") {
            let HTML: string = "";
            HTML += target.value;
            let node: HTMLElement = document.getElementById("adress");
            node.innerHTML = HTML;
        }

        calcPrice();
    }
}
