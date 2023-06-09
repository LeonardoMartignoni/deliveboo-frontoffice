<script>
import axios from "axios";
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
      restaurant: {},
      restaurantPic: null,

      isLoading: false,
    };
  },

  methods: {
    changeJumbotron() {
      this.$emit("change-jumbotron-pic", this.restaurantPic);
    },

    emitDish(dish) {
      this.$emit("select-dish", dish);
    },
  },

  created() {
    this.isLoading = true;

    axios.get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`).then((response) => {
      this.restaurant = response.data.results;
      this.store.currentRestaurantId = this.restaurant.id;
      this.restaurantPic = this.restaurant.photo;
      this.store.jumbotronTitle = this.restaurant.name;
      this.store.jumbotronRestaurantDescription = this.restaurant.description;
      this.changeJumbotron();

      if (!localStorage.getItem("restaurant_id")) {
        localStorage.setItem("restaurant_id", this.store.currentRestaurantId);
      } else if (this.store.currentRestaurantId != localStorage.getItem("restaurant_id") && this.store.cartItems.length > 0) {
        this.store.isCartRemoveLayoverOn = true;
      } else {
        this.store.isCartRemoveLayoverOn = false;
        localStorage.setItem("restaurant_id", this.store.currentRestaurantId);
      }
      this.isLoading = false;
    });
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="row mt-5">
      <div class="col-12 position-relative data-col">
        <div v-if="isLoading" class="driver-loader position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-start">
          <img src="/images/loading-delivery.gif" alt="Loading" />
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4">
          <div v-for="dish in restaurant.dishes" class="col">
            <button @click="emitDish(dish)" class="btn text-start p-0 border border-1 custom-border h-100 d-flex flex-column w-100">
              <img class="restaurant-thumbnail img-fluid" :src="dish.photo" />

              <!-- Restaurant details -->
              <div class="restaurant-details p-3 d-flex flex-column flex-grow-1">
                <h5 class="m-0">{{ dish.name }}</h5>
                <div class="mb-2 mt-1">
                  <span class="restaurant-description">
                    {{ dish.description }}
                  </span>
                </div>
                <h6 class="dish-price mt-auto mb-0">€{{ dish.price.toFixed(2).replace(".", ",") }}</h6>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";

.data-col {
  min-height: 250px;
}

.driver-loader {
  padding: inherit;
  background-color: rgba($color: #ffffff, $alpha: 1);
}
.custom-border {
  border-radius: 5px;
}

.restaurant-thumbnail {
  height: 170px;
  width: 100%;
  object-fit: cover;
}

.restaurant-description {
  font-size: 0.9rem;

  // Regole per mantenere tutta la descrizione massimo a 2 linee
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  max-height: 3.6em;
}

.restaurant-details {
  h5 {
    line-break: anywhere;
  }
  .dish-price {
    color: $primary;
  }
}
</style>
