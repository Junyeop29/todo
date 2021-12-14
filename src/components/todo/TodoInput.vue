<template>
  <footer class="inputBox">
    <span class="icon">
      <font-awesome-icon :icon="faPlus" @click="onAdd" />
    </span>
    <input type="text" placeholder="작업 추가" :value="inputValue" @input="onChange" @keypress.enter="onAdd" />
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { mapActions } from 'vuex';
import { TODO_LIST_READ, TODO_ITEM_CREATE } from '@/store/modules/todo/constants.js';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faPlus,
      inputValue: '',
    };
  },
  methods: {
    ...mapActions('todo', {
      readList: TODO_LIST_READ,
      createItem: TODO_ITEM_CREATE,
    }),
    onChange(e) {
      this.inputValue = e.target.value;
    },
    async onAdd() {
      await this.createItem({
        content: this.inputValue === '' ? '할 일' : this.inputValue,
        categoryId: 'ejfojwefio3jo2',
      });
      await this.readList({
        categoryId: 'ejfojwefio3jo2',
      });
      this.inputValue = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.inputBox {
  width: 80%;
  border: 1px solid white;
  margin-top: auto;
  margin-bottom: 20px;
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    padding: 6px 10px;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.694);
    cursor: pointer;
  }

  input {
    width: 100%;
    font-size: 1.4rem;
    padding: 7px;
    padding-left: 40px;
    background-color: rgb(101, 99, 99);
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.694);
    }
  }
}
</style>
