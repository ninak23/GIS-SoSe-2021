
namespace Aufgabe3 {
 

    /**createOutfit();
    
    function createOutfit(): Outfit {
        let O: Outfit = { Kopfbedeckung: " ", Jacke: " ", Oberteil: " ", Hose: " ", Schuhe: "" };
        return O;
    
    }*/


    let previousElement: HTMLElement = document.body;

    HauptSeite();
/*
    let aktuelleSeite: string = window.location.href;
    let pos: number = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    if (aktuelleSeite == "Index5.html") {
        SeiteSchuhe();
    }
*/
    function HauptSeite(): void {
        // Bilder

            let div: HTMLDivElement = document.createElement("img");
            div.setAttribute("src", S1.DateiName);
            div.id = S1.Image;
            previousElement.appendChild(div);

        
    }

}
