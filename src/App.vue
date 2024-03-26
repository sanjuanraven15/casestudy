<template>
  <div id="app">
    <h1 style="color: green;">TASK MANAGEMENT</h1>
    <hr style="border-color: green;">
    <div class="input-container">
      <button class="add-button" @click="showTaskForm = true" style="background-color: green; color: white;">Add New
        Task</button>
    </div>
    <div v-if="showTaskForm" class="task-form" style="border-color: green;">
      <h2 style="color: green;">Add New Task</h2>
      <label style="color: green;">Task Name:</label>
      <input type="text" placeholder="Enter Task Name" v-model="taskName" style="border-color: green;">
      <label style="color: green;">Task Description:</label>
      <input type="text" placeholder="Enter Task Description" v-model="taskDescription" style="border-color: green;">
      <label style="color: green;">Deadline:</label>
      <input type="date" v-model="deadline" style="border-color: green;">
      <label style="color: green;">Remarks:</label>
      <select v-model="remarks" style="border-color: green;">
        <option value="priority">Priority</option>
        <option value="pending">Pending</option>
      </select>
      <br>
      <button @click="addTask" style="background-color: green; color: white;">Add Task</button> |
      <button @click="closeTaskForm" class="close-button" style="color: white; background-color: black;">Close</button>
    </div>
    <nav>
      <router-link to="/" class="router-link">Priority Tasks ({{ priorityTasks.length }})</router-link> |
      <router-link to="/pending" class="router-link">Pending Tasks ({{ pendingTasks.length }})</router-link> |
      <router-link to="/completed" class="router-link">Completed Tasks ({{ completedTasks.length }})</router-link>
    </nav>
    <router-view :priorityTasks="priorityTasks" :pendingTasks="pendingTasks" :completedTasks="completedTasks" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTaskForm: false,
      taskName: '',
      taskDescription: '',
      deadline: '',
      remarks: 'priority',
      priorityTasks: [],
      pendingTasks: [],
      completedTasks: []
    };
  },
  methods: {
    addTask() {
      if (!this.taskName || !this.taskDescription || !this.deadline) {
        alert('Please fill in all fields before adding the task.');
        return;
      }

      const newTask = {
        name: this.taskName,
        description: this.taskDescription,
        deadline: this.deadline
      };

      switch (this.remarks) {
        case 'priority':
          this.priorityTasks.push(newTask);
          break;
        case 'pending':
          this.pendingTasks.push(newTask);
          break;
        case 'completed':
          this.completedTasks.push(newTask);
          break;
        default:
          break;
      }

      this.taskName = '';
      this.taskDescription = '';
      this.deadline = '';
      this.showTaskForm = false;
    },
    closeTaskForm() {
      this.showTaskForm = false;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

.add-button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;
  width: 300px;
}

.add-button:hover {
  background-color: black;
}

.task-form {
  margin-top: 20px;
  border: 1px solid green;
  padding: 20px;
  border-radius: 5px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.task-form label {
  display: block;
  margin-bottom: 5px;
}

.task-form input,
.task-form select {
  width: 400px;
  padding: 8px;
  margin-bottom: 10px;
  border-color: green;
}

.task-form button {
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.task-form button:hover {
  background-color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: green;
  text-decoration: none;
  font-size: 25px;
}

nav a.router-link-active {
  color: black;
}

.router-link {
  margin-right: 10px;
  color: green;
}

.router-link:hover {
  color: black;
}

.router-link-exact-active {
  color: green;
}

.router-link-exact-active:hover {
  color: black;
}
</style>