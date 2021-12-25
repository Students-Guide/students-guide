<template>
  <div>
    <student-navbar />

    <div class="container listContainer" v-if="view">
      <div class="card" :key="teacher._id" v-for="teacher in teachers">
        <img :src="teacher.profilePicture" alt="Person" class="card__image" />
        <p class="card__name">
          {{ teacher.firstName + " " + teacher.lastName }}
        </p>
        <div class="grid-container">
          <div class="grid-child-posts">
            {{ teacher.courses.length }} courses
          </div>

          <div class="grid-child-followers">
            20 followers
          </div>
        </div>
        <ul class="social-icons">
          <li>
            <a :href="teacher.facebook || '#'" target="_blank"
              ><i class="fa fa-facebook"></i
            ></a>
          </li>
          <li>
            <a :href="teacher.github || '#'" target="_blank"
              ><i class="fa fa-github"></i
            ></a>
          </li>
          <li>
            <a :href="teacher.linkedin || '#'" target="_blank"
              ><i class="fa fa-linkedin"></i
            ></a>
          </li>
        </ul>
        <button class="btn draw-border">Follow</button>
        <button class="btn draw-border" v-on:click="togle(teacher.username)">
          courses
        </button>
      </div>
    </div>
    <courses v-if="!view" :username="dd" />
  </div>
</template>
<script>
import Footer from "./footer.vue";
import axios from "axios";
import courses from "./coursesOfteacherforstudent.vue";
import StudentNavbar from "./studentNavbar.vue";
export default {
  components: { courses, StudentNavbar, Footer },
  name: "teacherforstudent",
  data() {
    return {
      teachers: [],
      teacher: {},
      view: true
    };
  },
  methods: {
    togle(cc) {
      this.dd = cc;
      this.view = !this.view;
    }
  },
  beforeMount: function() {
    axios
      .get(`http://localhost:5000/teachers/teacherData`)
      .then(({ data }) => {
        this.teachers = data;
        console.log(this.teachers);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500&display=swap");

.container {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  padding-left: 180px;
  font-family: "Baloo Paaji 2", cursive;
  margin: 15px;
}

.card {
  background-color: #d4d4d4;
  height: 37rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
}
.grid-child-followers {
  color: #272133;
}
.grid-child-posts {
  color: #272133;
}
.card__name {
  color: #272133;
  margin-top: 15px;
  font-size: 1.5em;
}

.card__image {
  height: 160px;
  width: 160px;
  border-radius: 50%;
  border: 5px solid #272133;
  margin-top: 20px;
  box-shadow: 0 10px 50px rgb(255, 255, 255);
}

.draw-border {
  box-shadow: inset 0 0 0 4px #3b79ff;
  color: #3970e7;
  -webkit-transition: color 0.25s 0.0833333333s;
  transition: color 0.25s 0.0833333333s;
  position: relative;
}

.draw-border::before,
.draw-border::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0rem;
  height: 0;
  bottom: 0;
  right: 0;
}

.draw-border::before {
  border-bottom-width: 4px;
  border-left-width: 4px;
}

.draw-border::after {
  border-top-width: 4px;
  border-right-width: 4px;
}

.draw-border:hover {
  color: #1938eb;
}

.draw-border:hover::before,
.draw-border:hover::after {
  border-color: #1938eb;
  -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
  transition: border-color 0s, width 0.25s, height 0.25s;
  width: 100%;
  height: 100%;
}

.draw-border:hover::before {
  -webkit-transition-delay: 0s, 0s, 0.25s;
  transition-delay: 0s, 0s, 0.25s;
}

.draw-border:hover::after {
  -webkit-transition-delay: 0s, 0.25s, 0s;
  transition-delay: 0s, 0.25s, 0s;
}

.btn {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.2rem "Roboto Slab", sans-serif;
  padding: 0.75em 2em;
  letter-spacing: 0.05rem;
  margin: 1em;
  width: 13rem;
}

.btn:focus {
  outline: 2px dotted #55d7dc;
}

.social-icons {
  padding: 0;
  list-style: none;
  margin: 1em;
}

.social-icons li {
  display: inline-block;
  margin: 0.15em;
  position: relative;
  font-size: 1em;
}

.social-icons i {
  color: #fff;
  position: absolute;
  top: 0.95em;
  left: 0.96em;
  transition: all 265ms ease-out;
}

.social-icons a {
  display: inline-block;
}

.social-icons a:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: " ";
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
  background: linear-gradient(45deg, #2e5efc, #3c8ffd);
  transition: all 265ms ease-out;
}

.social-icons a:hover:before {
  transform: scale(0);
  transition: all 265ms ease-in;
}

.social-icons a:hover i {
  transform: scale(2.2);
  -ms-transform: scale(2.2);
  -webkit-transform: scale(2.2);
  color: #0084ff;
  background: -webkit-linear-gradient(45deg, #0051ff, #3d4aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 265ms ease-in;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  font-size: 1.2em;
}
</style>
