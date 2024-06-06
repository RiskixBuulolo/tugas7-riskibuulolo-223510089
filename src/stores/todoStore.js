import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(todo) {
      const date = new Date().toLocaleDateString()
      this.todos.push({ text: todo, date, done: false })
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done
    }
  },
  getters: {
    belumCount: (state) => {
      return state.todos.filter(todo => !todo.done).length
    },
    selesaiCount: (state) => {
      return state.todos.filter(todo => todo.done).length
    },
    totalCount: (state) => {
      return state.todos.length
    }
  }
})
