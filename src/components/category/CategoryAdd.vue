<template>
  <div class="addBox" @click="onClick">
    <div class="content">
      <font-awesome-icon :icon="faPlus" class="icon" />
      <span class="txt"> 새목록 </span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { mapActions } from 'vuex';
import { CATEGORY_ITEM_CREATE, CATEGORY_LIST_READ } from '@/store/modules/category/constants.js';
export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faPlus,
    };
  },
  methods: {
    ...mapActions('category', {
      createCategoryItem: CATEGORY_ITEM_CREATE,
      readCategoryList: CATEGORY_LIST_READ,
    }),
    onClick() {
      this.createCategoryItem({
        content: '새 목록',
        isFix: false,
      });
      this.readCategoryList();
    },
  },
};
</script>

<style lang="scss" scoped>
.addBox {
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: blue;

  &:hover {
    background-color: black;
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
