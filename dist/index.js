"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstname: firstName,
                lastname: lastName,
                email
            }
        });
        console.log(res);
    });
}
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todos.create({
            data: {
                title,
                description,
                user_id: userId,
            }
        });
        console.log(res);
    });
}
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todos.findMany({
            where: {
                user_id: userId,
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(res);
    });
}
getTodos(1);
// createTodo(1, "go to gym", "go to gym and do 10 pushups"); 
// insertUser("kuchbhimingwal", "123456", "shhubham","mingwal","shuh@gmailcom");
