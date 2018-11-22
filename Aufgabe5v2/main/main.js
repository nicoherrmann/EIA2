var A5v2;
(function (A5v2) {
    window.addEventListener("load", init);
    function init() {
        displayFieldsets(A5v2.data);
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
    }
    function displayFieldsets(_item) {
        for (let key in _item) {
            console.log(key);
            let value = _item[key];
            let node = document.getElementsByTagName("body")[0];
            let h2 = document.createElement("h2");
            node.appendChild(h2);
            h2.innerText = key;
            let fieldset = document.createElement("fieldset");
            node.appendChild(fieldset);
            fieldset.setAttribute("name", key);
            for (let i = 0; i < value.length; i++) {
                displayHeteroPredef(value[i], fieldset, key);
            }
        }
    }
    function displayHeteroPredef(_heteroPredef, _fieldset, _key) {
        if (_key == "tree" || _key == "holder" || _key == "shipment") {
            console.log(_fieldset.childNodes.length);
            let forID = _fieldset.childNodes.length;
            let input = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name", "radio" + _key);
            input.setAttribute("id", _key + forID);
            let label = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
        }
        else {
            let p = document.createElement("p");
            _fieldset.appendChild(p);
            let input = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("value", "0");
            input.setAttribute("pattern", "[0-9]{1,}");
            input.setAttribute("name", _heteroPredef.name);
            p.innerText = _heteroPredef.name;
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        if (target.name == "radiotree") {
            let del = document.getElementById("treecheckout");
            if (del != null) {
                let co = document.getElementById("checkout");
                co.removeChild(del);
            }
            let convString = Number(target.id.substr(4));
            let id;
            if (convString > 0) {
                id = convString / 2;
            }
            else {
                id = 0;
            }
            let node = document.getElementById("checkout");
            let name = "Baum: " + A5v2.data["tree"][id].name;
            let tree = document.createElement("p");
            node.appendChild(tree);
            let price = A5v2.data["tree"][id].price;
            tree.setAttribute("price", price.toString());
            tree.setAttribute("id", "treecheckout");
            tree.innerText = name;
        }
        if (target.name == "radioholder") {
            let del = document.getElementById("holdercheckout");
            if (del != null) {
                let co = document.getElementById("checkout");
                co.removeChild(del);
            }
            let convString = Number(target.id.substr(6));
            let id;
            if (convString > 0) {
                id = convString / 2;
            }
            else {
                id = 0;
            }
            let node = document.getElementById("checkout");
            let name = "Halter: " + A5v2.data["holder"][id].name;
            let holder = document.createElement("p");
            node.appendChild(holder);
            let price = A5v2.data["holder"][id].price;
            holder.setAttribute("price", price.toString());
            holder.setAttribute("id", "holdercheckout");
            holder.innerText = name;
        }
        if (target.name == "radioshipment") {
            let del = document.getElementById("shipmentcheckout");
            if (del != null) {
                let co = document.getElementById("checkout");
                co.removeChild(del);
            }
            let convString = Number(target.id.substr(8));
            let id;
            if (convString > 0) {
                id = convString / 2;
            }
            else {
                id = 0;
            }
            let node = document.getElementById("checkout");
            let name = "Lieferung: " + A5v2.data["shipment"][id].name;
            let shipment = document.createElement("p");
            node.appendChild(shipment);
            let price = A5v2.data["shipment"][id].price;
            shipment.setAttribute("price", price.toString());
            shipment.setAttribute("id", "shipmentcheckout");
            shipment.innerText = name;
        }
        else {
            if (Number(target.value) > 0) {
                let node = document.getElementById("checkout");
                let multiply = Number(target.getAttribute("price"));
                let parent = target.parentElement.getAttribute("name");
                let itemNum = Number(target.value);
                let name = parent + ": " + target.name + " x " + itemNum;
                let price = itemNum *= multiply;
                let category = document.createElement("p");
                node.appendChild(category);
                category.setAttribute("price", price.toString());
                category.setAttribute("name", target.name);
                category.innerText = name;
            }
            else {
                let co = document.getElementById("checkout");
                for (let i = 0; i < co.childNodes.length; i++) {
                    let delObj = document.getElementsByTagName("p")[i];
                    if (target.name == delObj.getAttribute("name")) {
                        co.removeChild(delObj);
                    }
                }
            }
        }
        calcPrice();
    }
    function calcPrice() {
        let co = document.getElementById("checkout");
        let gesPrice = 0;
        for (let i = 0; i < co.childNodes.length; i++) {
            let price = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            gesPrice += price;
            document.getElementById("price").innerText = gesPrice.toString();
        }
        console.log(gesPrice);
    }
})(A5v2 || (A5v2 = {}));
//# sourceMappingURL=main.js.map