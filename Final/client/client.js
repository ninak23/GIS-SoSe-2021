"use strict";
var Client;
(function (Client) {
    let url = "https://ninakgissose2020.herokuapp.com";
    init();
    function init() {
        document.getElementById("insertButton")?.addEventListener("click", input2);
        document.getElementById("responseButton")?.addEventListener("click", getData2);
        document.getElementById("insertcard")?.addEventListener("click", insert);
        document.getElementById("removecard")?.addEventListener("click", removeCard);
        let elem = document.getElementById("responseButton");
        document.getElementById("responseButton")?.addEventListener("click", remove);
        function remove() {
            elem.parentNode.removeChild(elem);
        }
        console.log("inserted");
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
    //writes the player name and time into the database collection ??
    async function input2(_e) {
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
    // fetch the playtime from the gaming site
    if (aktuelleSeite == "Score.html") {
        scoreTime = sessionStorage.getItem(keyTime);
        document.getElementById("Scoretime").innerHTML = "Gametime: " + scoreTime + " s";
    }
    // writes the url and name of a new image into the database collection ??
    async function insert(_e) {
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        console.log(query);
        url = url + "/Insert?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
        window.location.href = "Admin.html";
    }
    // removes an image int the database collection ?? about the image name
    async function removeCard(_e) {
        let formData = new FormData(document.forms[1]);
        console.log(formData);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        console.log(query);
        url = url + "/remove?" + query.toString();
        //let response2: Response = await fetch(url + "/remove?" + query.toString());
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
        window.location.href = "Admin.html";
    }
    // start the function getCards2 when the admin site is called
    if (aktuelleSeite == "Admin.html") {
        window.addEventListener("load", getCards2);
    }
    // loads the images from the database for the admin site
    async function getCards2(_e) {
        console.log("cards");
        let response = await fetch(url + "/Read");
        let cardsData = await response.json();
        let out = document.getElementById("showCards");
        out.innerHTML = "";
        for (let cards of cardsData) {
            out.appendChild(showCards2(cards));
        }
    }
    Client.getCards2 = getCards2;
    // shows the images on the admin site
    function showCards2(_cards) {
        console.log("zeig");
        let card = document.createElement("div");
        card.classList.add("Card");
        card.setAttribute("_id", _cards._id);
        let img = document.createElement("img");
        img.src = _cards.url;
        card.appendChild(img);
        let cardname = document.createElement("p");
        cardname.classList.add("name");
        cardname.innerText = _cards.name;
        card.appendChild(cardname);
        return card;
    }
    Client.showCards2 = showCards2;
    // start the function getCardstoPlay which loads the images for the cards and places them into the cards
    if (aktuelleSeite == "Spiel.html") {
        window.addEventListener("load", getCardstoPlay);
    }
    // loads the images for the cards from the database and calls the function to assign image to cards
    async function getCardstoPlay(_e) {
        console.log("cards");
        let response = await fetch(url + "/Read");
        let cardsData = await response.json();
        let maxCards = 8;
        let idx = 1;
        let cardIdc = [maxCards];
        let noDuplicate = true;
        let cardsUsed = [];
        while (noDuplicate == true) {
            for (let i = 0; i < maxCards; i++) {
                cardIdc[i] = Math.floor(Math.random() * cardsData.length);
            }
            for (let i = 0; i < maxCards; i++) {
                noDuplicate = false;
                for (let j = i + 1; j < maxCards; j++) {
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
        for (let i = 0; i < maxCards; i++) {
            cardsUsed.push(cardsData[cardIdc[i]]);
        }
        for (let cards of cardsUsed) {
            if (idx <= maxCards) {
                let idNumber = (idx * 2) - 1;
                let cardId = "Pair";
                cardId = cardId.concat(idNumber.toString());
                let out = document.getElementById(cardId);
                out.innerHTML = "";
                out.appendChild(showCards3(cards));
                idNumber = idx * 2;
                cardId = "Pair";
                cardId = cardId.concat(idNumber.toString());
                out = document.getElementById(cardId);
                out.innerHTML = "";
                out.appendChild(showCards3(cards));
            }
            idx++;
        }
    }
    Client.getCardstoPlay = getCardstoPlay;
    // makes the assignment of the image to the corresponding card
    function showCards3(_cards) {
        console.log("zeig");
        let card = document.createElement("div");
        card.classList.add("Card");
        card.setAttribute("_id", _cards._id);
        let img = document.createElement("img");
        img.src = _cards.url;
        card.appendChild(img);
        return card;
    }
    Client.showCards3 = showCards3;
    // gets the player data from the database collection ??, sorts them by time and calls the showing function
    async function getData2(_e) {
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
                out.appendChild(showPlayers2(players));
            }
            idx++;
        }
    }
    Client.getData2 = getData2;
    // shows a player on the ranking site
    function showPlayers2(_players) {
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
    Client.showPlayers2 = showPlayers2;
    // check if all pairs have been found, calculate playtime and change to ranking site
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
            window.location.href = "Score.html";
        }
    }
    function flipCard() {
        if (startTime == 0) { // Kopie geht von Z. 308 bis Z.380
            actTime = new Date; // Allgemeiner Link zur komplette Repo des übernommenen Codes https://github.com/code-sketch/memory-game/ 
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
        }, 1000); //wird automatisch immer falsch eingerückt 
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