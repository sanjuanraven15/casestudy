<template>
  <div class="priority-tasks">
    <div v-for="task in priorityTasks" :key="task.name" class="task-item">  
      <div class="task-details">
        <div class="task-header">
          <div class="task-name">{{ task.name }}</div>
          <div class="task-deadline"><b>{{ task.deadline }}</b></div>
        </div>
        <button @click="toggleDetails(task)" class="view-detail-button">{{ task.showDetails ? 'Hide Detail' : 'View Detail' }}</button>
        <div v-if="task.showDetails" class="task-info">
          <div v-if="!task.isEditing">
            <div class="task-description">{{ task.description }}</div>
            <div class="task-actions">
              <button @click="startEditing(task)" class="update-button">Edit</button>
              <button @click="markAsDone(task)" class="done-button">Mark as Done</button>
              <button @click="deleteTask(task)" class="delete-button">Delete</button>
            </div>
          </div>
          <div v-else>
            <div class="edit-fields">
              <input type="text" v-model="task.tempName" class="edit-input" placeholder="Title" required />
              <input type="date" v-model="task.tempDeadline" class="edit-input" placeholder="Deadline" required />
              <textarea v-model="task.tempDescription" class="edit-textarea" placeholder="Task Description" required></textarea>
            </div>
            <div class="task-actions">
              <button @click="updateTask(task)" class="update-button">Update</button>
              <button @click="cancelEditing(task)" class="delete-button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    priorityTasks: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateTask(task) {
      task.name = task.tempName;
      task.deadline = task.tempDeadline;
      task.description = task.tempDescription;
      console.log('Update task:', task);
      this.$emit('update-task', task);
      task.isEditing = false;
    },
    markAsDone(task) {
      console.log('Mark as done:', task);
      this.$emit('mark-done', task);
    },
    deleteTask(task) {
      console.log('Delete task:', task);
    },
    toggleDetails(task) {
      task.showDetails = !task.showDetails;
    },
    startEditing(task) {
      task.tempName = task.name;
      task.tempDeadline = task.deadline;
      task.tempDescription = task.description;
      task.isEditing = true;
    },
    cancelEditing(task) {
      task.isEditing = false;
    }
  }
};
</script>

<style scoped>
.priority-tasks {
  max-width: 600px;
  margin: 0 auto;
}

.task-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.task-details {
  display: flex;
  flex-direction: column;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-name {
  font-size: 24px;
  font-weight: bold;
}

.task-deadline {
  font-size: 16px;
  color: #dd4b39;
}

.view-detail-button {
  padding: 6px 12px;
  margin-top: 8px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease;
}

.view-detail-button:hover {
  background-color: #0056b3;
}

.task-info {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.task-description {
  font-size: 18px;
  margin-bottom: 10px;
  word-wrap: break-word;
}

.task-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.update-button,
.delete-button,
.done-button {
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;
}

.update-button {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.update-button:hover {
  background-color: #0056b3;
}

.delete-button {
  background-color: #dc3545;
  color: #fff;
  border: none;
}

.delete-button:hover {
  background-color: #c82333;
}

.done-button {
  background-color: #28a745;
  color: #fff;
  border: none;
}

.done-button:hover {
  background-color: #218838;
}

.edit-fields {
  margin-bottom: 20px;
}

.edit-input,
.edit-textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.edit-textarea {
  resize: vertical;
  min-height: 100px;
}
</style>