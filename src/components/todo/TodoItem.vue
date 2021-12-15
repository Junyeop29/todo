<template>
  <li class="itemBox">
    <span class="done" @click="onToggle">
      <font-awesome-icon v-if="item.done" :icon="faCheckCircle" />
      <font-awesome-icon v-else :icon="faCircle" />
    </span>
    <span class="content" :class="{ through: item.done }">
      <BaseInput class="input" v-model="inputValue" :placeholder="'작업 추가'" :onEnter="onEdit" />
    </span>
    <span class="etc">
      <span @click="onRemove">
        <font-awesome-icon :icon="faTrashAlt" />
      </span>
      <span>
        <font-awesome-icon :icon="faEllipsisV" />
      </span>
    </span>
  </li>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheckCircle, faEllipsisV, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { mapActions } from 'vuex';
import { TODO_LIST_READ, TODO_ITEM_TOGGLE, TODO_ITEM_UPDATE, TODO_ITEM_DELETE } from '@/store/modules/todo/constants.js';
import BaseInput from '@/components/common/BaseInput.vue';

export default {
  components: {
    FontAwesomeIcon,
    BaseInput,
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        id: 0,
        content: '',
        done: false,
        importance: false,
        isToday: false,
      }),
    },
  },
  data() {
    return {
      faCircle,
      faCheckCircle,
      faEllipsisV,
      faTrashAlt,
      inputValue: this.item.content,
    };
  },
  methods: {
    ...mapActions('todo', {
      readList: TODO_LIST_READ,
      toggleItem: TODO_ITEM_TOGGLE,
      updateItem: TODO_ITEM_UPDATE,
      deleteItem: TODO_ITEM_DELETE,
    }),
    async onEdit(e) {
      e.target.blur();
      await this.updateItem({
        id: this.item.id,
        content: this.inputValue,
      });
      await this.readList({
        categoryId: 'ejfojwefio3jo2',
      });
    },
    async onRemove() {
      await this.deleteItem({
        id: this.item.id,
      });
      await this.readList({
        categoryId: 'ejfojwefio3jo2',
      });
    },
    async onToggle() {
      await this.toggleItem({
        id: this.item.id,
        done: this.item.done,
      });
      await this.readList({
        categoryId: 'ejfojwefio3jo2',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
svg {
  pointer-events: none;
}

.itemBox {
  background-color: white;
  padding: 10px 0;
  margin-top: 10px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .done {
    width: 7%;
    text-align: center;
    font-size: 1.4rem;
    color: gray;
    cursor: pointer;
  }

  .content {
    width: 83%;
    justify-content: flex-start;

    .input {
      width: 100%;
      border: none;
      font-size: 1.2rem;
    }
  }
  .content.through {
    text-decoration: line-through;
    color: gray;
  }

  .etc {
    width: 10%;

    & > span {
      padding: 5px;
      cursor: pointer;
      font-size: 1.2rem;
      color: gray;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
