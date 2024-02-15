import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECTION;

const client = new MongoClient(uri);

const dbConnection = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(process.env.DATABASE_NAME);
  } catch (err) {
    console.log(err);
  }
};

const dbCollection = async () => {
  const dbConnectionFunc = await dbConnection();
  return dbConnectionFunc.collection(process.env.COLLECTION_NAME);
};

const dbCollectionPromise = dbCollection();

const fetchFieldName = async (fieldName) => {
  const collection = await dbCollectionPromise;
  const result = await collection.distinct(fieldName);
  return result;
};

const fetchSingle = async (drago_id) => {
  const collection = await dbCollectionPromise;
  const dragoId = parseInt(drago_id);
  try {
    const result = await collection.findOne({ id: dragoId });

    return result;
  } catch (err) {
    console.log(err);
  }
};

const fetchAll = async () => {
  const collection = await dbCollectionPromise;
  try {
    await client.connect();
    const result = await collection.find({}).toArray();
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

export { fetchFieldName, fetchSingle, fetchAll };
