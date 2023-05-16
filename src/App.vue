<script>
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {
      // title: "Hello World",
    };
  },

  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400;500;600;700&display=swap");

* {
  border: 1px solid green;
}

body {
  font-family: "IBM Plex Sans", sans-serif;
  background-color: black; //debug
}
</style>
