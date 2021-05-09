"use strict";
var Aufgabe3;
(function (Aufgabe3) {
    /*function printEverything(..._rest: string[]): void {
        console.log(_rest);
    }*/
    let previousElement = document.body;
    let aktuelleSeite = window.location.href;
    let pos = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    if (aktuelleSeite == "Index5.html") {
        SeiteSchuhe();
    }
    let g;
    function Datenübernehmen() {
        //let g: number[];
        //let nodeList: NodeList = document.getElementsByTagName("Button");
        //console.log(nodeList);
        Aufgabe3.S1 = Aufgabe3.S[1];
        console.log(Aufgabe3.S1);
    }
    function SeiteSchuhe() {
        for (let i = 0; i < Aufgabe3.S.length; i++) {
            let posLeft = "";
            let posTop = "";
            posLeft = (i * 200) + "px";
            posTop = 100 + "px";
            let but1 = document.createElement("Button");
            let idName = "Button";
            idName = idName + (i + 1);
            but1.textContent = "Auswählen";
            but1.id = idName;
            but1.style.margin = "8px";
            document.body.appendChild(but1);
            but1.addEventListener("click", handleClick);
            function handleClick(_event) {
                //console.log(_event);
                console.log(Aufgabe3.S[i]);
            }
            but1.style.position = "center";
            but1.style.left = posLeft;
            but1.style.top = "";
            but1.style.margin = "10px";
            but1.style.textAlign = "center";
            let div = document.createElement("img");
            div.style.position = "static";
            div.style.left = posLeft;
            div.style.top = posTop;
            div.style.margin = "10px";
            div.style.height = 200 + "px";
            div.style.width = 200 + "px";
            div.setAttribute("src", Aufgabe3.S[i].DateiName);
            //div.style.background = "green";
            div.id = Aufgabe3.S[i].Image;
            previousElement.appendChild(div);
            let p1 = document.createElement("p");
            p1.appendChild(document.createTextNode(Aufgabe3.S[i].Marke));
            previousElement.appendChild(p1);
            p1.style.position = "static";
            p1.style.left = posLeft;
            let p2 = document.createElement("p");
            let text = Aufgabe3.S[i].Preis + " €";
            p2.appendChild(document.createTextNode(text));
            previousElement.appendChild(p2);
            p2.style.position = "static";
            p2.style.top = posTop;
            p2.style.left = posLeft;
        }
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=script.js.map