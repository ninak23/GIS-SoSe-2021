
namespace Aufgabe3 {
 

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

    //HauptSeite();

    let aktuelleSeite: string = window.location.href;
    let pos: number = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    if (aktuelleSeite == "Index5.html") {
        SeiteSchuhe();
    }

    function HauptSeite(): void {
        // Bilder

            let div: HTMLDivElement = document.createElement("img");
            div.setAttribute("src", S1.DateiName);
            div.id = S1.Image;
            previousElement.appendChild(div);

        
    }

    function SeiteSchuhe(): void {
        // Bilder
        for (let i: number = 0; i < S.length; i++) {

            let div: HTMLDivElement = document.createElement("img");
            div.setAttribute("src", S[i].DateiName);
            div.id = S[i].Image;
            previousElement.appendChild(div);

        }
        
        // Text1
        for (let i: number = 0; i < S.length; i++) {

            let p1: HTMLParagraphElement = document.createElement("p");
            p1.appendChild(document.createTextNode(S[i].Marke));
            previousElement.appendChild(p1);
            p1.id = "text";

        }

        // Text2
        for (let i: number = 0; i < S.length; i++) {

            let p2: HTMLParagraphElement = document.createElement("p");
            let text: string = S[i].Preis + " €";
            p2.appendChild(document.createTextNode(text));
            previousElement.appendChild(p2);
            p2.id = "text2";

        }

        // Button
        for (let i: number = 0; i < S.length; i++) {

            let but1: HTMLElement = document.createElement("Button");
            
            but1.textContent = "Auswählen";
            but1.id = "Button1";
            document.body.appendChild(but1);
            but1.addEventListener("click", handleClick);
            function handleClick(_event: MouseEvent): void {
                console.log(S[i]);
                S1 = S[i];
            }

        }
        
    }
}
