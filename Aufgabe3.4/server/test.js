"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
async function connecttoDB(_url) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let students = mongoClient.db("Test").collection("Students");
    //let cursor = students.find();
}
connecttoDB("mongodb://localhost:27017");
//# sourceMappingURL=test.js.map
//# sourceMappingURL=test.js.map