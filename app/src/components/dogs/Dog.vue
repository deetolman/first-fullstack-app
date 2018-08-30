<template id="dog-template">
  <article>
    <h3>{{ dog.name }}</h3>
    <p>Adopt {{ dog.name }} today!</p>
    <p>Age: {{ dog.age }}</p>
    <p>Breed:{{ type }</p>
    <p>Weight{{ weight }}</p>
  </article>
</template>

<script>

export default {
  props: ['dog'],
  computed: {
    type() {
      return this.dog.type.toLocaleString();
    },
    weight() {
      return this.dog.weight.toLocaleString();
    }
  }
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>