import * as Http from "http";
import * as Url from "url";
import { ParsedUrlQuery } from "querystring";
import * as Mongo from "mongodb";


export namespace Task3_4 {

  export interface Antwort {
    _id: string;
    Vorname: string;
    Nachname: string;
    Email: string;
    Nachricht: string;

  }


  interface Order {
    [type: string]: string | string[];
  }

  let orders: Mongo.Collection;



  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  //let databaseUrl: string = "mongodb://localhost:27017";
  let databaseUrl: string = "mongodb+srv://6k5m43C21:<6k5m43C21>@ninagis.mlujl.mongodb.net/Test?retryWrites=true&w=majority";

  startServer(port);
  connectToDatabase(databaseUrl);

  async function startServer(_port: number | string): Promise<void> {

    console.log("Connecting to DB...");
    //let url: string = ("mongodb+srv://6k5m43C21:<6k5m43C21>@ninagis.mlujl.mongodb.net/Test?retryWrites=true&w=majority");

    console.log("Starting server");

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(_port);
  }

  function handleListen(): void {
    console.log("Listening");
  }

  async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
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

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse, _url: string): Promise<void> {
    let urlWithQuery: Url.UrlWithParsedQuery = Url.parse(_request.url!, true);
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

  function HtmlAnswer(_response: Http.ServerResponse, _query: ParsedUrlQuery): void {
    _response.setHeader("content-type", "text/html; charset=utf-8");
    for (let key in _query) {
      _response.write(key + ":" + _query[key] + "<br/>"); //wird direkt auf der Webseite ausgegeben  _response.write 
    }
  }
  function JsonAnswer(_response: Http.ServerResponse, _query: ParsedUrlQuery): void {
    _response.setHeader("content-type", "application/json");
    let jsonString: string = JSON.stringify(_query);
    _response.write(jsonString);
    
  }
  function DbJsonAnswer(_response: Http.ServerResponse, _result: any): void {
    _response.setHeader("content-type", "application/json");
    _response.write(JSON.stringify(_result));
  }


  

  function storeOrder(_Order: Order): void {
    orders.insert(_Order);
  }
}