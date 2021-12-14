<template>
  <li class="itemBox">
    <span class="done" @click="onToggle">
      <font-awesome-icon v-if="item.done" :icon="faCheckCircle" />
      <font-awesome-icon v-else :icon="faCircle" />
    </span>
    <span class="content" :class="{ through: item.done }">
      {{ item.content }}
    </span>
    <span class="importance">
      <font-awesome-icon v-if="item.importance" :icon="faStar" />
      <font-awesome-icon v-else :icon="farStar" />
    </span>
  </li>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { mapActions } from 'vuex';
import { TODO_LIST_READ, TODO_ITEM_TOGGLE } from '@/store/modules/todo/constants.js';

export default {
  components: {
    FontAwesomeIcon,
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
      faStar,
      farStar,
    };
  },
  methods: {
    ...mapActions('todo', {
      readList: TODO_LIST_READ,
      toggleItem: TODO_ITEM_TOGGLE,
    }),
    async onToggle() {
      await this.toggleItem({
        id: this.item.id,
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
    width: 86%;
    justify-content: flex-start;
  }
  .content.through {
    text-decoration: line-through;
    color: gray;
  }
  .importance {
    width: 7%;
    font-size: 1.2rem;
    color: gray;
  }
}
</style>
