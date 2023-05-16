<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      restaurantTypes: ["Italiano", "Americano", "Cinese", "Giapponese", "Messicano", "Indiano", "Pesce", "Carne", "Pizza", "Sushi", "Vegana"],
      restaurantList: [
        { thumbnail: "/images/restaurants_example/1.jpg", types: ["Italiano"], name: "Ristorante da Mario" },
        { thumbnail: "/images/restaurants_example/2.jpg", types: ["Americano"], name: "Steakhouse Roadhouse" },
        { thumbnail: "/images/restaurants_example/3.jpg", types: ["Cinese"], name: "Tempio del Dragone" },
        { thumbnail: "/images/restaurants_example/4.jpg", types: ["Giapponese"], name: "Sushi Samurai" },
        { thumbnail: "/images/restaurants_example/5.jpg", types: ["Messicano", "Carne"], name: "El Mariachi" },
        { thumbnail: "/images/restaurants_example/6.jpg", types: ["Indiano", "Pesce", "Italiano"], name: "Taj Mahal" },
        { thumbnail: "/images/restaurants_example/7.jpg", types: ["Pesce", "Italiano"], name: "Mare e Monti" },
        { thumbnail: "/images/restaurants_example/8.jpg", types: ["Carne", "Italiano"], name: "La Brace" },
        { thumbnail: "/images/restaurants_example/9.jpg", types: ["Pizza", "Italiano"], name: "Pizzeria Napoli" },
      ],
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="our-restaurants my-5">
    <div class="container">
      <h2 class="fs-1">I nostri ristoranti</h2>

      <div class="row mt-5">
        <!-- Advanced search -->
        <div class="col-3">
          <div class="border border-1 p-3 d-flex flex-column h-100 custom-border">
            <h5>Ricerca avanzata</h5>

            <div class="input-fields mt-1">
              <form action="" method="get" class="d-flex gap-2">
                <input type="text" class="border border-dark rounded-pill px-3 py-1 w-75" placeholder="Cerca..." />
                <button type="submit" class="w-25 btn btn-primary rounded-pill text-white">
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>

            <!-- Restaurant type filter -->
            <h5 class="mt-4">Ricerca avanzata</h5>

            <div class="restaurant-type-filter d-flex flex-column gap-1">
              <div class="form-check" v-for="typology in restaurantTypes">
                <input class="form-check-input" type="checkbox" value="" :id="typology.toLowerCase()" />
                <label class="form-check-label" :for="typology.toLowerCase()"> {{ typology }} </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Restaurants List -->
        <div class="col-9">
          <div class="row row-cols-3 gy-4">
            <div v-for="restaurant in restaurantList" class="col">
              <div class="border border-1 custom-border">
                <img class="restaurant-thumbnail img-fluid" :src="restaurant.thumbnail" />

                <!-- Restaurant details -->
                <div class="restaurant-details p-3">
                  <h5 class="m-0">{{ restaurant.name }}</h5>
                  <div class="mb-2 mt-1">
                    <span class="restaurant-type">
                      {{ restaurant.types.join(" - ") }}
                    </span>
                  </div>
                  <a class="btn btn-primary rounded-pill text-white w-100" href="#">Menù</a>
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
}
</style>
