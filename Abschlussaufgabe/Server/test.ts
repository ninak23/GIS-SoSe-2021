import * as Mongo from "mongodb";
import { server } from "./server";
import { ParsedUrlQuery } from "querystring";

export namespace Memory {
  
  let collection: Mongo.Collection;

  export async function connectToDatabase(_url: string): Promise<void> {
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoClient.connect();
    //collection = mongoClient.db("Memory").collection("ScoreList");
    collection = mongoClient.db("Memory2").collection("Score");
    console.log("Database connection", collection != undefined);
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