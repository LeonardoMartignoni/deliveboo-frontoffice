<script>
import { store } from "../store/store";

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
  <div class="container position-relative">
    <nav class="navbar navbar-expand-lg bg-body-tertiary position-absolute w-100 start-0">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img src="/images/logo-white.svg" alt="Bootstrap" class="img-fluid" />
        </router-link>
        <button class="btn border-0 d-block d-lg-none" @click="$emit('toggle-menu')">
          <i class="bi bi-list fs-1 text-white"></i>
        </button>
        <div class="collapse navbar-collapse flex-grow-0">
          <ul class="list-group d-flex flex-row gap-3">
            <li>
              <a href="http://127.0.0.1:8000/login" class="btn btn-light rounded-pill px-4">Accedi</a>
            </li>
            <li>
              <a href="http://127.0.0.1:8000/register" class="btn btn-light rounded-pill px-4">Registrati</a>
            </li>
            <li class="position-relative">
              <button class="btn btn-light rounded-pill px-4" @click="store.isCartOpen = !store.isCartOpen">
                <i class="bi bi-cart2"></i>
              </button>
              <!-- Quantity badge -->
              <div v-if="totalItemAmount > 0" class="quantity-badge badge rounded-pill bg-primary">
                {{ totalItemAmount }}
              </div>

              <!-- Cart details -->
              <Transition>
                <div v-if="store.isCartOpen" class="cart-details position-absolute rounded-3">
                  <h6 class="fw-bold p-3 m-0">Carrello</h6>
                  <hr class="m-0" />

                  <div v-if="store.cartItems.length > 0" class="p-3">
                    <div class="cart-items-list">
                      <div v-for="(item, index) in store.cartItems" class="cart-item d-flex">
                        <!-- Item image -->
                        <img :src="item.itemImage" class="cart-image img-fluid" />

                        <!-- Item details -->
                        <div class="cart-product-details d-flex flex-column ms-2">
                          <span class="d-block fw-bold">{{ item.itemName }}</span>

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

                    <!-- Checkout button -->
                    <router-link :to="{ name: 'checkout' }" class="btn btn-primary text-white w-100 rounded-pill mt-3">Checkout: €{{ totalPrice.toFixed(2).replace(".", ",") }}</router-link>
                  </div>

                  <div v-else class="cart-empty text-center p-3">
                    <span>Carrello vuoto</span>
                  </div>
                </div>
              </Transition>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";

.navbar-brand > img {
  height: $nav-height;
}

.cart-details {
  width: 400px;
  min-height: 100px;
  top: 80%;
  right: 0;
  background-color: white;
  box-shadow: 0 0px 50px -12px rgba($color: #000000, $alpha: 0.25);

  .cart-items-list {
    max-height: 350px;
    overflow: auto;
  }

  .cart-image {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
  }

  .cart-item {
    margin-bottom: 1rem;
  }
}

.quantity-badge {
  border: 2px solid white;
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 1.5rem;
  padding: 2px;
}

// Transition
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
