import { Client } from "pg";
import { DB_LINK } from "./config";

const client = new Client({
  connectionString : DB_LINK
})

async function getUserDetailsWithAddress(userId : string){
  try {
    await client.connect();
    const joinQuery = `
      SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode FROM users u JOIN addresses a ON u.id = a.user_id WHERE u.id = $1
    `;
    const result = await client.query(joinQuery, [userId]);

    if(result.rows.length > 0){
      console.log("User adn address found: ", result.rows[0]);
      return result.rows[0];
    }else{
      console.log("No user or address found with the givern id ");
      return null;
    }
  } catch(err){
    console.log("No user or address found with the given ID");
    throw err;
  } finally {
    await client.end();
  }
}
getUserDetailsWithAddress("1");