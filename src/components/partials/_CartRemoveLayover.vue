<script>
import { store } from "../../store/store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    resetCart() {
      localStorage.removeItem("dishes_id");
      localStorage.removeItem("quantity");
      localStorage.removeItem("restaurant_id");
      localStorage.removeItem("cartItems");
      this.store.cartItems = [];
      this.store.dishesId = [];
      this.store.dishesQuantity = [];

      localStorage.setItem("restaurant_id", this.store.currentRestaurantId);
      this.store.isCartRemoveLayoverOn = false;
    },

    goToHome() {
      this.$router.push({ name: "home" });
      this.store.isCartRemoveLayoverOn = false;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row dish-layover-row position-fixed top-0 end-0 bottom-0 start-0">
      <div class="col-12">
        <div class="dish-layover-container h-100 d-flex justify-content-center flex-column">
          <div class="row w-100">
            <div class="col-5 offset-3 align-items-center">
              <div class="dish-layover-content position-relative h-100 p-3">
                <h3>Attenzione</h3>
                <p>Stai per ordinare da un altro ristorante. Vuoi svuotare il carrello?</p>
                <div class="buttons d-flex gap-2">
                  <button class="btn btn-outline-dark w-50 rounded-pill" @click="goToHome()">Torna alla home</button>
                  <button class="btn btn-primary w-50 text-white rounded-pill" @click="resetCart()">Svuota il carrello</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/partials/variables";

.dish-layover-row {
  background-color: rgba($color: #000000, $alpha: 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;

  .dish-layover-content {
    max-height: 70vh;
    background-color: white;
    box-shadow: 0 0px 50px -10px rgba($color: #000000, $alpha: 0.25);
    z-index: 150;

    .close-button {
      background-color: white;
      box-shadow: 0 0px 50px -10px rgba($color: #000000, $alpha: 0.5);
    }

    .dish-photo {
      height: 230px;
      object-fit: cover;
    }

    .quantity-button {
      border: 1px solid $primary;
      color: $primary;
    }
  }
}
</style>
