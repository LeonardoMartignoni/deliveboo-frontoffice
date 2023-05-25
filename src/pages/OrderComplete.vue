<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    returnToHome() {
      this.$router.push({ name: "home" });
    },

    resetCart() {
      localStorage.removeItem("dishes_id");
      localStorage.removeItem("quantity");
      localStorage.removeItem("restaurant_id");
      localStorage.removeItem("cartItems");
      this.store.cartItems = [];
      this.store.dishesId = [];
      this.store.dishesQuantity = [];
    },
  },

  mounted() {
    this.resetCart();
    setTimeout(this.returnToHome, 5000);
  },
};
</script>

<template>
  <div id="confirmed_order" class="my-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="confirmation-content d-inline-block">
            <h2>Ordine confermato! <i class="bi bi-check-circle-fill text-primary"></i></h2>

            <span class="d-block mt-4">Stai per essere riportato alla pagina principale.</span>
            <span>Se la pagina non si carica, <router-link :to="{ name: 'home' }">clicca qui</router-link>.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";
</style>
