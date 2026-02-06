import { Router } from "express";
import  {TodoController } from "../controller/todo.controller.js";

const route = Router();

route.get('/todos',TodoController.getTodos);
route.get('/todos/:id',TodoController.viewTodo);
route.post('/todos',TodoController.createTodo);
route.patch('/todos/:id',TodoController.toggleTodo);
route.delete('/todos/:id',TodoController.deleteTodo);

export default route;