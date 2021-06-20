
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

  export async function findAll(): Promise<Task3_4.Antwort[]> {
    console.log("findAll");
    let cursor: Mongo.Cursor<Task3_4.Antwort> = await collection.find();
    return await cursor.toArray();
  }

  // tslint:disable-next-line: no-any
  export async function insert(_dataset: ParsedUrlQuery): Promise<Mongo.InsertOneWriteOpResult<any>> {
    console.log( _dataset.Vorname );
    return await collection.insertOne(_dataset);
  }


}