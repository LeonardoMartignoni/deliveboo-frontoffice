import { reactive } from "vue";

export const store = reactive({
  jumbotronPicPath: "/images/jumbotron-overlay.png",
  jumbotronDefaultTitle: 'Piatti <span class="fw-bold text-decoration-underline">spaventosamente</span> buoni, <br class="d-block d-lg-none d-xxl-block" /> a domicilio.',
  jumbotronTitle: "",
  jumbotronRestaurantDescription: "",
});
