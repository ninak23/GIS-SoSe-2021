import * as Mongo from "mongodb";
import { server } from "./server";
import { ParsedUrlQuery } from "querystring";

export namespace Memory {
  
  let collection: Mongo.Collection;
  let collection2: Mongo.Collection;

  export async function connectToDatabase(_url: string): Promise<void> {
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoClient.connect();
    collection = mongoClient.db("Memory").collection("ScoreList");
    collection2 = mongoClient.db("Memory").collection("MemoryCards");
    console.log("Database connection", collection != undefined);
    console.log("Database connection", collection2 != undefined);
  }

  export async function getCards(): Promise<server.Cards[]> {
    let cursor: Mongo.Cursor<server.Cards> = await collection2.find();
    return await cursor.toArray();
  }

  // tslint:disable-next-line: no-any
  export async function newCards(_info: ParsedUrlQuery): Promise<Mongo.InsertOneWriteOpResult<any>> {
    console.log(_info.name);
    return await collection2.insertOne(_info);
  }

  export async function removeCards(_info: ParsedUrlQuery): Promise<Mongo.DeleteWriteOpResultObject> {
    console.log(_info.name);
    console.log("hallo");
    return await collection2.deleteOne({ name: _info.name});
  }

  export async function getplayer(): Promise<server.Player[]> {
    let cursor: Mongo.Cursor<server.Player> = await collection.find();
    return await cursor.toArray();
  }

  // tslint:disable-next-line: no-any
  export async function newPlayer(_info: ParsedUrlQuery): Promise<Mongo.InsertOneWriteOpResult<any>> {
    console.log(_info.firstname );
    return await collection.insertOne(_info);
  }
}