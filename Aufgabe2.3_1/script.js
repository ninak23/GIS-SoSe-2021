"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let i = 0;
    function erschaffeRechteck() {
        let r = { start_x: Math.random() * 200, start_y: Math.random() * 100, size_x: Math.random() * 150, size_y: Math.random() * 80 };
        return r;
    }
    function printEverything(..._rest) {
        console.log(_rest);
    }
    printEverything(Aufgabe2_3.greeting);
    let previousElement = document.body;
    let but1 = document.createElement("Button");
    but1.textContent = "Rechteck hinzufügen";
    but1.style.margin = "8px";
    document.body.appendChild(but1);
    but1.addEventListener("click", verschiedeneRechtecke);
    let but2 = document.createElement("Button");
    but2.textContent = "Seite zurücksetzen";
    document.body.appendChild(but2);
    but2.addEventListener("click", Seitezurücksetzen);
    function Seitezurücksetzen() {
        window.location.reload();
    }
    verschiedeneRechtecke();
    function verschiedeneRechtecke() {
        //for (let i: number = 0; i < 5; i++) {
        i++;
        let r1 = erschaffeRechteck();
        let idName = "Rechteck";
        let posLeft = "";
        let posTop = "";
        idName = idName + (i + 1);
        posLeft = (i * r1.start_x) + "px";
        posTop = (i * r1.start_y) + "px";
        let div = document.createElement("div");
        div.style.position = "relative";
        div.style.left = posLeft;
        div.style.top = posTop;
        div.style.height = r1.size_x + "px";
        div.style.width = r1.size_y + "px";
        div.style.background = "green";
        div.id = idName;
        previousElement.appendChild(div);
        //}
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map