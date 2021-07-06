namespace Client3_4 {

  export interface Antwort {
    _id: string;
    Vorname: string;
    Nachname: string;
    Email: string;
    Nachricht: string;

  }
  //let serverURL: string = "htpp://Localhost:8100";
  let serverURL: string = "https://ninakgissose2020.herokuapp.com/";
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


  export async function input(_e: Event): Promise<void> {
  
    let formmdata: FormData = new FormData(document.forms[0]);
    let querry: URLSearchParams = new URLSearchParams(<any>formmdata);
    let answer: Response = await fetch(serverURL + "/insert?" + querry);
    console.log(await answer.json());

  }

  /**async function getInput(): Promise<void> {

    let response: Response = await fetch(serverURL);
    let responseString: string = await response.text();
    let serverResponse: HTMLElement = document.getElementById("Response");
    serverResponse.innerHTML = responseString;
  }*/

  export async function getData(_e: Event): Promise<void> {
    let response: Response = await fetch(serverURL + "/read");
    let show: Antwort[] = await response.json();
    let out: HTMLDivElement = <HTMLDivElement>document.getElementById("Response")!;
    out.innerHTML = "";

    for (let students of show) {
      out.appendChild(showStudents(students));
    }
  }

  export function showStudents(_students: Antwort): HTMLElement {
    let student: HTMLDivElement = document.createElement("div");
    student.classList.add("Antwort");
    student.setAttribute("_id", _students._id);


    let name: HTMLElement = document.createElement("p");
    name.classList.add("Vorname");
    name.innerText = _students.Vorname;
    student.appendChild(name);

    let nachname: HTMLElement = document.createElement("p");
    nachname.classList.add("Nachname");
    nachname.innerText = _students.Nachname;
    student.appendChild(nachname);

    let mail: HTMLElement = document.createElement("p");
    mail.classList.add("E-Mail");
    mail.innerText = _students.Email;
    student.appendChild(mail);

    
    let message: HTMLSpanElement = document.createElement("p");
    message.classList.add("Nachricht");
    message.innerText = _students.Nachricht;
    student.appendChild(message);

    return student;
  }

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

}