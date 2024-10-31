import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  const user = await prisma.user.update({
    where: { email },
    data: { firstName, lastName },
    select: { firstName: true },
  });
  console.log(user);
}
async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });
  console.log(user);
}
updateUser("aman@gmail.com", { firstName: "harsh", lastName: "satyawanii" });
getUser("aman@gmail.com");
