import * as Http from "http";
import * as Url from "url";

export namespace L06_CocktailBar {
    let server: Http.Server = Http.createServer();              //Server erstellen + variable anlegen die auf den Server referenzieren kann
    console.log(server);


    let port: number = Number(process.env.PORT);
    if (port == undefined)
        port = 8001;

    console.log("Server starting on port: " + port);

    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) { //haben wir überhaupt eine url 
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>"); //wird direkt auf der Webseite ausgegeben  _response.write 
            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString); //Json string zurückschicken 
            
        }

        console.log(_request.url);

        _response.write("This is my response");
        _response.end();
    }
}


/**function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.write("Was geht?");
    _response.end();

    In diesem Beispiel verschickt der Server lediglich die Antwort mit dem Inhalt "Was geht?". Der Header gibt an, dass die Antwort ein mit utf-8 kodierter Text ist, also z.b. 
    kein Bild, und dass sie von jedem geöffnet werden darf. Auch hier bedeutet der Asterisk * wieder “alles”.
}  */