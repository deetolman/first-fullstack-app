
export default {
  getDogs() {
    return fetch('http://localhost:3000/api/dogs', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addDog(dog) {
    return fetch('http://localhost:3000/api/dogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dog)
    })
      .then(response => response.json());
  }
};