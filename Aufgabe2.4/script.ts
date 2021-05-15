
namespace Aufgabe2_4 {

    let parts2: Outfit = JSON.parse(partsJson);
    let imgIds: string[] = [parts2.Kopfbedeckungen[0].Image, parts2.Oberteile[0].Image, parts2.Hosen[0].Image, parts2.Schuhe[0].Image];
  
    function writeStorage(_part: Kleidungsstueck): void {
      sessionStorage.setItem(_part.Image, _part.DateiName);
    }
  
    function showSelection(): void {
      let prevElement: HTMLElement = document.body;
      for (let i: number = 0; i < imgIds.length; i++) {
        let div: HTMLDivElement = document.createElement("img");
        div.setAttribute("src", sessionStorage.getItem(imgIds[i]));
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
  
      // Möglichkeit 2: äußere Funktion 
      btn.addEventListener("click", handleSelection2);
      btn.dataset.index = _index.toString();
  
      div.appendChild(btn);
  
      return div;
  
      // innere Funktion, welche Durch ihre Positionierung innerhalb der createPartDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
      function handleSelection(_e: Event): void {
        console.log("innere Funktion", _part);
        writeStorage(_part);
        console.log(sessionStorage.getItem(_part.Image));
      }
    }
  
    // äußere Funktion, welche nun anderweitig herausfinden muss, welchen Part wir gewählt haben.
    // in diesem Fall habe ich den index im heads Array auf dem Button im dataset hinterlegt.
    // Da der Button das ist, was das Event auslößt, können wir über _e.currentTarget darauf zugreifen.
    function handleSelection2(_e: Event): void {
      let target: HTMLElement = <HTMLElement> _e.currentTarget;
      let index: number = Number(target.dataset.index);
  
      console.log("äußere Funktion", parts2.Kopfbedeckungen[index]);
  
    }
  
    function showPossibilities(_parts: Kleidungsstueck[]): void {
      let wrapper: HTMLDivElement = <HTMLDivElement> document.getElementById("selectionWrapper");
      for (let i: number = 0; i < _parts.length; i++) {
        let div: HTMLDivElement = createPartDiv(_parts[i], i);
        wrapper.appendChild(div);
      }
    }
    
    let aktuelleSeite: string = window.location.href;
    let pos: number = aktuelleSeite.lastIndexOf("/");
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
  
  
  
  }
