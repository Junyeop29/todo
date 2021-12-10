<template>
  <div class="addBox">
    <font-awesome-icon :icon="faPlus" class="icon" />
    <input type="text" placeholder="작업 추가" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faPlus,
    };
  },
};
</script>

<style lang="scss" scoped>
.addBox {
  width: 80%;
  border: 1px solid white;
  margin-top: auto;
  margin-bottom: 20px;
  position: relative;

  .icon {
    position: absolute;
    top: 7px;
    left: 8px;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.694);
    cursor: pointer;
  }

  input {
    width: 100%;
    font-size: 1.4rem;
    padding: 7px;
    padding-left: 38px;
    background-color: rgb(101, 99, 99);
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.694);
    }
  }
}
</style>
