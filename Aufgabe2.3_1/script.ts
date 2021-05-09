namespace Aufgabe2_3 {

    interface Rechteck {

        start_x: number;
        start_y: number;
        size_x: number;
        size_y: number;
    }

    let i: number = 0;

    function erschaffeRechteck(): Rechteck {
        let r: Rechteck = { start_x: Math.random() * 200, start_y: Math.random() * 100, size_x: Math.random() * 150, size_y: Math.random() * 80 };
        return r;

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
    but1.addEventListener("click", verschiedeneRechtecke);


    let but2: HTMLElement = document.createElement("Button");
    but2.textContent = "Seite zurücksetzen";
    document.body.appendChild(but2);
    but2.addEventListener("click", Seitezurücksetzen);


    function Seitezurücksetzen(): void {

       window.location.reload();
    }


    verschiedeneRechtecke();


    function verschiedeneRechtecke(): void {

        //for (let i: number = 0; i < 5; i++) {
            i++;
            let r1: Rechteck = erschaffeRechteck();
            let idName: string = "Rechteck";
            let posLeft: string = "";
            let posTop: string = "";
            idName = idName + (i + 1);
            posLeft = (i * r1.start_x) + "px";
            posTop = (i * r1.start_y) + "px";
            let div: HTMLDivElement = document.createElement("div");
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
}