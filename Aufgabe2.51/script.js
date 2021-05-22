"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let parts2;
    let imgIds = [parts2.Kopfbedeckungen[0].Image, parts2.Oberteile[0].Image, parts2.Hosen[0].Image, parts2.Schuhe[0].Image];
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        parts2 = await response.json();
        console.log(parts2);
    }
    communicate("data.json");
    let aktuelleSeite = window.location.href;
    let pos = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    function writeStorage(_part) {
        sessionStorage.setItem(_part.Image, _part.DateiName);
    }
    //async function writeStorage2(_part: Kleidungsstueck): Promise<void> {
    //let response: Response = await fetch(_part);
    //console.log("Response", response);
    // }
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
    function showSelectionmain(_part) {
        let prevElement = document.body;
        let div = document.createElement("img");
        div.setAttribute("src", sessionStorage.getItem(_part.Image));
        div.id = "test";
        prevElement.appendChild(div);
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
            let _selection = false;
            for (let i = 0; i < imgIds.length; i++) {
                console.log(sessionStorage.getItem(imgIds[i]));
                if (sessionStorage.getItem(imgIds[i]) != null) {
                    _selection = true;
                }
            }
            if (_selection == true) {
                showSelection();
            }
            else {
                window.location.href = "Index2.html";
            }
            break;
        case "Index2.html":
            showPossibilities(parts2.Kopfbedeckungen);
            showSelectionmain(parts2.Kopfbedeckungen[0]);
            break;
        case "Index3.html":
            showPossibilities(parts2.Oberteile);
            showSelectionmain(parts2.Kopfbedeckungen[0]);
            showSelectionmain(parts2.Oberteile[0]);
            break;
        case "Index4.html":
            showPossibilities(parts2.Hosen);
            showSelectionmain(parts2.Kopfbedeckungen[0]);
            showSelectionmain(parts2.Oberteile[0]);
            showSelectionmain(parts2.Hosen[0]);
            break;
        case "Index5.html":
            showPossibilities(parts2.Schuhe);
            showSelectionmain(parts2.Kopfbedeckungen[0]);
            showSelectionmain(parts2.Oberteile[0]);
            showSelectionmain(parts2.Hosen[0]);
            showSelectionmain(parts2.Schuhe[0]);
            break;
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map