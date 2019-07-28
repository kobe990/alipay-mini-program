// Get the global app instance
const app = getApp();

Page({
  // Declare page data
  data: {},
  // Listening lifecycle callback onLoad
  onLoad() {
  },
  // Listening lifecycle callback onShow
  onShow() {
    // Set global data to current page data
    this.setData({ todos: app.todos });
  },
  // Event handler
  onTodoChanged(e) {
    const index = e.currentTarget.dataset['index'];
    app.todos[index].completed = !app.todos[index].completed;
    this.setData({ todos: app.todos });
  },

  addTodo() {
    // Make a page jump
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
});
