<template>
  <div id="app">
   <div class="editProfile">
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row" id="editProfile">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5"
            width="150px"
            z
            :src="image"
          /><span class="font-weight-bold">{{username}}</span
          ><span class="text-black-50">{{teacher}}</span
          ><span>
            <input
              routerLink="/changePassword"
              routerLinkActive="active"
              type="submit"
              class="changePwdBtn"
              name="btnAddMore"
              value="Change Password"
            />
          </span>
        </div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="text-right">Profile Settings</h2>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">First name</label
              ><input
                v-model="firstName"
                type="text"
                class="form-control"
                placeholder="first name"
                value=""
              />
            </div>
            <div class="col-md-6">
              <label class="labels">Last name</label
              ><input
                v-model="lastName"
                type="text"
                class="form-control"
                value=""
                placeholder="Last name"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Username</label
              ><input
                v-model="username"
                type="text"
                class="form-control"
                placeholder="enter username"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Email</label
              ><input
                v-model="email"
                type="text"
                class="form-control"
                placeholder="enter email"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Phone number</label
              ><input
                v-model="phoneNumber"
                type="text"
                class="form-control"
                placeholder="enter phone number"
                value=""
              />
            </div>
            <div class="col-md-12">
              <label class="labels">description</label>
              <textarea
                v-model="profileDescription"
                type="text"
                class="form-control"
                placeholder="enter description"
                value=""
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
</template>

<script>
import Axios from "axios"
export default {
  
  name: 'edit',
  props:['teacher'],
  data () {
    return {
      user:{
    firstName:"",
    lastName:"",
    username:"",
    password:"",
    email:"",
    profileDescription:"",
    phoneNumber:"",
  }
    }
  },
   methods: {
     updateProfile(){
       const data = {
      firstName: this.firstName, 
      lastName: this.lastName, 
      username: this.username,
      email: this.email,
      phoneNumber: this.phoneNumber,
      profileDescription: this.profileDescription,
    };
       console.log(data)
    //     let y = localStorage.getItem('session');       
    // var id = JSON.parse(y)._id;
    var id="61bd17be144a7ce6a9d909a8";
  Axios.put(`http://localhost:5000/teachers/editProfil/${id}`, data).then(({data})=>{
    console.log('yes')
  }).catch((err)=>{
    console.error(err)
  })
  }
   }
  
}
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

