<template>
  <article>
    <router-link :to="`/dogs/${dog.id}`">
    <h3>{{ dog.name }}</h3>
    <p>Adopt {{ dog.name }} today!</p>
    <p>Age: {{ dog.age }}</p>
    <p>Breed:{{ dog.type }}</p>
    <p>Weight:{{ dog.weight }}</p>
    </router-link>
  </article>
</template>

<script>
export default {
  props: {
    dog: Object
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>