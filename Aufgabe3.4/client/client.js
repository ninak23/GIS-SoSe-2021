"use strict";
var Task3_4;
(function (Task3_4) {
    //let serverURL: string = "htpp://Localhost:8100";
    let serverURL = "https://ninakgissose2020.herokuapp.com/";
    //let baseUrl: string = "https://mongodbnetbrowser.herokuapp.com/ ";
    //document.getElementById("resetButton")?.addEventListener("click", insert);
    //document.getElementById("responseButton")?.addEventListener("click", findAll);
    document.getElementById("resetButton")?.addEventListener("click", shipInput);
    document.getElementById("responseButton")?.addEventListener("click", getInput);
    async function shipInput() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        serverURL = serverURL + "?" + query.toString();
        let response = await fetch(serverURL);
        //wenn eine response vorliegt ausgabe tätigen
        return response;
    }
    async function getInput() {
        let response = await fetch(serverURL);
        let responseString = await response.text();
        let serverResponse = document.getElementById("Response");
        serverResponse.innerHTML = responseString;
    }
    document.getElementsByTagName("button")[0].addEventListener("click", HTMLapplication1);
    document.getElementsByTagName("button")[1].addEventListener("click", JSONapplication1);
    async function sendRequest(_url) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        return response;
    }
    async function insert(_e) {
        let formmdata = new FormData(document.forms[0]);
        let querry = new URLSearchParams(formmdata);
        let answer = await fetch(serverURL + "/insert?" + querry);
        console.log(await answer.json());
    }
    async function findAll(_e) {
        let response = await fetch(serverURL + "/read");
        let feedbacks = await response.json();
        let out = document.getElementById("Response");
        out.innerHTML = "";
        for (let f of feedbacks) {
            out.appendChild(createOneFeedbackDisplay(f));
        }
    }
    function createOneFeedbackDisplay(_f) {
        let feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("one-feedback");
        feedbackDiv.setAttribute("_id", _f._id);
        let nameSpan = document.createElement("span");
        nameSpan.classList.add("feedback-Vorname");
        nameSpan.innerText = _f.Vorname;
        feedbackDiv.appendChild(nameSpan);
        let nachnameSpan = document.createElement("span");
        nachnameSpan.classList.add("feedback-Nachname");
        nachnameSpan.innerText = _f.Nachname;
        feedbackDiv.appendChild(nachnameSpan);
        let mail = document.createElement("span");
        mail.classList.add("feedback-Mail");
        mail.innerText = _f.Email;
        feedbackDiv.appendChild(mail);
        let message = document.createElement("q");
        message.innerText = _f.Nachricht;
        feedbackDiv.appendChild(message);
        return feedbackDiv;
    }
    /**async function HTMLapplication(): Promise<void> {
      let response: Response = await sendRequest(baseUrl + "html");
      let htmlResponse: string = await response.text();
      (<HTMLElement>document.getElementById("Response")).innerHTML = htmlResponse;
    }
    
    async function JSONapplication(): Promise<void> {
      let response: Response = await sendRequest(baseUrl + "json");
      let jsonResponse: any = await response.json();
      console.log(jsonResponse);
    }*/
    async function HTMLapplication1() {
        let response = await sendRequest(serverURL + "html");
        let htmlResponse = await response.text();
        document.getElementById("Response").innerHTML = htmlResponse;
    }
    async function JSONapplication1() {
        let response = await sendRequest(serverURL + "json");
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    }
})(Task3_4 || (Task3_4 = {}));
//# sourceMappingURL=client.js.map