<template>
  <div class="fixBox">
    <div class="content">
      <span class="icon"><font-awesome-icon :icon="faSun" /></span>
      <span class="txt"> 오늘 할 일 </span>
    </div>
  </div>
  <!-- <div class="fixBox">
    <div class="content">
      <span class="icon"><font-awesome-icon :icon="faStar" /></span>
      <span class="txt"> 중요 </span>
    </div>
  </div> -->
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSun, faStar } from '@fortawesome/free-regular-svg-icons';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faSun,
      faStar,
    };
  },
};
</script>
<style lang="scss" scoped>
.fixBox {
  width: 100%;
  margin-bottom: 20px;
  font-size: 1.3rem;
  padding: 8px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: gray;
    color: white;
  }

  .content {
    width: 85%;
  }
  .txt {
    padding-left: 2px;
  }
}
</style>
