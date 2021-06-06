namespace Aufgabe09 {

    let baseUrl: string = "https://ninakgissose2020.herokuapp.com/";
   
  
    document.getElementsByTagName("button")[0].addEventListener("click", sendHTMLRequest);
    document.getElementsByTagName("button")[1].addEventListener("click", sendJSONRequest);
  
    async function sendRequest(_url: string): Promise<Response> {
      let formData: FormData = new FormData(document.forms[0]);
      // tslint:disable-next-line: no-any
      let query: URLSearchParams = new URLSearchParams(<any>formData);
      _url = _url + "?" + query.toString();
      let response: Response = await fetch(_url);
      return response;
    }
    
    async function sendHTMLRequest(): Promise<void> {
      let response: Response = await sendRequest(baseUrl + "html");
      let text: string = await response.text();
      (<HTMLElement>document.getElementById("ResponseServer")).innerHTML = text;
    }
  
    async function sendJSONRequest(): Promise<void> {
      let response: Response = await sendRequest(baseUrl + "json");
      // tslint:disable-next-line: no-any
      let jsonObj: any = await response.json(); //an dieser Stelle wäre es natürlich schöner, ein interface zu definieren wenn man weiß, was für Daten hier zurück kommen.
      console.log(jsonObj);
    }

}