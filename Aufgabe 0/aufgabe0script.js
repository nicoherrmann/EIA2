/* Aufgabe: Aufgabe 0
Name: Nico Herrmann
Matrikel: 259242
Datum: 08.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var aufgabe0;
(function (aufgabe0) {
    function main() {
        var i = prompt("Wie heisst du?");
        var text = "Hallo ";
        text += i;
        text += ", freut mich, dass du hier bist.";
        document.getElementById("content").innerHTML += text;
        console.log("Hallo ", i, ", freut mich, dass du hier bist.");
    }
    document.addEventListener('DOMContentLoaded', main);
})(aufgabe0 || (aufgabe0 = {}));
//# sourceMappingURL=aufgabe0script.js.map