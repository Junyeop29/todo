<template>
  <div class="categoryBox">
    <div class="fix">
      <Search />
      <CategroyItem v-for="item in items" :key="item.id" :item="item" />
    </div>
    <div class="create">
      <CategroyItem v-for="item in items2" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Search from './Search.vue';
import CategroyItem from './CategoryItem.vue';
import { faSun, faStar } from '@fortawesome/free-regular-svg-icons';

export default {
  components: {
    Search,
    CategroyItem,
  },
  data() {
    return {
      items: [
        {
          id: 'today',
          content: '오늘 할 일',
          isFix: true,
          icon: faSun,
        },
        {
          id: 'importance',
          content: '중요',
          isFix: true,
          icon: faStar,
        },
      ],
      items2: [
        {
          id: 'asdfwef',
          content: '프로젝트 개발',
          isFix: false,
        },
        {
          id: 'we23rr2',
          content: '운동',
          isFix: false,
        },
        {
          id: 'gfmfk',
          content: '독서',
          isFix: false,
        },
      ],
    };
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
}
</style>
