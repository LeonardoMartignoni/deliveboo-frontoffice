<script>
import axios from "axios";
import { store } from "../store/store";

export default {
  data() {
    return {
      store,

      formData: {
        restaurant_id: localStorage.getItem("restaurant_id"),
        customer_name: "",
        customer_surname: "",
        customer_address: "",
        customer_mail: "",
        customer_phone_number: "",
        note: "",
        dishes_id: localStorage.getItem("dishes_id"),
        quantity: localStorage.getItem("quantity"),
      },
    };
  },

  methods: {
    submitForm() {
      axios.post("http://127.0.0.1:8000/api/order", this.formData);
    },

    removeItemFromCart(index) {
      this.store.dishesId.splice(index, 1);
      this.store.dishesQuantity.splice(index, 1);
      this.store.cartItems.splice(index, 1);
      localStorage.setItem("dishes_id", JSON.stringify(this.store.dishesId));
      localStorage.setItem("quantity", JSON.stringify(this.store.dishesQuantity));
      localStorage.setItem("cartItems", JSON.stringify(this.store.cartItems));
    },
  },

  mounted() {
    this.store.isCartOpen = false;

    var button = document.querySelector("#submit-button");

    braintree.dropin.create(
      {
        authorization: "sandbox_pg55c8z5_bbhn9fzx5pnfp46z",
        selector: "#dropin-container",
      },
      function (err, instance) {
        button.addEventListener("click", function () {
          instance.requestPaymentMethod(function (err, payload) {
            // Submit payload.nonce to your server
          });
        });
      }
    );
  },
};
</script>

<template>
  <div id="checkout" class="my-5">
    <div class="container">
      <h2 class="fs-1">Checkout</h2>

      <div class="row mt-5 gx-4">
        <!-- Box prodotti nel carrello -->
        <div class="col-6">
          <div class="form-content border p-4 h-100 rounded-3">
            <h3>Il tuo ordine</h3>

            <div class="order-items-content d-flex flex-column">
              <div v-for="(item, index) in store.cartItems" class="card mb-3">
                <div class="row">
                  <div class="col-md-4">
                    <img :src="item.itemImage" class="rounded-start" alt="image" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body d-flex align-items-center h-100 ps-0">
                      <div class="card-details">
                        <h5 class="card-title m-0">{{ item.itemName }}</h5>
                        <p class="card-text">Quantità: {{ item.itemQuantity }}</p>
                      </div>

                      <!-- Item remove from cart -->
                      <button class="btn border-0 ms-auto" @click="removeItemFromCart(index)">
                        <i class="bi bi-trash3"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Box form dati utente -->
        <div class="col-6">
          <div class="form-content border p-4 rounded-3">
            <h3>Inserisci i dati per la consegna</h3>
            <form method="POST" @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="customer_name" class="form-label">Nome</label>
                <input type="text" class="form-control" id="customer_name" v-model="formData.customer_name" />
              </div>
              <div class="mb-3">
                <label for="customer_surname" class="form-label">Cognome</label>
                <input type="text" class="form-control" id="customer_surname" v-model="formData.customer_surname" />
              </div>
              <div class="mb-3">
                <label for="customer_address" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" id="customer_address" v-model="formData.customer_address" />
              </div>
              <div class="mb-3">
                <label for="customer_mail" class="form-label">Email</label>
                <input type="email" class="form-control" id="customer_mail" v-model="formData.customer_mail" />
              </div>
              <div class="mb-3">
                <label for="customer_phone_number" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="customer_phone_number" v-model="formData.customer_phone_number" maxlength="11" />
              </div>
              <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <textarea type="text" class="form-control" id="note" rows="3" v-model="formData.note"></textarea>
              </div>

              <button type="submit" class="btn btn-primary w-100 rounded-pill text-white">Invia l'ordine</button>
            </form>
          </div>
        </div>

        <!-- Box Pagamento -->
        <div class="col-12">
          <div id="dropin-container"></div>
          <button id="submit-button" class="button button--small button--green">Purchase</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";

img {
  width: 100%;
  height: 80px;
  object-fit: cover;
}

.order-items-content {
  overflow-x: hidden;
  max-height: 500px;
}

.card-text {
  font-size: 0.9rem;
}

.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}
</style>
