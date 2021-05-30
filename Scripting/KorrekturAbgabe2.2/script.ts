/** 1 a)
 * 
 * 
 * 
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

 */


/**function min(...array1: number []): number {
    let s: number = array1[0];

    for (let i: number = 0; i <= array1.length; i++) {
        if (s > array1[i]) {
            s = array1[i];
        }
    }
    return s;
}
console.log(min(70, 60, 5, 23, 4));

/** Aufgabe 1 c) 
 * 
 * dadurch das bei -1 immer minus 2 abgezogen wird läuft es ins unendliche und da irgendwann 
 * nicht mehr genügend Speicherplatz vorhanden ist passiert ein Stack Overflow 
 */

