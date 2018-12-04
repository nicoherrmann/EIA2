"use strict";
const Http = require("http"); //importiert die node.d.ts Datei. Durch "Http" kann man nun auf das Modul "http" zugreifen (Zeile 615 in node.d.ts)
const Url = require("url");
var A6;
(function (A6) {
    console.log("Starting server");
    let port = process.env.PORT; //process Bezieht sich auf NodeJS, falls nicht definiert nimmt er port = 8100. Dieser verweist auf https://eia2-nodetest.herokuapp.com
    if (port == undefined)
        port = 8100;
    let HTMLArray = [];
    let server = Http.createServer(); //Erlaubt den http Transfer - fungiert als Server
    server.addListener("request", handleRequest); //F�gt dem Server einen Listener zu. Wenn der Nutzer darauf zugreifen will wird handleRequest ausgef�hrt
    server.addListener("listening", handleListen); //F�gt dem Server einen Listener zu. Solange der Nutzer auf den Server zugreif wird handleListen ausgef�hrt.
    server.listen(port); //Spezifiziert, dass der Server auf den Port 8100 h�rt
    function handleListen() {
        console.log("Listening"); //Gib "Listening" in der Console aus
    }
    function handleRequest(_request, _response) {
        console.log(_request.url); //Gib den eingegebenen Text in der Konsole aus
        console.log("request");
        //console.log("URLSearch:" + url);
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Ver�ndert die Werte des Serverheaders: name="content-type" und value="text/html; charset=utf-8"
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Ver�ndert die Werte des Serverheaders: name="Access-Control-Allow-Origin" und value="*"
        if (_request.url != "/favicon.ico") {
            let url = Url.parse(_request.url).search.substr(1);
            let HTML = "";
            for (let i = 0; i < url.length; i++) {
                if (url[i] == "&") {
                    HTMLArray.push(HTML);
                    HTML = "";
                }
                else {
                    HTML += url[i];
                    console.log(HTML);
                }
            }
            HTMLArray.push(HTML);
            for (let i = 0; i < HTMLArray.length; i++) {
                _response.write(HTMLArray[i]);
            }
            console.log(HTMLArray);
        }
        _response.end(); //response wird beendet. Dieser Aufruf muss immer bei einem response get�tigt werden
    } //Strg + C zum beenden
})(A6 || (A6 = {}));
//# sourceMappingURL=Server.js.map