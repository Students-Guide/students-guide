
<template>
    <html>
      <body>
        <div class="editProfile">
          <router-link to="/studentEditP"><span style="color:black;"><i class="fas fa-arrow-circle-left"></i></span></router-link>
          <div class="container mt-5" style="margin-left:20%; ">
            <div class="row d-flex justify-content-center">
              <div class="col-md-6">
                  <div v-if="!submitted" style="margin-left:4%;">
                    <label>Old password</label> 
                      <div class="forms-inputs mb-5"><input placeholder="Current Password" type="password" v-model="oldPassword" v-bind:class="{'form-control':true && passwordBlured}" v-on:blur="passwordBlured = true"></div>
                      <label>New password</label>
                      <div class="forms-inputs mb-4"> <input placeholder="New Password" type="password" v-model="newPassword" v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(newPassword) && passwordBlured}" v-on:blur="passwordBlured = true"></div>
                      <div class="mb-3"> <button v-on:click="changePassword()" class="btn btn-dark w-30" style="margin-left:85%">save</button>
                    </div>
                  </div>
                  <div class="success-data" v-else>
                    <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span class="text-center fs-1">Password Saved <br></span></div> 
                  </div>
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
</template>

<script>
import axios from "axios";

export default {
   name:"studentChangePassword",
    data: function () {
return {
newPassword:"",
oldPassword:"",
passwordBlured:false,
valid : false,
submitted : false,

}
},
methods:{ 
    validate : function(){

this.passwordBlured = true;
if( this.validPassword(this.newPassword)){
this.valid = true;
}
},

validPassword : function(password) {
if (password.length > 7) {
return true;
}
},
changePassword : function () {
    var data = { oldPassword: this.oldPassword, newPassword: this.newPassword };
    console.log(data);
    let y = localStorage.getItem('session')
    var id = JSON.parse(y)._id;
    //var id="61c5a7ba7d5d8d9fe7db5657"
    axios.put(`http://localhost:5000/students/changePassword/${id}`, data)
       .then((res)=> {      
           console.log(res) 
           this.validate();
            if(this.valid){
            this.submitted = true;
          this.$router.push('/studentEditP');
       }
       })
     }
}
}
</script>
<style scoped>
html {
    	margin: 0;
    	height: 100vh;
    	width: 100vh;
     }
.editProfile {
  width: 100%;
  background: linear-gradient(-20deg, rgb(255, 255, 255) 50%, #68738b 100%);
  border-radius: 20px;
  padding: 5%;
  height: 100%;
  margin-top: 5%;
  margin-left: 60%;
}
body{
    height: 100vh;
    display: block;
}
.card {
    border: none;
    height: 320px
}

.forms-inputs {
    position: relative
}

.forms-inputs span {
    position: absolute;
    top: -18px;
    left: 10px;
    background-color: #fff;
    padding: 5px 10px;
    font-size: 15px
}

.forms-inputs input {
    height: 50px;
    border: 2px solid #eee
}

.forms-inputs input:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #000
}

.btn {
    height: 50px
}
.bxs-badge-check {
    font-size: 90px
}
img{
    width:40%;
    height:40%;
}
.kouba{
    margin-top:-40%;
    margin-left:20%;
}
.profile-edit-btn{
    cursor: pointer;
    margin:50%;
}
#form1{
  background: linear-gradient(-20deg, rgb(255, 255, 255) 60%, #68738b 200%);
   
}
</style>
