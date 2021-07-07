import * as Http from "http";
import * as Url from "url";
import { ParsedUrlQuery } from "querystring";
import { Memory } from "./test";



//connecttoDB("mongodb://localhost:27017");
//# sourceMappingURL=test.js.map */

export namespace server {

    export interface Player {
        //_id: string;
        firstname: string;
        secondname: string;
        Playtime: string;
    }

    //let databaseUrl: string = "mongodb://localhost:27017";
    //let databaseUrl: string = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/Memory?retryWrites=true&w=majority";
    //let databaseUrl: string = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/MemoryretryWrites=true&w=majority" ;
    let databaseUrl: string = "mongodb+srv://6k5m43C21:6k5m43C21@ninagis.mlujl.mongodb.net/Memory2?retryWrites=true&w=majority";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    //Memory.connectToDatabase(databaseUrl);
    startServer(port);
    

    async function startServer(_port: number | string): Promise<void> {

        console.log("Starting server");

        await Memory.connectToDatabase(databaseUrl);

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

        if (urlWithQuery.pathname == "/insert") {
            DbJsonAnswer(_response, await Memory.newPlayer(urlWithQuery.query));
        }
        if (urlWithQuery.pathname == "/read") {
            DbJsonAnswer(_response, await Memory.getplayer());
        }
        _response.end();
    }

}
// tslint:disable-next-line: no-any
function DbJsonAnswer(_response: Http.ServerResponse, _result: any): void {
    _response.setHeader("content-type", "application/json");
    _response.write(JSON.stringify(_result));
}


