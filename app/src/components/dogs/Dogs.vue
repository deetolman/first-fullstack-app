<template>
<section>
  <h2>Pet Dogs</h2>
  <p v-if="!dogs">Loading...</p>
  <ul class="list" v-else>
    <Dog
      v-for="(dog, index) in dogs"
      :key= "index" 
      :dog= "dog"
    />
  </ul>
  <AddDog :on-add="handleAdd"/>
</section>
</template>

<script>
import Dog from './Dog.vue';
import AddDog from './AddDog.vue';
import api from '../../services/api';

export default {
  data() {
    return { 
      dogs: null
    };
  },
  created() {
    api.getDogs()
      .then(dogs => {
        this.dogs = dogs;
      });
  },
  components: { 
    Dog,
    AddDog 
  },
  methods: {
    handleAdd(dog) {
      return api.addDog(dog)
        .then(saved => {
          this.dogs.push(saved);
        });
    }
  }
};
</script>

<style>
ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
