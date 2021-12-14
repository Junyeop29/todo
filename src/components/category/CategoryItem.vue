<template>
  <div class="fixBox" @click="onClick">
    <div class="content">
      <font-awesome-icon v-if="item.isFix" :icon="item.icon" />
      <font-awesome-icon v-else :icon="faList" />
      <span class="txt"> {{ item.content }} </span>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        id: '',
        content: '',
        isFix: false,
        icon: null,
      }),
    },
  },
  data() {
    return {
      faList,
    };
  },
  methods: {
    onClick() {
      this.$router.push(this.item.id);
    },
  },
};
</script>
<style lang="scss" scoped>
.fixBox {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    margin-top: 20px;
  }

  &:hover {
    background-color: gray;
    color: white;
  }

  .content {
    width: 85%;
    font-size: 1.3rem;
    padding: 8px;
  }
  .txt {
    padding-left: 2px;
  }
}
</style>
