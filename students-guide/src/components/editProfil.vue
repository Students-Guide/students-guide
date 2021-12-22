<template>
<div if="edit">
 <p>router work</p>
 <router-link to="/" class="profile-edit-btn">profil</router-link>
 </div>
</template>

<script>
import Axios from "axios";
import profile from "./profile.vue";
import TeacherNavbar from "./teacherNavbar.vue";
export default {
  components: { profile, TeacherNavbar },
  name: "edit",
  props: ["teacher"],
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        profileDescription: "",
        phoneNumber: ""
      }
    };
  },
  methods: {
    updateProfile() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        phoneNumber: this.phoneNumber,
        profileDescription: this.profileDescription
      };
      console.log(data);
      //     let y = localStorage.getItem('session');
      // var id = JSON.parse(y)._id;
      var id = "61bd17be144a7ce6a9d909a8";
      Axios.put(`http://localhost:5000/teachers/editProfil/${id}`, data)
        .then(({ data }) => {
          console.log("yes");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
.editProfile {
  width: 87%;
  background: linear-gradient(-20deg, rgb(255, 255, 255) 50%, #68738b 100%);
  border-radius: 20px;
  padding: 5%;
  height: 100%;
  margin-left: 100px;
  margin-top: 70px;
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
  padding: 2%;
  font-size: 100%;
  color: #ffffff;
  cursor: pointer;
  background-color: rgb(0, 140, 255);
  margin-left: 320px;
}
.profile-edit-btn:hover {
  background-color: rgb(31, 154, 255);
}
.changePwdBtn {
  padding: 2%;
  border-radius: 5px;
  background-color: #85c6ff;
  margin: 10px;
}
</style>
