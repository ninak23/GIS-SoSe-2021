"use strict";
/**let canvas: HTMLCanvasElement = <HTMLCanvasElement>

document.getElementById("MyCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.lineWidth = 10;

context.strokeStyle = "brown";

context.strokeRect(75, 140, 150, 110);

context.fillRect(160, 190, 40, 60);

context.beginPath();

context.moveTo(50, 140);

context.lineTo(120, 60);

context.lineTo(250, 140);

context.closePath();

context.stroke();

context.lineWidth = 6;

context.beginPath();

context.moveTo(140, 70);

context.lineTo(140, 40);

context.lineTo(160, 40);

context.lineTo(160, 85);

context.closePath();

context.stroke();

 

context.lineWidth = 4;

context.fillStyle = "brown";

//context.strokeStyle = "saddlebrown";

context.strokeRect(100, 150, 30, 30);*/
/**a) Experimentieren Sie ein wenig mit dem Canvas und machen Sie sich damit vertraut. Malen Sie Linien, machen Sie diese Linien farbig oder gekrümmt, malen Sie Kreise,
 * Kurven und Rechtecke und füllen Sie diese mit Farben. Zeichnen Sie damit eine einfache Landschaft (grüner Boden, blauer Himmel mit ein paar Wolken, ein Haus und ein Baum im Bild).
 * Machen Sie Gebrauch von Html5CanvasTutorials.
*/
let canvas = document.getElementById("MyCanvas");
let context = canvas.getContext("2d");
/**Himmel */
context.fillStyle = "lightblue";
context.fillRect(0, 0, 500, 250);
/**Sonne */
context.beginPath();
context.fillStyle = "yellow";
context.arc(40, 40, 20, 0, 2 * Math.PI);
context.fill();
/**Haus */
context.lineWidth = 10;
context.fillStyle = "Linen";
context.fillRect(75, 140, 150, 110);
context.fillStyle = "Black";
context.fillRect(130, 190, 40, 60);
context.beginPath();
context.moveTo(50, 140);
context.lineTo(120, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();
context.fillStyle = "Maroon";
context.fill();
/**Baumstamm */
context.fillStyle = "brown";
context.fillRect(380, 130, 25, 120);
/**Baumkrone */
context.beginPath();
context.moveTo(335, 90);
context.bezierCurveTo(315, 100, 315, 125, 365, 125);
context.bezierCurveTo(375, 140, 410, 140, 420, 125);
context.bezierCurveTo(460, 125, 460, 110, 445, 100);
context.bezierCurveTo(465, 70, 435, 65, 420, 75);
context.bezierCurveTo(410, 52.5, 375, 60, 375, 75);
context.bezierCurveTo(350, 52.5, 325, 60, 335, 90);
// complete custom shape
context.closePath();
context.lineWidth = 5;
context.fillStyle = "darkgreen";
context.fill();
/**Wolke */
context.beginPath();
context.moveTo(42.5, 20);
context.bezierCurveTo(32.5, 25, 32.5, 37.5, 62.5, 37.5);
context.bezierCurveTo(62.5, 45, 80, 45, 95, 37.5);
context.bezierCurveTo(105, 37.5, 105, 30, 97.5, 25);
context.bezierCurveTo(107.5, 10, 92.5, 7.5, 75, 12.5);
context.bezierCurveTo(80, 1.25, 62.5, 5, 62.5, 12.5);
context.bezierCurveTo(50, 1.25, 37.5, 5, 42.5, 20);
// complete custom shape
context.closePath();
context.lineWidth = 5;
context.fillStyle = "lightgrey";
context.fill();
/**Grünfläche */
context.fillStyle = "green";
context.fillRect(0, 250, 500, 100);
//# sourceMappingURL=script.js.map