<script>
import { store } from "../../store/store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    closeDishLayover() {
      this.store.isDishLayoverOn = false;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row dish-layover-row position-fixed top-0 end-0 bottom-0 start-0">
      <div class="col-12">
        <div class="dish-layover-container h-100 d-flex justify-content-center flex-column">
          <div class="row w-100">
            <div class="col-5 offset-3 align-items-center">
              <div class="dish-layover-content position-relative h-100">
                <!-- Close button -->
                <button class="btn border-0 ps-0" @click="closeDishLayover()">
                  <i class="bi bi-x-lg fs-1 text-primary"></i>
                </button>
                <img :src="store.currentDish.photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dish-layover-row {
  background-color: rgba($color: #000000, $alpha: 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;

  .dish-layover-content {
    min-height: 30vh;
    max-height: 70vh;
    background-color: white;
    z-index: 150;
  }
}
</style>
