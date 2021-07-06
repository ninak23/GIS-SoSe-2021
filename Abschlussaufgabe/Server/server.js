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
    //let databaseUrl: string = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/Memory?retryWrites=true&w=majority ";
    let databaseUrl = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/MemoryretryWrites=true&w=majority ";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    test_1.Memory.connectToDatabase(databaseUrl);
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
        if (urlWithQuery.pathname == "/insert") {
            DbJsonAnswer(_response, await test_1.Memory.newPlayer(urlWithQuery.query));
        }
        if (urlWithQuery.pathname == "/read") {
            DbJsonAnswer(_response, await test_1.Memory.getplayer());
        }
        _response.end();
    }
})(server = exports.server || (exports.server = {}));
// tslint:disable-next-line: no-any
function DbJsonAnswer(_response, _result) {
    _response.setHeader("content-type", "application/json");
    _response.write(JSON.stringify(_result));
}
//# sourceMappingURL=server.js.map