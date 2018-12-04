"use strict";
const Http = require("http"); //importiert die node.d.ts Datei. Durch "Http" kann man nun auf das Modul "http" zugreifen (Zeile 615 in node.d.ts)
var A6;
(function (A6) {
    console.log("Starting server");
    let port = process.env.PORT; //process Bezieht sich auf NodeJS, falls nicht definiert nimmt er port = 8100. Dieser verweist auf https://eia2-nodetest.herokuapp.com
    if (port == undefined)
        port = 8100;
    let server = Http.createServer(); //Erlaubt den http Transfer - fungiert als Server
    server.addListener("request", handleRequest); //F�gt dem Server einen Listener zu. Wenn der Nutzer darauf zugreifen will wird handleRequest ausgef�hrt
    server.addListener("listening", handleListen); //F�gt dem Server einen Listener zu. Solange der Nutzer auf den Server zugreif wird handleListen ausgef�hrt.
    server.listen(port); //Spezifiziert, dass der Server auf den Port 8100 h�rt
    function handleListen() {
        console.log("Listening"); //Gib "Listening" in der Console aus
    }
    function handleRequest(_request, _response) {
        console.log(_request.url); //Gib den eingegebenen Text in der Konsole aus
        let urlString = _request.url;
        let convert = JSON.stringify(urlString);
        console.log("test:" + convert);
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Ver�ndert die Werte des Serverheaders: name="content-type" und value="text/html; charset=utf-8"
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Ver�ndert die Werte des Serverheaders: name="Access-Control-Allow-Origin" und value="*"
        _response.write(_request.url); //Zeigt alles nach dem / ("/" unklusive) auf der Website an
        _response.end(); //response wird beendet. Dieser Aufruf muss immer bei einem response get�tigt werden
    } //Strg + C zum beenden
})(A6 || (A6 = {}));
//# sourceMappingURL=Server.js.map