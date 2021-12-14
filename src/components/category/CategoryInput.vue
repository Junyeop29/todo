<template>
  <div class="inputBox">
    <span class="icon">
      <font-awesome-icon :icon="faPlus" @click="onAdd" />
    </span>
    <input type="text" placeholder="새 목록" :value="inputText" @input="onChange" @keypress.enter="onAdd" />
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
      inputText: '',
    };
  },
  methods: {
    ...mapActions('category', {
      createCategoryItem: CATEGORY_ITEM_CREATE,
      readCategoryList: CATEGORY_LIST_READ,
    }),
    onChange(e) {
      this.inputText = e.target.value;
    },
    onAdd() {
      this.createCategoryItem({
        content: this.inputText === '' ? '새 목록' : this.inputText,
        isFix: false,
      });
      this.inputText = '';
      this.readCategoryList();
    },
  },
};
</script>

<style lang="scss" scoped>
.inputBox {
  width: 85%;
  margin-bottom: 20px;
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    padding: 6px;
    font-size: 20px;
    color: gray;
    cursor: pointer;
  }

  input {
    width: 100%;
    font-size: 1.2rem;
    padding: 8px;
    padding-left: 29px;
    border: none;
  }
}
</style>
