import mongoose from "mongoose";
import * as mongodb from "mongodb";

const { ATLAS_URI } = process.env;
if (!ATLAS_URI) {
  throw new Error("Invalid ENV: ATLAS_URI");
}

// export let collections: {
//     users: mongodb.Collection;
    
//   };

export const connectToDB = async () => {
  try{
      const client = new mongodb.MongoClient(ATLAS_URI);
      const {connection} = await mongoose.connect(ATLAS_URI);

      if(connection.readyState === 1){
          console.log("Connected to DB");
        //   client.db('music-app');
        //   client.db().collection('users');

        //   if(client.db().collection('users')){
        //     console.log('collection created')
        //   }

          return Promise.resolve(true);
      }

      

  } catch(error){
      return Promise.reject(error);

  }
//   const client = new mongodb.MongoClient(ATLAS_URI);

//   await client.connect();
//   console.log("Connected to the database");

//   client.db("music-app");

};
