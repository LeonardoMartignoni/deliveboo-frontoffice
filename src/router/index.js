import { createRouter, createWebHistory } from "vue-router";

import OurRestaurants from "../pages/OurRestaurants.vue";
import MenuDetail from "../pages/MenuDetail.vue";
import Checkout from "../pages/Checkout.vue";
import OrderComplete from "../pages/OrderComplete.vue";

// Creazione routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: OurRestaurants,
    },
    {
      path: "/menu/:id",
      name: "menu-detail",
      component: MenuDetail,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/order-complete",
      name: "order-complete",
      component: OrderComplete,
    },
  ],
});

// Export router

export { router };
