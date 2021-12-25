<template>
  <div>
    <teacher-navbar />

    <html>
      <body>
        <div class="editProfile">
          <router-link to="/edit"
            ><span style="color:black;"
              ><i class="fas fa-arrow-circle-left"></i></span
          ></router-link>
          <div class="container mt-5" style="margin-left:20%; ">
            <div class="row d-flex justify-content-center">
              <div class="col-md-6">
                <!-- <div class="card px-5 py-5" id="form1" > -->
                <div v-if="!submitted" style="margin-left:4%;">
                  <label>Old Password</label>
                  <div class="forms-inputs mb-4">
                    <input
                      placeholder="Current Password"
                      type="password"
                      v-model="oldPassword"
                      v-bind:class="{ 'form-control': true && passwordBlured }"
                      v-on:blur="passwordBlured = true"
                    />
                  </div>
                  <label>New Password</label>
                  <div class="forms-inputs mb-4">
                    <input
                      placeholder="New Password"
                      type="password"
                      v-model="newPassword"
                      v-bind:class="{
                        'form-control': true,
                        'is-invalid':
                          !validPassword(newPassword) && passwordBlured
                      }"
                      v-on:blur="passwordBlured = true"
                    />
                  </div>
                  <div class="mb-3">
                    <button
                      v-on:click="changePassword()"
                      class="btn btn-dark w-30"
                      style="margin-left:25%; margin-top:20px;"
                    >
                      save
                    </button>
                  </div>
                </div>
                <div class="success-data" v-else>
                  <div class="text-center d-flex flex-column">
                    <i class="bx bxs-badge-check"></i>
                    <span class="text-center fs-1">Password Saved <br /></span>
                  </div>
                </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
          <div class="kouba">
            <img
              class="rounded-circle"
              src="https://icon-library.com/images/reset-password-icon/reset-password-icon-29.jpg"
            />
          </div>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
import axios from "axios";
import TeacherNavbar from "./teacherNavbar.vue";
export default {
  name: "teacherChangePassword",
  components: { TeacherNavbar },
  data: function() {
    return {
      newPassword: "",
      oldPassword: "",
      passwordBlured: false,
      valid: false,
      submitted: false
    };
  },

  methods: {
    validate: function() {
      this.passwordBlured = true;
      if (this.validPassword(this.newPassword)) {
        this.valid = true;
      }
    },

    validPassword: function(password) {
      if (password.length > 7) {
        return true;
      }
    },
    changePassword: function() {
      var data = {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      };
      console.log(data);
      //let y = localStorage.getItem('session') as string;
      //var id = JSON.parse(y)._id;
      var id = "61bda588380c32c27834ad12";
      axios
        .put(`http://localhost:5000/teachers/changePassword/${id}`, data)
        .then(({ response }) => {
          console.log(response);
          this.validate();
          if (this.valid) {
            this.submitted = true;
          }
          this.$router.push("/profile");
        });
    }
  }
};
</script>
<style scoped>
html {
  margin: 0;
  height: 100vh;
  width: 100vh;
}
.editProfile {
  width: 100%;
  background: linear-gradient(-20deg, #c8e0ff 20%, rgb(77, 112, 209) 100%);
  border-radius: 20px;
  padding: 5%;
  height: 75%;
  margin-top: 10%;
  margin-left: 60%;
}
body {
  height: 100vh;
  display: block;
}
.card {
  border: none;
  height: 320px;
}

/* .forms-inputs {
    position: relative
} */

.forms-inputs span {
  position: absolute;
  top: -18px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px;
}

.forms-inputs input {
  height: 50px;
  width: 200px;
  border: 0px #eee;
  border-radius:5px;
}

.forms-inputs input:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid #000;
}

.btn {
  height: 40px;
  width:80px;
  margin-bottom: -20%;
  padding: 2%;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color: rgb(55, 76, 194);
  margin: 10px;
  color: #ffffff;
}
.btn:hover {
  background-color: rgb(73, 94, 216);
}

.success-data {
  display: flex;
  flex-direction: column;
}

.bxs-badge-check {
  font-size: 90px;
}
img {
  width: 40%;
  height: 40%;
}
.kouba {
  margin-top: -48%;
  margin-left: 22%;
}
.profile-edit-btn {
  cursor: pointer;
  margin: 50%;
}
#form1 {
  background: linear-gradient(-20deg, rgb(255, 255, 255) 60%, #68738b 200%);
}
</style>
