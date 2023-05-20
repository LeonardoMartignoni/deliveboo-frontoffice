<script>
import axios from "axios";
import MenuDetail from "./MenuDetail.vue";

export default {
  data() {
    return {
      types: [],
      restaurants: [],

      selectedTypes: [],
    };
  },

  methods: {
    fetchRestaurants() {
      const endpoint = "http://127.0.0.1:8000/api/restaurants";
      const typeParams = this.selectedTypes.join(",");

      let params = {};

      if (this.selectedTypes.length > 0) {
        params = { types: this.selectedTypes.join(",") };
      }

      axios.get(endpoint, { params }).then((response) => {
        this.restaurants = response.data.results.data;
        this.restaurants.pages = response.data.results.links;
      });
    },

    fetchTypes() {
      axios.get("http://127.0.0.1:8000/api/types").then((response) => {
        // console.log(response)
        this.types = response.data.results;
      });
    },
  },

  created() {
    this.fetchRestaurants();
    this.fetchTypes();
  },
};
</script>

<template>
  <div id="our-restaurants" class="my-5">
    <div class="container">
      <h2 class="fs-1">I nostri ristoranti</h2>

      <div class="row mt-5">
        <!-- Advanced search -->
        <div class="col-12 col-lg-3 mb-5 mb-lg-0">
          <div class="border border-1 p-3 d-flex flex-column h-100 custom-border">
            <!-- <h5>Ricerca avanzata</h5>

            <div class="input-fields mt-1">
              <form action="" method="get" class="d-flex gap-2">
                <input type="text" class="border border-dark rounded-pill px-3 py-1 w-75" placeholder="Cerca..." />
                <button type="submit" class="w-25 btn btn-primary rounded-pill text-white">
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div> -->

            <!-- Restaurant type filter -->
            <h5 class="">Filtra</h5>

            <div class="restaurant-type-filter d-flex flex-column gap-1">
              <div class="row">
                <div class="col-6 col-sm-3 col-lg-12" v-for="typology in types">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" :value="typology.id" :id="typology.id" v-model="selectedTypes" @change="fetchRestaurants()" />
                    <label class="form-check-label" :for="typology.id"> {{ typology.name }} </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Restaurants List -->
        <div class="col-12 col-lg-9">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4">
            <div v-for="restaurant in restaurants" class="col">
              <div class="border border-1 custom-border h-100 d-flex flex-column">
                <img class="restaurant-thumbnail img-fluid" :src="restaurant.photo" />

                <!-- Restaurant details -->
                <div class="restaurant-details p-3 d-flex flex-column flex-grow-1">
                  <h5 class="m-0">{{ restaurant.name }}</h5>
                  <div class="mb-2 mt-1">
                    <span v-for="typology in restaurant.types" class="restaurant-type">
                      {{ typology.name }}
                    </span>
                  </div>
                  <router-link :to="{ name: 'menu-detail', params: { id: restaurant.id } }" class="btn btn-primary rounded-pill text-white w-100 mt-auto mb-0">Menù</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="d-flex" aria-label="restaurants pagination">
        <ul class="pagination ms-auto my-3">
          <li v-for="page in restaurants.pages" class="page-item">
            <button
              type="button"
              class="page-link"
              @click="fetchRestaurants(page.url)"
              :class="{
                disabled: !page.url,
                active: page.active,
              }"
              v-html="page.label"
            ></button>
          </li>
        </ul>
      </nav>
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

  &:not(:last-of-type)::after {
    content: " - ";
  }
}

.restaurant-details {
  h5 {
    line-break: anywhere;
  }
}
</style>
