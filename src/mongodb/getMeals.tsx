import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
const {MongoClient} = require('mongodb');
import { dbConnectionStr } from "../config";
import {meal} from "../classes/meals"

async function getMeal(meal: meal) {
  const client = new MongoClient(dbConnectionStr)
  const { user, isAuthenticated, isLoading } = useAuth0();
  try {
    await client.connect()
    const db = client.db("Foodapp")
    if (!user) {
        return null
    }
    if (isLoading) {
        return <div>Loading ...</div>;
     }

    db.collection("Meals").findMany(meal.name)
    
    // const profile  =  await db.collection("Profiles").findOne({userID: user.id})
    // if (profile == null) {
    //     db.collection("Profiles").insertOne({
    //         _id:user.id,
    //         name: user.name,
    //         teams:[]
    //     })
//     //     }

} catch (e) {
    console.error(e);
} finally {
    await client.close();
}
}


// const mealRequest = () => {
//     const db  = connectToDB()
//     const meals = await db.collection("meals").findMany
// }

//export default connectToDB;

