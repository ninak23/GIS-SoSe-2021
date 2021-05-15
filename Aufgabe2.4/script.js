"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let parts2 = JSON.parse(Aufgabe2_4.partsJson);
    let imgIds = [parts2.Kopfbedeckungen[0].Image, parts2.Oberteile[0].Image, parts2.Hosen[0].Image, parts2.Schuhe[0].Image];
    let aktuelleSeite = window.location.href;
    let pos = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    function writeStorage(_part) {
        sessionStorage.setItem(_part.Image, _part.DateiName);
    }
    function showSelection() {
        let prevElement = document.body;
        for (let i = 0; i < imgIds.length; i++) {
            let div = document.createElement("img");
            div.setAttribute("src", sessionStorage.getItem(imgIds[i]));
            div.setAttribute("alt", "Noch kein Artikel ausgewählt");
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
        div.appendChild(btn);
        return div;
        // innere Funktion, welche Durch ihre Positionierung innerhalb der createPartDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
        function handleSelection(_e) {
            console.log("innere Funktion", _part);
            writeStorage(_part);
            console.log(sessionStorage.getItem(_part.Image));
            let prevElement = document.body;
            let div = document.createElement("img");
            //prevElement.removeChild(div);
            div.setAttribute("src", sessionStorage.getItem(_part.Image));
            div.id = "test";
            prevElement.appendChild(div);
            let _aktuelleSeite = window.location.href;
            let _pos = _aktuelleSeite.lastIndexOf("/");
            _aktuelleSeite = _aktuelleSeite.substring(_pos + 1);
            switch (_aktuelleSeite) {
                case "Index.html":
                    showSelection();
                    break;
                case "Index2.html":
                    window.location.href = "Index3.html";
                    break;
                case "Index3.html":
                    window.location.href = "Index4.html";
                    break;
                case "Index4.html":
                    window.location.href = "Index5.html";
                    break;
                case "Index5.html":
                    window.location.href = "Index.html";
                    break;
            }
        }
    }
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    switch (aktuelleSeite) {
        case "Index.html":
            showSelection();
            break;
        case "Index2.html":
            showPossibilities(parts2.Kopfbedeckungen);
            let prevElement = document.body;
            let div = document.createElement("img");
            div.setAttribute("src", sessionStorage.getItem(parts2.Kopfbedeckungen[0].Image));
            div.id = "test";
            prevElement.appendChild(div);
            break;
        case "Index3.html":
            showPossibilities(parts2.Oberteile);
            let prevElement2 = document.body;
            let div2 = document.createElement("img");
            div2.setAttribute("src", sessionStorage.getItem(parts2.Kopfbedeckungen[0].Image));
            div2.id = "test";
            prevElement2.appendChild(div2);
            let div3 = document.createElement("img");
            div3.setAttribute("src", sessionStorage.getItem(parts2.Oberteile[0].Image));
            div3.id = "test";
            prevElement2.appendChild(div3);
            break;
        case "Index4.html":
            showPossibilities(parts2.Hosen);
            let prevElement3 = document.body;
            let div4 = document.createElement("img");
            div4.setAttribute("src", sessionStorage.getItem(parts2.Kopfbedeckungen[0].Image));
            div4.id = "test";
            prevElement3.appendChild(div4);
            let div5 = document.createElement("img");
            div5.setAttribute("src", sessionStorage.getItem(parts2.Oberteile[0].Image));
            div5.id = "test";
            prevElement3.appendChild(div5);
            let div6 = document.createElement("img");
            div6.setAttribute("src", sessionStorage.getItem(parts2.Hosen[0].Image));
            div6.id = "test";
            prevElement3.appendChild(div6);
            break;
        case "Index5.html":
            showPossibilities(parts2.Schuhe);
            let prevElement4 = document.body;
            let div7 = document.createElement("img");
            div7.setAttribute("src", sessionStorage.getItem(parts2.Kopfbedeckungen[0].Image));
            div7.id = "test";
            prevElement4.appendChild(div7);
            let div8 = document.createElement("img");
            div8.setAttribute("src", sessionStorage.getItem(parts2.Oberteile[0].Image));
            div8.id = "test";
            prevElement4.appendChild(div8);
            let div9 = document.createElement("img");
            div9.setAttribute("src", sessionStorage.getItem(parts2.Hosen[0].Image));
            div9.id = "test";
            prevElement4.appendChild(div9);
            let div10 = document.createElement("img");
            div10.setAttribute("src", sessionStorage.getItem(parts2.Schuhe[0].Image));
            div10.id = "test";
            prevElement4.appendChild(div10);
            break;
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map