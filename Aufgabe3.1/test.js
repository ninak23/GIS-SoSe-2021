"use strict";
/**export namespace P_3_1Server {*/
document.getElementsByTagName("button")[0].addEventListener("click", Server);
async function Server() {
    let formData = new FormData(document.forms[0]);
    let url = "https://ninakgissose2020.herokuapp.com/";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    let response = await fetch(url);
    let answer = await response.text();
    console.log(answer);
}
//}
//# sourceMappingURL=test.js.map