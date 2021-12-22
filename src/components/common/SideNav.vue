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
    <div class="categoryBox">
      <h3>Category</h3>
      <ul>
        <li>개인</li>
        <li>프로젝트 개발</li>
        <li>자기계발</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
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

  .categoryBox {
    border-top: 1px solid;

    h3 {
      font-size: 30px;
      padding: 10px;
    }

    ul {
      li {
        font-size: 15px;
        padding: 5px 0;
        padding-left: 15px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
