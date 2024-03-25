<template>
  <div class="task-item">
    <h3>{{ task.name }}</h3>
    <p>{{ task.description }}</p>
    <p>Deadline: {{ task.deadline }}</p>
    <button @click="viewDetails">View Details</button>
    <button @click="removeTask">Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    viewDetails() {
      // Implement view details functionality
    },
    removeTask() {
      // Implement remove task functionality
    }
  }
};
</script>

<style scoped>
.task-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
