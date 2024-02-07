// update the data in database
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface UpdateParams {
  firstname : string;
  lastname : string;
}

async function updateUser(username : string, {firstname, lastname}: UpdateParams){
  const res = await prisma.user.update({
    where : {username},
    data : {
      firstname,
      lastname
    }
  });
  console.log(res);
}
updateUser("udai1", {
  firstname : "udai-new",
  lastname : "chauhan"
})