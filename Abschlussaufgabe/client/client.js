"use strict";
var Client;
(function (Client) {
    //let serverURL: string = "https://mongodbnetbrowser.herokuapp.com/" ; 
    //let serverURL: string = "https://ninakgissose2020.herokuapp.com/";
    init();
    function init() {
        document.getElementById("insertButton")?.addEventListener("submit", input);
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
    async function input(_e) {
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        //let url: string = "https://localhost:8100";
        let url = "https://ninakgissose2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        console.log(query);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
    // tslint:disable-next-line: no-any
    const cards = document.querySelectorAll(".memory-card");
    let aktuelleSeite = window.location.href;
    let pos = aktuelleSeite.lastIndexOf("/");
    aktuelleSeite = aktuelleSeite.substring(pos + 1);
    let cardCounter = 0;
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard;
    let secondCard;
    let actTime = new Date;
    let startTime = 0;
    let playTime = 0;
    let keyTime = "playtime";
    let scoreTime = "";
    if (aktuelleSeite == "Score.html") {
        scoreTime = sessionStorage.getItem(keyTime);
        document.getElementById("Scoretime").innerHTML = "Gametime: " + scoreTime + " s";
    }
    function checkEnd() {
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
    function flipCard() {
        if (startTime == 0) {
            actTime = new Date;
            startTime = actTime.getTime();
            playTime = actTime.getTime();
            playTime = playTime - startTime;
            console.log(startTime);
            console.log(playTime);
        }
        if (lockBoard)
            return;
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
    function checkForMatch() {
        let isMatch = firstCard.dataset.framework == secondCard.dataset.framework;
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
    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
    }
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            resetBoard();
        }, 1000);
    }
    function resetBoard() {
        hasFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
    }
    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * cards.length);
            card.style.order = randomPos;
        });
    })();
    cards.forEach(card => card.addEventListener("click", flipCard));
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map