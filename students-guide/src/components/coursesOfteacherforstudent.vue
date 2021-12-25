<template>
  <div>
    <div v-if="toggle">
      <div class="listContainer">
        <section id="courses" class="courses">
          <div class="container" data-aos="fade-up">
            <div
              id="rowCourses"
              class="row"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div
                v-on:click="togle(cours)"
                id="courseDetails"
                class="col-lg-4 col-md-6 d-flex align-items-stretch"
                :key="cours._id"
                v-for="cours in Courses"
              >
                <div class="course-item">
                  <div id="imgProduct">
                    <img :src="cours.thumbnail" class="img-fluid" alt="..." />
                  </div>

                  <div class="course-content">
                    <div
                      class="d-flex justify-content-between align-items-center mb-3"
                    >
                      <h4>{{ cours.category }}</h4>
                      <p class="price">
                        {{ cours.price }}
                        $
                      </p>
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-center mb-3"
                    >
                      <h3>{{ cours.title }}</h3>
                      <span>{{ cours.type }}</span>
                    </div>

                    <p>
                      {{ cours.description }}
                    </p>
                    <div
                      class="
                  trainer
                  d-flex
                  justify-content-between
                  align-items-center
                "
                    >
                      <div class="trainer-profile d-flex align-items-center">
                        <span> by : {{ cours.owner }}</span>
                      </div>
                      <div class="trainer-rank d-flex align-items-center">
                        <i class="bx bx-user"> {{ cours.likes }}</i
                        >&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                          />
                        </svg>
                        &nbsp;&nbsp;
                        <i class="bx bx-heart">{{ cours.views }}</i
                        >&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                          />
                          <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <detail v-if="!toggle" :cours="cours" />
  </div>
</template>

<script>
import TeacherNavbar from "./teacherNavbar.vue";
import detail from "./coursedetail.vue";
import axios from "axios";
export default {
  name: "courses",
  props: ["username"],
  data() {
    return {
      teacherusername: this.username,
      Courses: [],
      _id: "",
      toggle: true,
      course: {}
    };
  },
  beforeMount: function() {
    //     let y = localStorage.getItem('session')
    // this._id = JSON.parse(y).username
    console.log(this.username);

    var url = `http://localhost:5000/courses/get/${this.username}`;
    axios.get(url).then(res => {
      this.Courses = res.data;
      console.log(res.data);
    });
  },
  components: { TeacherNavbar, detail },
  methods: {
    togle(cours) {
      this.toggle = !this.toggle;
      this.cours = cours;
    }
  }
};
</script>

<style scoped>
/* *{
    border : red solid 2px
} */

.listContainer {
  padding: 50px;
  min-height: 110vh;
}

#courses {
  width: 90%;
  /* background: linear-gradient(-20deg, rgb(255, 255, 255) 50%, #68738b 100%); */
  background: #ebecf0;
  border-radius: 20px;
  padding: 5%;
  height: 100%;
  margin-left: 70px;
  margin-top: 15px;
}
#courseDetails {
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
/* #courseDetails:hover {
  transform: scale(1.04);
  background: #ebecf0;
  box-shadow: 5px 5px 10px #bebfc2, -5px -5px 10px #ffffff;
} */

.courses .course-item {
  border-radius: 15px;
  border: 1px solid #eef0ef;
  /* background: linear-gradient(-20deg, rgb(255, 255, 255) 20%, #00245a 100%); */
  background: #ebecf0;
  box-shadow: 21px 21px 42px #bebfc2, -21px -21px 42px #ffffff;
  margin: 10px;
}

.courses .course-item:hover {
  box-shadow: 10px 10px 20px #bebfc2, -10px -10px 20px #ffffff;
}

.courses .course-content {
  padding: 15px;
  /* background-color: #b638a1; */
  border-radius: 10px;
}
.courses .course-content h3 {
  font-weight: 700;
  font-size: 20px;
}
.courses .course-content h3 a {
  color: #37423b;
  transition: 0.3s;
}
.courses .course-content h3 a:hover {
  color: #387db6;
}
.courses .course-content p {
  font-size: 14px;
  color: #777777;
}
.courses .course-content h4 {
  font-size: 14px;
  cursor: pointer;
  padding: 7px 14px;
  font-size: large;
  color: rgb(79, 179, 219);
  margin: 0;
}
.courses .course-content .price {
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  color: #37423b;
}
.courses .trainer {
  padding-top: 15px;
  border-top: 1px solid #eef0ef;
}
.courses .trainer .trainer-profile img {
  max-width: 50px;
  border-radius: 50px;
}
.courses .trainer .trainer-profile span {
  padding-left: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #5a6c60;
}
.courses .trainer .trainer-rank {
  font-size: 18px;
  color: #657a6d;
}
.img-fluid {
  height: 100%;
  width: 100%;
  border-radius: 15px;
}
#imgProduct {
  height: 200px;
  /* background-color: #b638a1; */
  padding: 8px;
}
</style>
