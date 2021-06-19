"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Task3_4;
(function (Task3_4) {
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl = "mongodb+srv://6k5m43C21:<6k5m43C21>@ninagis.mlujl.mongodb.net/Test?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    async function startServer(_port) {
        console.log("Connecting to DB...");
        //let url: string = ("mongodb+srv://6k5m43C21:<6k5m43C21>@ninagis.mlujl.mongodb.net/Test?retryWrites=true&w=majority");
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("students");
        console.log("Databese connection", orders != undefined);
    }
    /**import * as Mongo from "mongodb";
  
  
  async function connecttoDB (_url: string): Promise<void> {
  let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};
  
  let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
  await mongoClient.connect();
  
  let students: Mongo.Collection = mongoClient.db("Test").collection("Students");
  let cursor = students.find();
  }
  
  connecttoDB("mongodb://localhost:27017");
  //# sourceMappingURL=test.js.map */
    async function handleRequest(_request, _response, _url) {
        let urlWithQuery = Url.parse(_request.url, true);
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (urlWithQuery.pathname == "/html") {
            HtmlAnswer(_response, urlWithQuery.query);
        }
        if (urlWithQuery.pathname == "/json") {
            JsonAnswer(_response, urlWithQuery.query);
        }
        if (urlWithQuery.pathname == "/insert") {
            DbJsonAnswer(_response, urlWithQuery.query);
        }
        if (urlWithQuery.pathname == "/read") {
            DbJsonAnswer(_response, urlWithQuery.query);
        }
        _response.end();
        storeOrder(urlWithQuery.query);
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
    function storeOrder(_Order) {
        orders.insert(_Order);
    }
})(Task3_4 = exports.Task3_4 || (exports.Task3_4 = {}));
//# sourceMappingURL=Server.js.map