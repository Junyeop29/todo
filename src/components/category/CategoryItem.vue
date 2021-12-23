<template>
  <li>
    <BaseInput v-if="item.isTemp" v-model="inputValue" :onEnter="onAdd" placeholder="새 카테고리" v-focus />
    <BaseInput v-else v-model="inputValue" :onEnter="onEdit" />
    <span @click="onRemove" class="remove">
      <font-awesome-icon :icon="faTrashAlt" />
    </span>
  </li>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import BaseInput from '@/components/common/BaseInput.vue';
import { mapActions } from 'vuex';
import {
  CATEGORY_ITEM_CREATE,
  CATEGORY_ITEM_UPDATE,
  CATEGORY_LIST_READ,
  CATEGORY_ITEM_DELETE,
  CATEGORY_ITEM_TEMP_DELETE,
} from '@/store/modules/category/constants.js';

export default {
  components: {
    FontAwesomeIcon,
    BaseInput,
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        id: '',
        content: '',
      }),
    },
  },
  data() {
    return {
      faTrashAlt,
      inputValue: this.item.content,
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  methods: {
    ...mapActions('category', {
      createItem: CATEGORY_ITEM_CREATE,
      readList: CATEGORY_LIST_READ,
      updateItem: CATEGORY_ITEM_UPDATE,
      deleteItem: CATEGORY_ITEM_DELETE,
      deleteTempItem: CATEGORY_ITEM_TEMP_DELETE,
    }),
    async onAdd() {
      if (this.inputValue === '') {
        alert('입력하세요!');
        return;
      }
      await this.createItem({ content: this.inputValue });
      await this.readList();
    },
    async onEdit(e) {
      e.target.blur();
      await this.updateItem({
        id: this.item.id,
        content: this.inputValue,
      });
      await this.readList();
    },
    async onRemove() {
      if (this.item.isTemp) {
        this.deleteTempItem({ id: this.item.id });
        return;
      }

      await this.deleteItem({
        id: this.item.id,
      });
      await this.readList();
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  font-size: 15px;
  padding: 5px 0;
  padding-left: 15px;
  margin-bottom: 5px;

  display: flex;
  align-items: center;

  input {
    background: none;
    border: none;
    font-size: 18px;
    padding: 5px;
    width: 70%;

    &:focus {
      border: 1px solid;
    }
  }

  &:hover {
    .remove {
      display: block;
    }
  }
  .remove {
    display: none;
    margin-left: auto;
    margin-right: 10px;
    padding: 5px;
    font-size: 15px;
    cursor: pointer;
  }
}
</style>
