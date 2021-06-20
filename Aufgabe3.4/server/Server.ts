import * as Http from "http";
import * as Url from "url";
import { ParsedUrlQuery } from "querystring";
import { Datastudent } from "./test";



//connecttoDB("mongodb://localhost:27017");
//# sourceMappingURL=test.js.map */

export namespace Task3_4 {

  export interface Antwort {
    //_id: string;
    Vorname: string;
    Nachname: string;
    Email: string;
    Nachricht: string;

  }

  //let databaseUrl: string = "mongodb://localhost:27017";
  let databaseUrl: string = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/Test?retryWrites=true&w=majority";

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  startServer(port);
  Datastudent.connectToDatabase(databaseUrl);

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


  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("I hear voices");
    let urlWithQuery: Url.UrlWithParsedQuery = Url.parse(_request.url!, true);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
  

    if (urlWithQuery.pathname == "/html") {
      HtmlAnswer(_response, urlWithQuery.query);
    }
    if (urlWithQuery.pathname == "/json") {
      JsonAnswer(_response, urlWithQuery.query);
    }
    if (urlWithQuery.pathname == "/insert") {
      DbJsonAnswer(_response, await Datastudent.newstudent(urlWithQuery.query));
    }
    if (urlWithQuery.pathname == "/read") {
      DbJsonAnswer(_response, await Datastudent.getstudents() );
    }
    _response.end();
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
}

