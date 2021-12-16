<template>
  <input type="text" :value="value" @input="onChange" @keypress.enter="onEnter" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    onEnter: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
