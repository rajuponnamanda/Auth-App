<!-- <template>
  <div class="text-center">
    <h5>Student Details</h5>
    <table class="table px-5 p-0">
      <thead class="text-dark">
        <tr>
          <th class="py-2">User Id</th>
          <th class="py-2">Name</th>
          <th class="py-2">Email</th>
          <th class="py-2">Contact</th>
        </tr>
      </thead>
      <tbody>
        <td class="py-2">{{ studentData.id }}</td>
        <td class="py-2">{{ studentData.name }}</td>
        <td class="py-2">{{ studentData.email }}</td>
        <td class="py-2">{{ studentData.contact }}</td>
      </tbody>
    </table>
    <div>
      <router-link to="/StudentsList">
        <button class="btn btn-success my-5">Back To Home</button>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { interface } from '@/models/globals.models';


let studentData = ref({});
// onMounted(async () => {
  const id = useRouter().currentRoute.value.params.id as unknown as number;
  getSingleStudent(id);
});
function getSingleStudent(id: number) {
  axios
    .get(`http://localhost:3000/users/${id}`)
    .then((res) => {
     res = res.data
      
      studentData.value = res;
    })
    .catch((error) => {
      console.error(error);
    });
}
</script> -->

<template>
  <div>
    
  </div>
</template>
<script lang="ts">

</script>
