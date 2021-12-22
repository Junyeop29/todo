<template>
  <section>
    <div class="date">{{ dateStr }}</div>
    <div class="todoBox">
      <div class="title">
        <h2>Todo</h2>
        <span class="plus">
          <font-awesome-icon :icon="faPlus" />
        </span>
      </div>
      <ul></ul>
    </div>
    <div class="eventBox">
      <div class="title">
        <h2>Event</h2>
        <span class="plus">
          <font-awesome-icon :icon="faPlus" />
        </span>
      </div>
      <ul></ul>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { changeDateStr } from '@/lib/util.js';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faPlus,
      dateStr: changeDateStr(new Date()),
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.date {
  font-size: 40px;
  margin: 20px 0;
  padding-left: 20px;
}
.todoBox,
.eventBox {
  margin-bottom: 50px;

  .title {
    display: flex;
    align-items: center;
    width: 100%;
    background: rgb(232, 232, 232);

    h2 {
      font-size: 30px;
      padding-left: 10px;
    }

    .plus {
      font-size: 25px;
      margin-left: auto;
      margin-right: 20px;
      padding: 10px;
    }
  }

  ul {
    height: 300px;
    border: 1px solid;
  }
}
</style>
