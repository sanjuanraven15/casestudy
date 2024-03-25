<template>
  <div id="app">
    <h1>TASK MANAGEMENT</h1>
    <hr>
    <div class="input-container">
      <button class="add-button" @click="showTaskForm = true">Add New Task</button>
    </div>
    <div v-if="showTaskForm" class="task-form">
      <h2>Add New Task</h2>
      <label>Task Name:</label>
      <input type="text" placeholder="Enter Task Name" v-model="taskName">
      <label>Task Description:</label>
      <input type="text" placeholder="Enter Task Description" v-model="taskDescription">
      <label>Deadline:</label>
      <input type="date" v-model="deadline">
      <label>Remarks:</label>
      <select v-model="remarks">
        <option value="priority">Priority</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <br>
      <button @click="addTask">Add Task</button> | 
      <button @click="closeTaskForm" class="close-button">Close</button> <!-- Close button -->
    </div>
    <nav>
      <router-link to="/" class="router-link">Priority Tasks</router-link> |
      <router-link to="/pending" class="router-link">Pending Tasks</router-link> |
      <router-link to="/completed" class="router-link">Completed Tasks</router-link>
    </nav>
    <router-view />
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
      remarks: 'priority'
    };
  },
  methods: {
    addTask() {
      // Here you can handle adding the task
      // For demonstration purposes, let's just log the task details
      console.log("Task Name:", this.taskName);
      console.log("Task Description:", this.taskDescription);
      console.log("Deadline:", this.deadline);
      console.log("Remarks:", this.remarks);

      // Reset form fields
      this.taskName = '';
      this.taskDescription = '';
      this.deadline = '';
      this.remarks = 'priority';

      // Hide task form
      this.showTaskForm = false;
    },
    closeTaskForm() {
      // Close task form
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
  color: #2c3e50;
}

.add-button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;
  width: 300px;
}

.add-button:hover {
  background-color: #2a7a5d;
}

.task-form {
  margin-top: 20px;
  border: 1px solid #ccc;
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
}

.task-form button {
  padding: 10px 20px;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.task-form button:hover {
  background-color: #2a7a5d;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 25px;
  /* Remove underline */
}

/* Style active router link */
nav a.router-link-exact-active {
  color: #42b983;
}

/* Style router links */
.router-link {
  margin-right: 10px;
  color: #2c3e50;
}

/* Hover effect */
.router-link:hover {
  color: #42b983;
  /* Change color on hover */
}
</style>
