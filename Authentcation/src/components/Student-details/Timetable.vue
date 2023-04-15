<template>
    <div class="timetable">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in timetable" :key="index">
            <td><strong class="text-danger ">{{ row.time }}</strong></td>
            <td v-for="(cell, index) in row.cells" :key="index">
              <div v-if="cell.subject"><strong>{{ cell.subject }}</strong></div>
              <div v-else>-</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center my-4">
      <router-link to="/signup" class="btn btn-dark">Back</router-link>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue';
  
      const timetable = reactive([
        { time: '9:00-10:00', cells: [{ subject: 'English' }, { subject: 'Maths' }, { subject: 'Science' }, { subject: 'Social Studies' }, { subject: 'Sports' }] },
        { time: '10:00-11:00', cells: [{ subject: 'Hindi' }, { subject: 'Science' }, { subject: 'English' }, { subject: 'Maths' }, { subject: 'Sports' }] },
        { time: '11:00-12:00', cells: [{ subject: 'Maths' }, { subject: 'Social Studies' }, { subject: 'Hindi' }, { subject: 'Science' }, { subject: 'Sports' }] },
        { time: '12:00-1:00', cells: [{ subject: 'Lunch Break' }, { subject: 'Lunch Break' }, { subject: 'Lunch Break' }, { subject: 'Lunch Break' }, { subject: 'Lunch Break' }] },
        { time: '1:00-2:00', cells: [{ subject: 'Social Studies' }, { subject: 'Maths' }, { subject: 'English' }, { subject: 'Hindi' }, { subject: 'Sports' }] },
        { time: '2:00-3:00', cells: [{ subject: 'Science' }, { subject: 'English' }, { subject: 'Maths' }, { subject: 'Social Studies' }, { subject: 'Sports' }] },
      ]);
  
   
  </script>
  
  <style>
  .timetable {
    margin: 20px;
    font-size: 16px;
  }
  
  table {
    border-collapse: collapse;

    width: 100%;
  }
  
  th,
  td {
    border: 1px solid black;
    padding: 10px;
  }
  
  th {
    background-color: #020130;
    color: aliceblue;
  }
  
  td div {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  td div:last-child {
    font-weight: normal;
  }
  </style>
  