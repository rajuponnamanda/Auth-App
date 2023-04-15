<template>
  <div>
    <Classes />
    <div class="search-container"></div>
    <div class="classes-container" v-if="filteredClasses.length">
      <div v-for="(classData, index) in filteredClasses" :key="index">
        <!-- <h5 class="bg-light py-2 my-0">Class {{ classData.class }}</h5> -->
        <table class="table p-3">
          <thead>
            <tr class="bg-dark">
              <th>
                Roll No
                <input
                  type="text"
                  placeholder="Search Roll"
                  class="search-input"
                  v-model="school.searchRollNumber"
                />
              </th>

              <th>
                Name
                <input
                  type="text"
                  placeholder="Search Name"
                  class="search-input"
                  v-model="school.searchName"
                />
              </th>
              <th>
                Maths
                <input
                  type="text"
                  placeholder="Search Here"
                  class="search-input"
                  v-model="school.searchMaths"
                />
              </th>
              <th>
                Science
                <input
                  type="text"
                  placeholder="Search Here"
                  class="search-input"
                  v-model="school.searchScience"
                />
              </th>
              <th>
                English
                <input
                  type="text"
                  placeholder="Search Here"
                  class="search-input"
                  v-model="school.searchEnglish"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="student in classData.filteredStudents"
              :key="student.name"
            >
              <td
                v-html="
                  highlightedText(
                    student.roll_no.toString(),
                    school.searchRollNumber
                  )
                "
                class="px-4"
              ></td>
              <td
                v-html="highlightedText(student.name, school.searchName)"
              ></td>
              <td
                v-html="
                  highlightedText(
                    student.marks.maths.toString(),
                    school.searchMaths
                  )
                "
                class="px-4"
              ></td>
              <td
                v-html="
                  highlightedText(
                    student.marks.science.toString(),
                    school.searchScience
                  )
                "
                class="px-4"
              ></td>
              <td
                v-html="
                  highlightedText(
                    student.marks.english.toString(),
                    school.searchEnglish
                  )
                "
                class="px-4"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>No User found :{{ school.searchValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Classes from "../Student-details/Classes.vue";
import { schools } from "../../students";
const route = useRoute();
const school: any = reactive({
  searchName: "",
  searchRollNumber: "",
  searchMaths: "",
  searchScience: "",
  searchEnglish: "",
  classes: [],
  params: route.params,
});
console.log(route.params, "router.param");
const highlightedText = (text: string, searchTerm: any) => {
  if (!searchTerm) {
    return text;
  }
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
};

const fetchData = async () => {
  school.classes = schools[0].classes;
};

const filteredClasses: any = computed(() => {
  const filteredData: any = school.classes.find(
    (classData: any) => classData.class === route.params.id
  );
  if (!filteredData) {
    return [];
  }
  const searchName = school.searchName.toLowerCase();
  const searchRollNumber = school.searchRollNumber.toString();
  const searchMaths = parseInt(school.searchMaths);
  const searchEnglish = parseInt(school.searchEnglish);
  const searchScience = parseInt(school.searchScience);
  console.log(filteredData, "filtered Data");
  const filteredStudents = filteredData.students.filter((student: any) => {
    return (
      student.name.toLowerCase().includes(searchName) &&
      student.roll_no.toString().includes(searchRollNumber) &&
      (isNaN(searchMaths) || student.marks.maths === searchMaths) &&
      (isNaN(searchScience) || student.marks.science === searchScience) &&
      (isNaN(searchEnglish) || student.marks.english === searchEnglish)
    );
  });
  return [
    {
      filteredData,
      filteredStudents,
    },
  ];
});

onMounted(() => {
  fetchData();
});
</script>

<style>
.search-container {
  margin-bottom: 10px;
}
.search-input {
  width: 60%;
  padding: 5px;
  font-size: 16px;
}
.highlight {
  background-color: yellow;
  font-weight: bold;
}
</style>
