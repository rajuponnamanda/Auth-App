<template>
    <div class="px-0">
      <router-link
        :to="{ name: 'class', params: { id: 'I' } }"
        :class="{ active: selectedClass === 'I' }"
        class="btn btn-light fw-bold mx-3 py-2 px-5"
        @click="selectedClass = 'I'"
      >
        Class I
      </router-link>
      <router-link
        :to="{ name: 'class', params: { id: 'II' } }"
        :class="{ active: selectedClass === 'II' }"
        class="btn btn-light fw-bold mx-3 py-2 px-5"
        @click="selectedClass = 'II'"
      >
        Class II
      </router-link>
      <router-link
        :to="{ name: 'class', params: { id: 'III' } }"
        :class="{ active: selectedClass === 'III' }"
        class="btn btn-light fw-bold mx-3 py-2 px-5"
        @click="selectedClass = 'III'"
      >
        Class III
      </router-link>
      <router-link
        :to="{ name: 'class', params: { id: 'IV' } }"
        :class="{ active: selectedClass === 'IV' }"
        class="btn btn-light fw-bold mx-3 py-2 px-5"
        @click="selectedClass = 'IV'"
      >
        Class IV
      </router-link>
      <router-link
        :to="{ name: 'class', params: { id: 'V' } }"
        :class="{ active: selectedClass === 'V' }"
        class="btn btn-light fw-bold mx-3 py-2 px-5"
        @click="selectedClass = 'V'"
      >
        Class V
      </router-link>
      <router-link
        :to="{ name: 'class', params: { id: 'VI' } }"
        :class="{ active: selectedClass === 'VI' }"
        class="btn btn-light fw-bold mx-3 py-2 px-5"
        @click="selectedClass = 'VI'"
      >
        Class VI
      </router-link>
      <router-view />
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  
  export default {
    setup() {
      const selectedClass = ref('');
  
      return { selectedClass };
    },
  };
  </script>
  
  <style scoped>
  .active {
    background-color: rgb(153, 2, 2);
  }
  </style>
  