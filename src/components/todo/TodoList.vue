<template>
  <ul class="listBox">
    <!-- done:false인 데이터만 -->
    <TodoItem v-for="item in todoList" :key="item.id" :item="item" />
    <div class="doneList">
      <span class="subTitle">완료됨</span>
      <!-- done:true인 데이터만 -->
      <TodoItem v-for="item in todoListDone" :key="item.id" :item="item" />
    </div>
  </ul>
</template>

<script>
import TodoItem from './TodoItem';
import { mapGetters, mapActions } from 'vuex';
import { TODO_LIST, TODO_SUCCESS, TODO_FAILURE, TODO_LIST_READ } from '@/store/modules/todo/constants.js';

export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters('todo', {
      TODO_LIST,
      TODO_SUCCESS,
      TODO_FAILURE,
    }),
    todoList() {
      if (this.TODO_LIST === undefined || this.TODO_LIST === null) return null;
      return this.TODO_LIST.filter(ele => ele.done === false);
    },
    todoListDone() {
      if (this.TODO_LIST === undefined || this.TODO_LIST === null) return null;
      return this.TODO_LIST.filter(ele => ele.done === true);
    },
  },
  methods: {
    ...mapActions('todo', {
      readList: TODO_LIST_READ,
    }),
  },
  created() {
    this.readList({ categoryId: 'ejfojwefio3jo2' });
  },
};
</script>

<style lang="scss" scoped>
.listBox {
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
