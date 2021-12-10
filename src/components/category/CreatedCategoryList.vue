<template>
  <div>
    <div class="createdBox">
      <span class="txt"><font-awesome-icon :icon="faList" />프로젝트 개발</span>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faList,
    };
  },
};
</script>
<style lang="scss" scoped>
.createdBox {
  width: 100%;
  margin-bottom: 20px;
  font-size: 1.2rem;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  cursor: pointer;

  :first-child {
    margin-top: 30px;
  }

  .txt {
    width: 85%;
  }
}
</style>
