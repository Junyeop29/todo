<template>
  <div class="alarm">
    <div class="alarm-title">알림</div>
    <div class="alarm-content">
      <div class="date-form">12월 6일 (월요일)</div>
      <div class="time-form">14:00</div>
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
.alarm {
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
