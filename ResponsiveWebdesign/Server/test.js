"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
const Mongo = require("mongodb");
var Memory;
(function (Memory) {
    let collection;
    let collection2;
    async function connectToDatabase(_url) {
        let mongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        collection = mongoClient.db("Memory").collection("ScoreList");
        collection2 = mongoClient.db("Memory").collection("MemoryCards");
        console.log("Database connection", collection != undefined);
        console.log("Database connection", collection2 != undefined);
    }
    Memory.connectToDatabase = connectToDatabase;
    async function getCards() {
        let cursor = await collection2.find();
        return await cursor.toArray();
    }
    Memory.getCards = getCards;
    // tslint:disable-next-line: no-any
    async function newCards(_info) {
        console.log(_info.name);
        return await collection2.insertOne(_info);
    }
    Memory.newCards = newCards;
    async function removeCards(_info) {
        console.log(_info.name);
        console.log("hallo");
        return await collection2.deleteOne({ name: _info.name });
    }
    Memory.removeCards = removeCards;
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