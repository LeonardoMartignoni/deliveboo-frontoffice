<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      // title: "Hello world"
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="jumbotron position-relative">
    <img class="position-absolute w-100" src="/images/jumbotron-overlay.png" />
    <div class="container">
      <div class="row row-cols-2">
        <div class="col">
          <div class="jumbotron-content d-flex justify-content-center text-white position-relative flex-column">
            <h1 class="fw-light">Piatti <span class="fw-bold text-decoration-underline">spaventosamente</span> buoni, a domicilio.</h1>
            <a href="#our-restaurants" class="btn btn-outline-light rounded-pill w-25 mt-3">Ordina!</a>
          </div>
        </div>
        <div class="col">
          <div class="jumbotron-content d-flex justify-content-center flex-shrink-0">
            <img class="position-relative img-fluid" src="/images/driver.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";
.jumbotron {
  background-color: $primary;
  height: $jumbotron-height;
  & > img {
    opacity: 5%;
    height: $jumbotron-height;
    object-fit: cover;
  }

  .jumbotron-content {
    height: $jumbotron-height;
    transform: translateY(10%);
    & > img {
      margin-top: auto;
      max-width: 80%;
    }
  }
}
</style>
