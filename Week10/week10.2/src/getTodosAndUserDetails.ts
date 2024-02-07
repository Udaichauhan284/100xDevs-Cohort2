// get Todos and user Details using Joins , because we already set the Relationship among them in Data Mmodel Schema Prisma - One to Many

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getTodoAndUserDetails(userId: number) {
  const todos = await prisma.todo.findMany({
    where : {
      userId : userId,
    },
    select : {
      user: true,
      title: true,
      description : true
    }
  });
  console.log(todos);
}
getTodoAndUserDetails(1);