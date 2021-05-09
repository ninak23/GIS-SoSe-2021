"use strict";
/*namespace Aufgabe2_3 {
    function printEverything(..._rest: string[]): void {
        console.log(_rest);
    }


    printEverything(greeting);

    let previousElement: HTMLElement = document.body;
    for (let i: number = 0; i < 5; i++) {
        let div: HTMLDivElement = document.createElement("div");
        div.style.height = "100px";
        div.style.color = "green";
        div.classList.add("rect");
        previousElement.appendChild(div);
    }
}*/
/**let previousElement: HTMLElement = document.body;
for (let i: number = 0; i < 5; i++) {
    let div: HTMLElement = document.createElement("div");

namespace Aufgabe2_3 {
    window.addEventListener("click", handleClick);

    function handleClick(_event: Event): void {
    }

    function printEverything(..._rest: string[]): void {
        console.log(_rest);
    }

    printEverything(greeting);

    let previousElement: HTMLElement = document.body;

    let but1: HTMLElement = document.createElement("Button");
    but1.textContent = "Rechteck hinzufügen";
    but1.style.margin = "8px";
    document.body.appendChild(but1);

    let but2: HTMLElement = document.createElement("Button");
    but2.textContent = "Seite zurücksetzen";
    document.body.appendChild(but2);


    for (let i: number = 0; i < 5; i++) {
        let idName: string = "Rechteck";
        idName = idName + (i + 1);
        let div: HTMLDivElement = document.createElement("div");
        div.style.transform = "div";
        div.style.height = "100px";
        div.style.width = "500px";
        div.style.background = "green";
        //div.classList.add("rect");
        div.id = idName;
        previousElement.appendChild(div);
        document.body.appendChild(div);
    }
    //document.getElementById("Rechteck").addEventListener("click", document.createElement)




    document.getElementById("div").style.transform = "green";

    let p1: HTMLParagraphElement = document.createElement("p");
    p1.appendChild(document.createTextNode("ein neuer Paragraph."));
    document.body.appendChild(p1);



    let div: HTMLDivElement = <HTMLDivElement>document.getElementById("Rechteck");
    document.body.appendChild(div);




    interface Rechteck {

        start_x: number;
        start_y: number;
        size_x: number;
        size_y: number;
    }


    erschaffeRechteck2();

    function erschaffeRechteck2(): Rechteck {
        let r: Rechteck = { start_x: Math.random() * 450, start_y: Math.random() * 320, size_x: Math.random() * 20, size_y: Math.random() * 40 };
        return r;

    }



    function zeichneRechteck2(_r: Rechteck): String {
        div.style.height = "100px";
        div.style.width = "500px";
        div.style.color = "green";

        document.body.appendChild(div);
        return "d";
    }
    div.style.transform = "div";

    //3 e)

    let rechteckArray2: Rechteck[] = [];
    rechteckArray2.push(erschaffeRechteck2());
    rechteckArray2.push(erschaffeRechteck2());
    rechteckArray2.push(erschaffeRechteck2());
    rechteckArray2.push(erschaffeRechteck2());

    for (let i: number = 0; i < rechteckArray2.length; i++) {

        zeichneRechteck2(rechteckArray2[i]);
    }

}*/
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