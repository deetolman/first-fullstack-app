<template id="dog-template">
  <article>
    <router-link :to="`/dogs/${dog.id}`">
    <h3>{{ dog.name }}</h3>
    <p>Adopt <strong> {{ dog.name }} </strong> today!</p>
    <p>Age: {{ dog.age }}</p>
    <p>Breed:{{ dog.type }}</p>
    <p>Weight:{{ dog.weight }}</p>
    </router-link>
  </article>
</template>

<script>
//import api from '../../services/api';

export default {
  props: {
    dog: Object
  }
  // data() {
  //   return {
  //     dog: null,
  //   };
  // },
  // created() {
  //   api.getDog(this.$route.params.id)
  //     .then(dog => {
  //       this.dog = dog;
  //     });
  // },
  // computed: {
  //   type() {
  //     return this.dog.type.toLocaleString();
  //   },
  //   weight() {
  //     return this.dog.weight.toLocaleString();
  //   }
  // }
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>