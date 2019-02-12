"use strict";
var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://nodeservereia.herokuapp.com/";
    //let serverAddress: string = "https://<your>.herokuapp.com/";    
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        document.getElementById("matrikelsearch").addEventListener("input", change);
        document.getElementById("buttonsearch").addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&score=" + document.getElementById("endscore").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function change(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
    }
    function search(_event) {
        let matrikel = parseInt(document.getElementById("matrikelsearch").getAttribute("value"));
        if (matrikel.toString().length > 0) {
            console.log("test");
            let xhr = new XMLHttpRequest();
            xhr.open("GET", serverAddress + "?command=search&matrikel=" + matrikel, true);
            xhr.addEventListener("readystatechange", searchMatrikel);
            xhr.send();
        }
    }
    function searchMatrikel(_event) {
        let output = document.getElementById("outputSearch");
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.innerHTML = xhr.response;
        }
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map