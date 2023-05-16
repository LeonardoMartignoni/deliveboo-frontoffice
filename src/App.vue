<script>
import Navbar from "./components/Navbar.vue";
import Jumbotron from "./components/Jumbotron.vue";
import OurRestaurants from "./components/OurRestaurants.vue";
import FooterDetails from "./components/FooterDetails.vue";
import MenuLayover from "./components/partials/_MenuLayover.vue";

export default {
  data() {
    return {
      isMenuOn: false,
    };
  },

  components: {
    Navbar,
    Jumbotron,
    OurRestaurants,
    FooterDetails,
    MenuLayover,
  },

  methods: {
    toggleMenu() {
      this.isMenuOn = !this.isMenuOn;
    },
  },
};
</script>

<template>
  <div v-if="isMenuOn">
    <MenuLayover @toggle-menu="toggleMenu()" />
  </div>

  <Navbar class="navbar-component" @toggle-menu="toggleMenu()" />
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

ul {
  li {
    list-style: none;
  }
}

.navbar-component {
  z-index: 10;
}

input[type="text"]:focus {
  outline: 2px solid $primary;
}

.menu-layover {
  background-color: rgba($color: #000000, $alpha: 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;

  .menu-layover-content {
    background-color: white;
    height: 100vh;
  }
}
</style>
