<template>
    <div>
      <h1>Todo List</h1>
      <div class="input-group">
        <input v-model="newTodo" @keyup.enter="addNewTodo" placeholder="Tambahkan tugas baru" />&nbsp;&nbsp;
        <button @click="addNewTodo">
          <i class="fas fa-plus"></i> <!-- Icon untuk tombol Add -->
        </button>
      </div>
      <div class="summary">
        <p>Total tugas: {{ totalCount }}</p>
        <p>Total tugas belum selesai: {{ belumCount }}</p>
        <p>Total tugas selesai: {{ selesaiCount }}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kegiatan</th>
            <th>Tanggal</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todos" :key="index">
            <td>{{ index + 1 }}</td>
            <td :class="{ done: todo.done }">{{ todo.text }}</td>
            <td>{{ todo.date }}</td>
            <td>
              <input type="checkbox" :checked="todo.done" @change="toggleTodoStatus(index)" />
              {{ todo.done ? 'Selesai' : 'Belum Selesai' }}
            </td>
            <td>
              <button @click="removeTodoItem(index)">
                <i class="fas fa-trash-alt"></i> <!-- Icon untuk tombol Remove -->
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useTodoStore } from '../stores/todoStore'
  
  export default {
    setup() {
      const todoStore = useTodoStore()
      const newTodo = ref('')
  
      const addNewTodo = () => {
        if (newTodo.value.trim()) {
          todoStore.addTodo(newTodo.value)
          newTodo.value = ''
        }
      }
  
      const removeTodoItem = (index) => {
        todoStore.removeTodo(index)
      }
  
      const toggleTodoStatus = (index) => {
        todoStore.toggleTodo(index)
      }
  
      const belumCount = computed(() => todoStore.belumCount)
      const selesaiCount = computed(() => todoStore.selesaiCount)
      const totalCount = computed(() => todoStore.totalCount)
  
      return {
        newTodo,
        todos: todoStore.todos,
        addNewTodo,
        removeTodoItem,
        toggleTodoStatus,
        belumCount,
        selesaiCount,
        totalCount
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: whitesmoke;
    text-align: center;
  }
  .done {
    text-decoration: line-through;
    color: red;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  th, td {
    padding: 15px;
    border: 1px solid #ddd;
    text-align: center;
  }
  th {
    background-color: #007bff5b;
    color: white;
    font-weight: 500;
  }
  tbody tr:nth-child(odd) {
    background-color: #f9f9f95c;
  }
  tbody tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.447);
  }
  tbody tr:hover {
    background-color: #f1f1f184;
  }
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .input-group button {
    padding: 5px 20px;
    border: none;
    border-radius: 4px;
    background-color: #00c42a;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  .input-group button:hover {
    background-color: #00891e;
    transform: scale(1.05);
  }
  input[type="text"] {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  input[type="text"]:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  .summary {
    margin-top: 20px;
    padding: 10px;
    background-color: #f9f9f92b;
    border: 1px solid rgba(221, 221, 221, 0.34);
    color: whitesmoke;
    border-radius: 4px;
    text-align: center;
  }
  </style>
  