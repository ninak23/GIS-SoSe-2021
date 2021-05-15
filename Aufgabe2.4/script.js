"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let parts2 = JSON.parse(Aufgabe2_4.partsJson);
    let imgIds = [parts2.Kopfbedeckungen[0].Image, parts2.Oberteile[0].Image, parts2.Hosen[0].Image, parts2.Schuhe[0].Image];
    function writeStorage(_part) {
        sessionStorage.setItem(_part.Image, _part.DateiName);
    }
    function showSelection() {
        let prevElement = document.body;
        for (let i = 0; i < imgIds.length; i++) {
            let div = document.createElement("img");
            div.setAttribute("src", sessionStorage.getItem(imgIds[i]));
            div.id = "kopfbedeckung";
            prevElement.appendChild(div);
        }
    }
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
            writeStorage(_part);
            console.log(sessionStorage.getItem(_part.Image));
        }
    }
    // äußere Funktion, welche nun anderweitig herausfinden muss, welchen Part wir gewählt haben.
    // in diesem Fall habe ich den index im heads Array auf dem Button im dataset hinterlegt.
    // Da der Button das ist, was das Event auslößt, können wir über _e.currentTarget darauf zugreifen.
    function handleSelection2(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        console.log("äußere Funktion", parts2.Kopfbedeckungen[index]);
    }
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    let aktuelleSeite = window.location.href;
    let pos = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    if (aktuelleSeite == "Index.html") {
        showSelection();
    }
    if (aktuelleSeite == "Index2.html") {
        showPossibilities(parts2.Kopfbedeckungen);
    }
    if (aktuelleSeite == "Index3.html") {
        showPossibilities(parts2.Oberteile);
    }
    if (aktuelleSeite == "Index4.html") {
        showPossibilities(parts2.Hosen);
    }
    if (aktuelleSeite == "Index5.html") {
        showPossibilities(parts2.Schuhe);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map