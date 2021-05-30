
namespace Aufgabe2_4 {


    export interface Outfit {

        Kopfbedeckungen: Kleidungsstueck[];
        Oberteile: Kleidungsstueck[];
        Hosen: Kleidungsstueck[];
        Schuhe: Kleidungsstueck[];
    }

    export interface Kleidungsstueck {
        Preis: number;
        Typ: string;
        Image: string;
        DateiName: string;
    }

    export interface Selection {
        Kopfbedeckung: Kleidungsstueck;
        Oberteil: Kleidungsstueck;
        Hose: Kleidungsstueck;
        Schuh: Kleidungsstueck;
    }
/*
    export let parts: Outfit = {

        Kopfbedeckungen: [
            { Preis: 14.95, Typ: "Mütze", Image: "Schuh1", DateiName: "Medien/IMG_0560.jpg" },
            { Preis: 9.95, Typ: "Stirnband", Image: "Schuh2", DateiName: "Medien/IMG_0561.jpg" },
            { Preis: 19.95, Typ: "Cap", Image: "Schuh3", DateiName: "Medien/IMG_0492.jpg" },
            { Preis: 12.95, Typ: "Hut", Image: "Schuh4", DateiName: "Medien/IMG_0490.jpg" }
        ],

        Oberteile: [
            { Preis: 24.95, Typ: "Pullover", Image: "Schuh1", DateiName: "Medien/IMG_0486.jpg" },
            { Preis: 11.95, Typ: "Tshirt", Image: "Schuh2", DateiName: "Medien/IMG_0487.jpg" },
            { Preis: 14.95, Typ: "Langarmshirt", Image: "Schuh3", DateiName: "Medien/IMG_0488.jpg" },
            { Preis: 6.95, Typ: "Top", Image: "Schuh4", DateiName: "Medien/IMG_0489.jpg" }],

        Hosen: [
            { Preis: 24.95, Typ: "Jeans", Image: "Schuh1", DateiName: "Medien/IMG_0482.jpg" },
            { Preis: 11.95, Typ: "Leggins", Image: "Schuh2", DateiName: "Medien/IMG_0483.jpg" },
            { Preis: 19.95, Typ: "Shorts", Image: "Schuh3", DateiName: "Medien/IMG_0484.jpg" },
            { Preis: 14.95, Typ: "Schlafhose", Image: "Schuh4", DateiName: "Medien/IMG_0485.jpg" }],

        Schuhe: [
            { Preis: 94.95, Typ: "Nike", Image: "Schuh1", DateiName: "Medien/IMG_0363.jpg" },
            { Preis: 64.95, Typ: "Vans", Image: "Schuh2", DateiName: "Medien/IMG_0366.jpg" },
            { Preis: 119.95, Typ: "adidas", Image: "Schuh3", DateiName: "Medien/IMG_0364.jpg" },
            { Preis: 74.95, Typ: "NikeSB", Image: "Schuh4", DateiName: "Medien/IMG_0367.jpg" }
        ]
    };*/






    export let partsJson: string =
    
    `
    {

        "Kopfbedeckungen": [

            { "Preis": 14.95, "Typ": "Mütze", "Image": "Kopf", "DateiName": "Medien/IMG_0560.jpg" },
            { "Preis": 9.95, "Typ": "Stirnband", "Image": "Kopf", "DateiName": "Medien/IMG_0561.jpg" },
            { "Preis": 19.95, "Typ": "Cap", "Image": "Kopf", "DateiName": "Medien/IMG_0492.jpg" },
            { "Preis": 12.95, "Typ": "Hut", "Image": "Kopf", "DateiName": "Medien/IMG_0490.jpg" }],

        "Oberteile": [
            { "Preis": 24.95, "Typ": "Pullover", "Image": "Oberteil", "DateiName": "Medien/IMG_0486.jpg" },
            { "Preis": 11.95, "Typ": "Tshirt", "Image": "Oberteil", "DateiName": "Medien/IMG_0487.jpg" },
            { "Preis": 14.95, "Typ": "Langarmshirt", "Image": "Oberteil", "DateiName": "Medien/IMG_0488.jpg" },
            { "Preis": 6.95, "Typ": "Top", "Image": "Oberteil", "DateiName": "Medien/IMG_0489.jpg" }],

        "Hosen": [

            { "Preis": 24.95, "Typ": "Jeans", "Image": "Hose", "DateiName": "Medien/IMG_0482.jpg" },
            { "Preis": 11.95, "Typ": "Leggins", "Image": "Hose", "DateiName": "Medien/IMG_0483.jpg" },
            { "Preis": 19.95, "Typ": "Shorts", "Image": "Hose", "DateiName": "Medien/IMG_0484.jpg" },
            { "Preis": 14.95, "Typ": "Schlafhose", "Image": "Hose", "DateiName": "Medien/IMG_0485.jpg" }],


        "Schuhe": [

            { "Preis": 94.95, "Typ": "Nike", "Image": "Schuh", "DateiName": "Medien/IMG_0363.jpg" },
            { "Preis": 64.95, "Typ": "Vans", "Image": "Schuh", "DateiName": "Medien/IMG_0366.jpg" },
            { "Preis": 119.95, "Typ": "adidas", "Image": "Schuh", "DateiName": "Medien/IMG_0364.jpg" },
            { "Preis": 74.95, "Typ": "NikeSB", "Image": "Schuh", "DateiName": "Medien/IMG_0367.jpg" }
            ]
        }
    `
    ;

}