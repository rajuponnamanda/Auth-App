<template>
  <div>
<Navigation />
<div class="container-fluid p-0 d-flex ">
  <div v-if="store.isAuthenticated" class="col-2 sidebar border-end border-1 content-height d-flex flex-column py-4">
  <router-link to="/signUp" class="btn btn-outline-light my-2 mx-3 text-light fw-bold " active-class="router-link-active router-link-exact-active" aria-current="page">HOME</router-link>
  <router-link to="/StudentsList" class="btn btn-outline-light my-2 mx-3 text-light fw-bold" active-class="router-link-active">STUDENT DETAILS</router-link>
  <router-link to="/StudentsList" class="btn btn-outline-light my-2 mx-3 text-light fw-bold" active-class="router-link-active">FACULTY</router-link>
  <router-link to="/TimeTable" class="btn btn-outline-light my-2 mx-3 text-light fw-bold" active-class="router-link-active">TIME TABLE</router-link>
  <router-link to="/holiday" class="btn btn-outline-light my-2 mx-3 text-light fw-bold" active-class="router-link-active">HOLIDAYS LIST</router-link>
  <router-link to="/sports" class="btn btn-outline-light my-2 mx-3 text-light fw-bold" active-class="router-link-active">SPORTS</router-link>
  <router-link to="/results" class="btn btn-outline-light my-2 mx-3 text-light fw-bold" active-class="router-link-active">EVENTS</router-link>
</div>
<div class="col-10 content-height">
<router-view /> 
</div>
</div>
</div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useUserStore } from './stores/counter'
import Navigation from "./components/Login-page/NavBar.vue"
import router  from  './router';
const store = useUserStore()

onMounted(()=> {
  if(localStorage.getItem('accessToken')){
    store.isAuthenticated = true;
  }else{
    router.push('/');
  }
})

</script>

<style scoped>
.nav-height{
  height:6vh;
}
.navbar{
background-color: rgb(255, 255, 255);
}
.content-height{
  height:auto;
}
h1{
  color: darkgoldenrod;
  text-align: center;
  margin-top: 20vh;
  font-family:Comic Sans MS	;
  font-weight: 700;
}
h5{
  color: rgb(1, 47, 87);
  text-align: center;
 font-family:Comic Sans MS	;

}
img{
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 16px;
}
.sidebar{
background-color: rgba(1, 12, 48, 0.989);
height:auto;
}
.blue{
  width:500px;
  height: 50px;
  border-radius: 0%;
  margin-left: 190%;
}

</style>