<template>
    <div>
      <h1>Home</h1>
      <TodoList />
    </div>
  </template>
  
  <script>
  import TodoList from '../components/TodoList.vue'
  
  export default {
    components: {
      TodoList
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: #007bff;
    margin-bottom: 20px;
  }
  </style>
  