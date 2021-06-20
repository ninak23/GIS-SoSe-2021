import * as Http from "http";
import * as Url from "url";
import { ParsedUrlQuery } from "querystring";
import * as Mongo from "mongodb";


//connecttoDB("mongodb://localhost:27017");
//# sourceMappingURL=test.js.map */


export namespace Task3_4 {

  export interface Antwort {
    _id: string;
    Vorname: string;
    Nachname: string;
    Email: string;
    Nachricht: string;

  }


  /**interface Order {
    [type: string]: string | string[];
  }*/



  //let databaseUrl: string = "mongodb://localhost:27017";
  let databaseUrl: string = "mongodb+srv://6k5m43C21:<6k5m43C21>@ninagis.mlujl.mongodb.net/Test?retryWrites=true&w=majority";

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  startServer(port);
  //connectToDatabase(databaseUrl);

  async function startServer(_port: number | string): Promise<void> {

    console.log("Starting server");

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(_port);
  }

  function handleListen(): void {
    console.log("Listening");
  }

  async function connectToDatabase(_databaseUrl: string, _jsonString: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient;
    mongoClient = new Mongo.MongoClient(_databaseUrl, options);
    await mongoClient.connect();
    console.log("Connecting to DB...");
    let orders: Mongo.Collection;
    orders = mongoClient.db("Test").collection("Students");
    let order: Antwort = JSON.parse(_jsonString);
    orders.insertOne(order);

    console.log("Databese connection", orders != undefined);
  }
  async function getData(_response: Http.ServerResponse, _mongoUrl: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, options);
    await mongoClient.connect();
    //Datenbank und Collection auswählen
    let orders: Mongo.Collection = mongoClient.db("Test").collection("Students");
    //cursor auf die Datenbank legen und als Rückgabe ein OrderInformation(Interface!) Array erhalten
    let cursor: Mongo.Cursor = orders.find();
    let result: Antwort[] = await cursor.toArray();
    //Ausgabe auf der HTML-Seite
    //Überschrift
    _response.write("<h3>" + "Serverantwort:" + "</h3>");
    //Für die Länge des Arrays jeden Wert ausgeben
    for (let i: number = 0; i < result.length; i++) {
      _response.write("<div>" +
        "<h4>" + "Eintrag" + i + "</h4>" +
        "<p>" + result[i].Vorname + "</p>" +
        "<p>" + result[i].Nachname + "</p>" +
        "<p>" + result[i].Email + "</p>" +
        "<p>" + result[i].Nachricht + "</p>" +
        "</div>");
    }
    _response.end();

  }


  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("I hear voices");
    let urlWithQuery: Url.UrlWithParsedQuery = Url.parse(_request.url!, true);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    let jsonString: string = JSON.stringify(urlWithQuery.query);


    if (urlWithQuery.pathname == "/html") {
      HtmlAnswer(_response, urlWithQuery.query);
    }
    if (urlWithQuery.pathname == "/json") {
      JsonAnswer(_response, urlWithQuery.query);
    }
    if (urlWithQuery.pathname == "/insert") {
      connectToDatabase(jsonString, databaseUrl);
    }
    if (urlWithQuery.pathname == "/read") {
      getData(_response, databaseUrl);
    }

    _response.end();
    //storeOrder(urlWithQuery.query);
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
  /**function DbJsonAnswer(_response: Http.ServerResponse, _result: any): void {
    _response.setHeader("content-type", "application/json");
    _response.write(JSON.stringify(_result));
  }*/




  /**function storeOrder(_Order: Order): void {
    orders.insert(_Order);
  }*/
}