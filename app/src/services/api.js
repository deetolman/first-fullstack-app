// const URL = 'http://localhost:3000/api';
// const DOGS_URL = `${URL}/dogs`;


export default {
  getDogs() {
    return fetch('http://localhost:3000/api/adoptable-pets', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getDog(id) {
    return fetch(`http://localhost:3000/api/adoptable-pets/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addDog(dog) { 
    console.log('dog', dog);
    return fetch('http://localhost:3000/api/adoptable-pets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dog)
    })
      .then(response => response.json());
  }
};