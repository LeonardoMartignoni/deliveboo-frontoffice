<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  methods: {
    toggleMenuEmit() {
      this.$emit("toggle-menu");
    },
  },
};
</script>

<template>
  <div class="menu-layover position-fixed top-0 end-0 bottom-0 start-0">
    <div class="row">
      <div class="col-4 col-md-6" @click="toggleMenuEmit()"></div>
      <div class="col-8 col-md-6">
        <div class="menu-layover-content p-4">
          <button class="btn border-0 ps-0" @click="toggleMenuEmit()">
            <i class="bi bi-x-lg fs-1 text-primary"></i>
          </button>

          <h2 class="mt-4">Area ristoratore</h2>

          <hr />

          <ul class="list-group d-flex flex-column">
            <li>
              <a href="#" class="btn btn-primary text-white rounded-pill px-4 py-3 w-100">Accedi</a>
            </li>
            <li>
              <p class="text-muted mb-1 mt-5">Non sei ancora registrato?</p>
            </li>
            <li>
              <a href="#" class="btn btn-outline-primary rounded-pill px-4 py-3 w-100">Registrati</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
