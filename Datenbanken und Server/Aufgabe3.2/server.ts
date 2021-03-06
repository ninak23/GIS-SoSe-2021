import * as Http from "http";
import * as Url from "url";
import { ParsedUrlQuery } from "querystring";


export namespace Task3_2 {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    let urlWithQuery: Url.UrlWithParsedQuery = Url.parse(_request.url!, true);
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (urlWithQuery.pathname == "/html") {
      HtmlAnswer(_response, urlWithQuery.query);
    }
    if (urlWithQuery.pathname == "/json") {
      JsonAnswer(_response, urlWithQuery.query);
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
}  

/*
  //Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
    //Diesen Code innerhalb von einem aktiven Server testen:

    let adresse: string = "http://localhost:8080/default.htm?jahr=2017&monat=february";
    //Adresse parsen (umwandeln):
    let q = url.parse(adresse, true);

    /*Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. So können die fest definierten Eigenschaften einer URL ausgelesen werden:*/
    //console.log(q.host); //returns 'localhost:8080' -> Mithilfe von .host bekommt man den host name und die Nummer des ports 
    //console.log(q.pathname); //returns '/default.htm'
    //console.log(q.search); //returns '?year=2017&month=february'


/*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:*/
    //var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
    //console.log(qdata.monat); //returns 'february'
    //console.log(qdata.jahr); //returns jahr 2017 

//}
