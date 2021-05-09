
namespace Aufgabe3 {
    function printEverything(..._rest: string[]): void {
        console.log(_rest);
    }


    printEverything(greeting);

    interface Outfit {

        Kopfbedeckungen: Kopfbedeckung;
        Oberteile: Oberteil;
        Hosen: Hose;
        Schuhe: Schuh;
    }

    /**createOutfit();
    
    function createOutfit(): Outfit {
        let O: Outfit = { Kopfbedeckung: " ", Jacke: " ", Oberteil: " ", Hose: " ", Schuhe: "" };
        return O;
    
    }*/

    export interface Kopfbedeckung {
        Preis: number;
        KopfbedeckungArt: string;
        Image: string;
    }

    export interface Oberteil {
        Preis: number;
        OberteilTyp: string;
        Image: string;
    }


    export interface Hose {
        Preis: number;
        HosenTyp: string;
        Image: string;
    }


    export interface Schuh {

        Preis: number;
        Marke: string;
        Image: string;
        DateiName: string;

    }

    let previousElement: HTMLElement = document.body;

    let aktuelleSeite: string = window.location.href;
    let pos: number = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    if (aktuelleSeite == "Index5.html") {
        SeiteSchuhe();
    }

    let g: number;

    function Datenübernehmen(): void {

        let g: number[];
        let nodeList: NodeList = document.getElementsByTagName("Button");
        console.log(nodeList);
        S1 = S[1];
        console.log(S1);

    }


    function SeiteSchuhe(): void {

        for (let i: number = 0; i < S.length; i++) {

            let posLeft: string = "";
            let posTop: string = "";
            posLeft = (i * 200) + "px";
            posTop = 100 + "px";
            
            let but1: HTMLElement = document.createElement("Button");
            let idName: string = "Button";
            idName = idName + (i + 1);
            but1.textContent = "Auswählen";
            but1.id = idName;
            but1.style.margin = "8px";
            document.body.appendChild(but1);
            but1.addEventListener("click", Datenübernehmen);
            but1.style.position = "center";
            but1.style.left = posLeft;
            but1.style.top = "";
            but1.style.margin = "10px";
            but1.style.textAlign = "center";
            

            let div: HTMLDivElement = document.createElement("img");
            div.style.position = "static";
            div.style.left = posLeft;
            div.style.top = posTop;
            div.style.margin = "10px";
            div.style.height = 200 + "px";
            div.style.width = 200 + "px";
            div.setAttribute("src", S[i].DateiName);
            //div.style.background = "green";
            div.id = S[i].Image;
            previousElement.appendChild(div);


            let p1: HTMLParagraphElement = document.createElement("p");
            p1.appendChild(document.createTextNode(S[i].Marke));
            previousElement.appendChild(p1);
            p1.style.position = "static";
            p1.style.left = posLeft;

            let p2: HTMLParagraphElement = document.createElement("p");
            let text: string = S[i].Preis + " €";
            p2.appendChild(document.createTextNode(text));
            previousElement.appendChild(p2);
            p2.style.position = "static";
            p2.style.top = posTop;
            p2.style.left = posLeft;       

        }
    }
}
