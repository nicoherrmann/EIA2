/* Aufgabe: Aufgabe 4: Weihnachtsbaumkonfigurator
Name: Nico Herrmann
Matrikel: 259242
Datum: 16.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace WBKonfig {
       export interface Product {
            name: string;
            price: number;
        }
       export let christmasBall: Product[] = [{ name: "Rot [15Euro]", price: 15 }, { name: "Gold [22Euro]", price: 22 }, { name: "Silber [18Euro]", price: 18 }];
       export let lametta: Product[] = [{ name: "Rot [3Euro]", price: 3 }, { name: "Gold [4Euro]", price: 4 }, { name: "Silber [2.50Euro]", price: 2.5 }];
       export let candle: Product[] = [{ name: "Rot | breit [12Euro]", price: 12 }, { name: "Rot | dünn [8Euro]", price: 8 }, { name: "Gold | breit [15Euro]", price: 15 }, { name: "Gold | dünn [10Euro]", price: 10 }, { name: "Silber | breit [20Euro]", price: 20 }, { name: "Silber | dünn [17Euro]", price: 17 }, { name: "Weiß [25Euro]", price: 25 }];
       export let tree: Product[] = [{ name: "Tanne [54.99Euro]", price: 54.99 }, { name: "Nordmannstanne [75Euro]", price: 75 }, { name: "Plastiktanne [25Euro]", price: 25 }];
       export let holder: Product[] = [{ name: "Rund [25Euro]", price: 25 }, { name: "Viereckig [30Euro]", price: 30 }, { name: "Sechseckig [27.99Euro]", price: 27.99 }];
       export let shipment: Product[] = [{ name: "DHL [2.99Euro]", price: 2.99 }, { name: "UPS [2Euro]", price: 2 }, { name: "Hermes [2.50Euro]", price: 2.5 }, { name: "FedEx [3Euro]", price: 3 }];
    }
