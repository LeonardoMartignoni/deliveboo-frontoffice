<script>
import { store } from "../../store/store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    removeItemFromCart(index) {
      this.store.dishesId.splice(index, 1);
      this.store.dishesQuantity.splice(index, 1);
      this.store.cartItems.splice(index, 1);
      localStorage.setItem("dishes_id", JSON.stringify(this.store.dishesId));
      localStorage.setItem("quantity", JSON.stringify(this.store.dishesQuantity));
      localStorage.setItem("cartItems", JSON.stringify(this.store.cartItems));
    },
  },

  computed: {
    totalItemAmount() {
      let totalItems = 0;

      this.store.cartItems.forEach((item) => {
        totalItems += item.itemQuantity;
      });

      return totalItems;
    },

    totalPrice() {
      let totalPrice = 0;

      this.store.cartItems.forEach((item) => {
        totalPrice += item.itemPrice * item.itemQuantity;
      });

      return totalPrice;
    },
  },
};
</script>

<template>
  <div class="d-block d-lg-none">
    <!-- Close button -->
    <button @click="store.isCartOpen = true" class="cart-mobile-button position-fixed m-4 rounded-circle">
      <i class="bi bi-cart2 fs-4"></i>

      <!-- Quantity badge -->
      <div v-if="totalItemAmount > 0" class="quantity-badge rounded-pill">
        <span>{{ totalItemAmount }}</span>
      </div>
    </button>

    <div v-if="store.isCartOpen" class="menu-layover position-fixed top-0 end-0 bottom-0 start-0">
      <div class="row">
        <div class="col-2 col-sm-3 col-md-5" @click="store.isCartOpen = false"></div>
        <div class="col-10 col-sm-9 col-md-7">
          <div class="menu-layover-content p-4 d-flex flex-column">
            <button class="close-cart-button btn border-0 ps-0 text-start" @click="store.isCartOpen = false">
              <i class="bi bi-x-lg fs-1 text-primary"></i>
            </button>

            <h2 class="mt-2 mb-0 fw-bold">Carrello</h2>

            <hr />

            <div v-if="store.cartItems.length > 0" class="cart-item-container d-flex flex-column flex-grow-1">
              <div class="cart-items-list mb-3">
                <div v-for="(item, index) in store.cartItems" class="cart-item d-flex align-items-center">
                  <!-- Item image -->
                  <img :src="item.itemImage" class="cart-image img-fluid" />

                  <!-- Item details -->
                  <div class="cart-product-details d-flex flex-column ms-3">
                    <h5 class="d-block mb-0 fw-bold">{{ item.itemName }}</h5>

                    <!-- Item prices -->
                    <div class="cart-product-prices d-flex">
                      <span>€{{ item.itemPrice.toFixed(2).replace(".", ",") }} x {{ item.itemQuantity }}</span>
                      <span class="ms-2 text-primary fw-bold"> €{{ item.itemTotalPrice.toFixed(2).replace(".", ",") }}</span>
                    </div>
                  </div>

                  <!-- Item remove from cart -->
                  <button class="btn border-0 ms-auto" @click="removeItemFromCart(index)">
                    <i class="bi bi-trash3"></i>
                  </button>
                </div>
              </div>

              <div class="mt-auto">
                <!-- Checkout button -->
                <router-link :to="{ name: 'checkout' }" class="btn btn-primary text-white w-100 rounded-pill">Checkout: €{{ totalPrice.toFixed(2).replace(".", ",") }}</router-link>
              </div>
            </div>

            <div v-else class="cart-empty text-center p-3">
              <span>Carrello vuoto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/partials/variables";

.menu-layover {
  background-color: rgba($color: #000000, $alpha: 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;

  .menu-layover-content {
    background-color: white;
    height: 100vh;
  }

  .btn-outline-primary {
    &:hover {
      color: white;
    }
  }
}

.cart-item-container {
  overflow: auto;
}

.cart-items-list {
  // max-height: 80vh;
  overflow: auto;
}

.cart-image {
  width: 4.5rem;
  height: 4.5rem;
  object-fit: cover;
}

.cart-item:not(:last-child) {
  margin-bottom: 1rem;
}

.cart-mobile-button {
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 3.5rem;
  height: 3.5rem;
  background-color: white;
  border: 1.5px solid $primary;
  box-shadow: 0 0px 20px 3px rgba($color: #000000, $alpha: 0.25);
}

.close-cart-button {
  width: fit-content;
}

.quantity-badge {
  position: absolute;
  border: 1.5px solid $primary;
  background-color: white;
  top: -8px;
  right: -8px;
  min-width: 1.5rem;
  font-size: 0.8rem;
}
</style>
