<template id="dog-template">
  <section class="add-dog">
    <h1>Add a Dog</h1>
    <Dogform 
      label="Add"
        :energy="energy"
        :onEdit="handleAdd"/>
  </section>
  </template>

<script>
import DogForm from './DogForm.vue';
import api from '../../services/api';

export default {
  components: {
    DogForm
  },
  props: {
    energy: Array
  },
  methods: {
    handleAdd(dog) {
      return api.addDog(dog)
        .then(added => {
          this.$router.push(`/dogs/${added.id}`);
        });
    }
  }
};    
</script>

<style>
label {
  display: block;
}
</style>