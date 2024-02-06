import { Client } from "pg";
import { DB_LINK } from "./config";

const client = new Client({
  connectionString: DB_LINK
})

async function insertUserAndAddress(username:string, email:string, password: string, city: string, country: string, street: string, pincode: string){

  try {
    await client.connect();
    await client.query("BEGIN");

    //insert user
    const insertUserText = `
    INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
    const userRes = await client.query(insertUserText, [username, email, password]);
    const userId = userRes.rows[0].id;

    //insert address
    const insertAddressText = `
      INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);
    `;
    await client.query(insertAddressText, [userId, city, country, street, pincode]);

    await client.query('COMMIT');
    console.log("User and address inserted successfully");
  }catch(err) {
    await client.query('ROLLBACK');
    console.error("Error during transaction, rollback ", err);
    throw err;
  }finally{
    await client.end();
  }
}
insertUserAndAddress(
  'John Doe',
  'John@example.com',
  "securepassword",
  "New York",
  "USA",
  "123 Brooklen",
  "12001"
);