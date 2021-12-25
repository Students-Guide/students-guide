<template>
  <html>
    <body>
      <div
        class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"
        style="margin-top:3%;padding:0;height:90%"
      >
        <div style="margin-top:-2%;padding:0">
          <div class="card card0 border-0" style="margin-top:-5%;">
            <div
              class="row d-flex"
              style="display:inline-block ;margin-bottom:-1.5%"
            >
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
              <div class="col-lg-6" style="height:90%;">
                <div class="card2 card border-0 px-4 py-5">
                  <h6 class="mb-0 mr-4 mt-2">Sign Up as</h6>
                  <table
                    style="width:115px;height:90%; margin-left:25%; margin-top:-6%;"
                  >
                    <tr>
                      <td class="radio">
                        <input
                          type="radio"
                          value="true"
                          name="fav_language"
                          v-model="userRole"
                          style="cursor: pointer;"
                        />
                      </td>
                      <td class="radio"></td>
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
                      <td>student</td>
                      <td></td>
                      <td>teacher</td>
                    </tr>
                  </table>

                  <div class="row px-3 mb-4">
                    <div class="line"></div>
                    <div class="line"></div>
                  </div>
                  <table style="width:100%">
                    <tr>
                      <td>
                        <label style="color:black ;" class="label">
                          first Name
                        </label>
                        <input
                          class="text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          placeholder="firstName"
                          v-model="firstName"
                          type="text"
                        />
                        <label style="color: red"> {{ firstNameError }} </label>
                      </td>
                      <td>
                        <label style="color:black" class="label">
                          last Name
                        </label>
                        <input
                          class="text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          placeholder="lastName"
                          v-model="lastName"
                          type="text"
                        />
                        <label style="color: red"> {{ lastNameError }} </label>
                      </td>
                    </tr>
                  </table>

                  <div id="hasaka" class="row px-3">
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>
                    </label>
                    <input
                      class="mb-4"
                      type="text"
                      placeholder="Enter a valid email address"
                      v-model="Email"
                    />
                    <label class="block text-sm" style="color: red"
                      >{{ emailError }}
                    </label>
                  </div>
                  <div class="row px-3">
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Username</h6>
                    </label>
                    <input
                      class="mb-4"
                      type="text"
                      placeholder="Enter a valid username"
                      v-model="userName"
                    />
                    <label class="block text-sm" style="color: red"
                      >{{ userNameError }}
                    </label>
                  </div>
                  <table style="width:100%;margin-left:-2%">
                    <tr>
                      <td>
                        <label style="color:black" class="label">
                          Password</label
                        >
                        <input
                          class="text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          placeholder="Enter password"
                          v-model="password"
                          type="password"
                        />
                        <label style="color: red"> {{ passwordError }} </label>
                      </td>
                      <td>
                        <label style="color:black" class="label"
                          >Confirm Password</label
                        >
                        <input
                          class="text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          placeholder="Confirm password"
                          v-model="confirmPassword"
                          type="password"
                        />
                        <label style="color: red">
                          {{ passwordNotMatching }}
                        </label>
                      </td>
                    </tr>
                  </table>

                  <table style="width:100%;margin-bottom:15px;">
                    <tr>
                      <td>
                        <button
                          type="submit"
                          class="btn btn-blue text-center"
                          v-on:click="signup()"
                        >
                          Sign Up
                        </button>
                      </td>
                      <td>
                        <button
                          type="submit"
                          class="btn btn-blue text-center"
                          v-on:click="makePayment(20)"
                        >
                          Pay 20$
                        </button>
                      </td>
                    </tr>
                  </table>

                  <div class="row mb-4 px-3">
                    <small class="font-weight-bold"
                      >already have an account?
                      <router-link to="/signin">
                        <a class="text-danger ">Sign In</a>
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
  name: "signUp",
  data: function() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      Email: "",
      password: "",
      confirmPassword: "",
      passwordError: "",
      passwordNotMatching: "",
      emailError: "",
      firstNameError: "",
      lastNameError: "",
      userNameError: "",
      userRole: "",
      paymentHandler: null
    };
  },
  methods: {
    check: function() {
      var flag = true;
      if (this.lastName.length === 0) {
        this.lastNameError = "last name should not be empty";
        flag = false;
      }
      if (this.userName.length === 0) {
        this.userNameError = "userName shouldn't be empty";
        flag = false;
      }
      if (this.lastName.length === 0) {
        this.firstNameError = "first name shoulden't be empty";
        flag = false;
      }
      if (this.password.length < 8) {
        this.passwordError = "password should have more then 8 character";
        console.log(this.passwordError);
        flag = false;
      }
      if (this.password !== this.confirmPassword) {
        this.passwordNotMatching = "password not matching";
        flag = false;
      }
      if (!this.Email.includes("@")) {
        this.emailError = "email should be valid email";

        flag = false;
      }
      if (this.password !== this.confirmPassword) {
        this.passwordNotMatching = "password not matching";
        flag = false;
      }

      return flag;
    },
    signup: function() {
      this.passwordError = "";
      this.passwordNotMatching = "";
      this.emailError = "";
      this.firstNameError = "";
      this.lastNameError = "";
      this.userNameError = "";

      var x = this.check();
      var data = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.userName,
        email: this.Email,
        password: this.password,
        role: this.userRole,
        courses: this.Cour
      };
      console.log(data);
      if (this.check()) {
        let url = "http://localhost:5000/auth/signup";
        axios.post(url, data).then(
          ({ data }) => {
            console.log("data", data);
            //this.router.navigate(['/signin']);
            this.$router.push("/signin");
          },
          err => {
            alert("error");
          }
        );
      }
    },
    makePayment: function(amount) {
      if (this.userRole === "false") {
        const paymentHandler = window.StripeCheckout.configure({
          key:
            "pk_test_51K83lCJQO1zWvBTQKlHabQ70a8M07LWiKHKvYq8CjEccQALmAefnTJxhcoHIWlx2x0zCAC3TEC8YjOX0ihUBWAEH00w23vnYsV",
          locale: "auto",
          token: function(stripeToken) {
            console.log(stripeToken);
            alert("Stripe token generated!");
          }
        });

        paymentHandler.open({
          name: "Positronx",
          description: "3 widgets",
          amount: amount * 100
        });
      } else {
        alert("Only Teachers have to pay");
      }
    },

    invokeStripe: function() {
      if (!window.document.getElementById("stripe-script")) {
        const script = window.document.createElement("script");
        script.id = "stripe-script";
        script.type = "text/javascript";
        script.src = "https://checkout.stripe.com/checkout.js";
        script.onload = () => {
          this.paymentHandler = window.StripeCheckout.configure({
            key:
              "pk_test_51K83lCJQO1zWvBTQKlHabQ70a8M07LWiKHKvYq8CjEccQALmAefnTJxhcoHIWlx2x0zCAC3TEC8YjOX0ihUBWAEH00w23vnYsV",
            locale: "auto",
            token: function(stripeToken) {
              console.log(stripeToken);
              alert("Payment has been successfull!");
            }
          });
        };
        window.document.body.appendChild(script);
      }
    }
  }
};
</script>
<style scoped>
html {
  height: 100%;
  max-width: 100%;
}
body {
  color: #000;
  overflow-x: hidden;
  background-color: #d3d9e9;
  background-repeat: no-repeat;
  width: 100%;
}

.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}
.hasaka {
  margin-top: -40px;
}

.image {
  width: 100%;
  height: 100%;
  margin-top: 15%;
  margin-left: 1%;
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
#copyrights {
  margin-left: 40%;
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
  margin-top: 20px;
}

@media screen and (max-width: 991px) {
  /* .image {
    width: 300px;
    height: 220px;
  } */

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
}

.radio {
  color: rgb(38, 131, 218);
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
  margin-top: -30px;
  margin-bottom: -30px;
}
.label {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  size: 14px;
  font-weight: 500;
  line-height: 17px;
  margin-top: -60px;
}
</style>
