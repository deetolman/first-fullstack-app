<template>
    <section v-if="dog">
    <h1>Dog Info</h1>
    </section>
</template>

<script>
import api from '../../services/api';
export default {
  data() {
    return {
      dog: null
    };
  },
  created() {
    api.getDogDetail(this.$route.params.id)
      .then(dog => {
        this.dog = dog;
      });
  }
};
</script>

<style>

</style>
