import { MongoClient } from "mongodb";

async function getProducts() {
  // const client = await MongoClient.connect('mongodb://localhost:27017');
  // const db = client.db('nextecom');
  // const products = await db.collection('products').find().toArray();
  // client.close();
  // return products;

  const uri = process.env.MONGODB_CONNECTION_STRING;
  const dbName = process.env.MONGODB_DB_NAME;
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const collection = client.db(dbName).collection("products");
  const albums = await collection.find({}).toArray();

  client.close();

  return albums;
}

export default async function handler(req, res) {
  const products = await getProducts();
  res.status(200).json(products);
}
