import { TodoRepository } from '../repository/todo.repository.js';

export const TodoService = {
  async getTodos() {
    return await TodoRepository.findAll();
  },

  async createTodo(title) {
    if (!title || title.trim() === '') {
      throw new Error('Title is required');
    }
    return await TodoRepository.create(title);
  },

  async toggleTodo(id) {
    const updated = await TodoRepository.toggle(id);
    if (!updated) return null;

    return await TodoRepository.findById(id);
  },

  async deleteTodo(id) {
    return (await TodoRepository.delete(id)) > 0;
  }
};
