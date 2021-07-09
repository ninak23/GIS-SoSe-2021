
import * as Mongo from "mongodb";
import { Task3_4 } from "./Server";
import { ParsedUrlQuery } from "querystring";

export namespace Datastudent {
  
  let collection: Mongo.Collection;

  export async function connectToDatabase(_url: string): Promise<void> {
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoClient.connect();
    collection = mongoClient.db("Test").collection("Student");
    console.log("Database connection", collection != undefined);
  }

  export async function getstudents(): Promise<Task3_4.Antwort[]> {
    let cursor: Mongo.Cursor<Task3_4.Antwort> = await collection.find();
    return await cursor.toArray();
  }

  // tslint:disable-next-line: no-any
  export async function newstudent(_info: ParsedUrlQuery): Promise<Mongo.InsertOneWriteOpResult<any>> {
    console.log(_info.Vorname );
    return await collection.insertOne(_info);
  }
}