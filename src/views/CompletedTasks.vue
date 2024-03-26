<template>
  <div class="completed-tasks">
    <div v-for="task in completedTasks" :key="task.name" class="task-item">
      <div class="task-name">{{ task.name }}</div>
      <div class="task-description">{{ task.description }}</div>
      <div class="task-deadline">{{ task.deadline }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    completedTasks: {
      type: Array,
      default: () => []
    }
  }
};
</script>