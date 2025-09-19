import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
if (!uri) throw new Error('MONGODB_URI não definida');
if (!dbName) throw new Error('MONGODB_DB não definida');

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getDb() {
  const c = await clientPromise;
  return c.db(dbName);
}

export async function findAll(collectionName, query = {}, options = {}) {
  const db = await getDb();
  return db.collection(collectionName).find(query, options).toArray();
}

export async function findByQuery(collectionName, query, options = {}) {
  const db = await getDb();
  return db.collection(collectionName).find(query, options).toArray();
}

export async function insertOne(collectionName, document) {
  const db = await getDb();
  return db.collection(collectionName).insertOne(document);
}
