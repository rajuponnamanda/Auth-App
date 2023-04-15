<template>
    <div class="container-fluid">
        <h2>User Profile</h2>
     <div v-if="account.profileImageUrl" class="profile">
        <img :src="account.profileImageUrl" alt="Profile Image" class="image" style="max-height:200px;">
        <h4>{{ account.name }}</h4>
        <h4>{{ account.username }}</h4>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import { graphScopes, msalConfig, myMSALObj } from "../Login-page/config";
  import axios from 'axios';
  import { useUserStore } from "../../stores/counter";
  
  const userStore = useUserStore( );
  
  
  interface Account {
    name: string;
    username: string;
    profileImageUrl?: string;
  }
  // router.push('/')
  const authenticated = ref(false);
  const account = ref<Account>({ name: '', username: '' });
  
  // const login = async () => {
  //   try {
  //     myMSALObj.loginRedirect(graphScopes);
  //     const tokenResponse = await myMSALObj.acquireTokenSilent(graphScopes);
  //     const accessToken = tokenResponse.accessToken;
  //     const headers = { Authorization: `Bearer ${accessToken}` };
  //     const response = await axios.get('https://graph.microsoft.com/v1.0/me', { headers });
  //     console.log(response);
  //     localStorage.setItem("accessToken", accessToken);  } catch (err) {
  //     console.error(err);
  //   }
  // };
  
  
  
  const getProfileImage = async (accessToken: string) => {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get('https://graph.microsoft.com/v1.0/me/photo/$value', { headers, responseType: 'arraybuffer' });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const imageUrl = URL.createObjectURL(blob);
      userStore.image=imageUrl
      return imageUrl;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  
  // onMounted(async () => {
  //   const accountObj = myMSALObj.getAccount();
  //   if (accountObj) {
  //     try {
  //       const tokenResponse = await myMSALObj.acquireTokenSilent(graphScopes);
  //       const accessToken = tokenResponse.accessToken;
  //       const profileImageUrl = await getProfileImage(accessToken);
  //       authenticated.value = true;
  //       account.value = {
  //         name: accountObj.name ?? '',
  //         username: accountObj.userName ?? '',
  //         profileImageUrl: profileImageUrl ?? '',
  
  //       };
  //       const headers = { Authorization: `Bearer ${accessToken}` };
  //       const user = await axios.get('https://graph.microsoft.com/v1.0/me', { headers });
  //       console.log(userStore.role);
  //       userStore.role = user.data.jobtitle;
  
        
  //       localStorage.setItem("accessToken", accessToken);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   } else {
  //     myMSALObj.loginRedirect(graphScopes);
  //   }
  // });
  
  
  </script>
  <style>
  .profile{
    align-content: center;
    margin-left:42%;
    margin-top: 0%;
  }
  .image{
    border-radius:50%;
    margin-top: 20%;
    margin-bottom:30px;
    border-style: ridge;
    border-width: 10px;
  }
  h3{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgb(0, 0, 31);
  }
  h2{
    text-align: center;
    margin-right:10px;
  }

  </style>"