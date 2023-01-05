import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
const {MongoClient} = require('mongodb');
import { dbConnectionStr } from "../config";

async function loadUser() {
  const client = new MongoClient(dbConnectionStr)
  const { user, isLoading } = useAuth0();
  try {
    await client.connect();
    const db = client.db("Foodapp")
    if (!user) {
        return null
    }
    if (isLoading) {
        return <div>Loading ...</div>;
     }
    
    // const profile  =  await db.collection("Profiles").findOne({userID: user.id})
    // if (profile == null) {
    //     db.collection("Profiles").insertOne({
    //         _id:user.id,
    //         name: user.name
    //     })
    //     }

} catch (e) {
    console.error(e);
} finally {
    await client.close();
}
}




// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   return (
//     isAuthenticated && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );
// };



