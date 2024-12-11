<script setup>
import { reactive,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
// Reactive form data
const formData = reactive({
  name: '',
  tel: '',
  course: 'Web+Jquery',
  time: '12:30pm-1:45pm',
  project_name: '',
  email: '',
  linkDeploy: '',
  date: ''
});

// Redirect to Thanks.vue if already submitted
onMounted(() => {
  if (localStorage.getItem('formSubmitted')) {
    router.push('/thanks');
  }
});

// Submit form function
const submitForm = async () => {
  try {
    if(formData.linkDeploy == ''){
      formData.linkDeploy = "no deploy link"
    }
    formData.date = new Date().toISOString();
    
    const startTime = performance.now(); // Measure request start time

    const response = await axios.post(
      'https://stusubmitsys.onrender.com/students',
      formData
    );

    const endTime = performance.now(); // Measure request end time
    console.log(`API Response Time: ${endTime - startTime} ms`);

    if (response.status === 201) {
      // Reset the form
      formData.name = '';
      formData.tel = '';
      formData.course = 'Web+Jquery';
      formData.time = '12:30pm-1:45pm';
      formData.project_name = '';
      formData.email = '';
      formData.linkDeploy = '';

      localStorage.setItem('formSubmitted', 'true'); // Set the flag in localStorage
      router.push('/thanks');
    } else {
      alert('Failed to submit the form. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while submitting the form.');
  }
};


</script>

<template>
  <div class="container-fluid font-varela py-3 py-lg-2">
    <div class="col-md-10 mx-auto rounded-3 fw-bold px-lg-5 py-4">

      <h3 class="mb-2 text-center">Form Submit</h3>
      <p class="fw-normal text-secondary text-center">Please fill out the form</p>

      <form @submit.prevent="submitForm" class="pt-2 px-md-5">
        <div class="d-flex justify-content-between">
          <div class="col-6 px-2">
            <label for="name" class="fs-4 fw-normal my-1">Name*</label>
            <input
              v-model="formData.name"
              type="text"
              id="name"
              class="form-control shadow-none rounded-0 border-secondary-subtle border-1"
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div class="col-6 px-2">
            <label for="tel" class="fs-4 fw-normal my-1">Tel*</label>
            <input
              v-model="formData.tel"
              type="text"
              id="tel"
              class="form-control shadow-none rounded-0 border-secondary-subtle border-1"
              placeholder="Enter Phone Number"
              required
            />
          </div>
       
        </div>

        <div class="d-md-flex justify-content-between mt-3">
          <div class="col-12 col-md-6 px-2">
            <label for="course" class="fs-4 fw-normal my-1">Course*</label>
            <select
              v-model="formData.course"
              id="course"
              class="form-select shadow-none rounded-0 border-secondary-subtle border-1"
              required
            >
              <option value="Web+Jquery">Web+Jquery</option>
              <option value="Web+Vue">Web+Vue</option>
              <option value="Reactjs">Reactjs</option>
              <option value="Vuejs">Vuejs</option>
            </select>
          </div>
          <div class="col-12 col-md-6 px-2">
            <label for="time" class="fs-4 fw-normal my-1">Time*</label>
            <select
              v-model="formData.time"
              id="time"
              class="form-select shadow-none rounded-0 border-secondary-subtle border-1"
              required
            >
              <option value="12:30pm-1:45pm">12:30pm-1:45pm</option>
              <option value="2:00pm-3:15pm">2:00pm-3:15pm</option>
              <option value="3:30pm-5:00pm">3:30pm-5:00pm</option>
              <option value="5:00pm-6:00pm">5:00pm-6:00pm</option>
              <option value="6:00pm-7:15pm">6:00pm-7:15pm</option>
              <option value="7:15pm-8:30pm">7:15pm-8:30pm</option>
              <option value="11:00pm-1:30pm(Sat-Sun)">11:00pm-1:30pm(Sat-Sun)</option>
              <option value="2:00pm-5:00pm(Sat-Sun)">2:00pm-5:00pm(Sat-Sun)</option>
            </select>
          </div>
        </div>

        <div class="px-2 mt-3">
          <label for="project_name" class="fs-4 fw-normal my-1">Project Name*</label>
          <input
            v-model="formData.project_name"
            type="text"
            id="project_name"
            class="form-control shadow-none rounded-0 border-secondary-subtle border-1"
            placeholder="Enter Your Project Name"
            required
          />
        </div>
        <div class="px-2 mt-3">
          <label for="email" class="fs-4 fw-normal my-1">Link GitHub*</label>
          <input
            v-model="formData.email"
            type="url"
            id="email"
            class="form-control shadow-none rounded-0 border-secondary-subtle border-1"
            placeholder="Enter Your GitHub Link"
            required
          />
        </div>
        <div class="px-2 mt-3">
          <label for="linkDeploy" class="fs-4 fw-normal my-1">Link Deploy*</label>
          <input
            v-model="formData.linkDeploy"
            type="url"
            id="linkDeploy"
            class="form-control shadow-none rounded-0 border-secondary-subtle border-1"
            placeholder="Enter Your Deploy Link"
          />
        </div>

        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-secondary mt-4 px-4 me-2">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  height: 100vh;
}
.shadow {
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.712) !important;
}
</style>
