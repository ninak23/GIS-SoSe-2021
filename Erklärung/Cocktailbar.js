"use strict";
var L06_CocktailBar;
(function (L06_CocktailBar) {
    window.addEventListener("load", handleload);
    let form;
    let url = "http://localhost:8001";
    async function handleload(_event) {
        console.log("Init");
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        generateContent(data);
        form = document.querySelector("form");
        let slider = document.querySelector("input#amount");
        let submit = document.querySelector("button[type=button]");
        console.log(submit);
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        displayOrder();
    }
    async function sendOrder(_event) {
        console.log("Send Order");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
    }
    function displayAmount() {
        let amount = 0;
    }
    function generateContent(_data) {
        let Content = "";
    }
})(L06_CocktailBar || (L06_CocktailBar = {}));
//# sourceMappingURL=Cocktailbar.js.map