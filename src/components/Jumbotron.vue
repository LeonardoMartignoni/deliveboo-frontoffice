<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    jumbotronPicPath: String,
    title: String,
  },
};
</script>

<template>
  <div class="jumbotron position-relative">
    <img class="position-absolute w-100" :src="jumbotronPicPath" />
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col">
          <div class="jumbotron-content d-flex justify-content-center text-white position-relative flex-column">
            <div v-if="store.jumbotronTitle == store.jumbotronDefaultTitle">
              <h1 class="fw-light" v-html="title"></h1>
              <a href="#our-restaurants" class="btn btn-outline-light rounded-pill w-25 mt-3">Ordina!</a>
            </div>
            <div v-else class="d-flex flex-column">
              <span class="text-uppercase title-menu">Menù</span>
              <h1>{{ title }}</h1>
              <p class="fw-light mb-0 restaurant-description">{{ store.jumbotronRestaurantDescription }}</p>
            </div>
          </div>
        </div>
        <div class="col d-none d-lg-block">
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
      height: 44vh;
    }

    .title-menu {
      letter-spacing: 0.3rem;
    }

    .restaurant-description {
      font-size: 0.9rem;
    }
  }
}
</style>
