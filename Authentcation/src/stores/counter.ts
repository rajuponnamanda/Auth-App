import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("store", () => {
  const role = ref("");
  const image = ref("");
  const isAuthenticated = ref(false);
  return { image, role, isAuthenticated };
});
