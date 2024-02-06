import { Client } from "pg";
import { DB_LINK } from "./config";

const client = new Client({
  connectionString : DB_LINK
})

async function createUsersTable() {
  await client.connect()
  const result = await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `)
  console.log(result);
}
createUsersTable();