<script>

// import MyComponent from "./components/MyComponent.vue";
import axios from "axios";

export default {
    data() {
        return {
            restaurant: null
        }
    },

    // props: {
    //     restaurant: Object,
    // },


    created() {
        axios.get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`)
            .then((response) => {
                this.restaurant = response.data.results;

            });

    }

    // components: {
    //   MyComponent,
    // },
};

</script>

<template>
    <h3>{{ restaurant.name }}</h3>
    <div v-for="dish in restaurant.dishes">
        <p>{{ dish.name }}</p>
    </div>
</template>

<style lang="scss" scoped></style>