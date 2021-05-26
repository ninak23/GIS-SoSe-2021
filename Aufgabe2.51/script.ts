namespace Aufgabe2_5 {

  interface Kleidungsstueck {
    Preis: number;
    Typ: string;
    Image: string;
    DateiName: string;
  }

  interface Outfit {
    Kopfbedeckungen: Kleidungsstueck[];
    Oberteile: Kleidungsstueck[];
    Hosen: Kleidungsstueck[];
    Schuhe: Kleidungsstueck[];
  }

  interface ServerResponse {
    error: string;
    message: string;
  }

  let parts2: Outfit;

  async function serverreply(): Promise<void> {

    let imgIds: string[] = [parts2.Kopfbedeckungen[0].Image, parts2.Oberteile[0].Image, parts2.Hosen[0].Image, parts2.Schuhe[0].Image];

//Je nachdem ob man ein error oder eine message zurückbekommen möchte, muss man entrprechend auskommentieren 
    let url: string = "https://gis-communication.herokuapp.com";
    let _selection: string = imgIds[0] + "&" + imgIds[1];    // Für Test von error
    //let _selection: string = imgIds[0] + "&" + imgIds[1] + "&" + imgIds[2] + "&" + imgIds[3];  // Für Test von message 
    let query: URLSearchParams = new URLSearchParams(<any> _selection);
    url = url + "?" + query.toString();
    let response: Response = await fetch(url);
    console.log("ServerResponse", response);
    let answer: ServerResponse = await response.json();
    console.log(answer);

    let aktuelleSeite: string = window.location.href;
    let pos: number = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    if (aktuelleSeite == "Index.html") {
      let text: HTMLElement = document.createElement("P");
      if (answer.error != null) {
        text.innerText = answer.error;
        text.id = "error";
      }
      else {
        if (answer.message != null) {
          text.innerText = answer.message;
          text.id = "message";
        }
        else {
          text.innerText = "Keine Nachricht empfangen";
          text.id = "egal";
        }
      }
      document.body.appendChild(text);
      }
  }


  async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);
    parts2 = await response.json();
    console.log(parts2);
    main();
    serverreply();
  }

  function main(): void {
    let imgIds: string[] = [parts2.Kopfbedeckungen[0].Image, parts2.Oberteile[0].Image, parts2.Hosen[0].Image, parts2.Schuhe[0].Image];

    function showSelection(): void {
      let prevElement: HTMLElement = document.body;
      for (let i: number = 0; i < imgIds.length; i++) {
        let div: HTMLDivElement = document.createElement("img");
        div.setAttribute("src", sessionStorage.getItem(imgIds[i]));
        div.setAttribute("alt", "Noch kein Artikel ausgewählt");
        div.id = "kopfbedeckung";
        prevElement.appendChild(div);
      }

    }

    function createPartDiv(_part: Kleidungsstueck, _index: number): HTMLDivElement {
      // wrapping div
      let div: HTMLDivElement = document.createElement("div");
      div.classList.add("kleidungsstueck");

      // image to be displayed
      let img: HTMLImageElement = document.createElement("img");
      img.src = _part.DateiName;
      div.appendChild(img);


      // description

      let span: HTMLSpanElement = document.createElement("span");
      span.innerText = _part.Typ;
      div.appendChild(span);

      //let preis: HTMLSpanElement = document.createElement("preis");
      //preis.innerHTML = _part.Preis;
      //div.appendChild(preis);

      // button
      let btn: HTMLButtonElement = document.createElement("button");
      btn.innerText = "Select";
      // Möglichkeit 1: innere Funktion
      btn.addEventListener("click", handleSelection);

      div.appendChild(btn);

      return div;

      // innere Funktion, welche Durch ihre Positionierung innerhalb der createPartDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
      function handleSelection(_e: Event): void {
        console.log("innere Funktion", _part);
        writeStorage(_part);
        console.log(sessionStorage.getItem(_part.Image));

        let prevElement: HTMLElement = document.body;
        let div: HTMLDivElement = document.createElement("img");
        div.setAttribute("src", sessionStorage.getItem(_part.Image));
        div.id = "test";
        prevElement.appendChild(div);
        let aktuelleSeite: string = window.location.href;
        let pos: number = aktuelleSeite.lastIndexOf("/");
        aktuelleSeite = aktuelleSeite.substring(pos + 1);
        switch (aktuelleSeite) {
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

    function writeStorage(_part: Kleidungsstueck): void {
      sessionStorage.setItem(_part.Image, _part.DateiName);
    }

    function showSelectionmain(_part: Kleidungsstueck): void {
      let prevElement: HTMLElement = document.body;
      let div: HTMLDivElement = document.createElement("img");
      div.setAttribute("src", sessionStorage.getItem(_part.Image));
      div.id = "test";
      prevElement.appendChild(div);
    }

    function showPossibilities(_parts: Kleidungsstueck[]): void {
      let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("selectionWrapper");
      for (let i: number = 0; i < _parts.length; i++) {
        let div: HTMLDivElement = createPartDiv(_parts[i], i);
        wrapper.appendChild(div);
      }
    }

    let aktuelleSeite: string = window.location.href;
    let pos: number = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);

    switch (aktuelleSeite) {
      case "Index.html":
        let selection: boolean = false;
        for (let i: number = 0; i < imgIds.length; i++) {
          console.log(sessionStorage.getItem(imgIds[i]));
          if (sessionStorage.getItem(imgIds[i]) != null) {
            selection = true;
          }
        }

        if (selection == true) {
          showSelection();
        }
        else {
          window.location.href = "Index2.html";
        }
        break;

      case "Index2.html":
        showPossibilities(parts2.Kopfbedeckungen);
        if (sessionStorage.getItem(imgIds[0]) != null) {
          showSelectionmain(parts2.Kopfbedeckungen[0]);
        }
        break;

      case "Index3.html":
        showPossibilities(parts2.Oberteile);
        showSelectionmain(parts2.Kopfbedeckungen[0]);
        if (sessionStorage.getItem(imgIds[1]) != null) {
          showSelectionmain(parts2.Oberteile[0]);
        }
        break;

      case "Index4.html":
        showPossibilities(parts2.Hosen);
        showSelectionmain(parts2.Kopfbedeckungen[0]);
        showSelectionmain(parts2.Oberteile[0]);
        if (sessionStorage.getItem(imgIds[2]) != null) {
          showSelectionmain(parts2.Hosen[0]);
        }
        break;

      case "Index5.html":
        showPossibilities(parts2.Schuhe);
        showSelectionmain(parts2.Kopfbedeckungen[0]);
        showSelectionmain(parts2.Oberteile[0]);
        showSelectionmain(parts2.Hosen[0]);
        if (sessionStorage.getItem(imgIds[3]) != null) {
          showSelectionmain(parts2.Schuhe[0]);
        }
        break;
    }
  }

  communicate("data.json");

}


