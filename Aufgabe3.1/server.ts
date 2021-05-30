import * as Http from "http"; //instalisierung über das http modul
//import * as Url from "url";

export namespace P_3_1Server {
    console.log("Starting server"); //Server wird gestartet -> Console log damit  man sieht was passiert
    let port: number = Number(process.env.PORT); //dann holen wir uns eine Port und schauen ob schon ein Port gesetzt wurde, -> wichtig für Horuku 
    if (!port)
        port = 8100; //Wenn kein port gesetzt ist, dann setzen wir ihn auf 8100 -> Port: Empfängt und versendet Daten (Austausch von Daten)

    let server: Http.Server = Http.createServer(); //erschaffen eines Http Servers 
    server.addListener("request", handleRequest); //dem server wird ein eventListener hinzugefügt, dieser listener kümmert sich um die Anfragen ("requests")
    server.addListener("listening", handleListen); //kümmert sich um das Event, welches wir anfangen zu hören -> funktion handle Listen wird aufgerufen 
    server.listen(port);

    function handleListen(): void {
        console.log("Listening"); //handle listen funktion führt nur einen Console log aus, wodurch "listening" in der Konsole ausgegeben wird -> passiert in dem moment wo wir sagen server.listen(port)
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //die Funktion handleRequest kümmert sich um die Anfragen //Sowohl die Anfrage die uns erreicht hat wird übergeben, als auch 
        console.log("I hear voices!");                                                             //Die Antwort die zurückgeschickt wird, wird uns mit übergeben ->  Antwort kann man verändern
        _response.setHeader("content-type", "text/html; charset=utf-8");                           //Als erstes wird aber in der Konsole "I hear voices!" ausgegeben 
        _response.setHeader("Access-Control-Allow-Origin", "*");                                   //wenn eine Anfrage geschickt wurde, werden header gesetzzt -> header sind in jeder Anfrage der nicht sichtbare Teil, Steuerungselmente die uns Informationen über die Anfrage mitteilen, in dem Fall ist es, dass die Antwort die wir zurückschicken vom Typ text/html ist (1.header)  in utf-8 codierung, der 2. header bestimmt wer alles die Antwort empfangen darf,  "*" -> steht dafür, dass jeder Anfragen stellen darf und das von überall
        _response.write(_request.url);                                                             //als Antwort wird einfach nur die URL von unserern Anfragen hineingeschrieben
        _response.end();                                                                           //Ok Antwort wurde formuliert -> schickt die Antwort zurück 

        //Über localhost:8100/ alles was dahinter steht wird als antwort/Text zurückgegeben -> Server und jedes mal wenn etwas 
        //dazugeschrieben wird entsteht ein neues I hear voices -> Server der lokal auf dem rechner läuft, mit dem lokal getest werden soll 
        //sehr simpler server der einfach nur die URL zurückgibt, welche von uns an ihn geschickt wird 

        document.getElementsByTagName("button")[0].addEventListener("click", Server);

        async function Server(): Promise<void> {

            let formData: FormData = new FormData(document.forms[0]);
            let url: string = "https://ninakgissose2020.herokuapp.com/";
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            url = url + "?" + query.toString();
            let response: Response = await fetch(url);
            let answer: string = await response.text();
            console.log(answer);


        }
    }
}

