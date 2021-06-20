"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datastudent = void 0;
const Mongo = require("mongodb");
var Datastudent;
(function (Datastudent) {
    let collection;
    async function connectToDatabase(_url) {
        let mongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        collection = mongoClient.db("Test").collection("Student");
        console.log("Database connection", collection != undefined);
    }
    Datastudent.connectToDatabase = connectToDatabase;
    async function findAll() {
        console.log("findAll");
        let cursor = await collection.find();
        return await cursor.toArray();
    }
    Datastudent.findAll = findAll;
    // tslint:disable-next-line: no-any
    async function insert(_dataset) {
        console.log(_dataset.Vorname);
        return await collection.insertOne(_dataset);
    }
    Datastudent.insert = insert;
})(Datastudent = exports.Datastudent || (exports.Datastudent = {}));
//# sourceMappingURL=test.js.map