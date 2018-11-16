var WBKonfig;
(function (WBKonfig) {
    window.addEventListener("load", init);
    function init() {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
    }
    function fillFieldset() {
        let node = document.getElementsByTagName("fieldset")[0];
        let HTML = "";
        HTML += "<h2>Weihnachtskugeln:</h2>";
        HTML += "<select id=christmasBall name=ChristmasBalls>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < WBKonfig.christmasBall.length; i++) {
            HTML += "<option value=";
            HTML += WBKonfig.christmasBall[i].name;
            HTML += ">";
            HTML += WBKonfig.christmasBall[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=CMBAnzahl name=CMBNumber>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < 35; i += 5) {
            HTML += "<option value=CMBnum";
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
            HTML += WBKonfig.lametta[i].name;
            HTML += ">";
            HTML += WBKonfig.lametta[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=lamettaAnzahl name=LamettaNumber>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < 60; i += 10) {
            HTML += "<option value=lamettanum";
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
            HTML += WBKonfig.candle[i].name;
            HTML += ">";
            HTML += WBKonfig.candle[i].name;
            HTML += "</option>";
        }
        HTML += "</select>";
        HTML += "<h3>Anzahl:</h3>";
        HTML += "<select id=candleAnzahl name=CandleNumber>";
        HTML += "<option value=clear selected></option>";
        for (let i = 0; i < 22; i += 2) {
            HTML += "<option value=candlenum";
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
            HTML += WBKonfig.tree[i].name;
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
            HTML += "<option value=";
            HTML += WBKonfig.holder[i].name;
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
            HTML += WBKonfig.shipment[i].name;
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
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        console.log(target.id);
        if (target.id == "christmasBall") {
            let HTML = "";
            HTML += target.value;
            let num;
            num = Number(HTML);
            console.log(num);
            let node = document.getElementById("GKcolor");
            node.innerHTML = HTML;
        }
        if (target.id == "CMBAnzahl") {
            let HTML = "";
            HTML = target.value.substr(6);
            let node = document.getElementById("GKnum");
            node.innerHTML = HTML;
        }
        if (target.id == "lametta") {
            let HTML = "";
            HTML = target.value;
            let node = document.getElementById("Lcolor");
            node.innerHTML = HTML;
        }
        if (target.id == "lamettaAnzahl") {
            let HTML = "";
            HTML = target.value.substr(10);
            let node = document.getElementById("Lnum");
            node.innerHTML = HTML;
        }
        if (target.id == "candle") {
            let HTML = "";
            HTML += target.value;
            let node = document.getElementById("CNDLcolor");
            node.innerHTML = HTML;
        }
        if (target.id == "candleAnzahl") {
            let HTML = "";
            HTML = target.value.substr(9);
            let node = document.getElementById("CNDLnum");
            node.innerHTML = HTML;
        }
        if (target.id == "tree") {
            let HTML = "";
            HTML += target.value;
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
            let HTML = "";
            HTML += target.value;
            let node = document.getElementById("Holder");
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
        if (target.id == "holder") {
            let HTML = "";
            HTML += target.value;
            let node = document.getElementById("shipment");
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