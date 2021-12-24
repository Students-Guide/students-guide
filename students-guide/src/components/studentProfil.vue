<template>
  <div>
    <student-navbar />
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
                    <!-- (change)="uploadProfilePicture($event)" -->
                  </div>

                  <h5 id="teacherName">
                    {{ this.lastName }} {{ this.firstName }}
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
                      <h3 class="attr">Email :</h3>
                      <h3 class="res">{{ this.email }}</h3>
                    </div>

                    <div class="teacherInfoProfile">
                      <h3 class="attr">Phone :</h3>
                      <h3 class="res">{{ this.phoneNumber }}</h3>
                    </div>

                    <div class="teacherInfoProfile">
                      <h3 class="attr">Education :</h3>

                      <h3 class="res">
                        {{ this.education }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <input
                  type="submit"
                  id="goToEdit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
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
import StudentNavbar from "./studentNavbar.vue";
export default {
  components: { StudentNavbar },
  name: "profil",
  data() {
    return {
      profilePicture: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      education: ""
    };
  },
  methods: {
    goToEdit() {
      this.$router.push("/Studentedit");
    }
  },
  beforeMount: function() {
    var id = "61bf58e748a7b38c7d9270ef";
    axios
      .get(`http://localhost:5000/students/studentData/${id}`)
      .then(({ data }) => {
        this.profilePicture = data.profilePicture;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.phoneNumber = data.phone_number;
        this.education = data.education;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
/* body {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  background-color: rgb(0, 0, 0);
} */
/* #main {
  background-color: rgb(0, 0, 0);
} */
/* .profContainer {
  padding: 100px;
  min-height: 110vh;
}
.profil {
  width: 100%;

  background: linear-gradient(
    90deg,
    rgb(111, 137, 255) 0%,
    rgb(175, 184, 226) 50%,
    rgb(219, 232, 255) 100%
  );
  margin-top: -40px;
  border-radius: 20px;
  padding: 5%;
  height: 100%;
} */

/* *{
  border: red solid 2px;
} */
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
  background: linear-gradient(
    90deg,
    rgb(111, 137, 255) 0%,
    rgb(175, 184, 226) 50%,
    rgb(219, 232, 255) 100%
  );
  border-radius: 20px;
  padding: 5%;
  height: 100%;
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
#teacherPic {
  margin-left: -10px;
}
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
  padding: 2%;
  font-size: 100%;
  color: #ffffff;
  cursor: pointer;
  background-color: rgb(55, 76, 194);
}
.profile-edit-btn:hover {
  background-color: rgb(73, 94, 216);
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
  border-bottom: 2px solid #0062cc;
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
  color: #2b74e2;
}

h3 {
  margin-top: 7%;
}
</style>
