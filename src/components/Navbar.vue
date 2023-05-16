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
  <div class="container position-relative">
    <nav class="navbar navbar-expand-lg bg-body-tertiary position-absolute w-100 start-0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/images/logo-white.svg" alt="Bootstrap" class="img-fluid" />
        </a>
        <button class="btn border-0 d-block d-lg-none" @click="$emit('toggle-menu')">
          <i class="bi bi-list fs-1 text-white"></i>
        </button>
        <div class="collapse navbar-collapse flex-grow-0">
          <ul class="list-group d-flex flex-row gap-3">
            <li>
              <a href="#" class="btn btn-light rounded-pill px-4">Accedi</a>
            </li>
            <li>
              <a href="#" class="btn btn-light rounded-pill px-4">Registrati</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/partials/variables";

.navbar-brand > img {
  height: $nav-height;
}
</style>
