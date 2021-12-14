<template>
  <section class="todoListBox">
    <TodoDate />
    <TodoList />
    <TodoInput />
  </section>
</template>

<script>
import TodoDate from '@/components/todo/TodoDate.vue';
import TodoList from '@/components/todo/TodoList.vue';
import TodoInput from '@/components/todo/TodoInput.vue';

export default {
  components: {
    TodoDate,
    TodoList,
    TodoInput,
  },
};
</script>

<style lang="scss" scoped>
.todoListBox {
  width: 80%;
  height: 100%;
  background-color: #47838b8c;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
