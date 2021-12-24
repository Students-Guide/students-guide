<template>
  <div>
    <teacher-navbar />
    <!-- <student-navbar /> -->
    <div class="profContainer">
      <div class="profil">
        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img id="teacherPic" :src="profilePicture" alt="" />
                  <div id="changepic" class="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" />
                  </div>

                  <h5 id="teacherName">
                    {{ this.firstName }} {{ this.lastName }}
                  </h5>
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <div class="parent">
                    <div class="teacherInfoProfile">
                      <h3 class="attr">First Name :</h3>
                      <h3 class="res">{{ this.firstName }}</h3>
                    </div>

                    <div class="teacherInfoProfile">
                      <h3 class="attr">Last Name :</h3>
                      <h3 class="res">{{ this.lastName }}</h3>
                    </div>

                    <div class="teacherInfoProfile">
                      <h3 class="attr">Courses :</h3>
                      <h3 class="res">{{ this.numCourses }}</h3>
                    </div>

                    <div class="teacherInfoProfile">
                      <h3 class="attr">Balance :</h3>
                      <h3 class="res">170$</h3>
                    </div>

                    <div class="teacherInfoProfile">
                      <h3 class="attr">Email :</h3>
                      <h3 class="res">{{ this.email }}</h3>
                    </div>

                    <div class="teacherInfoProfile">
                      <h3 class="attr">Phone :</h3>
                      <h3 class="res">{{ this.phoneNumber }}</h3>
                    </div>

                    <div class="teacherInfoProfile">
                      <h3 class="attr">Description :</h3>

                      <h3 class="res">
                        {{ this.profileDescription }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <!-- <input
                  @click="goToEdit()"
                  type="button"
                  id="goToEdit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                /> -->
                <router-link to="/edit" class="profile-edit-btn"
                  >Edit Profile</router-link
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import editProfil from "./editProfil.vue";
import TeacherNavbar from "./teacherNavbar.vue";
import StudentNavbar from "./studentNavbar.vue";
export default {
  components: { editProfil, TeacherNavbar, StudentNavbar },
  name: "profil",
  data() {
    return {
      teacherId: "",
      profilePicture: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      profileDescription: "",
      courses: [],
      numCourses: 0
    };
  },
  methods: {
    goToEdit() {
      this.$router.push("/edit");
    }
  },
  beforeMount: function() {
    // var id = "61bd17be144a7ce6a9d909a8";
    let y = localStorage.getItem("session");
    var studentData = JSON.parse(y);
    this.studentId = studentData._id;
    var id = this.studentId;
    axios
      .get(`http://localhost:5000/teachers/teacherData/${id}`)
      .then(({ data }) => {
        this.teacherId = data.teacherId;
        this.profilePicture = data.profilePicture;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.phoneNumber = data.phoneNumber;
        this.profileDescription = data.profileDescription;
        this.courses = data.courses;
        this.numCourses = data.courses.length;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.teacherInfoProfile {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.1px;
}
#goToEditProfileBtn {
  width: 120px;
  height: 30px;
}
.profContainer {
  padding: 100px;
  min-height: 110vh;
}
.profil {
  width: 100%;
  background: linear-gradient(-20deg, #c8e0ff 20%, rgb(77, 112, 209) 100%);
  border-radius: 20px;
  padding: 5%;
  height: 100%;
  margin-top: -30px;
}
.emp-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 2px 4px 15px 0px rgb(0, 0, 0, 0.5);
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 70%;
  height: 100%;
  border-radius: 5%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  margin-left: -105px;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
  border-radius: 5%;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
/* #teacherPic {
  margin-left: 50px;
} */
#changepic {
  margin-left: -7px;
}
#teacherName {
  color: #333;
  font-size: 200%;
}

.profile-edit-btn {
  border: none;
  border-radius: 0.5rem;
  width: 90%;
  height: 5%;
  padding: 6%;
  font-size: 100%;
  color: #ffffff;
  cursor: pointer;
  background-color: rgb(77, 112, 209);
}
.profile-edit-btn:hover {
  background-color: rgb(60, 96, 196);
}

.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
}
.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid rgb(77, 112, 209);
}
.profile-work {
  padding: 14%;
  margin-top: -15%;
  margin-top: -50%;
}
.profile-work p {
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a {
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul {
  list-style: none;
}

.parent {
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 20%;
  color: #333333;
}
.desc {
  margin-top: 10%;
}
.descText {
  width: 200%;
  margin-top: -10%;
  line-height: 1.8;
}

.attr {
  color: rgb(77, 112, 209);
}

h3 {
  margin-top: 7%;
}
</style>
