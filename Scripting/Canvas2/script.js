"use strict";
/**Aufgabe 3 b)
b) Entwerfen Sie ein Interface, welches auf sinnvolle Weise ein beliebiges Rechteck abbilden kann. Bonus: Machen Sie statt einem Interface eine Klasse und,
statt globaler Funktionen denen die Rechtecke übergeben werden in den folgenden Teilaufgaben, Methoden der Klasse selbst.

c) Schreiben Sie eine Funktion createRect(), welche Ihnen ohne Übergabeparameter ein zufällig (aber sinnvoll) befülltes Rechteck zurück gibt.
Wenn Sie mit einer Klasse statt einem Interface arbeiten, schreiben Sie stattdessen einen Konstruktor welcher ohne Übergabeparameter das zufällige Rechteck erstellt.

d) Schreiben Sie eine Funktion drawRect(...), welche das ihr übergebene Rechteck auf dem Canvas malt.

e) Lassen Sie jedes Mal, wenn die Seite neu geladen wird, einige Rechtecke generieren und zeichnen.
Legen Sie die Rechtecke dafür in einem Array an und rufen für jedes im Array vorhandene Rechteck die drawRect Funktion auf*/
let canvass = document.getElementById("MyCanvas");
let contexxt = canvass.getContext("2d");
function erschaffeRechteck() {
    let r = { start_x: Math.random() * 450, start_y: Math.random() * 320, size_x: Math.random() * 20, size_y: Math.random() * 40 };
    return r;
}
function zeichneRechteck(_r) {
    contexxt.lineWidth = 5;
    contexxt.strokeStyle = "black";
    contexxt.beginPath();
    contexxt.moveTo(_r.start_x, _r.start_y);
    contexxt.lineTo(_r.start_x, _r.start_y + _r.size_y);
    contexxt.lineTo(_r.start_x + _r.size_x, _r.start_y + _r.size_y);
    contexxt.lineTo(_r.start_x + _r.size_x, _r.start_y);
    contexxt.closePath();
    contexxt.stroke();
}
/** 3 e) */
let rechteckArray = [];
rechteckArray.push(erschaffeRechteck());
rechteckArray.push(erschaffeRechteck());
rechteckArray.push(erschaffeRechteck());
rechteckArray.push(erschaffeRechteck());
for (let i = 0; i < rechteckArray.length; i++) {
    zeichneRechteck(rechteckArray[i]);
}
//# sourceMappingURL=script.js.map