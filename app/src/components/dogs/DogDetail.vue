<template>
  <section>
    <!-- <DogDetail v-if="dog" :dog="dog"/> -->
      <h1>Dog Info</h1>
      <p>{{ dog.name }}</p>
      <p>{{ dog.age }}</p>
  </section>
</template>

<script>
import api from '../../services/api';
// import Dogs from './Dogs';

export default {
  data() {
    return {
      dog: null,
    };
  },
  created() {
    api.getDogDetail(this.$route.params.id)
      .then(dog => {
        this.dog = dog;
      });
  },
  // components:{
  //   Dogs
};
</script>

<style>

</style>
