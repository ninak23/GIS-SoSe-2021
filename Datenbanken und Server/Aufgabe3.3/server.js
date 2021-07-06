"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task3_2 = void 0;
const Http = require("http");
const Url = require("url");
var Task3_2;
(function (Task3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        let urlWithQuery = Url.parse(_request.url, true);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (urlWithQuery.pathname == "/html") {
            HtmlAnswer(_response, urlWithQuery.query);
        }
        if (urlWithQuery.pathname == "/json") {
            JsonAnswer(_response, urlWithQuery.query);
        }
        _response.end();
    }
    function HtmlAnswer(_response, _query) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        for (let key in _query) {
            _response.write(key + ":" + _query[key] + "<br/>"); //wird direkt auf der Webseite ausgegeben  _response.write 
        }
    }
    function JsonAnswer(_response, _query) {
        _response.setHeader("content-type", "application/json");
        let jsonString = JSON.stringify(_query);
        _response.write(jsonString);
    }
})(Task3_2 = exports.Task3_2 || (exports.Task3_2 = {}));
//# sourceMappingURL=server.js.map