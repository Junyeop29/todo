<template>
  <nav>
    <h1>Dear.</h1>
    <ul class="menuBox">
      <li>User</li>
      <li>Today</li>
      <li>Todo</li>
      <li>Calendar</li>
      <li>Search</li>
    </ul>
    <Category />
  </nav>
</template>

<script>
import Category from '@/components/category/Category.vue';
export default {
  components: {
    Category,
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 20%;
  height: 100%;
  background-color: #f4f4f4;
  border-right: 1px solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > * {
    width: 100%;
  }

  h1 {
    font-size: 70px;
    padding: 20px;
  }

  .menuBox {
    li {
      font-size: 25px;
      font-weight: bold;
      padding: 10px 18px;
      margin-bottom: 30px;
      transition: 0.7s;

      &:hover {
        background: gray;
        color: white;
      }
    }
  }
}
</style>
