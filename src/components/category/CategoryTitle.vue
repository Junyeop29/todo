<template>
  <div class="category-title">
    <h3>Category</h3>
    <span class="add" @click="onAdd">
      <font-awesome-icon :icon="faPlus" />
    </span>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CATEGORY_ITEM_TEMP_CREATE } from '@/store/modules/category/constants.js';
import { mapActions } from 'vuex';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faPlus,
      tempId: 'ThisisatemporaryID',
    };
  },
  methods: {
    ...mapActions('category', {
      createTempItem: CATEGORY_ITEM_TEMP_CREATE,
    }),
    onAdd() {
      this.createTempItem({
        id: this.tempId,
        content: '',
        isTemp: true,
      });
      this.tempId += 'temp';
    },
  },
};
</script>

<style lang="scss" scoped>
.category-title {
  display: flex;
  align-items: center;

  h3 {
    font-size: 30px;
    padding: 10px;
  }

  .add {
    margin-left: auto;
    margin-right: 10px;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
  }
}
</style>
