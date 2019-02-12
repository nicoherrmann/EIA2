import * as Mongo from "mongodb";

namespace DatabaseClient {

    window.addEventListener("load", init);
    let serverAddress: string = "https://nodeservereia.herokuapp.com/";
    //let serverAddress: string = "https://<your>.herokuapp.com/";    

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        document.getElementById("matrikelsearch").addEventListener("input", change);
        document.getElementById("buttonsearch").addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&score=" + document.getElementById("endscore").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function change(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        target.setAttribute("value", target.value)
        }
    

    function search(_event: Event): void {
        let matrikel: number = parseInt(document.getElementById("matrikelsearch").getAttribute("value"));
        if (matrikel.toString().length > 0) {
            console.log("test");
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("GET", serverAddress + "?command=search&matrikel=" + matrikel, true);
            xhr.addEventListener("readystatechange", searchMatrikel);
            xhr.send();
        }
    }

    function searchMatrikel(_event: ProgressEvent): void {
        let output: HTMLElement = document.getElementById("outputSearch");
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.innerHTML = xhr.response;
        }
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
}