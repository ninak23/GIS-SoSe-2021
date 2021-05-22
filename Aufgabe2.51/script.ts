namespace Aufgabe2_5 {


  export interface Kleidungsstueck {
    Preis: number;
    Typ: string;
    Image: string;
    DateiName: string;
  }

  export interface Outfit {

    Kopfbedeckungen: Kleidungsstueck[];
    Oberteile: Kleidungsstueck[];
    Hosen: Kleidungsstueck[];
    Schuhe: Kleidungsstueck[];
  }

  export interface Selection {
    Kopfbedeckung: Kleidungsstueck;
    Oberteil: Kleidungsstueck;
    Hose: Kleidungsstueck;
    Schuh: Kleidungsstueck;
  }



  let parts2: Outfit;
  let imgIds: string[] = [parts2.Kopfbedeckungen[0].Image, parts2.Oberteile[0].Image, parts2.Hosen[0].Image, parts2.Schuhe[0].Image];




  async function communicate(_url: RequestInfo): Promise<void> {

    let response: Response = await fetch(_url);
    console.log("Response", response);
    parts2 = await response.json();
    console.log(parts2);
  }

  communicate("data.json");





  let aktuelleSeite: string = window.location.href;
  let pos: number = aktuelleSeite.lastIndexOf("/");
  aktuelleSeite = aktuelleSeite.substring(pos + 1);

  function writeStorage(_part: Kleidungsstueck): void {
    sessionStorage.setItem(_part.Image, _part.DateiName);
  }

  //async function writeStorage2(_part: Kleidungsstueck): Promise<void> {
  //let response: Response = await fetch(_part);
  //console.log("Response", response);
  // }

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

  function showSelectionmain(_part: Kleidungsstueck): void {
    let prevElement: HTMLElement = document.body;
    let div: HTMLDivElement = document.createElement("img");
    div.setAttribute("src", sessionStorage.getItem(_part.Image));
    div.id = "test";
    prevElement.appendChild(div);
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
      //prevElement.removeChild(div);
      div.setAttribute("src", sessionStorage.getItem(_part.Image));
      div.id = "test";
      prevElement.appendChild(div);
      let _aktuelleSeite: string = window.location.href;
      let _pos: number = _aktuelleSeite.lastIndexOf("/");
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

  function showPossibilities(_parts: Kleidungsstueck[]): void {
    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("selectionWrapper");
    for (let i: number = 0; i < _parts.length; i++) {
      let div: HTMLDivElement = createPartDiv(_parts[i], i);
      wrapper.appendChild(div);
    }
  }

  switch (aktuelleSeite) {
    case "Index.html":
      let _selection: boolean = false;
      for (let i: number = 0; i < imgIds.length; i++) {
        console.log(sessionStorage.getItem(imgIds[i]));
        if (sessionStorage.getItem(imgIds[i]) != null) {
          _selection = true;
        }
      }

      if ( _selection == true) {
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
}




