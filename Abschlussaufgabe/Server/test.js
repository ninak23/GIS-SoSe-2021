"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
const Mongo = require("mongodb");
var Memory;
(function (Memory) {
    let collection;
    async function connectToDatabase(_url) {
        let mongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        //collection = mongoClient.db("Memory").collection("ScoreList");
        collection = mongoClient.db("Memory2").collection("Score");
        console.log("Database connection", collection != undefined);
    }
    Memory.connectToDatabase = connectToDatabase;
    async function connectTodb(_url) {
        let mongoClient2 = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient2.connect();
        collection = mongoClient2.db("Memory").collection("MemoryCards");
        console.log("Database connection", collection != undefined);
    }
    Memory.connectTodb = connectTodb;
    async function getCards() {
        let cursor = await collection.find();
        return await cursor.toArray();
    }
    Memory.getCards = getCards;
    async function newCards(_info) {
        console.log(_info.name);
        return await collection.insertOne(_info);
    }
    Memory.newCards = newCards;
    async function getplayer() {
        let cursor = await collection.find();
        return await cursor.toArray();
    }
    Memory.getplayer = getplayer;
    // tslint:disable-next-line: no-any
    async function newPlayer(_info) {
        console.log(_info.firstname);
        return await collection.insertOne(_info);
    }
    Memory.newPlayer = newPlayer;
})(Memory = exports.Memory || (exports.Memory = {}));
//# sourceMappingURL=test.js.map