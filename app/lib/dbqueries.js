import { MongoClient } from "mongodb";

const cron = require('node-cron')
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

export const dbCollectionPromise = dbCollection();


// const saveSnapshotOfDragoDataInSpecificWalletAddress = async (walletAddress) => {
//   const collection = await dbCollectionPromise;

//   cron.schedule('0, 8, 13 * * *', async () => {
//     try {
//       const response = await fetch("https://lok-nft.leagueofkingdoms.com/api/drago/inventory", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded', // Specify content type
//         },
//         body: `address=${walletAddress}`, // Construct the request body
//       });
//     }
//    catch (error) {
//     console.error('Error making POST request:', error);
//   }
//   });
// } for later feature. Snapshots of dst earned by date.

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

const filterByLegCount = async (legCount) => {
  const collection = await dbCollectionPromise;

    try {
      const result = await collection
       .aggregate([{ $match: { "filter.parts.legendary": parseInt(legCount) } }])
       .toArray();
      return result;
    } catch (err) {
      console.log(err);
    }
 
  
}

export { fetchFieldName, fetchSingle, fetchAll, filterFetch, filterByLegCount };
