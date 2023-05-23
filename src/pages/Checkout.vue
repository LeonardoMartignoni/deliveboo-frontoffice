<script>
import axios from "axios";
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },

  mounted() {
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

      <div class="row mt-5">
        <!-- Box prodotti nel carrello -->
        <div class="col-6 border p-3">
          <h3>Il tuo Ordine</h3>

          <div v-for="item in store.cartItems" class="card mb-3">
            <div class="row">
              <div class="col-md-4">
                <img :src="item.itemImage" class="rounded-start" alt="image" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.itemName }}</h5>
                  <p class="card-text">Pezzi: {{ item.itemQuantity }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Box form dati utente -->
        <div class="col-6 border p-3">
          <h3>Inserisci i dati per la consegna</h3>
          <form>
            <div class="mb-3">
              <label for="customerName" class="form-label">Nome</label>
              <input type="text" class="form-control" id="customerName" />
            </div>
            <div class="mb-3">
              <label for="customerSurname" class="form-label">Cognome</label>
              <input type="text" class="form-control" id="customerSurname" />
            </div>
            <div class="mb-3">
              <label for="customerAddress" class="form-label">Indirizzo</label>
              <input type="text" class="form-control" id="customerAddress" />
            </div>
            <div class="mb-3">
              <label for="customerEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="customerEmail" />
            </div>
            <div class="mb-3">
              <label for="customerAddress" class="form-label">Indirizzo</label>
              <input type="text" class="form-control" id="customerAddress" />
            </div>
            <div class="mb-3">
              <label for="customerPhone" class="form-label">Telefono</label>
              <input type="text" class="form-control" id="customerPhone" maxlength="11" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
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
  width: 100px;
  height: 100px;
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
  -webkit-appearance: none;
  -moz-appearance: none;
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
