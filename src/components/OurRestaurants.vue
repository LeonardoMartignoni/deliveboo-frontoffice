<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      // title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="our-restaurants mt-5">
    <div class="container">
      <h2 class="fs-1">I nostri ristoranti</h2>

      <div class="row row-cols-4 mt-5">
        <!-- Advanced search -->
        <div class="col">
          <div class="border border-1 p-3 d-flex flex-column">
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
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Italiano" />
                <label class="form-check-label" for="Italiano"> Italiano </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Americano" />
                <label class="form-check-label" for="Americano"> Americano </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Cinese" />
                <label class="form-check-label" for="Cinese"> Cinese </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Giapponese" />
                <label class="form-check-label" for="Giapponese"> Giapponese </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Messicano" />
                <label class="form-check-label" for="Messicano"> Messicano </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Indiano" />
                <label class="form-check-label" for="Indiano"> Indiano </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Pesce" />
                <label class="form-check-label" for="Pesce"> Pesce </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Carne" />
                <label class="form-check-label" for="Carne"> Carne </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Pizza" />
                <label class="form-check-label" for="Pizza"> Pizza </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Sushi" />
                <label class="form-check-label" for="Sushi"> Sushi </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Vegana" />
                <label class="form-check-label" for="Vegana"> Vegana </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Restaurants List -->
        <div class="col">
          <div class="border border-1"></div>
        </div>
        <div class="col">
          <div class="border border-1"></div>
        </div>
        <div class="col">
          <div class="border border-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";
</style>
