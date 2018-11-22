/* Aufgabe: Aufgabe 5: WBK-Reloaded
Name: Nico Herrmann
Matrikel: 259242
Datum: 17.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var A5;
(function (A5) {
    window.addEventListener("load", init);
    let gesPrice = 0;
    let shipmentboolean;
    let adress = "";
    let valSaveCMB = 0;
    let valSaveLAM = 0;
    let valSaveCandle = 0;
    let treePrice = 0;
    let treeboolean = false;
    let holderPrice = 0;
    let shipPrice = 0;
    function init() {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }
    function fillFieldset() {
        let node = document.getElementsByTagName("fieldset")[0];
        let HTML = "";
        HTML += "<h2>Weihnachtskugeln:</h2>";
        for (let i = 0; i < A5.christmasBall.length; i++) {
            HTML += "<p price=";
            HTML += A5.christmasBall[i].price;
            HTML += ">";
            HTML += A5.christmasBall[i].name;
            HTML += "</p>";
            HTML += "<input value=0 class=christmasBall price=";
            HTML += A5.christmasBall[i].price;
            HTML += " pattern=[0-9]{1,}";
            HTML += " title=Bitte nur Zahlen von 0 bis 9 verwenden";
            HTML += " id=cmb";
            HTML += i;
            HTML += " ></input>";
        }
        HTML += "<h2>Lametta:</h2>";
        for (let i = 0; i < A5.lametta.length; i++) {
            HTML += "<p price=";
            HTML += A5.lametta[i].price;
            HTML += ">";
            HTML += A5.lametta[i].name;
            HTML += "</p>";
            HTML += "<input value=0 class=lametta price=";
            HTML += A5.lametta[i].price;
            HTML += " pattern=[0-9]{1,}";
            HTML += " id=lam";
            HTML += i;
            HTML += " ></input>";
        }
        HTML += "<h2>Kerzen:</h2>";
        for (let i = 0; i < A5.candle.length; i++) {
            HTML += "<p price=";
            HTML += A5.candle[i].price;
            HTML += ">";
            HTML += A5.candle[i].name;
            HTML += "</p>";
            HTML += "<input value=0 class=candle price=";
            HTML += A5.candle[i].price;
            HTML += " pattern=[0-9]{1,}";
            HTML += " id=cndl";
            HTML += i;
            HTML += " ></input>";
        }
        HTML += "<h2>Weihnachtsbaum:</h2>";
        for (let i = 0; i < A5.tree.length; i++) {
            HTML += "<input value=";
            HTML += i;
            HTML += " id=tree";
            HTML += i;
            HTML += " name=radiotree";
            HTML += " price=";
            HTML += A5.tree[i].price;
            HTML += " type=radio";
            HTML += ">";
            HTML += "<label for=tree";
            HTML += i;
            HTML += ">" + A5.tree[i].name;
            HTML += "</label>";
        }
        HTML += "<h2>Halter:</h2>";
        for (let i = 0; i < A5.holder.length; i++) {
            HTML += "<input value=";
            HTML += i;
            HTML += " id=holder";
            HTML += i;
            HTML += " name=radioholder";
            HTML += " price=";
            HTML += A5.holder[i].price;
            HTML += " type=radio";
            HTML += ">";
            HTML += "<label for=holder";
            HTML += i;
            HTML += ">" + A5.holder[i].name;
            HTML += "</label>";
        }
        HTML += "<h2>Versand:</h2>";
        HTML += "<p>Express-Lieferung</p>";
        HTML += "<input id=ja1 type=radio name=Radiogroup1 value=ja1>";
        HTML += "<label for=ja1>Ja</label>";
        HTML += "<input id=nein1 type=radio name=Radiogroup1 value=nein1 checked>";
        HTML += "<label for=nein1>Nein</label>";
        HTML += "<br>";
        for (let i = 0; i < A5.shipment.length; i++) {
            HTML += "<input value=";
            HTML += i;
            HTML += " id=shipment";
            HTML += i;
            HTML += " name=radioshipment";
            HTML += " price=";
            HTML += A5.shipment[i].price;
            HTML += " type=radio";
            HTML += ">";
            HTML += "<label for=shipment";
            HTML += i;
            HTML += ">" + A5.shipment[i].name;
            HTML += "</label>";
        }
        HTML += "<h2>Adresse:</h2>";
        HTML += "<input id=adressID type=text name=Text placeholder=Adresse>";
        node.innerHTML += HTML;
    }
    function calcPrice() {
        let HTML = "";
        HTML += gesPrice;
        document.getElementById("price").innerHTML = HTML;
    }
    function handleChange(_event) {
        let target = _event.target;
        if (target.className == "christmasBall") {
            console.log("1:" + valSaveCMB);
            let stringConverter = target.id.substr(3);
            let id = Number(stringConverter);
            let val = Number(target.value);
            if (val > 0) {
                let indexPrice = Number(target.getAttribute("price"));
                let price = indexPrice *= Number(target.value);
                gesPrice += price;
                valSaveCMB = price;
                console.log("2:" + valSaveCMB);
                let HTML = "<p id=checkoutCMB" + id + " value=" + price + ">" + A5.christmasBall[id].name;
                HTML += " x " + target.value;
                let node = document.getElementById("co1");
                node.innerHTML += HTML;
            }
            else {
                let delObj = "checkoutCMB" + id;
                let node = document.getElementById(delObj);
                console.log("value" + valSaveCMB);
                gesPrice -= valSaveCMB;
                document.getElementById("co1").removeChild(node);
            }
        }
        if (target.className == "lametta") {
            let stringConverter = target.id.substr(3);
            let id = Number(stringConverter);
            let val = Number(target.value);
            if (val > 0) {
                let indexPrice = Number(target.getAttribute("price"));
                let price = indexPrice *= Number(target.value);
                console.log(id);
                gesPrice += price;
                valSaveLAM = price;
                let HTML = "<p id=checkoutLametta" + id + " value=" + price + ">" + A5.lametta[id].name;
                HTML += " x " + target.value;
                let node = document.getElementById("co2");
                node.innerHTML += HTML;
            }
            else {
                let delObj = "checkoutLametta" + id;
                gesPrice -= valSaveLAM;
                let node = document.getElementById(delObj);
                document.getElementById("co2").removeChild(node);
            }
        }
        if (target.className == "candle") {
            let stringConverter = target.id.substr(4);
            let id = Number(stringConverter);
            let val = Number(target.value);
            if (val > 0) {
                let indexPrice = Number(target.getAttribute("price"));
                let price = indexPrice *= Number(target.value);
                console.log(id);
                gesPrice += price;
                valSaveCandle = price;
                let HTML = "<p id=checkoutCandle" + id + " value=" + price + ">" + A5.candle[id].name;
                HTML += " x " + target.value;
                let node = document.getElementById("co3");
                node.innerHTML += HTML;
            }
            else {
                let delObj = "checkoutCandle" + id;
                gesPrice -= valSaveCandle;
                let node = document.getElementById(delObj);
                document.getElementById("co3").removeChild(node);
            }
        }
        if (target.name == "radiotree") {
            if (treeboolean == false) {
                console.log(target.value);
                console.log(target.name);
                let convertedString = target.value.substr(4);
                let index = Number(convertedString);
                let HTML = A5.tree[index].name;
                gesPrice += A5.tree[index].price;
                treePrice = A5.tree[index].price;
                let node = document.getElementById("christtree");
                node.innerHTML = HTML;
            }
            if (treeboolean == true) {
                gesPrice -= treePrice;
                gesPrice += Number(target.value);
            }
        }
        if (target.id == "holder") {
            let convertedString = target.value.substr(3);
            let index = Number(convertedString);
            let HTML = A5.holder[index].name;
            let node = document.getElementById("HolderCheckout");
            node.innerHTML = HTML;
        }
        if (target.id == "ja1") {
            let HTML = "Ja";
            shipmentboolean = true;
            let node = document.getElementById("express");
            node.innerHTML = HTML;
        }
        if (target.id == "nein1") {
            let HTML = "Nein";
            shipmentboolean = false;
            let node = document.getElementById("express");
            node.innerHTML = HTML;
        }
        if (target.id == "shipment") {
            let convertedString = target.value.substr(8);
            console.log(convertedString);
            let index = Number(convertedString);
            let HTML = A5.shipment[index].name;
            let node = document.getElementById("shipmentCheckout");
            node.innerHTML = HTML;
        }
        if (target.id == "adressID") {
            let HTML = "";
            HTML += target.value;
            adress = target.value;
            let node = document.getElementById("adress");
            node.innerHTML = HTML;
        }
        calcPrice();
    }
    function check() {
        console.log("test");
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=Script.js.map