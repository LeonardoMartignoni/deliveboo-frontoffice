<script>
import Navbar from "./components/Navbar.vue";
import Jumbotron from "./components/Jumbotron.vue";
import OurRestaurants from "./components/OurRestaurants.vue";
import FooterDetails from "./components/FooterDetails.vue";

export default {
  data() {
    return {
      // title: "Hello World",
    };
  },

  components: {
    Navbar,
    Jumbotron,
    OurRestaurants,
    FooterDetails,
  },
};
</script>

<template>
  <Navbar class="navbar-component" />
  <Jumbotron />
  <main>
    <OurRestaurants />
  </main>
  <footer>
    <FooterDetails />
  </footer>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&display=swap");
@import "./styles/partials/variables";

::selection {
  background-color: #ff8e32;
}

body {
  font-family: "IBM Plex Sans", sans-serif;
}

.navbar-component {
  z-index: 100;
}

input[type="text"]:focus {
  outline: 2px solid $primary;
}
</style>
