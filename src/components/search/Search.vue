<template>
  <div class="search">
    <font-awesome-icon :icon="faSearch" class="icon" />
    <input type="text" placeholder="검색" />
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faSearch,
    };
  },
};
</script>
<style lang="scss" scoped>
.search {
  width: 85%;
  margin-bottom: 20px;
  position: relative;

  .icon {
    position: absolute;
    top: 6px;
    left: 5px;
    font-size: 20px;
    color: gray;
  }
  input {
    width: 100%;
    font-size: 1.2rem;
    padding: 4px;
    padding-left: 29px;
  }
}
</style>
