"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    function createPartDiv(_part, _index) {
        // wrapping div
        let div = document.createElement("div");
        div.classList.add("kleidungsstueck");
        // image to be displayed
        let img = document.createElement("img");
        img.src = _part.DateiName;
        div.appendChild(img);
        // description
        let span = document.createElement("span");
        span.innerText = _part.Typ;
        div.appendChild(span);
        //let preis: HTMLSpanElement = document.createElement("preis");
        //preis.innerHTML = _part.Preis;
        //div.appendChild(preis);
        // button
        let btn = document.createElement("button");
        btn.innerText = "Select";
        // Möglichkeit 1: innere Funktion
        btn.addEventListener("click", handleSelection);
        // Möglichkeit 2: äußere Funktion 
        btn.addEventListener("click", handleSelection2);
        btn.dataset.index = _index.toString();
        div.appendChild(btn);
        return div;
        // innere Funktion, welche Durch ihre Positionierung innerhalb der createPartDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
        function handleSelection(_e) {
            console.log("innere Funktion", _part);
        }
    }
    // äußere Funktion, welche nun anderweitig herausfinden muss, welchen Part wir gewählt haben.
    // in diesem Fall habe ich den index im heads Array auf dem Button im dataset hinterlegt.
    // Da der Button das ist, was das Event auslößt, können wir über _e.currentTarget darauf zugreifen.
    function handleSelection2(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        console.log("äußere Funktion", Aufgabe2_4.parts.Kopfbedeckungen[index]);
        console.log("äußere Funktion", Aufgabe2_4.parts.Oberteile[index]);
    }
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities(Aufgabe2_4.parts.Kopfbedeckungen);
    function showPossibilities2(_parts) {
        let wrapper = document.getElementById("selectionWrapper2");
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities2(Aufgabe2_4.parts.Oberteile);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
/*let previousElement: HTMLElement = document.body;

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

function HauptSeite(): void {
    // Bilder

        let div: HTMLDivElement = document.createElement("img");
        div.setAttribute("src", S1.DateiName);
        div.id = S1.Image;
        previousElement.appendChild(div);

    
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
    
}*/
//# sourceMappingURL=script.js.map