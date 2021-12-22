<template>
  <div class="date">
    <div class="date-title">날짜</div>
    <div class="date-content">
      <div class="form-box">
        <div class="date-form">12월 6일 (월요일)</div>
        <div class="time-form">14:00</div>
        <div>~</div>
        <div class="time-form">16:00</div>
      </div>
      <!-- <div class="date-form">12월 6일 (월요일)</div>
              <div>~</div>
              <div class="date-form">12월 7일 (화요일)</div> -->

      <div class="setup">
        <span class="title">시간설정</span>
        <toggle-button v-model="isTimeActive" />
      </div>
      <div class="setup">
        <span class="title">기간설정</span>
        <toggle-button v-model="isTermActive" />
      </div>
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
      isTimeActive: false,
      isTermActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.date {
  display: flex;
  margin-bottom: 30px;

  &-title {
    font-size: 20px;
    width: 90px;
  }

  &-content {
    display: flex;
    flex-direction: column;

    .form-box {
      display: flex;

      & > div {
        border: 1px solid;
        margin-right: 5px;
      }
    }

    .setup {
      margin-top: 10px;
      .title {
        margin-right: 10px;
      }
    }
  }
}
</style>
