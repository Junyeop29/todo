<template>
  <nav class="categoryBox">
    <div class="fix">
      <Search />
      <CategoryItem v-for="item in CATEGORY_FIX_LIST" :key="item.id" :item="item" />
    </div>
    <div class="create">
      <CategoryItem v-for="item in CATEGORY_LIST" :key="item.id" :item="item" />
    </div>
    <footer class="input">
      <CategoryInput />
    </footer>
  </nav>
</template>

<script>
import Search from './Search.vue';
import CategoryItem from './CategoryItem.vue';
import CategoryInput from './CategoryInput.vue';
import { mapGetters, mapActions } from 'vuex';
import {
  CATEGORY_FIX_LIST,
  CATEGORY_LIST,
  // CATEGORY_ITEM_CREATE,
  CATEGORY_LIST_READ,
  // CATEGORY_ITEM_UPDATE,
  // CATEGORY_ITEM_DELETE,
} from '@/store/modules/category/constants.js';

export default {
  components: {
    Search,
    CategoryItem,
    CategoryInput,
  },
  computed: {
    ...mapGetters('category', {
      CATEGORY_FIX_LIST,
      CATEGORY_LIST,
    }),
  },
  methods: {
    ...mapActions('category', {
      // createCategoryItem: CATEGORY_ITEM_CREATE,
      readCategoryList: CATEGORY_LIST_READ,
      // updateCategoryItem: CATEGORY_ITEM_UPDATE,
      // deleteCategoryItem: CATEGORY_ITEM_DELETE,
    }),
  },
  created() {
    this.readCategoryList();
  },
};
</script>

<style lang="scss" scoped>
.categoryBox {
  width: 20%;
  height: 100%;
  background-color: #f4f4f4;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .fix {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid;
  }

  .create {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
