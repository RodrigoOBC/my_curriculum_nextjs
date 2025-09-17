import { MongoClient } from 'mongodb';


export class MongoOperator {
  constructor(host, dbName) {
    this.host = host;
    this.dbName = dbName;
  }

  async openConnetion() {
    if (!this.client) {
      this.client = new MongoClient(this.host);
      await this.client.connect();
    }
    return this.client.db(this.dbName);
  }

  async closeConnection() {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  }

  async insertOne(collectionName, document) {
    const db = await this.openConnetion();
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(document);
    return result;
  }

  async findAll(collectionName) {
    try {
      const db = await this.openConnetion();
      const collection = db.collection(collectionName);
      const documents = await collection.find({}).toArray();
      return documents;
    } catch (error) {
      console.error('Error finding documents:', error);
      throw error;
    }
  }

  async findByQuery(collectionName, query) {
    try {
      const db = await this.openConnetion();
      const collection = db.collection(collectionName);
      const documents = await collection.find(query).toArray();
      return documents;
    } catch (error) {
      console.error('Error finding documents by query:', error);
      throw error;
    }
  }

}



