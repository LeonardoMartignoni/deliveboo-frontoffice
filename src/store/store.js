import { reactive } from "vue";

export const store = reactive({
  // Jumbotron
  jumbotronPicPath: "/images/jumbotron-overlay.png",
  jumbotronDefaultTitle: 'Piatti <span class="fw-bold text-decoration-underline">spaventosamente</span> buoni, <br class="d-block d-lg-none d-xxl-block" /> a domicilio.',
  jumbotronTitle: "",
  jumbotronRestaurantDescription: "",

  // Dishes
  isDishLayoverOn: false,
  currentDish: {},

  // Cart
  currentRestaurantId: 2,
  cartItems: [],
  dishesId: [],
  dishesQuantity: [],
  isCartOpen: false,

  // Empty cart when restaurant_id changes
  isCartRemoveLayoverOn: false,
});
