<template>
  <div>
  <table class="holiday-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(holiday, index) in holidays" :key="index">
        <td><strong>{{ holiday.date }}</strong></td>
        <td><strong>{{  holiday.name  }}</strong></td>
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

const holidays = reactive([
  { date: 'January 1', name: 'New Year\'s Day' },
  { date: 'January 26', name: 'Republic Day' },
  { date: 'March 11', name: 'Maha Shivaratri' },
  { date: 'March 29', name: 'Holi' },
  { date: 'April 14', name: 'Dr. Ambedkar Jayanti' },
  { date: 'April 15', name: 'Ram Navami' },
  { date: 'May 13', name: 'Eid-ul-Fitr' },
  { date: 'July 21', name: 'Eid-ul-Zuha' },
  { date: 'August 15', name: 'Independence Day' },
  { date: 'August 19', name: 'Muharram' },
  { date: 'September 10', name: 'Ganesh Chaturthi' },
  { date: 'October 2', name: 'Gandhi Jayanti' },
  { date: 'October 15', name: 'Dussehra' },
  { date: 'November 4', name: 'Diwali' },
  { date: 'November 19', name: 'Guru Nanak Jayanti' },
  { date: 'December 25', name: 'Christmas Day' },
]);

</script>

<style>
  .holiday-table {
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    margin: auto;
  }

  .holiday-table th,
  .holiday-table td {
    padding: 10px 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .holiday-table th {
    background-color: #000120;
    color: #ddd;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
