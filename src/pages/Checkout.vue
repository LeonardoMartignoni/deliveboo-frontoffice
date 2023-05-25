<script>
import axios from "axios";
import { store } from "../store/store";

export default {
  data() {
    return {
      store,

      errors: [],

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
        nonce: "",
      },

      isLoading: false,
    };
  },

  methods: {
    submitForm() {
      axios
        .post("http://127.0.0.1:8000/api/order", this.formData)
        .then((response) => {
          this.errors = [];
          this.$router.push({ name: "order-complete" });
          this.isLoading = false;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.isLoading = false;
        });
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

  computed: {
    totalPrice() {
      let totalPrice = 0;

      this.store.cartItems.forEach((item) => {
        totalPrice += item.itemPrice * item.itemQuantity;
      });

      return totalPrice;
    },
  },

  mounted() {
    this.store.isCartOpen = false;

    var button = document.querySelector("#submit-button");

    braintree.dropin.create(
      {
        authorization: "sandbox_kt4pfddf_7dzbnc5wqqzwztpw",
        selector: "#dropin-container",
      },
      (err, instance) => {
        button.addEventListener("click", () => {
          this.isLoading = true;
          instance.requestPaymentMethod((err, payload) => {
            if (err) {
              // Gestisci l'errore durante la richiesta del metodo di pagamento
              console.error(err);
              this.isLoading = false;
              return;
            }
            // Aggiungi il campo 'nonce' al formData
            this.formData.nonce = payload.nonce;

            // Invia i dati dell'ordine al server
            this.submitForm();
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
      <div class="row mt-2 gx-4 gy-4 gy-lg-0">
        <!-- Box prodotti nel carrello -->
        <div class="col-12 col-lg-6">
          <div class="form-content border h-100 rounded-3 d-flex flex-column">
            <div class="form-title p-3">
              <h3 class="m-0 fw-bold">Il tuo ordine</h3>
            </div>

            <hr class="m-0" />

            <div v-if="store.cartItems.length" class="order-items-content d-flex flex-column p-3 gap-3">
              <div v-for="(item, index) in store.cartItems" class="card">
                <div class="row card-row">
                  <div class="col-4 h-100">
                    <img :src="item.itemImage" class="rounded-start" alt="image" />
                  </div>
                  <div class="col-8 h-100 ps-0">
                    <div class="card-body d-flex align-items-center h-100 ps-0">
                      <div class="card-details">
                        <h5 class="card-title m-0">{{ item.itemName }}</h5>
                        <p class="card-text m-0">Quantità: {{ item.itemQuantity }}</p>
                        <span class="text-primary fw-bold me-2 d-block d-sm-none">€{{ item.itemTotalPrice.toFixed(2).replace(".", ",") }}</span>
                      </div>

                      <div class="item-price-delete d-flex align-items-center ms-auto">
                        <span class="text-primary fw-bold me-2 d-none d-sm-block">€{{ item.itemTotalPrice.toFixed(2).replace(".", ",") }}</span>

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

            <div v-else class="p-3">
              <p class="m-0">Nessun prodotto nel carrello.</p>
            </div>

            <hr class="m-0 mt-auto" />

            <h3 class="text-end mb-0 p-3 fw-regular">
              Totale: <span class="text-primary fw-bold">€{{ totalPrice }}</span>
            </h3>
          </div>
        </div>

        <!-- Box form dati utente -->
        <div class="col-12 col-lg-6 position-relative">
          <div v-if="isLoading" class="driver-loader position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-start">
            <img src="/images/loading-delivery.gif" alt="Loading" />
          </div>

          <div class="form-content border rounded-3">
            <div class="form-title p-3">
              <h3 class="m-0 fw-bold">Inserisci i dati per la consegna</h3>
            </div>

            <hr class="m-0" />

            <form class="p-3" method="POST" @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="customer_name" class="form-label">Nome</label>
                <input type="text" class="form-control" :class="errors.customer_name ? 'is-invalid' : ''" id="customer_name" v-model="formData.customer_name" />
                <div v-if="errors.customer_name" class="invalid-feedback">
                  {{ errors.customer_name[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="customer_surname" class="form-label">Cognome</label>
                <input type="text" class="form-control" :class="errors.customer_surname ? 'is-invalid' : ''" id="customer_surname" v-model="formData.customer_surname" />
                <div v-if="errors.customer_surname" class="invalid-feedback">
                  {{ errors.customer_surname[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="customer_address" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" :class="errors.customer_address ? 'is-invalid' : ''" id="customer_address" v-model="formData.customer_address" />
                <div v-if="errors.customer_address" class="invalid-feedback">
                  {{ errors.customer_address[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="customer_mail" class="form-label">Email</label>
                <input type="email" class="form-control" :class="errors.customer_mail ? 'is-invalid' : ''" id="customer_mail" v-model="formData.customer_mail" />
                <div v-if="errors.customer_mail" class="invalid-feedback">
                  {{ errors.customer_mail[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="customer_phone_number" class="form-label">Telefono</label>
                <input type="text" class="form-control" :class="errors.customer_phone_number ? 'is-invalid' : ''" id="customer_phone_number" v-model="formData.customer_phone_number" maxlength="11" />
                <div v-if="errors.customer_phone_number" class="invalid-feedback">
                  {{ errors.customer_phone_number[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <textarea type="text" class="form-control" :class="errors.note ? 'is-invalid' : ''" id="note" rows="3" v-model="formData.note"></textarea>
                <div v-if="errors.note" class="invalid-feedback">
                  {{ errors.note[0] }}
                </div>
              </div>

              <div id="dropin-container"></div>
              <button id="submit-button" type="submit" class="btn btn-primary w-100 rounded-pill text-white">Invia l'ordine</button>
            </form>
          </div>
        </div>

        <!-- Box Pagamento -->
        <!-- <div class="col-12">
          <div id="dropin-container"></div>
          <button id="submit-button" class="button button--small button--green">Purchase</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";

.driver-loader {
  padding: inherit;
  background-color: rgba($color: #ffffff, $alpha: 1);
  z-index: 100;
  & > img {
    object-fit: contain;
    width: 50%;
  }
}

img {
  width: 100%;
  min-height: 80px;
  height: 100%;
  object-fit: cover;
}

.order-items-content {
  .card-row {
    height: 80px;
  }
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
