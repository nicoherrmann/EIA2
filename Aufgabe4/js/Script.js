/* Aufgabe: Aufgabe 4: Weihnachtsbaumkonfigurator
Name: Nico Herrmann
Matrikel: 259242
Datum: 16.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var WBKonfig;
(function (WBKonfig) {
    window.addEventListener("load", init);
    let gesPrice = 0;
    let cmbPrice;
    let lamPrice;
    let cndlPrice;
    let treePrice;
    let holderPrice;
    let shipmentPrice;
    let cbNum;
    let lamettaNum;
    let candleNum;
    function init() {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
    }
    function fillFieldset() {
        let node = document.getElementsByTagName("fieldset")[0];
        let HTML = "";
        HTML += "<h2>Weihnachtskugeln:</h2>";
        HTML += "<select id=christmasBall name=ChristmasBalls>";
        HTML += "<option value=0 selected></option>";
        for (let i = 0; i < WBKonfig.christmasBall.length; i++) {
            HTML += "<option value=";
            HTML += "CMB" + i;
            HTML += ">";
            HTML += WBKonfig.christmasBall[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=CMBAnzahl name=anzahl>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < 35; i += 5) {
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
        for (let i = 0; i < WBKonfig.lametta.length; i++) {
            HTML += "<option value=";
            HTML += "lam" + i;
            HTML += ">";
            HTML += WBKonfig.lametta[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=lamettaAnzahl name=anzahl>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < 60; i += 10) {
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
        for (let i = 0; i < WBKonfig.candle.length; i++) {
            HTML += "<option value=";
            HTML += "cndl" + i;
            HTML += ">";
            HTML += WBKonfig.candle[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=candleAnzahl name=anzahl>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < 22; i += 2) {
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
        for (let i = 0; i < WBKonfig.tree.length; i++) {
            HTML += "<option value=";
            HTML += "tree" + i;
            HTML += ">";
            HTML += WBKonfig.tree[i].name;
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
        for (let i = 0; i < WBKonfig.holder.length; i++) {
            HTML += "<option value=hld";
            HTML += i;
            HTML += ">";
            HTML += WBKonfig.holder[i].name;
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
        for (let i = 0; i < WBKonfig.shipment.length; i++) {
            HTML += "<option value=";
            HTML += "shipment" + i;
            HTML += ">";
            HTML += WBKonfig.shipment[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h2>Adresse:</h2>";
        HTML += "<input id=adressID type=text name=Text placeholder=Adresse>";
        node.innerHTML += HTML;
    }
    function calcPrice() {
        let cBallsCalc = 0;
        let lamettaCalc = 0;
        let candleCalc = 0;
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
        let HTML = "";
        HTML += gesPrice;
        document.getElementById("price").innerHTML = HTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        console.log(target.id);
        if (target.id == "christmasBall") {
            let convertedString = target.value.substr(3);
            let index = Number(convertedString);
            let HTML = "<p id=GKcolor>";
            HTML += WBKonfig.christmasBall[index].name;
            HTML += "</p>";
            cmbPrice = WBKonfig.christmasBall[index].price;
            let node = document.getElementById("co1");
            node.innerHTML = HTML;
        }
        if (target.id == "CMBAnzahl") {
            cbNum = Number(target.value.substr(6));
            let HTML = "";
            HTML = "<p id=GKnum value=";
            HTML += target.value.substr(6);
            HTML += ">";
            HTML += target.value.substr(6);
            HTML += "</p>";
            let node = document.getElementById("co2");
            node.innerHTML = HTML;
        }
        if (target.id == "lametta") {
            let convertedString = target.value.substr(3);
            let index = Number(convertedString);
            let HTML = WBKonfig.lametta[index].name;
            lamPrice = WBKonfig.lametta[index].price;
            let node = document.getElementById("Lcolor");
            node.innerHTML = HTML;
        }
        if (target.id == "lamettaAnzahl") {
            lamettaNum = Number(target.value.substr(10));
            let HTML = "";
            HTML = target.value.substr(10);
            let node = document.getElementById("Lnum");
            node.innerHTML = HTML;
        }
        if (target.id == "candle") {
            let convertedString = target.value.substr(4);
            let index = Number(convertedString);
            let HTML = WBKonfig.candle[index].name;
            cndlPrice = WBKonfig.candle[index].price;
            let node = document.getElementById("CNDLcolor");
            node.innerHTML = HTML;
        }
        if (target.id == "candleAnzahl") {
            candleNum = Number(target.value.substr(9));
            let HTML = "";
            HTML = target.value.substr(9);
            let node = document.getElementById("CNDLnum");
            node.innerHTML = HTML;
        }
        if (target.id == "tree") {
            let convertedString = target.value.substr(4);
            let index = Number(convertedString);
            let HTML = WBKonfig.tree[index].name;
            treePrice = WBKonfig.tree[index].price;
            let node = document.getElementById("christtree");
            node.innerHTML = HTML;
        }
        if (target.id == "ja") {
            let HTML = "Ja";
            let node = document.getElementById("HolderYN");
            node.innerHTML = HTML;
        }
        if (target.id == "nein") {
            let HTML = "Nein";
            let node = document.getElementById("HolderYN");
            node.innerHTML = HTML;
        }
        if (target.id == "holder") {
            let convertedString = target.value.substr(3);
            let index = Number(convertedString);
            let HTML = WBKonfig.holder[index].name;
            holderPrice = WBKonfig.holder[index].price;
            let node = document.getElementById("HolderCheckout");
            node.innerHTML = HTML;
        }
        if (target.id == "ja1") {
            let HTML = "Ja";
            let node = document.getElementById("express");
            node.innerHTML = HTML;
        }
        if (target.id == "nein1") {
            let HTML = "Nein";
            let node = document.getElementById("express");
            node.innerHTML = HTML;
        }
        if (target.id == "shipment") {
            let convertedString = target.value.substr(8);
            console.log(convertedString);
            let index = Number(convertedString);
            let HTML = WBKonfig.shipment[index].name;
            shipmentPrice = WBKonfig.shipment[index].price;
            let node = document.getElementById("shipmentCheckout");
            node.innerHTML = HTML;
        }
        if (target.id == "adressID") {
            let HTML = "";
            HTML += target.value;
            let node = document.getElementById("adress");
            node.innerHTML = HTML;
        }
        calcPrice();
    }
})(WBKonfig || (WBKonfig = {}));
//# sourceMappingURL=Script.js.map