<template>
  <div class="category">
    <div class="category-title">카테고리</div>
    <select v-model="selectedCategory">
      <option v-for="{ value, text } in options" :key="value" :value="value">
        {{ text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: 'A',
      options: [
        { text: '개인', value: 'A' },
        { text: '프로젝트 개발', value: 'B' },
        { text: '자기계발', value: 'C' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  &-title {
    font-size: 20px;
    width: 90px;
  }

  select {
    width: 200px;
    font-family: inherit;
    font-size: 15px;
    padding: 5px;
  }
}
</style>
