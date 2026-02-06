import { db } from '../config/db.config.js';
import  { Todo }  from '../model/todo.model.js';

export const TodoRepository = {
  async findAll() {
    const [rows] = await db.query(
      'SELECT * FROM todos ORDER BY id DESC'
    );
    return rows.map(row => new Todo(row));
  },

  async findById(id) {
    const [rows] = await db.query(
      'SELECT * FROM todos WHERE id = ?',
      [id]
    );
    return rows[0] ? new Todo(rows[0]) : null;
  },

  async create(title) {
    const [result] = await db.query(
      'INSERT INTO todos (title) VALUES (?)',
      [title]
    );

    return new Todo({
      id: result.insertId,
      title,
      completed: false
    });
  },

  async toggle(id) {
    const [result] = await db.query(
      'UPDATE todos SET completed = !completed WHERE id = ?',
      [id]
    );
    return result.affectedRows;
  },

  async delete(id) {
    const [result] = await db.query(
      'DELETE FROM todos WHERE id = ?',
      [id]
    );
    return result.affectedRows;
  }
};
