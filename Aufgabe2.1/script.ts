
function a1(): void {
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

/** Weitere Funktionen Aufgabe 1 c) */


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

 
/**Aufgabe 2 */

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

function b1(): void {
    let y: string = "peace";
    console.log(y);
    fun1();
    console.log("Logo!");
}

b1();

function fun1(): void {
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


/**Aufgabe 4 Was wird in der Konsole ausgegeben und warum ? */
let x: string = "Hallo";
console.log(x);
funct1(x);
console.log(x);
funct2();
funct3();
console.log(x);
  
function funct1(y: string): void {
      y = "Bla";
      console.log(y);
    }
  
function funct2(): void {
      let x: string = "Blubb";
      console.log(x);
    }
  
function funct3(): void {
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
 * zuerst wird eine variable x vom typ string mit Hallo initialisiert 
 * dann wird die variable x ausgegeben, weswegen hallo in der Konsole erscheint
 * anschließend wird die funct(x) aufgerufen, das bedeutet dass zuerst in der
 * funktion die variable y mit dem Wert der variable x überschrieben wird, also
 * also ist y = "Hallo". Anschließend wird y aber mit dem string "bla" überschrieben 
 * und somit ist y="bla", als nächstes wird y ausgegeben und es erscheint 
 * "bla" in der Konsole . 
 * Nachdem die funtion eins aufgerufen wurde und vollständig durchlaufen ist, wird
 * wieder einfach nur x in der Konsole ausgegeben. x ist immer noch mit dem Wort "Hallo"
 * initialisiert, also erscheint "Hallo" bei der Ausgabe in der Konsole. 
 * Dann wird die nächste Funktion aufgerufen aber diesmal die funct2, hier wird x
 * aber nicht als übergabe Parameter mitvermittelt, sondern es wird einfach nur
 * die Funktion aufgerufen. In der Funktion wird eine variable x vom typ String mit
 * x="Blubb" initialisiert und anschließend in der Konsole ausgegeben, weswegen als nächstes 
 * "Blubb" in der Ausgabe der Konsole erscheint. Die funtkion 2 wird somit komplett durchlaufen
 * und es wird die dritte funktion funct3() aufgerufen, auch hier wieder ohne x als Übergabe-
 * parameter. In dieser von funktion wird x einfach nur überschrieben mit x = "Test", mehr macht die
 * die Funktion nicht. Zum schluss wird dann nochmal x in der Konsole ausgegeben, und es erscheint 
 * "Test", denn x wird ja zum Schluss durch den aufruf der funct3 nochmals überschrieben und es erfolgt
 * keine weitere Ausgabe mehr.
 */

/**Aufgabe 5 Schleifen, Funktionen, Kontrollstrukturen
 * 
 * a) Schreiben Sie eine Funktion multiply welche zwei Zahlen als Parameter entgegen nimmt und 
 * als Rückgabewert das Ergebnis der Multiplikation der beiden Parameter liefert. 
 * Testen Sie Ihre Funktion auf eine geeignete Weise.
 */


let r: number = 7;
let y: number = 8;
multiply();


function multiply(): void {

    let z: number = r * y;
    console.log(z);
}

/** Als Ergebnis erscheint, beziehungsweise als Ausgabe in der Konsole wird 56 angezeigt*/

/** b) Schreiben Sie eine Funktion max welche zwei Zahlen als Parameter entgegen nimmt 
 * und die größere der beiden zurück gibt. Nutzen Sie dafür nicht Math.max sondern 
 * schreiben Sie ihre eigene Implementation. Testen Sie Ihre Funktion auf eine geeignete Weise.*/

let n: number = 40;
let m: number = 3;
max();

function max(): void {
    if ( n > m ) {
        console.log(n);
    }
    else {
        console.log(m);
    }
    if (n == m) {
        console.log( "n und m sind gleich groß");
    }

  
}

 /**c) Zählen Sie mithilfe einer while Schleife alle Zahlen 
  * von 1 bis 100 zusammen und geben Sie das Ergebnis auf der Konsole aus*/

let i: number = 1;
let result: number = 0;

while ( i <= 100) {
   result += i;
   ++i;
}

console.log(result);


 /** d) Nutzen Sie eine for Schleife um 10 zufällige Zahlen zwischen 0 und 100 
  * auf der Konsole auszugeben. Nutzen Sie dafür Math.random*/

let o: number = 1;

for (o = 1; o <= 100; o = o + 10 ) {
    console.log(Math.random( ));
}



 /**e) Schreiben Sie eine Funktion factorial welche eine Zahl n entgegen nimmt und 
  * als Rückgabewert die Fakultät (1*2*3*...*n) dieser Zahl zurück gibt. 
  * Nutzen Sie dafür eine Schleife ihrer Wahl (while, do while, for). Geben Sie außerdem 1 zurück, 
  * wenn n kleiner ist als 1. */

let p: number = 1;
let k: number = 0;



function factorial(): void {
    for (p = 1; p <= k; ++p) {

        k = k * i;

    }
    
}




 /** f) Schreiben Sie eine Funktion leapyears welche alle Schaltjahre von 1900 bis heute auf der 
  * Konsole ausgibt. Ein Jahr ist ein Schaltjahr, wenn die Jahreszahl durch 4, 
  * aber nicht durch 100 teilbar ist. Sollte die Jahreszahl durch 400 teilbar sein, 
  * handelt es sich dennoch um ein Schaltjahr.*/


/** a) Schreiben Sie eine Schleife welche auf der Konsole folgende sieben Zeilen ausgibt:

#
##
###
####
#####
######
#######
Hinweis: die Länge eines strings kann über stringname.length abgefragt werden.*/

let a: number = 0;
let c: string = "#";

while (a < 7) {
    console.log("#" + c );
    c = c + "#";
}




/**b) Schreiben Sie ein Programm welches auf der Konsole alle Zahlen von 1 bis 100 ausgibt.
 Dabei gibt es zwei Ausnahmen: Ist die Zahl durch 3 teilbar, geben Sie statt der Zahl Fizz aus. 
 Ist sie durch 5 (und nicht durch 3) teilbar, geben sie Buzz aus.
Hinweis: Nutzen sie den Modulo Operator % um zu prüfen, ob eine Variable durch eine andere teilbar 
ist (Rest 0).

c) Nehmen Sie das Programm aus b) und modifizieren Sie es so, dass das Programm FizzBuzz ausgibt, 
wenn die Zahl durch sowohl 3 als auch durch 5 teilbar ist.
Hinweis: Dieser Teil der Aufgabe hat eine offensichtlichere und eine cleverere Lösung. Finden Sie beide?

Diese Frage ist eine beliebte Frage in Vorstellungsgesprächen. 
Wenn Sie diese also gelöst bekommen, ist Ihr Marktwert gerade gestiegen.

d) Schreiben Sie eine Funktion, welche einen String zurückgibt, 
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
Character innerhalb der Zeile.

e) Nehmen Sie die Funktion aus d) und fügen Sie ihr einen Übergabeparameter hinzu, 
welcher die Höhe und Breite des Brettes bestimmt. Schreiben Sie ihre Funktion so um, 
dass es mit jeder Größe Funktioniert.
Hinweis: Machen Sie sich Gedanken wie sie sich merken/berechnen können, 
welcher Character als erstes/nächstes in einer Zeile ausgegeben werden muss.*/



