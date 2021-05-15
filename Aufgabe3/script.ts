
namespace Aufgabe3 {
 

    export interface Outfit {

        Kopfbedeckungen: Kleidungsstueck[];
        Oberteile: Kleidungsstueck[];
        Hosen: Kleidungsstueck[];
        Schuhe: Kleidungsstueck[];
    }

    /**createOutfit();
    
    function createOutfit(): Outfit {
        let O: Outfit = { Kopfbedeckung: " ", Jacke: " ", Oberteil: " ", Hose: " ", Schuhe: "" };
        return O;
    
    }*/

    export interface Kleidungsstueck {
        Preis: number;
        Typ: string;
        Image: string;
        DateiName: string;
    }

    export interface Selection {
        Kopfbedeckung: Kleidungsstueck;
        Oberteil: Kleidungsstueck;
        Hose: Kleidungsstueck;
        Schuh: Kleidungsstueck;
    }

    


    let previousElement: HTMLElement = document.body;

    //HauptSeite();

    let aktuelleSeite: string = window.location.href;
    let pos: number = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    if (aktuelleSeite == "Index2.html") {
        SeiteSchuhe(K);
    }
    if (aktuelleSeite == "Index3.html") {
        SeiteSchuhe(O);
    }
    if (aktuelleSeite == "Index4.html") {
        SeiteSchuhe(H);
    }

    if (aktuelleSeite == "Index5.html") {
        SeiteSchuhe(S);
    }

   
 

    function SeiteSchuhe(_kleidungsteil: Kleidungsstueck[]): void {
        // Bilder
        for (let i: number = 0; i < _kleidungsteil.length; i++) {

            let div: HTMLDivElement = document.createElement("img");
            div.setAttribute("src", _kleidungsteil[i].DateiName);
            div.id = _kleidungsteil[i].Image;
            previousElement.appendChild(div);

        }
        
        // Text1
        for (let i: number = 0; i < _kleidungsteil.length; i++) {

            let p1: HTMLParagraphElement = document.createElement("p");
            p1.appendChild(document.createTextNode(_kleidungsteil[i].Typ));
            previousElement.appendChild(p1);
            p1.id = "text";

        }

        // Text2
        for (let i: number = 0; i < _kleidungsteil.length; i++) {

            let p2: HTMLParagraphElement = document.createElement("p");
            let text: string = _kleidungsteil[i].Preis + " €";
            p2.appendChild(document.createTextNode(text));
            previousElement.appendChild(p2);
            p2.id = "text2";

        }

        // Button
        for (let i: number = 0; i < _kleidungsteil.length; i++) {

            let but1: HTMLElement = document.createElement("Button");
            
            but1.textContent = "Auswählen";
            but1.id = "Button1";
            document.body.appendChild(but1);
            but1.addEventListener("click", handleClick);
            function handleClick(_event: MouseEvent): void {
                console.log(_kleidungsteil[i]);
                S1 = _kleidungsteil[i];
            }

        }
        
    }
}
