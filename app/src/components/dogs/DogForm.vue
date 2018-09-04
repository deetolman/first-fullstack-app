<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">
      </label>

      <label>
        Energy:
        <select v-model.number="edit.energyId" required>
          <option disabled value="">Please select energy</option>
          <option
            v-for="energy in energy"
            :key="energy.id"
            :value="energy.id">
            {{energy.name}} ({{energy.direction}})
          </option>
        </select>
      </label>
    </form>
    {{ edit }}
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
    dog: Object,
    label: String,
    energy: Array,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.dog ? Object.assign({}, this.dog) : initDog()
    };
  },
  computed: {
    editMode() {
      return !!this.dog;
    }
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        // this fires when save is complete and data added to nieghborhoods array
        .then(() => {
          this.edit = initDog();
        });
    }
  }
};
</script>

<style>
.neighborhood-form-container {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}
</style>