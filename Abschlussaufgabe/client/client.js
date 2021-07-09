"use strict";
var Client;
(function (Client) {
    //let url: string = "https://localhost:8100";
    let url = "https://ninakgissose2020.herokuapp.com";
    //let serverURL: string = "https://mongodbnetbrowser.herokuapp.com/" ; 
    //let serverURL: string = "https://ninakgissose2020.herokuapp.com/";
    init();
    function init() {
        document.getElementById("insertButton")?.addEventListener("click", input);
        document.getElementById("responseButton")?.addEventListener("click", getData);
        document.getElementById("insertcard")?.addEventListener("click", insert);
        let elem = document.getElementById("responseButton");
        document.getElementById("responseButton")?.addEventListener("click", remove); //new
        function remove() {
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
    async function input(_e) {
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        formData.append("Playtime", scoreTime);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        console.log(query);
        url = url + "/insert?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
        window.location.href = "Ranking.html";
    }
    async function insert(_e) {
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        console.log(query);
        url = url + "/insertCards?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
    if (aktuelleSeite == "Admin.html") {
        window.addEventListener("load", getCards);
    }
    async function getCards(_e) {
        console.log("cards");
        let response = await fetch(url + "/readCards");
        let cardsData = await response.json();
        let out = document.getElementById("showCards");
        out.innerHTML = "";
        for (let cards of cardsData) {
            out.appendChild(showCards(cards));
        }
    }
    Client.getCards = getCards;
    function showCards(_cards) {
        console.log("zeig");
        let card = document.createElement("div");
        card.classList.add("Card");
        card.setAttribute("_id", _cards._id);
        /**let cardname: HTMLElement = document.createElement("p");
        cardname.classList.add("name");
        cardname.innerText = _cards.name;
        cardname.appendChild(cardname);*/
        let img = document.createElement("img");
        img.src = _cards.url;
        card.appendChild(img);
        return card;
    }
    Client.showCards = showCards;
    async function getData(_e) {
        console.log("Daten holen");
        let response = await fetch(url + "/read");
        let playerData = await response.json();
        let out = document.getElementById("Response");
        out.innerHTML = "";
        let show = [];
        // copy array from database
        for (let players of playerData) {
            show.push(players);
        }
        //sort players by time
        let tmpPlayer;
        if (show.length > 1) {
            for (let j = 0; j < show.length; j++) {
                for (let i = 1; i < show.length; i++) {
                    let time1 = parseFloat(show[i - 1].Playtime);
                    let time2 = parseFloat(show[i].Playtime);
                    if (time1 > time2) {
                        tmpPlayer = show[i - 1];
                        show[i - 1] = show[i];
                        show[i] = tmpPlayer;
                    }
                }
            }
        }
        let maxRanking = 10;
        let idx = 0;
        for (let players of show) {
            if (idx < maxRanking) {
                out.appendChild(showPlayers(players));
            }
            idx++;
        }
    }
    Client.getData = getData;
    function showPlayers(_players) {
        let player = document.createElement("div");
        player.classList.add("Player");
        player.setAttribute("_id", _players._id);
        let firstname = document.createElement("p");
        firstname.classList.add("firstname");
        firstname.innerText = _players.firstname;
        player.appendChild(firstname);
        let secondname = document.createElement("p");
        secondname.classList.add("secondname");
        secondname.innerText = _players.secondname;
        player.appendChild(secondname);
        let playtime = document.createElement("p");
        playtime.classList.add("Playtime");
        playtime.innerText = _players.Playtime;
        player.appendChild(playtime);
        return player;
    }
    Client.showPlayers = showPlayers;
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