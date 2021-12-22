<template>
  <div class="file">
    <div class="file-title">첨부</div>
    <div class="file-content">
      <div>그냥 파일.pdf</div>
      <toggle-button v-model="isActive" />
    </div>
  </div>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button';

export default {
  components: {
    ToggleButton,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.file {
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  &-title {
    font-size: 20px;
    width: 90px;
  }

  &-content {
    display: flex;
    & > div {
      border: 1px solid;
      margin-right: 5px;
    }
  }
}
</style>
