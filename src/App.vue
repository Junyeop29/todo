<template>
  <div id="wrapper">
    <CategoryList />
    <TodoList />
  </div>
</template>

<script>
import CategoryList from './components/category/CategoryList';
import TodoList from './components/todo/TodoList';

export default {
  components: {
    CategoryList,
    TodoList,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

input:focus {
  outline: none;
}

ul {
  list-style: none;
}
</style>
