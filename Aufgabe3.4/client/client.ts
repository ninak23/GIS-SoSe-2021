namespace Task3_4 {


  export interface Antwort {
    _id: string;
    Vorname: string;
    Nachname: string;
    Email: string;
    Nachricht: string;

  }
  //let serverURL: string = "htpp://Localhost:8100";
  let serverURL: string = "https://mongodbnetbrowser.herokuapp.com/";

  let baseUrl: string = "https://mongodbnetbrowser.herokuapp.com/ ";


  document.getElementById("resetButton")?.addEventListener("click", insert);
  document.getElementById("responseButton")?.addEventListener("click", findAll);



  document.getElementsByTagName("button")[0].addEventListener("click", HTMLapplication1);
  document.getElementsByTagName("button")[1].addEventListener("click", JSONapplication1);

  async function sendRequest(_url: string): Promise<Response> {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    _url = _url + "?" + query.toString();
    let response: Response = await fetch(_url);
    return response;
  }

  async function insert(_e: Event): Promise<void> {

    let formmdata: FormData = new FormData(document.forms[0]);
    let querry: URLSearchParams = new URLSearchParams(<any>formmdata);
    let answer: Response = await fetch(serverURL + "/insert?" + querry);
    console.log(await answer.json());

  }

  async function findAll(_e: Event): Promise<void> {
    let response: Response = await fetch(serverURL + "/read");
    let feedbacks: Antwort[] = await response.json();
    let out: HTMLDivElement = <HTMLDivElement>document.getElementById("Response")!;
    out.innerHTML = "";

    for (let f of feedbacks) {
      out.appendChild(createOneFeedbackDisplay(f));
    }
  }

  function createOneFeedbackDisplay(_f: Antwort): HTMLElement {
    let feedbackDiv: HTMLDivElement = document.createElement("div");
    feedbackDiv.classList.add("one-feedback");
    feedbackDiv.setAttribute("_id", _f._id);


    let nameSpan: HTMLSpanElement = document.createElement("span");
    nameSpan.classList.add("feedback-Vorname");
    nameSpan.innerText = _f.Vorname;
    feedbackDiv.appendChild(nameSpan);

    let nachnameSpan: HTMLSpanElement = document.createElement("span");
    nachnameSpan.classList.add("feedback-Nachname");
    nachnameSpan.innerText = _f.Nachname;
    feedbackDiv.appendChild(nachnameSpan);

    let mail: HTMLSpanElement = document.createElement("span");
    mail.classList.add("feedback-Mail");
    mail.innerText = _f.Email;
    feedbackDiv.appendChild(mail);

    let message: HTMLQuoteElement = document.createElement("q");
    message.innerText = _f.Nachricht;
    feedbackDiv.appendChild(message);
    return feedbackDiv;
  }

  async function HTMLapplication(): Promise<void> {
    let response: Response = await sendRequest(baseUrl + "html");
    let htmlResponse: string = await response.text();
    (<HTMLElement>document.getElementById("Response")).innerHTML = htmlResponse;
  }

  async function JSONapplication(): Promise<void> {
    let response: Response = await sendRequest(baseUrl + "json");
    let jsonResponse: any = await response.json();
    console.log(jsonResponse);
  }

  async function HTMLapplication1(): Promise<void> {
    let response: Response = await sendRequest(serverURL + "html");
    let htmlResponse: string = await response.text();
    (<HTMLElement>document.getElementById("Response")).innerHTML = htmlResponse;
  }

  async function JSONapplication1(): Promise<void> {
    let response: Response = await sendRequest(serverURL + "json");
    let jsonResponse: any = await response.json();
    console.log(jsonResponse);
  }

}