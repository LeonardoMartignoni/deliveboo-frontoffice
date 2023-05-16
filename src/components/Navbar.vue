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
    <nav class="navbar navbar-expand-lg bg-body-tertiary position-absolute w-100">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/images/logo-white.svg" alt="Bootstrap" class="img-fluid" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0 gap-3" id="navbarSupportedContent">
          <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul> -->
          <a href="#" class="btn btn-light rounded-pill px-4">Accedi</a>
          <a href="#" class="btn btn-light rounded-pill px-4">Registrati</a>
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
