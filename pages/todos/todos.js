// Get the global app instance
const app = getApp();

Page({
  // Declare page data
  data: {},
  // Listening lifecycle callback onLoad
  onLoad() {
    // Get user information and store data
    app.getUserInfo().then(
      user => {
        this.setData({
          user,
        });
      },
      () => {
        // Failed to get user information
      }
    );
  },
  // Listening lifecycle callback onShow
  onShow() {
    // Set global data to current page data
    this.setData({ todos: app.todos });
  },
  // Event handler
  onTodoChanged(e) {
    // Modify global data
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    }));
    this.setData({ todos: app.todos });
  },

  addTodo() {
    // Make a page jump
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
});
