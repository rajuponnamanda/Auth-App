<template>
  <div class="shadow-md pb-6">
    <div>
      <h3 class="text-center text-dark  pt-2 pb-2">Update Student</h3>
    </div>

    <div class="  text-center">
      <div class="form-group">
      <label for="email" class="font-medium fw-bold "> Id.No :- </label>
      <input
        type="text"
        id="stuname"
        v-model="studentData.id"
        placeholder="Write your Email"
        required
        class="border border-light py-2 my-3 mx-4  w-50"
      />
    </div>
      <label for="name" class="font-medium fw-bold">Name :-</label>
      <input
        type="text"
        id="stuname"
        v-model="studentData.name"
        placeholder="Write your name"
        required
        class="border border-light py-2  my-3 mx-4  w-50"
      />
    <div>
      <label for="email" class="font-medium fw-bold"> Email :- </label>
      <input
        type="text"
        id="stuname"
        v-model="studentData.email"
        placeholder="Write your Email"
        required
        class="border border-light py-2 my-3 mx-4  w-50"
      />
    </div>
    <div>
      <label for="contact" class="font-medium fw-bold">Phone :-</label>
      <input
        type="number"
        placeholder="Enter Your Contact Number"
        v-model.trim="studentData.contact"
        max="10"
        required
        class="border border-light py-2 my-3 mx-4 w-50"
      />
    </div>
    </div>

    <div class="text-center">
      <button
        @click="updateDetails"
        class="btn btn-success text-white font-medium py-2 my-5 px-5 mx-5"
      >
        Save
      </button>
      <router-link to="/StudentsList"
        class="btn btn-light text-white font-medium py-2 my-5 px-5 mx-5">
        Back
      </router-link>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import router from "../../router";

const studentData = ref({
  id: 0,
  name: "",
  email: "",
  contact: 0,
});

const id: any = useRouter().currentRoute.value.params.id as unknown as number;
onMounted(async () => {
  getSingleStudent();
});

function getSingleStudent() {
  
  axios
    .get(`http://localhost:3000/users/${id}`)
    .then((res) => {
      studentData.value = res.data;
    })
    .catch((error) => {
      console.error(error);
    });
}


function updateDetails() {
  axios
    .patch(`http://localhost:3000/users/${id}`, studentData.value ,id)
    .then((res) => {
      studentData.value = res.data;
      router.push('/')
      {
      alert('form successfully updated')
    }
    })
    .catch((error) => {
      console.error(error);
    });
    
}
</script>
