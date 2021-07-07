namespace Client {

    export interface Player {
        _id: string;
        firstname: string;
        secondname: string;
        Playtime: string;
    }


    //let serverURL: string = "https://mongodbnetbrowser.herokuapp.com/" ; 
    let serverURL: string = "https://ninakgissose2020.herokuapp.com/";
    init();

    function init(): void {

        document.getElementById("insertButton")?.addEventListener("click", input);
        //document.getElementById("responseButton")?.addEventListener("click", getData);
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




    async function input(_e: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        let url: string = "https://ninakgissose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log(query);
        url = url + "/insert?" + query.toString();
        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
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

    if (aktuelleSeite == "Score.html") {
        scoreTime = sessionStorage.getItem(keyTime);
        document.getElementById("Scoretime").innerHTML = "Gametime: " + scoreTime + " s";
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
