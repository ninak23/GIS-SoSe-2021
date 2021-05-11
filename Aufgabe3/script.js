"use strict";
var Aufgabe3;
(function (Aufgabe3) {
    let previousElement = document.body;
    //HauptSeite();
    let aktuelleSeite = window.location.href;
    let pos = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    if (aktuelleSeite == "Index5.html") {
        SeiteSchuhe();
    }
    function HauptSeite() {
        // Bilder
        let div = document.createElement("img");
        div.setAttribute("src", Aufgabe3.S1.DateiName);
        div.id = Aufgabe3.S1.Image;
        previousElement.appendChild(div);
    }
    function SeiteSchuhe() {
        // Bilder
        for (let i = 0; i < Aufgabe3.S.length; i++) {
            let div = document.createElement("img");
            div.setAttribute("src", Aufgabe3.S[i].DateiName);
            div.id = Aufgabe3.S[i].Image;
            previousElement.appendChild(div);
        }
        // Text1
        for (let i = 0; i < Aufgabe3.S.length; i++) {
            let p1 = document.createElement("p");
            p1.appendChild(document.createTextNode(Aufgabe3.S[i].Marke));
            previousElement.appendChild(p1);
            p1.id = "text";
        }
        // Text2
        for (let i = 0; i < Aufgabe3.S.length; i++) {
            let p2 = document.createElement("p");
            let text = Aufgabe3.S[i].Preis + " €";
            p2.appendChild(document.createTextNode(text));
            previousElement.appendChild(p2);
            p2.id = "text2";
        }
        // Button
        for (let i = 0; i < Aufgabe3.S.length; i++) {
            let but1 = document.createElement("Button");
            but1.textContent = "Auswählen";
            but1.id = "Button1";
            document.body.appendChild(but1);
            but1.addEventListener("click", handleClick);
            function handleClick(_event) {
                console.log(Aufgabe3.S[i]);
                Aufgabe3.S1 = Aufgabe3.S[i];
            }
        }
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=script.js.map