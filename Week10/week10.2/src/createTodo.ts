// creating the Todo

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createTodo(userId: number, title: string, description: string){
  const todo = await prisma.todo.create({
    data : {
      title,
      description,
      userId
    }
  });
  console.log(todo);
}
createTodo(1, "Go To Gym", "Go to Gtm at 7:00pm");