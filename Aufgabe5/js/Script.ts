/* Aufgabe: Aufgabe 5: WBK-Reloaded
Name: Nico Herrmann
Matrikel: 259242
Datum: 17.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace A5 {

    window.addEventListener("load", init);


    let gesPrice: number = 0;

    let shipmentboolean: boolean;
    let adress: string = "";

    let valSaveCMB: number = 0;
    let valSaveLAM: number = 0;
    let valSaveCandle: number = 0;

    let treePrice: number = 0;
    let treeboolean: boolean = false;
    let holderPrice: number = 0;
    let shipPrice: number = 0;


    function init(): void {
        fillFieldset();
        document.getElementsByTagName("fieldset")[0].addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }

    function fillFieldset(): void {
        let node: HTMLElement = document.getElementsByTagName("fieldset")[0];
        let HTML: string = "";
        HTML += "<h2>Weihnachtskugeln:</h2>";
        for (let i: number = 0; i < christmasBall.length; i++) {
            HTML += "<p price=";
            HTML += christmasBall[i].price;
            HTML += ">";
            HTML += christmasBall[i].name;
            HTML += "</p>";

            HTML += "<input value=0 class=christmasBall price=";
            HTML += christmasBall[i].price;
            HTML += " pattern=[0-9]{1,}";
            HTML += " title=Bitte nur Zahlen von 0 bis 9 verwenden";
            HTML += " id=cmb";
            HTML += i;
            HTML += " ></input>";
        }

        HTML += "<h2>Lametta:</h2>";
        for (let i: number = 0; i < lametta.length; i++) {
            HTML += "<p price=";
            HTML += lametta[i].price;
            HTML += ">";
            HTML += lametta[i].name;
            HTML += "</p>";

            HTML += "<input value=0 class=lametta price=";
            HTML += lametta[i].price;
            HTML += " pattern=[0-9]{1,}";
            HTML += " id=lam";
            HTML += i;
            HTML += " ></input>";
        }

        HTML += "<h2>Kerzen:</h2>";
        for (let i: number = 0; i < candle.length; i++) {
            HTML += "<p price=";
            HTML += candle[i].price;
            HTML += ">";
            HTML += candle[i].name;
            HTML += "</p>";

            HTML += "<input value=0 class=candle price=";
            HTML += candle[i].price;
            HTML += " pattern=[0-9]{1,}";
            HTML += " id=cndl";
            HTML += i;
            HTML += " ></input>";
        }

        HTML += "<h2>Weihnachtsbaum:</h2>";
        for (let i: number = 0; i < tree.length; i++) {
            HTML += "<input value=";
            HTML += i;
            HTML += " id=tree";
            HTML += i;
            HTML += " name=radiotree";
            HTML += " price=";
            HTML += tree[i].price;
            HTML += " type=radio";
            HTML += ">";
            HTML += "<label for=tree";
            HTML += i;
            HTML += ">" + tree[i].name;
            HTML += "</label>";
        }

        HTML += "<h2>Halter:</h2>";
        for (let i: number = 0; i < holder.length; i++) {
            HTML += "<input value=";
            HTML += i;
            HTML += " id=holder";
            HTML += i;
            HTML += " name=radioholder";
            HTML += " price=";
            HTML += holder[i].price;
            HTML += " type=radio";
            HTML += ">";
            HTML += "<label for=holder";
            HTML += i;
            HTML += ">" + holder[i].name;
            HTML += "</label>";
        }

        HTML += "<h2>Versand:</h2>";
        HTML += "<p>Express-Lieferung</p>";
        HTML += "<input id=ja1 type=radio name=Radiogroup1 value=ja1>";
        HTML += "<label for=ja1>Ja</label>";
        HTML += "<input id=nein1 type=radio name=Radiogroup1 value=nein1 checked>";
        HTML += "<label for=nein1>Nein</label>";
        HTML += "<br>";
        for (let i: number = 0; i < shipment.length; i++) {
            HTML += "<input value=";
            HTML += i;
            HTML += " id=shipment";
            HTML += i;
            HTML += " name=radioshipment";
            HTML += " price=";
            HTML += shipment[i].price;
            HTML += " type=radio";
            HTML += ">";
            HTML += "<label for=shipment";
            HTML += i;
            HTML += ">" + shipment[i].name;
            HTML += "</label>";
        }
        HTML += "<h2>Adresse:</h2>";
        HTML += "<input id=adressID type=text name=Text placeholder=Adresse>";

        node.innerHTML += HTML;

    }

    function calcPrice(): void {

        let HTML: string = "";
        HTML += gesPrice;

        document.getElementById("price").innerHTML = HTML;
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.className == "christmasBall") {
            console.log("1:" + valSaveCMB);
            let stringConverter: string = target.id.substr(3);
            let id: number = Number(stringConverter);
            let val: number = Number(target.value);
            if (val > 0) {
                let indexPrice: number = Number(target.getAttribute("price"));
                let price: number = indexPrice *= Number(target.value);
                gesPrice += price;
                valSaveCMB = price;
                console.log("2:" + valSaveCMB);
                let HTML: string = "<p id=checkoutCMB" + id + " value=" + price + ">" + christmasBall[id].name;
                HTML += " x " + target.value;
                let node: HTMLElement = document.getElementById("co1");
                node.innerHTML += HTML;
            }

            else {
                let delObj: string = "checkoutCMB" + id;
                let node: HTMLElement = document.getElementById(delObj);
                console.log("value" + valSaveCMB);
                gesPrice -= valSaveCMB;
                document.getElementById("co1").removeChild(node);
            }
        }

        if (target.className == "lametta") {
            let stringConverter: string = target.id.substr(3);
            let id: number = Number(stringConverter);
            let val: number = Number(target.value);
            if (val > 0) {
                let indexPrice: number = Number(target.getAttribute("price"));
                let price: number = indexPrice *= Number(target.value);

                console.log(id);
                gesPrice += price;
                valSaveLAM = price;
                let HTML: string = "<p id=checkoutLametta" + id + " value=" + price + ">" + lametta[id].name;
                HTML += " x " + target.value;
                let node: HTMLElement = document.getElementById("co2");
                node.innerHTML += HTML;
            }

            else {
                let delObj: string = "checkoutLametta" + id;
                gesPrice -= valSaveLAM;
                let node: HTMLElement = document.getElementById(delObj);
                document.getElementById("co2").removeChild(node);
            }
        }

        if (target.className == "candle") {
            let stringConverter: string = target.id.substr(4);
            let id: number = Number(stringConverter);
            let val: number = Number(target.value);
            if (val > 0) {
                let indexPrice: number = Number(target.getAttribute("price"));
                let price: number = indexPrice *= Number(target.value);

                console.log(id);
                gesPrice += price;
                valSaveCandle = price;
                let HTML: string = "<p id=checkoutCandle" + id + " value=" + price + ">" + candle[id].name;
                HTML += " x " + target.value;
                let node: HTMLElement = document.getElementById("co3");
                node.innerHTML += HTML;
            }

            else {
                let delObj: string = "checkoutCandle" + id;
                gesPrice -= valSaveCandle;
                let node: HTMLElement = document.getElementById(delObj);
                document.getElementById("co3").removeChild(node);
            }
        }

        if (target.name == "radiotree") {
            if (treeboolean == false) {
                console.log(target.value);
                console.log(target.name);
                let convertedString: string = target.value.substr(4);
                let index: number = Number(convertedString);
                let HTML: string = tree[index].name;
                gesPrice += tree[index].price;
                treePrice = tree[index].price;
                let node: HTMLElement = document.getElementById("christtree");
                node.innerHTML = HTML;
            }
            
            if (treeboolean == true) {
                gesPrice -= treePrice;
                gesPrice += Number(target.value);
                }
        }

        if (target.id == "holder") {
            let convertedString: string = target.value.substr(3);
            let index: number = Number(convertedString);
            let HTML: string = holder[index].name;
            let node: HTMLElement = document.getElementById("HolderCheckout");
            node.innerHTML = HTML;
        }

        if (target.id == "ja1") {
            let HTML: string = "Ja";
            shipmentboolean = true;
            let node: HTMLElement = document.getElementById("express");
            node.innerHTML = HTML;
        }

        if (target.id == "nein1") {
            let HTML: string = "Nein";
            shipmentboolean = false;
            let node: HTMLElement = document.getElementById("express");
            node.innerHTML = HTML;
        }

        if (target.id == "shipment") {
            let convertedString: string = target.value.substr(8);
            console.log(convertedString);
            let index: number = Number(convertedString);
            let HTML: string = shipment[index].name;
            let node: HTMLElement = document.getElementById("shipmentCheckout");
            node.innerHTML = HTML;
        }

        if (target.id == "adressID") {
            let HTML: string = "";
            HTML += target.value;
            adress = target.value;
            let node: HTMLElement = document.getElementById("adress");
            node.innerHTML = HTML;
        }

        calcPrice();
    }

    function check(): void {
        console.log("test");

    }
}
