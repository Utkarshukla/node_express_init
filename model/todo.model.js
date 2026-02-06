export class Todo {
  constructor({ id, title, completed, createdAt }) {
    this.id = id;
    this.title = title;
    this.completed = Boolean(completed);
    this.createdAt = createdAt;
  }
}