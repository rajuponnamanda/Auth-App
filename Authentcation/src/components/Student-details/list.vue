<template>
    <div class="m-2">
      <!-- <table class="table p-3">
        <thead class="text-Drak fs-5" style="text-decoration:underline;" >
          <tr>
            <th class="py-4">User Id</th>
            <th class="py-4">Name</th>
            <th class="py-4">Email</th>
            <th class="py-4">Contact</th>
            <th class="py-4">Action</th>
          </tr>

        </thead>
        <tbody>
          <tr v-for="student in studentData" :key="student.id">
            <td class="fw-bold">{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.contact }}</td>
            <td>
              <router-link :to="{name: 'view', params:{id: student.id}}">
                <i class="bi bi-eye-fill mx-2 text-light" style="font-size: 25px"></i>
              </router-link>
              <router-link :to="{name: 'edit', params:{id: student.id}}">
                <i class="bi bi-pencil-square mx-2 text-light" style="font-size: 20px"></i>
              </router-link>
              <i class="bi bi-trash3 mx-2 text-danger" @click="deleteStudent(student.id)" style="font-size: 20px; cursor: pointer"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center">
    <router-link to="/add">
          <i class="Add-button bi bi-person-fill-add btn btn-outline-light m-2">add</i>
        </router-link>
      </div> -->
      <classes/>

  </div>
</template>

<script setup lang="ts">
// import { onMounted,} from "vue";
// import {ref,} from 'vue'
// import axios from "axios";

// interface Student {
//   id: number;
//   name: string;
//   email: string;
//   contact: string;
// }

// const studentData = ref();

// const getStudentsData = async () => {
//   const res = await axios.get("http://localhost:3000/users");
//   studentData.value = res.data;
// };

// onMounted(getStudentsData);

// let deleteStudent = async (id: number) => {
//   if (!window.confirm("Are You Sure ?")) {
//     return;
//   }

//   try {
//     await axios.delete(`http://localhost:3000/users/${id}`);
//     studentData.value = studentData.value.filter(
//       (student: { id: number; }) => student.id !== id
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };
</script>

<style></style>

<!-- <template>
  <div>
    <h1>Student Records</h1>
    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Class Name</th>
          <th>Subject Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in studentRecords" :key="index">
          <td>{{ record.studentName }}</td>
          <td>{{ record.className }}</td>
          <td>{{ record.subjectName }}</td>
          <td>{{ record.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

export default {
  name: 'StudentRecords',

  setup() {
    const state = reactive({
      studentRecords: []
    })

    // Fetch student records from the backend API
    const fetchStudentRecords = async () => {
      const response = await axios.get('https://demopiplinebyshabbir2.azurewebsites.net/api/School/GetStudentRecords')
      state.studentRecords = response.data
    }

    onMounted(fetchStudentRecords)

    return {
      state
    }
  }
}
</script>
<style>

</style>
 -->

