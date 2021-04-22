"use strict";
/**function a1(): void {
    let x: string = "Alles";
    debugger;
    console.log(x);
    func4();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
    func2();
    func3();
}

a1();

function func1(): void {
    console.log("Klar?");
}

/** Weitere Funktionen Aufgabe 1 c)


function func2(): void {
    console.log("Freut mich!");
}

function func3(): void {
    console.log("Mich auch!");
}

function func4(): void {
    console.log("Gute!");
}

/** Aufgabe 1 a
 * Kommentar:
 * In der Konsole wird ausgegeben:
 * Alles
 * Klar?
 * Logo!
 *
 * Welche Variablennamen sind nicht zulässig?
 * -Namen die mit einer Ziffer beginnen z.B. 1a statt a1
 * -Namen dürfen keine Leerzeichen enthalten z.B. a 1
 * -Namen dürfen keine Bindestriche enthalten z.B. a-1
 */
/**Aufgabe b) welcher Codeabschnitt wird wann ausgeführt und
 * in welcher Reihenfolge werden die Funktionen aufgerufen?
 * Zuerst wird function a1() aufgerufen. Dann wird der variable x der String -> x= "Alles" zugewiesen
 * Dann wird "Alles" in der Konsole ausgegeben. Anschließend wird die Funktion func1() aufgerufen.
 * und in der Konsole wird "Klar?" in der Konsole Ausgegeben.
 * Zum Schluss wird dann noch der Codeabschnitt
 * ausgeführt in dem in der Konsole "Logo!" ausgegeben wird.
 * Dementsprechend erhält man folgende Ausgabe in der Konsole:
 * Alles
 * Klar?
 * Logo!
 */
/** Weitere Funktionen Aufgabe 1 c)
 * Ausgabe:
 * Alles
 * Klar?
 * Logo!
 * Freut mich!
 * Mich auch!
*/
/**Aufgabe 2

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();

/**Was wird auf der Konsole ausgegeben? Wann verändert sich was?
 *
 * Ausgabe der Konsole:
 * 9
 * 8
 * 7
 * 6
 * 5
 * 4
 * 3
 * 2
 * 1
 */
/** Wann verändert sich was:
* Zuerst wird die funktion a2() aufgerufen, und die variable vom Typ number i
* wird mit 9 initalisiert. Als nächstes wird die do schleife ausgeführt und es wird
* in der Console die variable i ausgegeben, also  i=9 und die Ausgabe ist dann "9".
* Anschließend wird i um eins dekrementiert, also in dem Fall: 9-1= 8 und i ist jetzt
* 8, also i = 8. Dann wird in der while schleife überprüft ob i größer als 0 ist und
* da 8 größer 0 ist, wird anschließend i in der Konsole ausgegeben, also die Zahl 8.
* Dann wird i wieder um 1 dekrementiert und i = 7. Es wird wieder überprüft ob i größer 0
* ist und da 7 größer ist, wird anschließend 7 wieder in der Konsole ausgegeben. Das ganze geht
* solange bis i die Zahl 1 ist, also i ist 1, denn wenn i = 1 ist,
* wird die variable wieder um 1 dekremtiert und dann ist i ist 0
* dementsprechend wird die while schleife nicht mehr ausgeführt da i = 0 ist und nicht
* größer und das Programm ist zu Ende.
*/
/** Aufgabe 3 - Fehler einbauen in A1 und A2*/
/** a1 zu b1 umgeändert und func1 zu fun1 */
function b1() {
    let y = "peace";
    console.log(y);
    fun1();
    console.log("Logo!");
}
b1();
function fun1() {
    console.log("Klar?");
}
/** Ja in Probleme wird genau angezeigt, was falsch ist zum beispiel, dass die aufgerufene variable
 * nicht vorhanden ist, oder das x zwar deklariert ist, aber nie gelesen wird. Außerdem
 * werden die Fehler unterkringelt und bei den Problemmeldungen wird auch angegeben in welcher
 * Zeile der Fehler ist.
 *
 * function b1(): void {
    let x: string = "Alles";
    console.log(y);
    fun1();
    console.log("Logo!");
}

b1();

function fun1(): void {
    console.log("Klar?");
}
 */
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
//# sourceMappingURL=script.js.map