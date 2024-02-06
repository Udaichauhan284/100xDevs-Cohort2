import { Client } from "pg";
import { DB_LINK } from "./config";

const client = new Client({
  connectionString: DB_LINK
})

async function getUser(email: string){
  try {
    await client.connect();
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if(result.rows.length > 0){
      console.log('User found ', result.rows[0]);
      return result.rows[0]; //retrun the user data
    } else {
      console.log("No user found with that email");
      return null;
    }
  }catch(err){
    console.log("Error while fetching user ", err);
    throw err; //rethrow or handle error appropriately
  }finally {
    await client.end();
  }
}
getUser('udai@email.com').catch(console.error);