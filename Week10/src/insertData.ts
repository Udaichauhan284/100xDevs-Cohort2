import { Client } from "pg";
import { DB_LINK } from "./config";

const client = new Client({
  connectionString : DB_LINK
})

async function insertData(usernmae: string, email: string, password: string){
  try {
    await client.connect();
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [usernmae, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success ", res);
  } catch(err){
    console.log("Error during insertion: ", err);
  }finally{
    await client.end(); //close the client connection
  }
}

//example usage
insertData('udai', 'udai@email.com', 'user_password').catch(console.error);