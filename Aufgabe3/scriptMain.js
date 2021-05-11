"use strict";
var Aufgabe3;
(function (Aufgabe3) {
    /**createOutfit();
    
    function createOutfit(): Outfit {
        let O: Outfit = { Kopfbedeckung: " ", Jacke: " ", Oberteil: " ", Hose: " ", Schuhe: "" };
        return O;
    
    }*/
    let previousElement = document.body;
    HauptSeite();
    /*
        let aktuelleSeite: string = window.location.href;
        let pos: number = aktuelleSeite.lastIndexOf("/");
        aktuelleSeite = aktuelleSeite.substring(pos + 1);
        if (aktuelleSeite == "Index5.html") {
            SeiteSchuhe();
        }
    */
    function HauptSeite() {
        // Bilder
        let div = document.createElement("img");
        div.setAttribute("src", Aufgabe3.S1.DateiName);
        div.id = Aufgabe3.S1.Image;
        previousElement.appendChild(div);
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=scriptMain.js.map