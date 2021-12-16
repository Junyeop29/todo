<template>
  <div id="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

input:focus {
  outline: none;
}

ul {
  list-style: none;
}
</style>
