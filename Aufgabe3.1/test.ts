
document.getElementsByTagName("button")[0].addEventListener("click", Server);

async function Server(): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://ninakgissose2020.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    let response: Response = await fetch(url);
    let answer: string = await response.text();
    console.log(answer);


}







