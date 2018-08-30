<template id="dog-template">
  <section class="add-dog">
    <h1>Add a Dog</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="dog.name">
      </label>

      <label>
        Type:
        <input type="text" name="type" placeholder="Type" required
          v-model="dog.type">
      </label>

      <label>
        Weight:
        <input type="text" name="weight" placeholder="Weight" required
          v-model="dog.weight">
      </label>

      <label>
        Age:
        <input type="text" name="age" placeholder="Age" required
          v-model="dog.age">
      </label>
      
      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>

const initDog = () => {
  return {
    name: '',
    type: '',
    weight: '',
    age: ''
  };
};
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      dog: initDog()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.Dog)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.Dog = initDog();
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