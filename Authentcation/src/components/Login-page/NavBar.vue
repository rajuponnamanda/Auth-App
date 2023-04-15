<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <span class="navbar-brand my-0">
          <strong v-if="schools[0].name" class="title"> {{ schools[0].name }}</strong>
          <strong v-else>loadiing..</strong>
          <button v-if="userStore.isAuthenticated" @click="logout" class="button my-2 float-right">Logout</button>
          <button v-else @click="login" class="button my-2 float-right">Login</button>
          <router-link to="/signup" class="profile-link">
            <img v-if="userStore.isAuthenticated && userStore.image" :src="userStore.image" />
          </router-link>
        </span>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
// import { AccountInfo } from "@azure/msal-browser";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useUserStore } from "../../stores/counter";
import { myMSALObj, graphScopes, msalConfig } from "./config";
import {schools} from "../../students"

const userStore = useUserStore();
let accessToken = ref("");
const account = ref({ name: "", username: "", profileImageUrl: "" });

onMounted(async () => {
  myMSALObj.handleRedirectPromise().then((res) => {
    if (res != null && res.account != null) {
      myMSALObj.setActiveAccount(res.account);

      localStorage.setItem("accessToken", res.accessToken);
      console.log(res.accessToken, "accessToken");
      userStore.isAuthenticated = true;
      console.log(userStore.isAuthenticated, "auth");

      const profileImageUrl = getProfileImage(res.accessToken);
      const accountObj: any = myMSALObj.getActiveAccount();
      account.value = {
        name: accountObj.name ?? "",
        username: accountObj.username ?? "",
        profileImageUrl: userStore.image ?? "",
      };
    }
  });
});

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
function login() {
  myMSALObj.loginRedirect(graphScopes);
}

const logout = async () => {
  try {
    myMSALObj.logoutRedirect();
    account.value = { name: "", username: "", profileImageUrl: "" };
    userStore.isAuthenticated = false;
    localStorage.removeItem("accessToken");
  } catch (err) {
    console.error(err);
  }
};

const data = reactive({
  name: "",
  username: "",
  profileImageUrl: "", 
});

const fetchData = async () => {
  schools[0].name = schools[0].name;
};
onMounted(() => {
  fetchData();
});
</script>
<style scoped>
.navbar {
  background-color: rgb(255, 255, 255);
}
.content-height {
  height: 89vh;
}

img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.sidebar {
  background-color: rgba(239, 240, 245, 0.989);
  height: auto;
}
.blue {
  width: 500px;
  height: 50px;
  border-radius: 0%;
  /* margin-left:60%; */
}
.button {
  background-color: rgb(15, 10, 56);
  height: 40px;
  width: 100px;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  border-width: 0px;
  font-size: 70%;
  margin-left: 239%;
}
.title {
  /* background-image: url("https://www.colorcombos.com/images/colors/09143C.png"); */
  color: rgb(15, 10, 56);
  height: 50px;
  background-size: contain;
}
@media (max-width: 768px) {
  .navbar-brand {
    display: flex;
    justify-content: center;
  }
  .title {
    text-align: center;
  }
  .button {
    margin: 0 6px;
  }
  .profile-link {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
