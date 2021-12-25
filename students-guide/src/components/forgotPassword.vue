<template>
<html>
 <!-- <router-link to="/edit"><span style="color:black;"><i class="fas fa-arrow-circle-left"></i></span></router-link> -->
<body>
  <div class="parent">
        <div class="container mt-5" style="margin-left:20%; ">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                  <div style="margin-left:4%;">
                      <label id="label">Your Email Adress</label>
                      <div class="forms-inputs" style=" margin-top:5%;"> <input id="text" class="text-sm border rounded-md focus:outline-none focus:ring-1" placeholder=" Enter a valid email address" type="email" v-model="mail" style="height:50px"></div>
                      <div class="mb-3"  style=" margin-top:15%;">
                           <button v-on:click="forgetpassword($event)" class="btn btn-dark w-30" style="margin-left:75%">Reset Password</button>
                           <span style="color:#54acfc; margin-left:5%" ><small>{{sent}}</small></span>
                           </div>
                    </div>    
                </div>
            </div>
        </div>
        <div class="kouba">
           <img class="rounded-circle"  src="https://image.flaticon.com/icons/png/512/1000/1000948.png"/>  
        </div>
  </div>
</body>
</html>
</template>
<script>
import axios from "axios";

export default {
    name:"forgotPassword",
    data:function(){
        return{
            mail : '',
           sent: ''
        }
    },
    methods: {
    forgetpassword:function(event)
  { 
    var obj = {role : "teacher" , email : this.mail}
    var url = "http://localhost:5000/auth/forgotpassword";
    axios.post(url , obj).then((res)=>{
      console.log(res);
      event.target.hidden = true;
      this.sent="A new link has been sent to your Email"
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
body{
    height: 100vh;
    display: block;
}
.parent {
  width: 100%;
  border-radius: 20px;
  padding: 5%;
  height: 100%;
  margin-left: 50%;
  margin-top:5%;
/* background-color:#B3DFEC; */
  background: linear-gradient(-20deg, rgb(255, 255, 255) 50%, #B3DFEC 100%);

}
#label {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  size: 14px;
  font-weight: 500;
  line-height: 17px;
  margin-top:50%;
 
}
img{
    width:40%;
    height:40%;
    margin-top: -35%;
}
.kouba{

    margin-left:20%;
}
.btn-dark{
  width: 150px;
  color: #fff;
  border-radius: 2px;
}
#text{
    width: 250px;
}
</style>
