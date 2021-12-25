<template>
  <div>
    <student-navbar />
    <div class="listContainer">
      <section v-if="!view" id="courses" class="courses">
        <div class="container" data-aos="fade-up">
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div
              v-on:click="changeview(cour)"
              id="courseDetails"
              v-for="cour in cours"
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              :key="cour.price"
            >
              <div class="course-item">
                <div id="imgProduct">
                  <img :src="cour.thumbnail" class="img-fluid" alt="..." />
                </div>

                <div class="course-content">
                  <div
                    class="d-flex justify-content-between align-items-center mb-3"
                  >
                    <h4 id="orange">{{ cour.category }}</h4>
                    <p class="price">
                      {{ cour.price }}
                      $
                    </p>
                  </div>

                  <h3>{{ cour.title }}</h3>
                  <p>{{ cour.description }}</p>
                  <div
                    class="
                  trainer
                  d-flex
                  justify-content-between
                  align-items-center
                "
                  >
                    <div class="trainer-profile d-flex align-items-center">
                      <span>{{ cour.owner }}</span>
                    </div>
                    <div class="trainer-rank d-flex align-items-center">
                      <i class="bx bx-user"> {{ cour.likes }}</i
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
                      <i class="bx bx-heart">{{ cour.views }}</i
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
      <div v-if="view"><addcourse :course="course" /></div>
    </div>
    <div v-if="view"><addcourse :course="course" /></div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./footer.vue";
import addcourse from "./studentFeedDetail.vue";
import StudentNavbar from "./studentNavbar.vue";
import axios from "axios";
export default {
  name: "feed",
  components: {
    addcourse,
    StudentNavbar,
    Footer
  },
  data() {
    return {
      cours: [],
      view: false,
      course: {}
    };
  },
  created: function() {
    axios.get("http://localhost:5000/students/free").then(({ data }) => {
      console.log(data, "it works");
      this.cours = data;
    });
  },
  methods: {
    changeview(course) {
      this.view = !this.view;
      this.course = course;
    }
  }
};
</script>

<style scoped>
.footer {
  margin-top: 0mm;
}
/* *{
    border : red solid 2px
} */

.listContainer {
  padding: 100px;
  min-height: 110vh;
}
#courses {
  padding: 100px;
  min-height: 110vh;
  padding-top: 5%;
  height: 100%;
  margin-left: -8%;
}
.container {
  width: 130%;
  /* background: linear-gradient(
    90deg,
    rgb(111, 137, 255) 0%,
    rgb(175, 184, 226) 50%,
    rgb(219, 232, 255) 100%
  ); */
  /* background: linear-gradient(
    90deg,
    rgb(0, 183, 207) 0%,
    rgb(121, 195, 255) 100%
  ); */
  background: linear-gradient(90deg, #58b8ff 0%, #96daff 100%);
  margin-top: -100px;
  border-radius: 20px;
  padding: 5%;
  height: 80%;
}

#courseDetails {
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
#courseDetails:hover {
  transform: scale(1.04);
}
.saveBtn {
  background: radial-gradient(circle, rgb(47, 0, 255) 0%, rgb(64, 45, 240) 96%);
  color: #eef0ef;
  padding: 7px;
  margin: 10px;
  border-radius: 5px;
}
.saveBtn:hover {
  background: radial-gradient(circle, rgb(47, 0, 255) 0%, rgb(35, 24, 138) 96%);
}

.courses .course-item {
  border-radius: 15px;
  border: 1px solid #eef0ef;
  /* background-color: rgb(231, 253, 255); */
  background: linear-gradient(-20deg, rgb(226, 226, 226) 20%, #ffffff 100%);
  margin: 10px;
  color: rgb(0, 0, 0);
}
.courses .course-content {
  padding: 15px;
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
  color: rgb(0, 0, 0);
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
}
</style>
