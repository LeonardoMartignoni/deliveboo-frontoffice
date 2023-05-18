<script>
// import MyComponent from "./components/MyComponent.vue";
import axios from "axios";

export default {
  data() {
    return {
      restaurant: {},
    };
  },

  created() {
    axios.get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`).then((response) => {
      this.restaurant = response.data.results;
    });
  },
};
</script>

<template>
  <div class="container my-5">
    <h2 class="fs-1">{{ restaurant.name }}</h2>

    <div class="row mt-5">
      <div class="col-12">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4">
          <div v-for="dish in restaurant.dishes" class="col">
            <div class="border border-1 custom-border h-100 d-flex flex-column">
              <img class="restaurant-thumbnail img-fluid" :src="dish.photo" />

              <!-- Restaurant details -->
              <div class="restaurant-details p-3 d-flex flex-column flex-grow-1">
                <h5 class="m-0">{{ dish.name }}</h5>
                <div class="mb-2 mt-1">
                  <span class="restaurant-type">
                    {{ dish.description }}
                  </span>
                </div>
                <h6 class="dish-price mt-auto mb-0">€{{ dish.price.toFixed(2).replace(".", ",") }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";

.custom-border {
  border-radius: 5px;
}

.restaurant-thumbnail {
  height: 170px;
  width: 100%;
  object-fit: cover;
}

.restaurant-type {
  font-size: 0.9rem;
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
