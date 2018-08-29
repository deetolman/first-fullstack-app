<template id="dog-template">
  <article>
    <h3>{{ dog.name }}</h3>
    <p>Adopt {{ dog.name }} today!</p>
    <p>Age: {{ dog.age }}</p>
    <p class="breed">
        Breed: 
      <strong>{{ type }}</strong> 
    </p>
    <p>
        Weight
      <strong>{{ weight }}</strong>
    </p>
  </article>
</template>

<script>

export default {
  props: ['dog'],
  computed: {
    weight() {
      return this.dog.weight.toLocaleString();
    },
    type() {
      return this.dog.type.toLocaleString();
    }
  }
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>