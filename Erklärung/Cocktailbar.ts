
namespace L06_CocktailBar {
    window.addEventListener("load", handleload);
    let form: HTMLFormElement;
    let url: string = "http://localhost:8001";


    async function handleload(_event: Event): Promise<void> {

        console.log("Init");

        let response: Response = await fetch ("Data.json");
        let offer: string = await response.text();
        let data: DataTransfer = JSON.parse(offer);

        generateContent(data);

        form = <HTMLFormElement>document.querySelector("form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        console.log(submit);

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);

        displayOrder();    
        
    }

    async function sendOrder(_event: Event): Promise<void> {
      console.log("Send Order");
      let formData: FormData = new FormData(form);
      let query: URLSearchParams = new URLSearchParams(<any>formData);
      let response: Response = await fetch(url + "?" + query.toString());
      let responseText: string = await response.text();
      alert(responseText);
        
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder(): void {
        let price: number = 0;
    
    }

    function displayAmount(): void {
        let amount: number = 0;
    }

    function generateContent (_data: string): void {
        let Content: string = "";
       
    }


}