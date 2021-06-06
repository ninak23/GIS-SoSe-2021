namespace Task3_2 {

    let baseUrl: string = "https://ninakgissose2020.herokuapp.com/";
   
  
    document.getElementsByTagName("button")[0].addEventListener("click", HTMLapplication);
    document.getElementsByTagName("button")[1].addEventListener("click", JSONapplication);
  
    async function sendRequest(_url: string): Promise<Response> {
      let formData: FormData = new FormData(document.forms[0]);
      let query: URLSearchParams = new URLSearchParams(<any>formData);
      _url = _url + "?" + query.toString();
      let response: Response = await fetch(_url);
      return response;
    }
    
    async function HTMLapplication(): Promise<void> {
      let response: Response = await sendRequest(baseUrl + "html");
      let text: string = await response.text();
      (<HTMLElement>document.getElementById("Response")).innerHTML = text;
    }
  
    async function JSONapplication(): Promise<void> {
      let response: Response = await sendRequest(baseUrl + "json");
      let jsonObj: any = await response.json(); 
      console.log(jsonObj);
    }

}