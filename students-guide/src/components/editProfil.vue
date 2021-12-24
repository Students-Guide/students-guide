
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
                ><span><router-link to="/teacherChangePass"> 
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
                    <label class="labels">facebook link</label
                    ><input
                    :value="user.facebook"
                      @input="user.facebook = $event.target.value"
                     
                      type="text"
                      class="form-control"
                      placeholder="enter facebooklink"
                      
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">github link</label
                    ><input
                    :value="user.github"
                      @input="user.github = $event.target.value"
                     
                      type="text"
                      class="form-control"
                      placeholder="enter github link"
                      
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">linkedin link</label
                    ><input
                    :value="user.linkedin"
                      @input="user.linkedin = $event.target.value"
                     
                      type="text"
                      class="form-control"
                      placeholder="enter linkedin link"
                      
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">description</label>
                    <textarea
                    :value="user.profileDescription"
                      @input="user.profileDescription = $event.target.value"
                      
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
        teacherId:"",
        profilePicture:"",
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        linkedin:"",
        facebook:"",
        github:"",
        profileDescription: "",
        phoneNumber: ""
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
        phoneNumber: this.user.phoneNumber,
        profileDescription: this.user.profileDescription,
        github:this.user.github,
        facebook:this.user.facebook,
        linkedin:this.user.linkedin
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
        this.$router.push("/profil")
    }
  },
  beforeMount: function() {
    var id = "61bd17be144a7ce6a9d909a8";
    Axios
      .get(`http://localhost:5000/teachers/teacherData/${id}`)
      .then(({ data }) => {
        this.user.teacherId = data.teacherId;
        this.user.profilePicture = data.profilePicture;
        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.email = data.email;
        this.user.username=data.username;
        this.user.phoneNumber = data.phoneNumber;
        this.user.profileDescription = data.profileDescription;
        this.user.github=data.github;
        this.user.facebook=data.facebook;
        this.user.linkedin=data.linkedin
       
        
      })
      .catch(err => {
        console.log(err);
      });
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
  
  margin: 10px;
}
</style>