<template>
    <DogDetail v-if="dog" : dog="dog"/>
</template>

<script>
import api from '../../services/api.js';
import DogDetail from './DogDetail.vue';
    
export default {
  data() {
    return {
      dog: null,
    };
  },
  created() {
    api.getDog(this.$route.params.id)
      .then(dog => {
        this.dog = dog;
      });
  },
  components: {
    DogDetail
  }
};
</script>

<style>

</style>
