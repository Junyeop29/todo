<template>
  <div id="wrapper">
    <SideNav />
    <router-view />
  </div>
</template>

<script>
import SideNav from '@/components/common/SideNav.vue';

export default {
  components: {
    SideNav,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'thinoo';
  src: url('assets/fonts/thinoothin.otf') format('opentype');
  unicode-range: U+0041-005A, U+0061-007A;
  font-weight: normal;
}

@font-face {
  font-family: 'thinoo';
  src: url('assets/fonts/thinoobold.otf') format('opentype');
  unicode-range: U+0041-005A, U+0061-007A;
  font-weight: bold;
}

@font-face {
  font-family: 'BMJUA';
  src: url('assets/fonts/BMJUA.otf') format('opentype');
  unicode-range: U+AC00-D7A3;
}

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
  font-family: BMJUA, thinoo;
}

input:focus {
  outline: none;
}

ul {
  list-style: none;
}
</style>
