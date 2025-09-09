import axios from 'axios';

// axios.defaults.withCredentials = true;

const formEl = document.querySelector('#order-form');

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const file = e.target.elements.file1.files[0];
  const formData = new FormData();
  formData.append('title', 'Light in the "Gray Zone"! NEW!!!!!!!!!');
  formData.append('collected', '4165');
  formData.append('target', '380000');
  formData.append('alt', 'collection photo');
  formData.append('peopleDonate', '9');
  formData.append('peopleDonate_title', 'donors');
  formData.append(
    'desc',
    'No electricity, water, gas, daily shelling, 54 people of retirement age.'
  );
  formData.append('days', '48');
  formData.append('period', 'days');
  formData.append('quantity', '10');
  formData.append('status', 'active');
  formData.append('value', 'new_light_collection');
  formData.append('importance', 'urgent');
  formData.append('long_desc', 'react');
  formData.append('long_desc', 'nextjs');
  formData.append('image', file);

  try {
    const response = await axios.post(
      'http://localhost:3000/api/collections/en',
      formData
    );
  } catch (error) {
    console.log('error :>> ', error.message);
  }
});
