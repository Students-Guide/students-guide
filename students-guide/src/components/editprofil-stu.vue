
<template>
<div>
    <teacher-navbar />
    <div id="edit">
      <div class="editProfile">
        <div class="container rounded bg-white mt-5 mb-5">
          <div class="row" id="editProfile">
            <div class="col-md-3 border-right">
              <div
                class="d-flex flex-column align-items-center text-center p-3 py-5"
              >
                <img
                  class="rounded-circle mt-5"
                  width="150px"
                  z
                  :src="user.profilePicture"
                /><span class="font-weight-bold">{{ user.username }}</span
                ><span class="text-black-50">{{ user.email }}</span
                ><span><router-link to="/studentChangePass"> 
                  <input
                   
                    type="button"
                    class="changePwdBtn profile-edit-btn"
                    name="btnAddMore"
                    value="Change Password"
                  /></router-link>
                </span>
              </div>
            </div>
            <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <h2 class="text-right">Profile Settings</h2>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">First name</label
                    ><input
                      
                      type="text"
                      class="form-control"
                      placeholder="first name"
                      :value="user.firstName"
                      @input="user.firstName = $event.target.value"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Last name</label
                    ><input
                     :value="user.lastName"
                      @input="user.lastName = $event.target.value"
                      type="text"
                      class="form-control"
                      
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Username</label
                    ><input
                    :value="user.username"
                      @input="user.username = $event.target.value"
                      
                      type="text"
                      class="form-control"
                      placeholder="enter username"
                      
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Email</label
                    ><input
                    :value="user.email"
                      @input="user.email = $event.target.value"
                     
                      type="text"
                      class="form-control"
                      placeholder="enter email"
                      
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Phone number</label
                    ><input
                    :value="user.phoneNumber"
                      @input="user.phoneNumber = $event.target.value"
                     
                      type="text"
                      class="form-control"
                      placeholder="enter phone number"
                      
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">education</label>
                    <textarea
                    :value="user.education"
                      @input="user.education = $event.target.value"
                      
                      type="text"
                      class="form-control"
                      placeholder="enter description"
                      
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <input
                  v-on:click="updateProfile()"
                  type="submit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Save"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import profile from "./profile.vue";
import TeacherNavbar from "./teacherNavbar.vue";
export default {
  components: { profile, TeacherNavbar },
  name: "edit",
  data() {
    return {
      user: {
          profilePicture:"",
          studentId:"",
       firstName: "", 
      lastName: "", 
      username: "",
      email:"",
      phone_number: "",
      education: "",
    }
      
    };
  },
  methods: {
    updateProfile() {
      const data = {
        
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        username: this.user.username,
        email: this.user.email,
        phone_number: this.user.phone_number,
        education: this.user.education
      };
      console.log(data);
          let y = localStorage.getItem('session');
          var id = JSON.parse(y)._id;
      // var id = "61bf420df768c4595c18e613";
      Axios.put(`http://localhost:5000/students/editProfil/${id}`, data)
        .then(({ data }) => {
          console.log("yes");
        })
        .catch(err => {
          console.error(err);
        });
        this.$router.push("/profil")
    }
  },
  beforeMount: function() {
    var id = "61bf420df768c4595c18e613";
    Axios
      .get(`http://localhost:5000/students/studentData/${id}`)
      .then(({ data }) => {
          console.log(data)
        this.user.studentId = data._id;
        this.user.profilePicture = data.profilePicture;
        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.email = data.email;
        this.user.username=data.username;
        this.user.phone_number = data.phone_number;
        this.user.education = data.education;
       
        
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.editProfileContainer {
  padding: 100px;
  min-height: 110vh;
}

.editProfile {
  width: 100%;
  /* background: radial-gradient(
    circle,
    rgba(0, 78, 255, 1) 0%,
    rgb(160, 255, 247) 96%
  ); */
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
#editProfile {
  box-shadow: 2px 4px 15px 0px rgb(0, 0, 0, 0.5);
  padding: 15px;
}
.profile-edit-btn {
  border: none;
  border-radius: 0.5rem;
  width: 90%;
  height: 7%;
  padding: 5%;
  font-size: 100%;
  color: #ffffff;
  cursor: pointer;
  background-color: rgb(55, 76, 194);
  margin-left: 330px;
}
.profile-edit-btn:hover {
  background-color: rgb(73, 94, 216);
}
.changePwdBtn {
  padding: 2%;
  border-radius: 5px;
  background-color: rgb(55, 76, 194);
  margin: 10px;
  color: #ffffff;
}
.changePwdBtn:hover {
  background-color: rgb(73, 94, 216);
}

</style>