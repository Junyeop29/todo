<template>
  <div class="category-box">
    <CategoryTitle />
    <ul>
      <CaegoryItem v-for="item in CATEGORY_LIST" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { CATEGORY_LIST, CATEGORY_LIST_READ } from '@/store/modules/category/constants.js';
import CategoryTitle from './CategoryTitle.vue';
import CaegoryItem from './CategoryItem.vue';

export default {
  components: {
    CategoryTitle,
    CaegoryItem,
  },
  computed: {
    ...mapGetters('category', {
      CATEGORY_LIST,
    }),
  },
  methods: {
    ...mapActions('category', {
      readList: CATEGORY_LIST_READ,
    }),
  },
  created() {
    this.readList();
  },
};
</script>

<style lang="scss" scoped>
.category-box {
  border-top: 1px solid;
}
</style>
