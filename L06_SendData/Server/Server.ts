import * as Http from "http"; //importiert die node.d.ts Datei. Durch "Http" kann man nun auf das Modul "http" zugreifen (Zeile 615 in node.d.ts)
import * as Url from "url";

namespace A6 {
    console.log("Starting server");
    let port: number = process.env.PORT; //process Bezieht sich auf NodeJS, falls nicht definiert nimmt er port = 8100. Dieser verweist auf https://eia2-nodetest.herokuapp.com
    if (port == undefined)
        port = 8100;
    
    function parse ( urlStr: string, parseQueryString?: boolean): Url.Url{
        console.log("parse");    
        return Url.parse(urlStr, parseQueryString);
            }
    
    
    let server: Http.Server = Http.createServer(); //Erlaubt den http Transfer - fungiert als Server
    server.addListener("request", handleRequest); //Fügt dem Server einen Listener zu. Wenn der Nutzer darauf zugreifen will wird handleRequest ausgeführt
    server.addListener("listening", handleListen); //Fügt dem Server einen Listener zu. Solange der Nutzer auf den Server zugreif wird handleListen ausgeführt.
    server.listen(port); //Spezifiziert, dass der Server auf den Port 8100 hört

    function handleListen(): void {
        console.log("Listening"); //Gib "Listening" in der Console aus
    }
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //übergibt server IncomingMessage als _request und server ServerResponse als _response
        console.log(_request.url); //Gib den eingegebenen Text in der Konsole aus
        let querystring : string = require("querystring");
        let urlString: string = _request.url;
        let convert: Url.Url = parse(urlString, true);
        
        console.log("JSONstringify:" + convert.path);
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Verändert die Werte des Serverheaders: name="content-type" und value="text/html; charset=utf-8"
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Verändert die Werte des Serverheaders: name="Access-Control-Allow-Origin" und value="*"

        _response.write(convert.slashes); //Zeigt alles nach dem / ("/" unklusive) auf der Website an
        
        _response.end(); //response wird beendet. Dieser Aufruf muss immer bei einem response getätigt werden
    } //Strg + C zum beenden
}