<template>
  <div class="categoryBox">
    <div class="top">
      <Search />
      <FixCategoryList />
    </div>
    <div class="bottom">
      <CreatedCategoryList />
    </div>
  </div>
</template>

<script>
import Search from './Search';
import FixCategoryList from './FixCategoryList';
import CreatedCategoryList from './CreatedCategoryList';

export default {
  components: {
    Search,
    FixCategoryList,
    CreatedCategoryList,
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

  .top {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid;
  }

  .bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
