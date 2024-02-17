import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECTION;

const client = new MongoClient(uri);

const dbConnection = async () => {
  try {
    await client.connect();
    const db = client.db(process.env.DATABASE_NAME);
    return db;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
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

const fetchSingle = async (dragoId) => {
  try {
    const collection = await dbCollectionPromise;
    const result = await collection.findOne({ id: parseInt(dragoId) });

    return result;
  } catch (err) {
    console.log(err);
  }
};

const fetchAll = async () => {
  const collection = await dbCollectionPromise;
  try {
    const result = await collection
      .aggregate([{ $project: { datas: 0 } }])
      .toArray();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const filterFetch = async (filterBy) => {
  let valueofRentFilter =
    filterBy === "rented" ? 1 : filterBy === "notRented" ? 0 : null;
  const collection = await dbCollectionPromise;
  try {
    const result = await collection
      .find({ "rent.status": valueofRentFilter })
      .toArray();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export { fetchFieldName, fetchSingle, fetchAll, filterFetch };
