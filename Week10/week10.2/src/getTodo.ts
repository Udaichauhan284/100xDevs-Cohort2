// getting the Todo
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getTodo(userId : number) {
  const todos = await prisma.todo.findMany({
    where : {
      userId : userId,
    },
  });
  console.log(todos)
}
getTodo(1);