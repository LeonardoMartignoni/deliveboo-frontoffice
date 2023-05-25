<script>
import { store } from "./store/store";

import Navbar from "./components/Navbar.vue";
import Jumbotron from "./components/Jumbotron.vue";
import OurRestaurants from "./pages/OurRestaurants.vue";
import FooterDetails from "./components/FooterDetails.vue";
import MenuLayover from "./components/partials/_MenuLayover.vue";
import DishLayover from "./components/partials/_DishLayover.vue";
import CartRemoveLayover from "./components/partials/_CartRemoveLayover.vue";
import MobileCart from "./components/partials/_MobileCart.vue";

export default {
  data() {
    return {
      store,
      isMenuOn: false,
      jumbotronPicPath: store.jumbotronPicPath,
    };
  },

  components: {
    Navbar,
    Jumbotron,
    OurRestaurants,
    FooterDetails,
    MenuLayover,
    DishLayover,
    CartRemoveLayover,
    MobileCart,
  },

  methods: {
    toggleMenu() {
      this.isMenuOn = !this.isMenuOn;
    },

    changeJumbotronPic(data) {
      this.jumbotronPicPath = data;
    },

    selectDish(dish) {
      this.store.currentDish = dish;
      this.store.isDishLayoverOn = true;
      this.store.isCartOpen = false;
    },
  },

  watch: {
    $route(to, from) {
      this.jumbotronPicPath = "/images/jumbotron-overlay.png";
      this.store.jumbotronTitle = this.store.jumbotronDefaultTitle;
      this.store.isDishLayoverOn = false;
    },
  },

  created() {
    if (localStorage.getItem("cartItems") != null) {
      const storageCartitems = localStorage.getItem("cartItems");
      this.store.cartItems = JSON.parse(storageCartitems);
    }
    if (localStorage.getItem("dishes_id") != null) {
      const storageDishesId = localStorage.getItem("dishes_id");
      this.store.dishesId = JSON.parse(storageDishesId);
    }
    if (localStorage.getItem("quantity") != null) {
      const storageDishesQuantity = localStorage.getItem("quantity");
      this.store.dishesQuantity = JSON.parse(storageDishesQuantity);
    }
    if (localStorage.getItem("restaurant_id") != null) {
      const storageRestaurantId = localStorage.getItem("restaurant_id");
      this.store.currentRestaurantId = storageRestaurantId;
    }
  },
};
</script>

<template>
  <MenuLayover v-if="isMenuOn" @toggle-menu="toggleMenu()" />
  <DishLayover v-if="store.isDishLayoverOn" />
  <CartRemoveLayover v-if="store.isCartRemoveLayoverOn" />

  <MobileCart />

  <Navbar class="navbar-component" @toggle-menu="toggleMenu()" />
  <Jumbotron :jumbotronPicPath="jumbotronPicPath" :title="store.jumbotronTitle" />
  <main>
    <router-view @change-jumbotron-pic="changeJumbotronPic" @select-dish="selectDish"> </router-view>
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
  z-index: 1;
}

input[type="text"]:focus {
  outline: 2px solid $primary;
}
</style>
