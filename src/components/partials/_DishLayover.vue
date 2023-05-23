<script>
import { store } from "../../store/store";

export default {
  data() {
    return {
      store,

      dishCounter: 1,
    };
  },

  methods: {
    closeDishLayover() {
      this.store.isDishLayoverOn = false;
    },

    increaseDishCounter() {
      this.dishCounter += 1;
    },

    decreaseDishCounter() {
      this.dishCounter -= 1;
      if (this.dishCounter <= 1) this.dishCounter = 1;
    },

    addItemToCart() {
      this.store.cartItems.push({
        itemID: this.store.currentDish.id,
        itemImage: this.store.currentDish.photo,
        itemName: this.store.currentDish.name,
        itemPrice: this.store.currentDish.price,
        itemQuantity: this.dishCounter,
        itemTotalPrice: parseFloat((this.store.currentDish.price * this.dishCounter).toFixed(2)),
      });

      // LocalStorage
      this.store.dishesId.push(this.store.currentDish.id);
      this.store.dishesQuantity.push(this.dishCounter);
      localStorage.setItem("dishes_id", JSON.stringify(this.store.dishesId));
      localStorage.setItem("quantity", JSON.stringify(this.store.dishesQuantity));

      // Badge quantity
      store.quantityBadge += this.dishCounter;

      // Then open cart
      this.store.isCartOpen = true;
      this.store.isDishLayoverOn = false;
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
              <div class="dish-layover-content position-relative h-100">
                <!-- Close button -->
                <div class="position-absolute w-100 d-flex" @click="closeDishLayover()">
                  <button class="btn border-0 ms-auto close-button rounded-circle m-2">
                    <i class="bi bi-x-lg fs-4 text-primary"></i>
                  </button>
                </div>
                <img class="dish-photo w-100" :src="store.currentDish.photo" />

                <!-- Dish details -->
                <div class="dish-details p-3">
                  <!-- Description -->
                  <h3>Descrizione</h3>
                  <p>{{ store.currentDish.description }}</p>

                  <!-- Quantity and cart -->
                  <div class="buttons-cart d-flex flex-column flex-lg-row gap-3">
                    <div class="d-flex justify-content-between align-items-center w-100 rounded-pill quantity-button">
                      <button id="quantity-decrease" class="btn p-0 py-1 py-lg-0 border-0" @click="decreaseDishCounter()">
                        <i class="bi bi-dash-lg text-primary px-3"></i>
                      </button>
                      <span>{{ dishCounter }}</span>
                      <button id="quantity-increase" class="btn p-0 py-1 py-lg-0 border-0" @click="increaseDishCounter()">
                        <i class="bi bi-plus-lg text-primary px-3"></i>
                      </button>
                    </div>
                    <button class="btn btn-primary rounded-pill text-white w-100" @click="addItemToCart()">Aggiungi per €{{ (store.currentDish.price * dishCounter).toFixed(2).replace(".", ",") }}</button>
                  </div>
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
