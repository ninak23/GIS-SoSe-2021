"use strict";
/**import * as Mongo from "mongodb";


async function connecttoDB (_url: string): Promise<void> {
let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true};

let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
await mongoClient.connect();

let students: Mongo.Collection = mongoClient.db("Test").collection("Students");
let cursor = students.find();
}

connecttoDB("mongodb://localhost:27017");
//# sourceMappingURL=test.js.map*/ 
//# sourceMappingURL=test.js.map