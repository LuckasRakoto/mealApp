import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
const {MongoClient} = require('mongodb');
import { dbConnectionStr } from "../config";
import {IMeal} from "../classes/meals"

async function getMeal(meal: IMeal) {
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

    const Meal: object = await db.collection("Meals").findOne({name: meal.name})
    
    return Meal

} catch (e) {
    console.error(e);
} finally {
    await client.close();
}
}

export default getMeal