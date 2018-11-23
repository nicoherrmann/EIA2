/*
Aufgabe: Aufgabe 5: WBK - Reloaded
Name: Nico Herrmann
Matrikel: 259242
Datum: 23.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A5v2 {
    window.addEventListener("load", init);

    let treeboolean: boolean = false;
    let holderboolean: boolean = false;
    let shipmentboolean: boolean = false;

    function init(): void {
        displayFieldsets(data);
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }


    function displayFieldsets(_item: Item): void {



        for (let key in _item) {
            console.log(key);
            let value: Product[] = _item[key];
            let node: Element = document.getElementsByTagName("body")[0];
            let h2: HTMLElement = document.createElement("h2");
            node.appendChild(h2);
            h2.innerText = key;
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            node.appendChild(fieldset);
            fieldset.setAttribute("name", key);

            for (let i: number = 0; i < value.length; i++) {
                displayHeteroPredef(value[i], fieldset, key);
            }
        }
    }

    function displayHeteroPredef(_heteroPredef: Product, _fieldset: Element, _key: string): void {

        if (_key == "tree" || _key == "holder" || _key == "shipment") {
            console.log(_fieldset.childNodes.length);
            let forID: number = _fieldset.childNodes.length;

            let input: HTMLInputElement = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name", "radio" + _key);
            input.setAttribute("id", _key + forID);
            let label: HTMLElement = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
        }

        else {
            let p: HTMLElement = document.createElement("p");
            _fieldset.appendChild(p);
            let input: HTMLInputElement = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("value", "0");
            input.setAttribute("pattern", "[0-9]{1,}");
            input.setAttribute("name", _heteroPredef.name);
            p.innerText = _heteroPredef.name;
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.name == "radiotree") {
            treeboolean = true;
            let del: HTMLElement = document.getElementById("treecheckout");
            if (del != null) {
                let co: HTMLElement = document.getElementById("checkout");
                co.removeChild(del);
            }
            let convString: number = Number(target.id.substr(4));
            let id: number;
            if (convString > 0) {
                id = convString / 2;
            }
            else {
                id = 0;
            }
            let node: HTMLElement = document.getElementById("checkout");
            let name: string = "Baum: " + data["tree"][id].name;
            let tree: HTMLElement = document.createElement("p");
            node.appendChild(tree);
            let price: number = data["tree"][id].price;
            tree.setAttribute("price", price.toString());
            tree.setAttribute("id", "treecheckout");
            tree.innerText = name;
        }

        if (target.name == "radioholder") {
            holderboolean = true;
            let del: HTMLElement = document.getElementById("holdercheckout");
            if (del != null) {
                let co: HTMLElement = document.getElementById("checkout");
                co.removeChild(del);
            }
            let convString: number = Number(target.id.substr(6));
            let id: number;
            if (convString > 0) {
                id = convString / 2;
            }
            else {
                id = 0;
            }
            let node: HTMLElement = document.getElementById("checkout");
            let name: string = "Halter: " + data["holder"][id].name;
            let holder: HTMLElement = document.createElement("p");
            node.appendChild(holder);
            let price: number = data["holder"][id].price;
            holder.setAttribute("price", price.toString());
            holder.setAttribute("id", "holdercheckout");
            holder.innerText = name;
        }

        if (target.name == "radioshipment") {
            shipmentboolean = true;
            let del: HTMLElement = document.getElementById("shipmentcheckout");
            if (del != null) {
                let co: HTMLElement = document.getElementById("checkout");
                co.removeChild(del);
            }
            let convString: number = Number(target.id.substr(8));
            let id: number;
            if (convString > 0) {
                id = convString / 2;
            }
            else {
                id = 0;
            }
            let node: HTMLElement = document.getElementById("checkout");
            let name: string = "Lieferung: " + data["shipment"][id].name;
            let shipment: HTMLElement = document.createElement("p");
            node.appendChild(shipment);
            let price: number = data["shipment"][id].price;
            shipment.setAttribute("price", price.toString());
            shipment.setAttribute("id", "shipmentcheckout");
            shipment.innerText = name;
        }

        else {
            if (Number(target.value) > 0) {
                let node: HTMLElement = document.getElementById("checkout");
                let multiply: number = Number(target.getAttribute("price"));
                let parent: string = target.parentElement.getAttribute("name");
                let itemNum: number = Number(target.value);
                let name: string = parent + ": " + target.name + " x " + itemNum;
                let price: number = itemNum *= multiply;
                let category: HTMLElement = document.createElement("p");
                node.appendChild(category);
                category.setAttribute("price", price.toString());
                category.setAttribute("name", target.name);
                category.innerText = name;
            }
            else {
                let co: HTMLElement = document.getElementById("checkout");
                for (let i: number = 0; i < co.childNodes.length; i++) {
                    let delObj: HTMLElement = document.getElementsByTagName("p")[i];
                    if (target.name == delObj.getAttribute("name")) {
                        co.removeChild(delObj);
                    }
                }
            }

        }
        calcPrice();

    }
    function calcPrice(): void {
        let co: HTMLElement = document.getElementById("checkout");
        let gesPrice: number = 0;
        for (let i: number = 0; i < co.childNodes.length; i++) {
            let price: number = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            gesPrice += price;
            document.getElementById("price").innerText = gesPrice.toString();
        }
        console.log(gesPrice);
    }

    function check(): void {
        let prompt: string = "Bitte noch auswaehlen:";
        if (treeboolean == false || holderboolean == false || shipmentboolean == false) {
            if (treeboolean == false) {
                prompt += "Baum ";
            }
            if (holderboolean == false) {
                prompt += "Halter ";
            }
            if (shipmentboolean == false) {
                prompt += "Lieferung";
            }
            alert(prompt);
        }
        else {
            alert("Alles in Ordnung!");
            }

    }


}