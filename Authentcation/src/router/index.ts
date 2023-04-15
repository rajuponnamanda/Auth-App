import { createRouter, createWebHistory } from "vue-router";
import signup from "../components/Login-page/signUp.vue"
import AddVue from "../components/Student-details/Add.vue";
import editVue from "../components/Student-details/Edit.vue";
import AllClasses from "../components/Student-classes/AllClasses.vue";
import NotFound from "../views/NotPoundPage.vue";
import TimeTable from "../components/Student-details/TimeTable.vue";
import Holiday from "../components/Student-details/HolidaysList.vue"
import About from "../components/Student-details/About.vue"
import ClassVue from "../components/Student-details/Classes.vue"
// import AllClasses from '../components/Student-classes/AllClasses.vue'

// import { useAuthStore } from "@/stores/AuthStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: signup,
    },
    {
      path: "/StudentsList/class/:id",
      component: AllClasses,
      name: 'class'
    },
 
    {
      path:'/TimeTable',
      component: TimeTable
    },
    {
      path:'/holiday',
      component:Holiday
    },
    {
      path: '/aboutUser',
      component:About
    },
    // {
    //   path: "/signup",
    //   component: signup,
    //   meta: {
    //     requiresAuth: true,
    //     requiredRole: null
    //   },
    // },
    {
      path: '/StudentsList',
      component: ClassVue,
      children: [
       
      ]
    },
    {
      path: "/add",
      component: AddVue,
      meta: {
        requiresAuth: true,
        requiredRole: 'senior developer'
      },
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: editVue,
      meta: {
        requiresAuth: true,
        requiredRole: 'senior developer'
      },
    },
    // {
    //   path: "/view/:id",
    //   name: "view",
    //   component: viewVue,
    //   meta: {
    //     requiresAuth: true,
    //     requiredRole: 'senior developer'
    //   },
    // },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
      meta: {
        
      },
    },

  ],

  linkActiveClass:'active-link',
});

   
export default router;
