<template>
  <html>
    <body>
      <div
        class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"
        style="margin-top:6.5%;padding:0;height:100%"
          >
        <div>
          <div class="card card0 border-0" style="margin-top:-9%;">
            <div class="row d-flex" style="display:inline-block ; margin-bottom:-3%">
              <div class="col-lg-6">
                <div class="card1 pb-5">
                  <div
                    class="row px-3 justify-content-center mt-4 mb-5 border-line"
                  >
                    <img
                      src="https://media.discordapp.net/attachments/891447383584567306/923568508833521674/online-tutorials-concept_52683-37480.jpg"
                      class="image"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                  <h6>Sign In As</h6>
                  <table style="width:115px; margin-left:25%; margin-top:-8%;">
                    <tr>
                      <td></td>
                      <td class="radio">
                        <input
                          type="radio"
                          value="true"
                          name="fav_language"
                          v-model="userRole"
                          style="cursor: pointer;"
                        />
                      </td>
                      <td class="radio">
                        <input
                          type="radio"
                          value="false"
                          name="fav_language"
                          v-model="userRole"
                          style="cursor: pointer;"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>student</td>
                      <td>teacher</td>
                    </tr>
                  </table>

                  <div class="row px-3 mb-4">
                    <div class="line"></div>
                    <div class="line"></div>
                  </div>
                  <div class="row px-3">
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>
                    </label>
                    <input
                      class="mb-4"
                      type="text"
                      name="email"
                      placeholder="Enter a valid email address"
                      v-model="mail"
                    />
                    <label class="block text-sm" style="color: red"
                      >{{ error }}
                    </label>
                  </div>
                  <div class="row px-3">
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Password</h6>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      v-model="password"
                    />
                    <label class="block text-sm" style="color: red">{{
                      error
                    }}</label>
                  </div>
                  <div class="row px-3 mb-4">
                    <div
                      class="custom-control custom-checkbox custom-control-inline"
                    >
                      <input
                        id="chk1"
                        type="checkbox"
                        name="chk"
                        class="custom-control-input"
                        style="cursor:pointer;"
                      />
                      <label for="chk1" class="custom-control-label text-sm"
                        >Remember me</label
                      >
                    </div>
                    <router-link to="/forgotPassword">
                      <a class="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </router-link>
                  </div>
                  <div class="row mb-3 px-3">
                    <button
                      type="submit"
                      class="btn btn-blue text-center"
                      v-on:click="login()"
                    >
                      Login
                    </button>
                  </div>
                  <div class="row mb-4 px-3">
                    <small class="font-weight-bold"
                      >Don't have an account?
                      <router-link to="/">
                        <a class="text-danger ">Sign Up</a>
                      </router-link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-blue py-4">
            <div id="copyrights" class="row px-3">
              <small class="ml-4 ml-sm-5 mb-2"
                >Copyright &copy; 2021. Students Guide.</small
              >
            </div>
          </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>
<script>
import axios from "axios";

export default {
  name: "signin",
  data: function() {
    return {
      mail: "",
      password: "",
      userRole: "",
      error: "",
      res: { _id: 0 }
    };
  },
  methods: {
    login: function() {
      var data = {
        username_or_email: this.mail,
        password: this.password,
        userRole: this.userRole
      };
      console.log(data);
      if (data.username_or_email !== "" && data.password !== "") {
        if (this.userRole === "true") {
          let url = "http://localhost:5000/auth/student/signin";
          axios.post(url, data).then(
            res => {
              console.log(res);
              let myResponse = JSON.parse(JSON.stringify(res));
              console.log(myResponse.data.data.username);
              let session = {
                username: myResponse.data.data.username,
                _id: myResponse.data.data._id
              };
              console.log("HTTP response", res, "THIS A RES");
              localStorage.setItem("session", JSON.stringify(session));
              // this.setCookie(myResponse.jwt);

              let y = localStorage.getItem("session");
              console.log(y);
              if (!y.includes("error")) {
                this.$router.push("/studentFeed");
              }
              this.error = "you are so stupid you missed a password";
            },
            err => console.log("HTTP Error", err),
            () => console.log("HTTP request completed.")
          );
        } else if (this.userRole === "false") {
          let url = "http://localhost:5000/auth/teacher/signin";
          axios.post(url, data).then(
            res => {
              console.log(res);
              let myResponse = JSON.parse(JSON.stringify(res));
              let session = {
                username: myResponse.data.data.username,
                _id: myResponse.data.data._id
              };
              console.log("HTTP response", res, "THIS A RES");
              localStorage.setItem("session", JSON.stringify(session));
              // this.setCookie(myResponse.jwt);

              let y = localStorage.getItem("session");
              if (!y.includes("error")) {
                this.$router.push("/homeT");
              }
              this.error = "you are so stupid you missed a password";
            },
            err => console.log("HTTP Error", err),
            () => console.log("HTTP request completed.")
          );
        }
        // let role = this.userRole ? 'student' : 'teacher';
        // let loginDirection = this.userRole ? 'studentHome' : 'home';
      }
    }
  }
};
</script>
<style scoped>
html {
  height: 100%;
  width: 100%;
}
body {
  color: #000;
  overflow-x: hidden;
  background-color: #d3d9e9;
  background-repeat: no-repeat;
}

.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.image {
  width: 100%;
  height: 100%;
  margin-top: 10%;
}

.border-line {
  border-right: 1px solid #eeeeee;
}
.line {
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
}
.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #bdbdbd;
  opacity: 1;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

::-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

input,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304ffe;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1a237e;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #000;
  cursor: pointer;
}

.bg-blue {
  color: #fff;
  background-color: #1a237e;
}

@media screen and (max-width: 991px) {
  .image {
    width: 300px;
    height: 220px;
  }

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
}
.parent {
  margin-top: 4%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.radio {
  color: rgb(38, 131, 218);
}
h5 {
  color: rgb(3, 3, 83);
  font-size: 23px;
  margin-left: 38%;
}
.line {
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
}
td {
  color: rgb(38, 131, 218);
  padding: 10px;
}
table {
  border-spacing: 10px;
  border-collapse: separate;
}
#copyrights{
margin-left:40%;
}
</style>
