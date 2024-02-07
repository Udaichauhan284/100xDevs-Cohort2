// insert command to insert into the User table using Prisma and Postgres SQL

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname : string){
  const res = await prisma.user.create({
    data : {
      username,
      password,
      firstname,
      lastname
    }
  })
  console.log(res);
}
insertUser('udai1', '123456', 'udai', 'chauhan')