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


    let url: string = "https://ninakgissose2020.herokuapp.com";

    init();

    function init(): void {

        document.getElementById("insertButton")?.addEventListener("click", input2);
        document.getElementById("responseButton")?.addEventListener("click", getData2);

        document.getElementById("insertcard")?.addEventListener("click", insert);
        document.getElementById("removecard")?.addEventListener("click", removeCard);


        let elem: HTMLElement = document.getElementById("responseButton");
        document.getElementById("responseButton")?.addEventListener("click", remove); 
        function remove(): void {
            elem.parentNode.removeChild(elem);
        }
        console.log("inserted");
    }


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

    //writes the player name and time into the database collection ??
    async function input2(_e: Event): Promise<void> {
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

    // fetch the playtime from the gaming site
    if (aktuelleSeite == "Score.html") {
        scoreTime = sessionStorage.getItem(keyTime);
        document.getElementById("Scoretime").innerHTML = "Gametime: " + scoreTime + " s";
    }

    // writes the url and name of a new image into the database collection ??
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
        window.location.href = "Admin.html";
    }

    // removes an image int the database collection ?? about the image name
    async function removeCard(_e: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[1]);
        console.log(formData);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log(query);
        url = url + "/remove?" + query.toString();
        //let response2: Response = await fetch(url + "/remove?" + query.toString());
        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
        window.location.href = "Admin.html";
    }


    // start the function getCards2 when the admin site is called
    if (aktuelleSeite == "Admin.html") {
        window.addEventListener("load", getCards2);
    }

    // loads the images from the database for the admin site
    export async function getCards2(_e: Event): Promise<void> {
        console.log("cards");
        let response: Response = await fetch(url + "/Read");
        let cardsData: Cards[] = await response.json();
        let out: HTMLDivElement = <HTMLDivElement>document.getElementById("showCards");
        out.innerHTML = "";

        for (let cards of cardsData) {
            out.appendChild(showCards2(cards));
        }

    }

    // shows the images on the admin site
    export function showCards2(_cards: Cards): HTMLElement {

        console.log("zeig");

        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("Card");
        card.setAttribute("_id", _cards._id);

        let img: HTMLImageElement = document.createElement("img");
        img.src = _cards.url;
        card.appendChild(img);

        let cardname: HTMLElement = document.createElement("p");
        cardname.classList.add("name");
        cardname.innerText = _cards.name;
        card.appendChild(cardname);

        return card;
    }

    // start the function getCardstoPlay which loads the images for the cards and places them into the cards
    if (aktuelleSeite == "Spiel.html") {
        window.addEventListener("load", getCardstoPlay);
    }

    // loads the images for the cards from the database and calls the function to assign image to cards
    export async function getCardstoPlay(_e: Event): Promise<void> {
        console.log("cards");
        let response: Response = await fetch(url + "/Read");
        let cardsData: Cards[] = await response.json();

        let maxCards: number = 8;
        let idx: number = 1;
        let cardIdc: number[] = [maxCards];
        let noDuplicate: Boolean = true;
        let cardsUsed: Cards[] = [];

        while (noDuplicate == true) {
            for (let i: number = 0; i < maxCards; i++) {
                cardIdc[i] = Math.floor(Math.random() * cardsData.length);
            }
            for (let i: number = 0; i < maxCards; i++) {
                noDuplicate = false;
                for (let j: number = i + 1; j < maxCards; j++) {
                    if (cardIdc[i] == cardIdc[j]) {
                        noDuplicate = true;
                        break;
                    }
                }
                if (noDuplicate == true) {
                    break;
                }
            }
        }

        for (let i: number = 0; i < maxCards; i++) {
            cardsUsed.push(cardsData[cardIdc[i]]);
        }

        for (let cards of cardsUsed) {
            if (idx <= maxCards) {
                let idNumber: number = (idx * 2) - 1;
                let cardId: string = "Pair";
                cardId = cardId.concat(idNumber.toString());
                let out: HTMLDivElement = <HTMLDivElement>document.getElementById(cardId);
                out.innerHTML = "";
                out.appendChild(showCards3(cards));
                idNumber = idx * 2;
                cardId = "Pair";
                cardId = cardId.concat(idNumber.toString());
                out = <HTMLDivElement>document.getElementById(cardId);
                out.innerHTML = "";
                out.appendChild(showCards3(cards));
            }
            idx++;
        }
    }

    // makes the assignment of the image to the corresponding card
    export function showCards3(_cards: Cards): HTMLElement {

        console.log("zeig");

        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("Card");
        card.setAttribute("_id", _cards._id);

        let img: HTMLImageElement = document.createElement("img");
        img.src = _cards.url;
        card.appendChild(img);

        return card;
    }

    // gets the player data from the database collection ??, sorts them by time and calls the showing function
    export async function getData2(_e: Event): Promise<void> {
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
                    if (time1 > time2) {
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
                out.appendChild(showPlayers2(players));
            }
            idx++;
        }
    }

    // shows a player on the ranking site
    export function showPlayers2(_players: Player): HTMLElement {

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

    // check if all pairs have been found, calculate playtime and change to ranking site
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
            window.location.href = "Score.html";
        }
    }

    function flipCard(this: HTMLElement): void { // Code von hier übernommen https://github.com/code-sketch/memory-game/blob/master/video-11/scripts.js 
        if (startTime == 0) {                    // Kopie geht von Z. 308 bis Z.380
            actTime = new Date;                  // Allgemeiner Link zur komplette Repo des übernommenen Codes https://github.com/code-sketch/memory-game/ 
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
        }, 1000); //wird automatisch immer falsch eingerückt 
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
