"use strict";
var Task3_2;
(function (Task3_2) {
    let baseUrl = "https://ninakgissose2020.herokuapp.com/";
    document.getElementsByTagName("button")[0].addEventListener("click", HTMLapplication);
    document.getElementsByTagName("button")[1].addEventListener("click", JSONapplication);
    async function sendRequest(_url) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        return response;
    }
    async function HTMLapplication() {
        let response = await sendRequest(baseUrl + "html");
        let htmlResponse = await response.text();
        document.getElementById("Response").innerHTML = htmlResponse;
    }
    async function JSONapplication() {
        let response = await sendRequest(baseUrl + "json");
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    }
})(Task3_2 || (Task3_2 = {}));
//# sourceMappingURL=Client.js.map