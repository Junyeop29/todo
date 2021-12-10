<template>
  <div class="todoListBox">
    <div class="header">
      <h1 class="title">오늘 할 일</h1>
      <div class="date">12월 9일 목요일</div>
    </div>
    <ul class="content">
      <!-- done:false인 데이터만 -->
      <TodoItem v-for="item in items" :key="item.id" :item="item" />
      <!-- done:true인 데이터만 -->
      <div class="doneList">
        <span class="subTitle">완료됨</span>
        <TodoItem v-for="item in items2" :key="item.id" :item="item" />
      </div>
    </ul>
    <TodoInput />
    {{ paramId }}
  </div>
</template>
<script>
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default {
  components: {
    TodoInput,
    TodoItem,
  },
  computed: {
    paramId() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      items: [
        {
          id: 0,
          content: 'computed',
          done: false,
          importance: true,
          isToday: false,
        },
        {
          id: 1,
          content: 'watch',
          done: false,
          importance: true,
          isToday: false,
        },
        {
          id: 2,
          content: '조건부 렌더링',
          done: false,
          importance: false,
          isToday: false,
        },
      ],
      items2: [
        {
          id: 23,
          content: 'action',
          done: true,
          importance: false,
          isToday: false,
        },
        {
          id: 1424,
          content: 'mutation',
          done: true,
          importance: true,
          isToday: false,
        },
        {
          id: 22535,
          content: 'getter',
          done: true,
          importance: false,
          isToday: false,
        },
      ],
    };
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

.header {
  width: 80%;
  height: 100px;
  border: 1px solid white;
  margin: 40px 0;
  color: white;
  .date {
    padding-left: 10px;
  }
}

.content {
  width: 80%;
  height: calc(100% - 340px);
  margin-bottom: 30px;
  border: 1px solid white;
}

.doneList {
  margin-top: 20px;

  .subTitle {
    display: inline-block;
    padding: 5px;
    background-color: #80808061;
    margin-left: 5px;
    border-radius: 5px;
    color: white;
  }
}
</style>
