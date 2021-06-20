"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task3_4 = void 0;
const Http = require("http");
const Url = require("url");
const test_1 = require("./test");
//connecttoDB("mongodb://localhost:27017");
//# sourceMappingURL=test.js.map */
var Task3_4;
(function (Task3_4) {
    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/Test?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    test_1.Datastudent.connectToDatabase(databaseUrl);
    async function startServer(_port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices");
        let urlWithQuery = Url.parse(_request.url, true);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (urlWithQuery.pathname == "/html") {
            HtmlAnswer(_response, urlWithQuery.query);
        }
        if (urlWithQuery.pathname == "/json") {
            JsonAnswer(_response, urlWithQuery.query);
        }
        if (urlWithQuery.pathname == "/insert") {
            DbJsonAnswer(_response, await test_1.Datastudent.newstudent(urlWithQuery.query));
        }
        if (urlWithQuery.pathname == "/read") {
            DbJsonAnswer(_response, await test_1.Datastudent.getstudents());
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
    function DbJsonAnswer(_response, _result) {
        _response.setHeader("content-type", "application/json");
        _response.write(JSON.stringify(_result));
    }
})(Task3_4 = exports.Task3_4 || (exports.Task3_4 = {}));
//# sourceMappingURL=Server.js.map