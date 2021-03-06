
namespace Client {

    export interface Player {
        _id: string;
        firstname: string;
        secondname: string;
        Playtime: string;
    }

    export interface Cards {
        _id: string;
        url: string;
        name: string;
    }

    //let url: string = "https://localhost:8100";
    let url: string = "https://ninakgissose2020.herokuapp.com";
    //let serverURL: string = "https://mongodbnetbrowser.herokuapp.com/" ; 
    //let serverURL: string = "https://ninakgissose2020.herokuapp.com/";
    init();

    function init(): void {

        document.getElementById("insertButton")?.addEventListener("click", input);
        document.getElementById("responseButton")?.addEventListener("click", getData);

        document.getElementById("insertcard")?.addEventListener("click", insert);
        document.getElementById("removecard")?.addEventListener("click", removee);
      
        
        let elem: HTMLElement = document.getElementById("responseButton");
        document.getElementById("responseButton")?.addEventListener("click", remove); //new
        function remove(): void {
        elem.parentNode.removeChild(elem);
        }
        console.log("inserted");
    }


    /**async function input(_e: Event): Promise<void> {
        console.log("Button betätigt")
  
        let formmdata: FormData = new FormData(document.forms[0]);
        console.log(formmdata);
        // tslint:disable-next-line: no-any
        let querry: URLSearchParams = new URLSearchParams(<any>formmdata);
        console.log(querry);
        let answer: Response = await fetch(serverURL + "/insert?" + querry);
        console.log(await answer.json());
    }*/



    // tslint:disable-next-line: no-any
    const cards: NodeListOf<any> = document.querySelectorAll(".memory-card");

    let aktuelleSeite: string = window.location.href;
    let pos: number = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);

    let cardCounter: number = 0;
    let hasFlippedCard: boolean = false;
    let lockBoard: boolean = false;
    let firstCard: HTMLElement;
    let secondCard: HTMLElement;
    let actTime: Date = new Date;
    let startTime: number = 0;
    let playTime: number = 0;
    let keyTime: string = "playtime";
    let scoreTime: string = "";

    if (aktuelleSeite == "Score.html") {
        scoreTime = sessionStorage.getItem(keyTime);
        document.getElementById("Scoretime").innerHTML = "Gametime: " + scoreTime + " s";
    }

    async function input(_e: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        formData.append("Playtime", scoreTime);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log(query);
        url = url + "/insert?" + query.toString();
        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
        window.location.href = "Ranking.html";
        
    }

    async function insert(_e: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log(query);
        url = url + "/Insert?" + query.toString();
        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
    }

    async function removee(_e: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log(query);
        url = url + "/remove?" + query.toString();
        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
    }


     
    if (aktuelleSeite == "Admin.html") {
        window.addEventListener("load", getCards);
    }
   

    export async function getCards (_e: Event): Promise<void> {
        console.log("cards");
        let response: Response = await fetch(url + "/Read");
        let cardsData: Cards[] = await response.json();
        let out: HTMLDivElement = <HTMLDivElement>document.getElementById("showCards");
        out.innerHTML = "";

        for ( let cards of cardsData) {
            out.appendChild(showCards(cards));
        }

    }

   
    export function showCards(_cards: Cards): HTMLElement {

        console.log("zeig");
        
        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("Card");
        card.setAttribute("_id", _cards._id);
        
        /**let cardname: HTMLElement = document.createElement("p");
        cardname.classList.add("name");
        cardname.innerText = _cards.name;
        cardname.appendChild(cardname);*/

        let img: HTMLImageElement = document.createElement("img");
        img.src = _cards.url;
        card.appendChild(img);

        return card;   
    }

    export async function getData(_e: Event): Promise<void> {
        console.log("Daten holen");
        let response: Response = await fetch(url + "/read");
        let playerData: Player[] = await response.json();
        let out: HTMLDivElement = <HTMLDivElement>document.getElementById("Response")!;
        out.innerHTML = "";

        let show: Player[] = [];

        // copy array from database
        for (let players of playerData) {
                show.push(players);
        }

        //sort players by time
        let tmpPlayer: Player;
        if (show.length > 1) {
            for (let j: number = 0; j < show.length; j++) {
                for (let i: number = 1; i < show.length; i++) {
                    let time1: number = parseFloat(show[i - 1].Playtime);
                    let time2: number = parseFloat(show[i].Playtime);
                    if ( time1 > time2) {
                        tmpPlayer = show[i - 1];
                        show[i - 1] = show[i];
                        show[i] = tmpPlayer;
                    }
                }
            }
        }

        let maxRanking: number = 10;
        let idx: number = 0;
        for (let players of show) {
            if (idx < maxRanking) {
                out.appendChild(showPlayers(players));
            }
            idx++;
        }
    }

    export function showPlayers(_players: Player): HTMLElement {

        let player: HTMLDivElement = document.createElement("div");
        player.classList.add("Player");
        player.setAttribute("_id", _players._id);


        let firstname: HTMLElement = document.createElement("p");
        firstname.classList.add("firstname");
        firstname.innerText = _players.firstname;
        player.appendChild(firstname);

        let secondname: HTMLElement = document.createElement("p");
        secondname.classList.add("secondname");
        secondname.innerText = _players.secondname;
        player.appendChild(secondname);

        let playtime: HTMLElement = document.createElement("p");
        playtime.classList.add("Playtime");
        playtime.innerText = _players.Playtime;
        player.appendChild(playtime);


        return player;
    }

    function checkEnd(): void {
        actTime = new Date;
        playTime = actTime.getTime();
        console.log(startTime);
        console.log(playTime);
        playTime = playTime - startTime;
        if (cardCounter == cards.length) {
            playTime = playTime / 1000;
            sessionStorage.setItem(keyTime, playTime.toString());
            console.log(playTime);
            document.getElementById("Playtime").innerHTML = "Gametime: " + playTime.toString() + " s";
            // nächste Seite
            window.location.href = "Score.html";
        }
    }

    function flipCard(this: HTMLElement): void {
        if (startTime == 0) {
            actTime = new Date;
            startTime = actTime.getTime();
            playTime = actTime.getTime();
            playTime = playTime - startTime;
            console.log(startTime);
            console.log(playTime);
        }
        if (lockBoard) return;
        if (this == firstCard) {
            return;
        }

        this.classList.add("flip");

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;

            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch(): void {
        let isMatch: boolean = firstCard.dataset.framework == secondCard.dataset.framework;

        if (isMatch) {
            cardCounter = cardCounter + 2;
            console.log(cardCounter);
            disableCards();
            checkEnd();
        }
        else {
            unflipCards();
        }
    }

    function disableCards(): void {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

        resetBoard();
    }

    function unflipCards(): void {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");

            resetBoard();
        }, 1000);
    }

    function resetBoard(): void {
        hasFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
    }

    (function shuffle(): void {
        cards.forEach(card => {
            let randomPos: number = Math.floor(Math.random() * cards.length);
            card.style.order = randomPos;
        });
    })();

    cards.forEach(card => card.addEventListener("click", flipCard));


}
