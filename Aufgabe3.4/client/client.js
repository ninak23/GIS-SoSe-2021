"use strict";
var Client3_4;
(function (Client3_4) {
    //let serverURL: string = "htpp://Localhost:8100";
    let serverURL = "https://ninakgissose2020.herokuapp.com/";
    //let baseUrl: string = "https://mongodbnetbrowser.herokuapp.com/ ";
    document.getElementById("resetButton")?.addEventListener("click", input);
    document.getElementById("responseButton")?.addEventListener("click", getData);
    //document.getElementById("resetButton")?.addEventListener("click", shipInput);
    //document.getElementById("responseButton")?.addEventListener("click", getInput);
    //document.getElementsByTagName("button")[0].addEventListener("click", HTMLapplication1);
    //document.getElementsByTagName("button")[1].addEventListener("click", JSONapplication1);
    /**  async function shipInput(): Promise<Response> {
   
       let formData: FormData = new FormData(document.forms[0]);
       let query: URLSearchParams = new URLSearchParams(<any>formData);
       serverURL = serverURL + "?" + query.toString();
       let response: Response = await fetch(serverURL);
       return response;
     }*/
    async function input(_e) {
        let formmdata = new FormData(document.forms[0]);
        let querry = new URLSearchParams(formmdata);
        let answer = await fetch(serverURL + "/insert?" + querry);
        console.log(await answer.json());
    }
    Client3_4.input = input;
    /**async function getInput(): Promise<void> {
  
      let response: Response = await fetch(serverURL);
      let responseString: string = await response.text();
      let serverResponse: HTMLElement = document.getElementById("Response");
      serverResponse.innerHTML = responseString;
    }*/
    async function getData(_e) {
        let response = await fetch(serverURL + "/read");
        let show = await response.json();
        let out = document.getElementById("Response");
        out.innerHTML = "";
        for (let students of show) {
            out.appendChild(showStudents(students));
        }
    }
    Client3_4.getData = getData;
    function showStudents(_students) {
        let student = document.createElement("div");
        student.classList.add("Antwort");
        student.setAttribute("_id", _students._id);
        let name = document.createElement("p");
        name.classList.add("Vorname");
        name.innerText = _students.Vorname;
        student.appendChild(name);
        let nachname = document.createElement("p");
        nachname.classList.add("Nachname");
        nachname.innerText = _students.Nachname;
        student.appendChild(nachname);
        let mail = document.createElement("p");
        mail.classList.add("E-Mail");
        mail.innerText = _students.Email;
        student.appendChild(mail);
        let message = document.createElement("p");
        message.classList.add("Nachricht");
        message.innerText = _students.Nachricht;
        student.appendChild(message);
        return student;
    }
    Client3_4.showStudents = showStudents;
    /**async function sendRequest(_url: string): Promise<Response> {
      let formData: FormData = new FormData(document.forms[0]);
      let query: URLSearchParams = new URLSearchParams(<any>formData);
      _url = _url + "?" + query.toString();
      let response: Response = await fetch(_url);
      return response;
    }*/
    /**  export async function HTMLapplication1(): Promise<void> {
       let response: Response = await sendRequest(serverURL + "html");
       let htmlResponse: string = await response.text();
       (<HTMLElement>document.getElementById("Response")).innerHTML = htmlResponse;
     }
   
     export async function JSONapplication1(): Promise<void> {
       let response: Response = await sendRequest(serverURL + "json");
       let jsonResponse: any = await response.json();
       console.log(jsonResponse);
     }*/
})(Client3_4 || (Client3_4 = {}));
//# sourceMappingURL=client.js.map