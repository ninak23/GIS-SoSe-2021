
/** Funktion die min bestimmt */

let array1: number[] = [1, 9, 10, 400, 4, 88];

let s: number = array1[0];
min(array1[0]);

function min(i: number): void {

    for (i = 0; i <= array1.length; i++) {
        if (s > array1[i]) {
            s = array1[i];
        }
    }
}
console.log(s);

/**  Schreiben Sie eine Funktion isEven(...), welche durch Rekursion nach folgender Beschreibung Berechnet,
 * ob eine Zahl gerade ist und entweder true oder false zurück gibt.

0 ist gerade
1 ist ungerade
Für jede andere Zahl N gilt, dass das Ergebnis gleich ist wie N - 2

Testen Sie Ihre Funktion mit 50 und 75. Was passiert bei -1? Warum? Können Sie eine Lösung dafür finden? (K)
 */

let str: string;

isEven(50);
console.log(str);

function isEven(n: number): string {

    if (n == 0) {

        str = "true";
        return str;

    }

    else {
        if (n == 1) {

            str = "false";
            return str;

        }

        else {

            isEven(n - 2);

        }
    }
}

/**Call Stack Overflow, da er bei negativen Zahlen immer noch -2 abzieht 
 * 
 * Hier zwei Varianten wie man das Problem lösen könnte:
 * 
Variante 1 

function isEven (n: number) : string {

    if (n = 0) {

        str = "true";

         return str;

    }

    else {

         if (n = 1) {

            str = "false";
            return str;
        }

        else {

            if (n > 1) {

            isEven(n - 2);
            }

            else {

            str = "Unzulässiger Zahlenbereich"

            return str;

            }
         }
    }
}



Variante 2 

function isEven (n: number) : string {

    if (n = 0) {

        str = "true";

        return str;

    }

    else {
        if (n = 1) {
         str = "false";

         return str;

        }

        else {

        if (n > 1) {

        isEven(n - 2);       Für Zahlen > 1 

        }

         else {

        isEven(n + 2);     Für Zahlen < 0 

        }

        }

    }

}
  
*/


/** Aufgabe 1 c)
 * c) Stellen Sie sich vor, Sie sollen ein System für die Hochschule entwickeln, ihre Studierenden abzuspeichern und zu verwalten.

Definieren Sie einen komplexen Datentyp (interface) für einen solchen Studierenden. Wie könnte dieser aussehen, welche Eigenschaften 
sollte dieser haben?
Erschaffen Sie drei verschiedene Studierende, befüllen Sie diese mit sinnvollen Werten und speichern Sie diese in Variablen.
Erschaffen Sie aus diesen drei Studierenden ein Studierenden Array (Typisierung!). Fügen Sie dem Array einen weiteren Studierenden 
hinzu ohne diesen zunächst in einer Variable abzulegen. Geben Sie einige Attribute / Eigenschaften dieser Studierenden auf der Konsole aus.
Schreiben sie eine Funktion showInfo(...) mit geeigneten Übergabeparametern, welche wichtige Infos über einen Studierenden auf der Konsole ausgibt.
 Rufen Sie diese Funktion einmal für jeden Studierenden auf.
Wenn Sie können, ändern Sie das interface in eine Klasse mit Konstruktor. 
Verschieben Sie außerdem die showInfo Funktion innerhalb die Klasse und machen Sie damit eine Methode daraus.
 */

/**namespace Aufgabe2_2 { 
    let arr2: number[] = [];
    console.log(arr2);

}*/

interface Person {
    name: string;
    vorname: string;
    alter: number;
}


let p1: Person = {
    name: "Müller",
    vorname: "Marie",
    alter: 18
};
let p3: Person = {
    name: "Mössner",
    vorname: "Simone",
    alter: 25
};

let p2: Person = erschaffePerson("Schiller", "Lucia", 24);


function erschaffePerson(_name: string, _vorname: string, _alter: number): Person {
    let p: Person = { name: _name, vorname: _vorname, alter: _alter };
    return p;
}
let personenArray: Person[] = [];
personenArray.push(p1);
personenArray.push(p2);
personenArray.push(p3);
personenArray.push({ name: "Karl", vorname: "Gustaf", alter: 20 });

console.log("name:", p1.name, "vorname:", p1.vorname, "alter:", p1.alter);
console.log("name:", p2.name, "vorname:", p2.vorname, "alter:", p2.alter);
console.log("name:", p3.name, "vorname:", p3.vorname, "alter:", p3.alter);
console.log("name:", personenArray[3].name, "vorname:", personenArray[3].vorname, "alter:", personenArray[3].alter);


/**class Person {
    name: string;
    vorname: string;
    alter: number;



constructor(_name: string, _vorname: string, _alter: number ) {

this.name = _name;
this.vorname = _vorname;
this.alter = _alter;

}


zeigInfos(): void {
    console.log("name:", this.name, "vorname:", this.vorname, "alter:", this.alter);
}
}
let p4: Person = new Person ("März", "Karl", 22);
p4.zeigInfos();

*/



/**Aufgabe 2*/



let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];

let arrBack: number[] = backwards(arr);

console.log(arr);

console.log(arrBack);

console.log(join(arr, [15, 9001, -440]));

//console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)

arr = split(arr, 0, 4);

console.log(arr);

console.log(split(arr, 1, 2));

console.log(split(arr, 2, 0));     // Bonus c)

console.log(split(arr, -1, 2));    // Bonus c)

console.log(split(arr, 0, 7));     // Bonus c)



function backwards(_arr: number[]): number[] {

    let arrInt: number[] = [];

    for (let idx = _arr.length - 1; idx >= 0; idx--) {

        arrInt.push(_arr[idx]);
    }
    return arrInt;
}

function join(_arr1: number[], _arr2: number[]): number[] {

    let arrInt: number[] = _arr1;

    for (let idx = 0; idx < _arr2.length; idx++) {

        arrInt.push(_arr2[idx]);
    }
    return arrInt;
}

/*

function join(..._arr: number[]): number[] {

    let arrInt: number[] = _arr1;

    for (let idx of _arr2) {

        arrInt.push(_arr2[idx]);

    }
     return arrInt;
}

*/

function split(_arr: number[], _idx1: number, _idx2: number): number[] {

    let arrInt: number[] = [];

    if ((_idx1 >= 0) && (_idx2 < _arr.length) && (_idx1 <= _idx2)) {                 // Prüfung der Indizes ob diese innerhalb der Arraygröße liegen

        for (let idx = _idx1; idx <= _idx2; idx++) {

            arrInt.push(_arr[idx]);
        }
        return arrInt;
    }

    else {

        console.log("Indizes nicht innerhalb des gültigen Bereichs, oder Index 1 > Index 2");

        return arrInt;
    }
}
