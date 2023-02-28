<template>
  <div class="container-flud">
    <nav class="navbar bg-primary">
      <div class="container mx-0">
        <h3 class="p-0 text-light">Vue</h3>
      </div>
    </nav>

    <div v-if="!authenticated">
      <button
        @click="login"
        class="btn btn-dark mx-1 my-2"
        style="float: right"
      >
        Admin Login
      </button>
    </div>
    <div v-else>
      <button
        @click="logout"
        class="btn btn-warning mx-1 my-2"
        style="float: right"
      >
        Logout
      </button>
      <div style="text-align: center; margin-right: 20px">
        <h2>Welcome</h2>
        <h4>{{ account.name }}</h4>
        <p>{{ account.username }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { graphScopes, msalConfig, myMSALObj } from "../config";
import axios from "axios";

interface Account {
  name: string;
  username: string;
}

const authenticated = ref<boolean>(false);
const account = ref<Account>({ name: "", username: "" });

const login = async () => {
  try {
    const accountObj = myMSALObj.getAccount();
    myMSALObj.loginRedirect(graphScopes);
    const tokenResponse = await myMSALObj.acquireTokenSilent(graphScopes);
    if (tokenResponse.accessToken) {
      authenticated.value = true;
      account.value = {
        name: accountObj.name ?? "",
        username: accountObj.userName ?? "",
      };
      localStorage.setItem("accessToken", tokenResponse.accessToken);
    }
  } catch (err) {
    console.error(err);
  }
};
const logout = async () => {
  try {
    localStorage.clear()
    myMSALObj.logout();
    authenticated.value = false;
    account.value = { name: "", username: "" };
    localStorage.removeItem("accessToken");
  } catch (err) {
    console.error(err);
  }
};

async function getProfileDetails() {
  let accessToken = localStorage.getItem("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.get("https://graph.microsoft.com/v1.0/me", {
    headers,
  });
  console.log(response);
}
</script>
<!-- onMounted(async () => {
  const accountObj = myMSALObj.getAccount();
  // check if the user is already logged in
  if (accountObj) {
    try {
      const tokenResponse = await myMSALObj.acquireTokenSilent(graphScopes);
      const accessToken = tokenResponse.accessToken;
      debugger;
      authenticated.value = true;
      account.value = {
        name: accountObj.name ?? "",
        username: accountObj.userName ?? "",
      };
    } catch (err) {
      console.error(err);
    }
  } else {
    myMSALObj.loginRedirect(graphScopes);
  }
}); -->