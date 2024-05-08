import { PrismaClient } from '@prisma/client'
import { truncate } from 'fs';
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string, email:string) {
  const res = await prisma.user.create({
    data:{
      username,
      password,
      firstname: firstName,
      lastname: lastName,
      email
    }
  })
  console.log(res);
}
async function createTodo(userId: number, title: string, description: string) {
  const res = await prisma.todos.create({
    data: {
      title,
      description,
      user_id: userId,
    }
  })
  console.log(res);
  
}
async function getTodos(userId: number, ) {
  const res = await prisma.todos.findMany({
    where: {
      user_id: userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      user: true
    }
  })
  console.log(res);
  
}

getTodos(1);
// createTodo(1, "go to gym", "go to gym and do 10 pushups"); 

// insertUser("kuchbhimingwal", "123456", "shhubham","mingwal","shuh@gmailcom");