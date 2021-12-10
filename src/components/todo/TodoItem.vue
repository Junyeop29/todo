<template>
  <li class="itemBox">
    <span class="done">
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
};
</script>
<style lang="scss" scoped>
.itemBox {
  background-color: white;
  padding: 10px 0;
  margin-top: 10px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  > span {
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
