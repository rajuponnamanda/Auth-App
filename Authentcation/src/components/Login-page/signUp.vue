<template>
  <div class="container container-fluid justify-content-center">
    <h3 class="text-center my-5 fw-bold">
      WELCOME TO ARIQT INTERNATIONAL SCHOOL
    </h3>

    <!-- <img src="https://thumbs.dreamstime.com/b/modern-school-building-10981274.jpg" class="school-img shadow-lg "/> -->
    <img
      src="https://thumbs.dreamstime.com/b/modern-school-building-10981274.jpg"
      class="schools-img shadow-lg"
    />
    <div>
      <router-link to="/aboutUser" class="icon btn btn-outline-light">
        <i class="bi bi-person-circle"></i>
      </router-link>
    </div>
    <div v-if="account.profileImageUrl" class="profile">
      <img
        :src="account.profileImageUrl"
        alt="Profile Image"
        class="image"
        style="max-height: 200px"
      />
      <h4>{{ account.name }}</h4>
      <h4>{{ account.username }}</h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { graphScopes, msalConfig, myMSALObj } from "./config";
import axios from "axios";
import { useUserStore } from "../../stores/counter";

const userStore = useUserStore();

interface Account {
  name: string;
  username: string;
  profileImageUrl?: string;
}

const authenticated = ref(false);
const account = ref<Account>({ name: "", username: "" });

const getProfileImage = async (accessToken: string) => {
  try {
    const headers = { Authorization: `Bearer ${accessToken}` };
    const response = await axios.get(
      "https://graph.microsoft.com/v1.0/me/photo/$value",
      { headers, responseType: "arraybuffer" }
    );
    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
    const imageUrl = URL.createObjectURL(blob);
    userStore.image = imageUrl;
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
//       // const tokenResponse = await myMSALObj.acquireTokenSilent(graphScopes);
//       // const accessToken = tokenResponse.accessToken;
//       const profileImageUrl = await getProfileImage(accessToken);
//       account.value = {
//         name: accountObj.name ?? '',
//         username: accountObj.userName ?? '',
//         profileImageUrl: profileImageUrl ?? '',

//       };
//       const headers = { Authorization: `Bearer ${accessToken}` };
//       const user = await axios.get('https://graph.microsoft.com/v1.0/me', { headers });
//       console.log(userStore.role, "role");
//       userStore.role = user.data.jobtitle;

//     } catch (err) {
//       console.error(err);
//     }
//   } else {
//     myMSALObj.loginRedirect(graphScopes);
//   }
// });
</script>
<style>
.profile {
  align-content: center;
  margin-left: 42%;
  margin-top: 0%;
  padding-top: 0%;
}
.image {
  border-radius: 50%;
  margin-top: 10%;
  margin-bottom: 30px;
  border-style: ridge;
  border-width: 10px;
}
h3 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: rgb(0, 0, 31);
}
.school-img {
  padding-left: 0%;
  justify-content: center;
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(255, 255, 255);
  border-radius: 50%;
  height: 500px;
  width: 500px;
}
.schools-img {
  padding-left: 0%;
  margin-left: 15%;
  justify-content: center;
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(255, 255, 255);
  /* border-radius:50%; */
  height: 450px;
  width: 900px;
}
.icon {
  margin-left: 90%;
  margin-bottom: 10px;
}
.container {
  height: 90vh;
}
</style>
"
