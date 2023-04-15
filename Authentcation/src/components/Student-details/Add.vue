<template>
  <div class="pb-4 text-center">
    <div class="bg-primary p-2">
      <h5>Add Student Details</h5>
    </div>
    <div class="field">
      <label for="name" class="font-medium fw-bold">Name :-</label>
      <input
        type="text"
        id="name"
        v-model="state.name"
        @focusout="$v.name.$validate"
        placeholder="Write your name"
        class="border border-light py-2 my-3 mx-4 w-50"
      />
      <span v-if="$v.name.$error">
        <p class="form-error text-danger fw-bold">* Name field is required </p>
      </span>
    </div>

    <div class="field">
      <label for="email" class="font-medium fw-bold">Email :-</label>
      <input
        type="email"
        id="email"
        v-model="state.email"
        @focusout="$v.email.$validate"
        placeholder="Enter your mail id"
        class="border border-light py-2 my-3 mx-4 w-50"
      />
      <span v-if="$v.email.$error">
        <p v-if="$v.email.required" class="form-error text-danger fw-bold">* Email field is invalid </p>
      </span>
    </div>

    <div class="field">
      <label for="contact" class="font-medium fw-bold">Phone :-</label>
      <input
        type="text"
        id="contact"
        placeholder="Enter your contact number"
        v-model="state.contact"
        @focusout="$v.contact.$validate"
        class="border border-light py-2 my-3 mx-4 w-50"
      />
      <span v-if="$v.contact.$error">
        <p v-if="$v.contact.required" class="form-error text-danger fw-bold ">* Phone number is required</p>
        <p v-if="$v.contact.maxLength" class="form-error text-danger fw-bold ">* Phone Number should be 10 digits</p>

      </span>
    </div>

    <div>
      <button :disabled="$v.$invalid" @click="submitForm()" class="button btn btn-success text-dark px-5 py-2 mx-2 my-3">
        Submit Form
      </button>
      <router-link to="/StudentsList">
        <button class="btn btn-dark py-2 px-6 mr-6">Back to Home</button>
      </router-link>
    </div>
  </div>
</template>




<script setup lang="ts">
import { computed, reactive,} from 'vue';
import axios from 'axios';
import { required, email, minLength, maxLength, numeric } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import router  from  '../../router';


const state = reactive({
  name: '',
  email: '',
  contact: ''
});

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(3) },
    email: { required, email },
    contact: { required,maxLength:maxLength(10)}
  };
});

const $v = useVuelidate(rules, state);

async function submitForm() {
  const result =  await $v.value.$validate();

  try {
    const response = await axios.post('http://localhost:3000/users',state);  
    $v.value= response.data
    router.push('/')

    if (result) {
    alert('Success, Form Sumitted ')
    } else {
      alert('Error, Form not Submitted');      
    }
  } catch (error) {
    console.error(error);
    alert('Error, Form not Submitted');
  }
}

</script>

<style>
input::-webkit-outer-spin-button,

input::-webkit-inner-spin-button {

  -webkit-appearance: none;
  margin: 0;
}

input {
  border-radius: 8px;
  box-shadow: inset;
  background-image: url("http://www.w3.org/2000/svg");
}
::-webkit-input-placeholder {
   color: rgb(131, 128, 128);
   padding-left: 15px;

}
.form-error{
text-align: start;
padding-left: 27%;
}

</style>










