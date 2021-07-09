"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const Http = require("http");
const Url = require("url");
//import { ParsedUrlQuery } from "querystring";
const test_1 = require("./test");
//connecttoDB("mongodb://localhost:27017");
//# sourceMappingURL=test.js.map */
var server;
(function (server_1) {
    //let databaseUrl: string = "mongodb://localhost:27017";
    //let databaseUrl: string = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/Memory?retryWrites=true&w=majority";
    //let databaseUrl: string = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/MemoryretryWrites=true&w=majority" ;
    let databaseUrl = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/Memory2?retryWrites=true&w=majority";
    let databaseCardsUrl = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/Memory?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //Memory.connectToDatabase(databaseUrl);
    startServer(port);
    async function startServer(_port) {
        console.log("Starting server");
        await test_1.Memory.connectToDatabase(databaseUrl);
        await test_1.Memory.connectTodb(databaseCardsUrl); //neu 
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("requestCards", cardshandlerequest);
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
        if (urlWithQuery.pathname == "/insertPlayer") {
            DbJsonAnswer(_response, await test_1.Memory.newPlayer(urlWithQuery.query));
        }
        if (urlWithQuery.pathname == "/readPlayer") {
            DbJsonAnswer(_response, await test_1.Memory.getplayer());
        }
        _response.end();
    }
    async function cardshandlerequest(_request, _response) {
        console.log("I see Cards");
        let urlWithQuery = Url.parse(_request.url, true);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (urlWithQuery.pathname == "/insertCards") {
            DbJsonAnswer(_response, await test_1.Memory.newCards(urlWithQuery.query));
        }
        if (urlWithQuery.pathname == "/readCards") {
            DbJsonAnswer(_response, await test_1.Memory.getCards());
        }
        if (urlWithQuery.pathname == "/removeCard") {
            DbJsonAnswer(_response, await test_1.Memory.removeCards(urlWithQuery.query));
        }
        _response.end();
    }
    // tslint:disable-next-line: no-any
    function DbJsonAnswer(_response, _result) {
        _response.setHeader("content-type", "application/json");
        _response.write(JSON.stringify(_result));
    }
})(server = exports.server || (exports.server = {}));
//# sourceMappingURL=server.js.map