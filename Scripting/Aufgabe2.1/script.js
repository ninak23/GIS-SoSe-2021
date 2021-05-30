"use strict";
function a1() {
    let x = "Alles";
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
function func1() {
    console.log("Klar?");
}
/** Weitere Funktionen Aufgabe 1 c) */
function func2() {
    console.log("Freut mich!");
}
function func3() {
    console.log("Mich auch!");
}
function func4() {
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
 * Zuerst wird function a1() aufgerufen. Dann wird der variable x mit dem string "Alles" initialisiert
 * Dann wird x bzw. "Alles" in der Konsole ausgegeben. Anschließend wird die Funktion func1() aufgerufen.
 * und in der Konsole wird der string "Klar?" ausgegeben.
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
 * Gute!
 * Alles
 * Klar?
 * Alles
 * Logo!
 * Freut mich!
 * Mich auch!
*/
/**Aufgabe 2 */
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
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
* in der Console die variable i ausgegeben, da i=9 ist, wird dementsprechend der Wert 9 in der Konsole ausgegeben.
* Anschließend wird i um eins dekrementiert, also in dem Fall: 9-1= 8 und i ist jetzt
* 8, also i = 8. Dann wird in der while schleife überprüft ob i größer als 0 ist und
* da 8 größer 0 ist, wird anschließend i in der Konsole ausgegeben, also die Zahl 8.
* Dann wird i wieder um 1 dekrementiert und i = 7. Es wird wieder überprüft ob i größer 0
* ist und da 7 größer ist, wird anschließend wieder der Wert 7 in der Konsole ausgegeben. Das ganze geht
* solange bis i den Wert 1 erhält, denn wenn i = 1 ist,
* wird die variable wieder um 1 dekremtiert und dann ist i = 0.
* Dementsprechend wird die while schleife nicht mehr von vorne ausgeführt, da i = 0 ist und nicht
* mehr größer 0 und das Programm ist somit zu Ende.
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
/**Ja bei den Fehlermeldungen wird genau angezeigt was falsch ist. Zum beispiel, dass die aufgerufene variable
 * nicht vorhanden ist, oder das x zwar deklariert ist, aber nie gelesen wird. Außerdem
 * werden die Fehler unterkringelt und bei den Fehlermeldungen wird auch angegeben in welcher
 * Zeile sich der Fehler befindet.
 *
 *
 * Beispiel: 2 eingebaute fehler zum einem, dass bei console.log(y), die variable y welche gar nicht vorhanden ist,
 * ausgegeben werden soll anstatt der variablen x und das bei der function b1() zum Scluss ein Semikolon vergessen
 * wurde.
 * function b1(): void {
    let x: string = "Alles";
    console.log(y);
    fun1();
    console.log("Logo!");


b1();

function fun1(): void {
    console.log("Klar?");
}
 */
/**Aufgabe 4 Was wird in der Konsole ausgegeben und warum ? */
let x = "Hallo";
console.log(x);
funct1(x);
console.log(x);
funct2();
funct3();
console.log(x);
function funct1(y) {
    y = "Bla";
    console.log(y);
}
function funct2() {
    let x = "Blubb";
    console.log(x);
}
function funct3() {
    x = "Test";
}
/** In der Konsole erfolgt folgende Ausgabe:
 * Hallo
 * Bla
 * Hallo
 * Blubb
 * Test
 *
 * Warum ist das so?
 * Zuerst wird eine variable x vom typ string mit Hallo initialisiert.
 * Dann wird die variable x durch console.log(x) ausgegeben, weswegen Hallo in der Konsole erscheint.
 * Als nächstes wird die funct(x) aufgerufen das bedeutet, dass zuerst in der
 * funktion die variable y mit dem Wert der variablen x initialisiert, also
 * ist y = "Hallo". Anschließend wird y aber mit dem string "Bla" überschrieben
 * und somit ist y="Bla", als nächstes wird y ausgegeben und es erscheint das Wort Bla in der Konsole.
 * Nachdem die funtion eins aufgerufen wurde und vollständig durchlaufen ist, wird
 * wieder einfach nur x in der Konsole ausgegeben. x ist immer noch mit "Hallo"
 * initialisiert, also erscheint Hallo bei der Ausgabe in der Konsole.
 * Dann wird die nächste Funktion aufgerufen, die funct2, hier wird x
 * aber nicht als übergabe Parameter mitvermittelt, sondern es wird einfach nur
 * die Funktion aufgerufen. In der Funktion wird eine variable x vom typ String mit
 * x="Blubb" initialisiert und anschließend in der Konsole ausgegeben, weswegen als nächstes das Wort
 * Blubb in der Ausgabe der Konsole erscheint. Die funtkion 2 ist dann komplett durchlaufen
 * und es wird die dritte funktion funct3() aufgerufen, auch hier wieder ohne einen Übergabe-
 * parameter. In dieser funktion wird x einfach nur überschrieben und x ist dann x = "Test", mehr passiert
 * bzw. macht die Funktion nicht. Zum Schluss wird dann x in der Konsole ausgegeben, und es erscheint das Wort
 * Test, denn x wurde ja zum Schluss durch den Aufruf der funct3  überschrieben. Nach der letzten Ausgabe ist das
 * Programm vollständig durchlaufen.
 */
/**Aufgabe 5 Schleifen, Funktionen, Kontrollstrukturen
 *
 * a) Schreiben Sie eine Funktion multiply welche zwei Zahlen als Parameter entgegen nimmt und
 * als Rückgabewert das Ergebnis der Multiplikation der beiden Parameter liefert.
 * Testen Sie Ihre Funktion auf eine geeignete Weise.
 */
let r = 7;
let y = 8;
multiply();
function multiply() {
    let z = r * y;
    console.log(z);
}
/** Als Ergebnis erscheint, beziehungsweise als Ausgabe in der Konsole wird 56 angezeigt*/
/** b) Schreiben Sie eine Funktion max welche zwei Zahlen als Parameter entgegen nimmt
 * und die größere der beiden zurück gibt. Nutzen Sie dafür nicht Math.max sondern
 * schreiben Sie ihre eigene Implementation. Testen Sie Ihre Funktion auf eine geeignete Weise.*/
let n = 40;
let m = 3;
max();
function max() {
    if (n > m) {
        console.log(n);
    }
    else {
        console.log(m);
    }
    if (n == m) {
        console.log("n und m sind gleich groß");
    }
}
/**c) Zählen Sie mithilfe einer while Schleife alle Zahlen
 * von 1 bis 100 zusammen und geben Sie das Ergebnis auf der Konsole aus*/
let i = 1;
let result = 0;
while (i <= 100) {
    result += i;
    ++i;
}
console.log(result);
/** d) Nutzen Sie eine for Schleife um 10 zufällige Zahlen zwischen 0 und 100
 * auf der Konsole auszugeben. Nutzen Sie dafür Math.random*/
let o = 1;
for (o = 0; o < 10; o++) {
    console.log(100 * Math.random());
}
/**e) Schreiben Sie eine Funktion factorial welche eine Zahl n entgegen nimmt und
 * als Rückgabewert die Fakultät (1*2*3*...*n) dieser Zahl zurück gibt.
 * Nutzen Sie dafür eine Schleife ihrer Wahl (while, do while, for). Geben Sie außerdem 1 zurück,
 * wenn n kleiner ist als 1. */
let l;
let erg;
let res = 1;
erg = factorial(5);
console.log(erg);
function factorial(e) {
    if (e >= 1) {
        for (l = 1; l <= e; l++) {
            res = res * l;
        }
    }
    return res;
}
/** f) Schreiben Sie eine Funktion leapyears welche alle Schaltjahre von 1900 bis heute auf der
 * Konsole ausgibt. Ein Jahr ist ein Schaltjahr, wenn die Jahreszahl durch 4,
 * aber nicht durch 100 teilbar ist. Sollte die Jahreszahl durch 400 teilbar sein,
 * handelt es sich dennoch um ein Schaltjahr.*/
leapyears();
function leapyears() {
    for (i = 1900; i <= 2021; i++) {
        if ((i % 100) > 0) { // Jahreszahl ist nicht durch 100 teilbar
            if ((i % 4) == 0) { // Jahreszahl ist durch 4 teilbar
                console.log(i);
            }
        }
        else {
            if ((i % 400) == 0) { // Jahreszahl ist durch 400 teilbar
                console.log(i);
            }
        }
    }
}
/** a) Schreiben Sie eine Schleife welche auf der Konsole folgende sieben Zeilen ausgibt:

#
##
###
####
#####
######
#######
Hinweis: die Länge eines strings kann über stringname.length abgefragt werden.*/
let a = 0;
let c = "#";
while (a < 7) {
    console.log(c);
    c = c + "#";
    a = a + 1;
}
/**b) Schreiben Sie ein Programm welches auf der Konsole alle Zahlen von 1 bis 100 ausgibt.
 Dabei gibt es zwei Ausnahmen: Ist die Zahl durch 3 teilbar, geben Sie statt der Zahl Fizz aus.
 Ist sie durch 5 (und nicht durch 3) teilbar, geben sie Buzz aus.
Hinweis: Nutzen sie den Modulo Operator % um zu prüfen, ob eine Variable durch eine andere teilbar
ist (Rest 0).*/
let g = 0;
for (g = 0; g <= 100; g++) {
    if (g % 3 == 0) {
        console.log("Fizz");
    }
    else {
        if (g % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(g);
        }
    }
}
/**
c) Nehmen Sie das Programm aus b) und modifizieren Sie es so, dass das Programm FizzBuzz ausgibt,
wenn die Zahl durch sowohl 3 als auch durch 5 teilbar ist.
Hinweis: Dieser Teil der Aufgabe hat eine offensichtlichere und eine cleverere Lösung. Finden Sie beide?

Diese Frage ist eine beliebte Frage in Vorstellungsgesprächen.
Wenn Sie diese also gelöst bekommen, ist Ihr Marktwert gerade gestiegen.*/
let h = 0;
for (h = 1; h <= 100; h++) {
    if ((h % 3 == 0) && (h % 5 == 0)) {
        console.log("FizzBuzz");
    }
    else {
        if (h % 3 == 0) {
            console.log("Fizz");
        }
        else {
            if (h % 5 == 0) {
                console.log("Buzz");
            }
            else {
                console.log(h);
            }
        }
    }
}
/**d) Schreiben Sie eine Funktion, welche einen String zurückgibt,
der ein 8x8 Schachbrett repräsentiert, mit neuen Zeilen ("\n") um die Zeilen zu trennen.
An jeder Position im Brett ist entweder ein # oder ein Leerzeichen.

Wenn der String über console.log ausgegeben wird, sollte er etwa so aussehen:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Hinweis: Beginnen Sie mit einem leeren string ("") und fügen Sie dann immer mehr Zeichen hinzu.
Für zwei Dimensionen brauchen Sie zwei Schleifen ineinander, eine für die Zeilen und eine für die
Character innerhalb der Zeile.*/
let p = 0;
let t = 0;
let zeile = "";
let b = 0;
Schachbrett();
function Schachbrett() {
    for (t = 0; t < 8; t++) {
        if (t % 2 == 0) {
            zeile = "";
            for (g = 0; g < 8; g++) { /**g breite  */
                if (g % 2 == 0) {
                    zeile = zeile + " ";
                }
                else {
                    zeile = zeile + "#";
                }
            }
            /**zeile = zeile + "\n";*/
            console.log(zeile);
        }
        else {
            zeile = "";
            for (g = 0; g < 8; g++) {
                if (g % 2 == 0) {
                    zeile = zeile + "#";
                }
                else {
                    zeile = zeile + " ";
                }
            }
            /**zeile = zeile + "\n";*/
            console.log(zeile);
        }
    }
}
/**e) Nehmen Sie die Funktion aus d) und fügen Sie ihr einen Übergabeparameter hinzu,
welcher die Höhe und Breite des Brettes bestimmt. Schreiben Sie ihre Funktion so um,
dass es mit jeder Größe Funktioniert.
Hinweis: Machen Sie sich Gedanken wie sie sich merken/berechnen können,
welcher Character als erstes/nächstes in einer Zeile ausgegeben werden muss.*/
let d = 0;
let w = 0;
let zeile2 = "";
Schachbrett2(7);
function Schachbrett2(s) {
    for (w = 0; w < s; w++) {
        if (w % 2 == 0) {
            zeile2 = "";
            for (g = 0; g < s; g++) { /**g breite  */
                if (g % 2 == 0) {
                    zeile2 = zeile2 + " ";
                }
                else {
                    zeile2 = zeile2 + "#";
                }
            }
            /**zeile = zeile + "\n";*/
            console.log(zeile2);
        }
        else {
            zeile2 = "";
            for (g = 0; g < s; g++) {
                if (g % 2 == 0) {
                    zeile2 = zeile2 + "#";
                }
                else {
                    zeile2 = zeile2 + " ";
                }
            }
            /**zeile = zeile + "\n";*/
            console.log(zeile2);
        }
    }
}
//# sourceMappingURL=script.js.map