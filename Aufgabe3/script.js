"use strict";
var Aufgabe3;
(function (Aufgabe3) {
    let previousElement = document.body;
    //HauptSeite();
    let aktuelleSeite = window.location.href;
    let pos = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    if (aktuelleSeite == "Index2.html") {
        SeiteSchuhe(Aufgabe3.K);
    }
    if (aktuelleSeite == "Index3.html") {
        SeiteSchuhe(Aufgabe3.O);
    }
    if (aktuelleSeite == "Index4.html") {
        SeiteSchuhe(Aufgabe3.H);
    }
    if (aktuelleSeite == "Index5.html") {
        SeiteSchuhe(Aufgabe3.S);
    }
    function SeiteSchuhe(_kleidungsteil) {
        // Bilder
        for (let i = 0; i < _kleidungsteil.length; i++) {
            let div = document.createElement("img");
            div.setAttribute("src", _kleidungsteil[i].DateiName);
            div.id = _kleidungsteil[i].Image;
            previousElement.appendChild(div);
        }
        // Text1
        for (let i = 0; i < _kleidungsteil.length; i++) {
            let p1 = document.createElement("p");
            p1.appendChild(document.createTextNode(_kleidungsteil[i].Typ));
            previousElement.appendChild(p1);
            p1.id = "text";
        }
        // Text2
        for (let i = 0; i < _kleidungsteil.length; i++) {
            let p2 = document.createElement("p");
            let text = _kleidungsteil[i].Preis + " €";
            p2.appendChild(document.createTextNode(text));
            previousElement.appendChild(p2);
            p2.id = "text2";
        }
        // Button
        for (let i = 0; i < _kleidungsteil.length; i++) {
            let but1 = document.createElement("Button");
            but1.textContent = "Auswählen";
            but1.id = "Button1";
            document.body.appendChild(but1);
            but1.addEventListener("click", handleClick);
            function handleClick(_event) {
                console.log(_kleidungsteil[i]);
                Aufgabe3.S1 = _kleidungsteil[i];
            }
        }
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=script.js.map