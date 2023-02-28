<template>
  <div class="container-flud">
    <nav class="navbar bg-warning">
      <div class="container mx-0">
        <h3 class="p-0 text-dark">Vue</h3>
      </div>
    </nav>
    <div v-if="!authenticated">
      <button @click="login" class="btn btn-dark mx-1 my-2" style="float:right;">
        Admin Login
      </button>
    </div>
    <div v-else>
      <button @click="logout"  class="btn btn-warning mx-1 my-2" style="float:right;">
        Logout
      </button>
    </div>
    <div v-if="account.profileImageUrl" class="profile">
        <img :src="account.profileImageUrl" alt="Profile Image" class="image" style="max-height:200px;">
      <h4 >{{ account.name }}</h4>
      <h4 >{{ account.username }}</h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { graphScopes, msalConfig, myMSALObj } from "../config";
import axios from 'axios';

interface Account {
  name: string;
  username: string;
  profileImageUrl?: string;
}
const authenticated = ref<boolean>(false);
const account = ref<Account>({ name: '', username: '' });
const login = async () => {
  try {
    myMSALObj.loginRedirect(graphScopes);
    const tokenResponse = await myMSALObj.acquireTokenSilent(graphScopes);
    const accessToken = tokenResponse.accessToken;
    const headers = { Authorization: `Bearer ${accessToken}`};
    const response = await axios.get('https://graph.microsoft.com/v1.0/me',  { headers });
    console.log(response);
    localStorage.setItem("accessToken",accessToken);
  } catch (err) {
    console.error(err);
  };
}

const logout = async () => {
  try {
    myMSALObj.logout();
    authenticated.value = false;
    account.value = { name: '', username: '' };
    localStorage.removeItem("accessToken")
  } catch (err) {
    console.error(err);
  }
};

const getProfileImage = async (accessToken: string) => {
  try {
    const headers = { Authorization: `Bearer ${accessToken}`};
    const response = await axios.get('https://graph.microsoft.com/v1.0/me/photo/$value', { headers, responseType: 'arraybuffer' });
    const blob = new Blob([response.data], { type: response.headers['content-type'] });
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  } catch (err) {
    console.error(err);
    return null;
  }
};
onMounted(async () => {
  const accountObj = myMSALObj.getAccount();
  if (accountObj) {
    try {
      const tokenResponse = await myMSALObj.acquireTokenSilent(graphScopes);
      const accessToken = tokenResponse.accessToken;
      const profileImageUrl = await getProfileImage(accessToken);
      authenticated.value = true;
      account.value = {
        name: accountObj.name ?? '',
        username:accountObj.userName ?? '',
        profileImageUrl: profileImageUrl ?? '',
      };
      localStorage.setItem("accessToken",accessToken);
    } catch (err){
      console.error(err)
    }

}else{
  myMSALObj.loginRedirect(graphScopes);
}
});
</script>
<style>
.profile{
  align-content: center;
  margin-left:42%;
}
.image{
  border-radius:50%;
  margin-top: 20%;
  margin-bottom:30px;
  border-style: ridge;
  border-width: 10px;
}
</style>