import { TodoService } from '../service/todo.service.js';

export const TodoController = {
    async getTodos(req, res, next) {
        try {
            const todos = await TodoService.getTodos();
            res.json(todos);
        } catch (err) {
            next(err);
        }
    },

    async viewTodo(req, res) {
        try {
            const id = req.params.id;
            const todo = await TodoService.viewTodo(id);
            res.json(todo);
            
        } catch (error) {
            return res.json(error.message);
        }
    },

    async createTodo(req, res, next) {
        try {
            const { title } = req.body;
            const todo = await TodoService.createTodo(title);
            res.status(201).json(todo);
        } catch (err) {
            next(err);
        }
    },

    async toggleTodo(req, res, next) {
        try {
            const id = Number(req.params.id);
            const todo = await TodoService.toggleTodo(id);

            if (!todo) {
                return res.status(404).json({ message: 'Todo not found' });
            }

            res.json(todo);
        } catch (err) {
            next(err);
        }
    },

    async deleteTodo(req, res, next) {
        try {
            const id = Number(req.params.id);
            const success = await TodoService.deleteTodo(id);

            if (!success) {
                return res.status(404).json({ message: 'Todo not found' });
            }

            res.json({ message: 'Todo deleted' });
        } catch (err) {
            next(err);
        }
    }
};
