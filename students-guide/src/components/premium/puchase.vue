<template>
  <div class="listContainer" >
  <div class="row d-flex align-items-center justify-content-center">
    <div class="card">
      <div class="d-flex justify-content-between p-2 px-3">
        <div class="d-flex flex-row align-items-center">
          <img
            src="{{ this.ownerPicture }}"
            width="50"
            class="rounded-circle"
          />
          <div id="ownerHead" class="d-flex flex-column ml-2">
            <span class="ownerSpan">{{ this.owner }} </span>
            <small class="text-muted">{{ this.createdAt }}</small>
          </div>
        </div>
        <div class="d-flex justify-content-around mt-2 ellipsis">
          <span> you need to puchase to see this content </span>
          <i (click)="addPaidCourse()" class="fas fa-shopping-cart"></i>
        </div>
      </div>

      <img
        src="https://forums.codemasters.com/uploads/monthly_2020_03/image.png.f8c83b98a2250b117a112bcfb92ca287.png"
        width="100%"
        height="100%"
        alt=""
      />

      <div class="p-2">
        <hr />
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex flex-row muted-color">
            <span class="mx-2"> {{ this.comments.length }} comments </span>
            <span class="mx-2"> {{ this.views }} views </span>
            <span class="mx-2"> {{ this.likes }} likes </span>
          </div>
        </div>
        <hr />
        <div class="comments">
          <div class="d-flex flex-row mb-2" *ngFor="let comment of comments">
            <img
              src="{{ comment.profilePicture }}"
              width="40"
              class="rounded-image"
            />
            <div class="d-flex flex-column ml-2">
              <span class="name">{{ comment.student }}</span>
              <small class="comment-text">{{ comment.comment }}</small>
              <div class="d-flex flex-row align-items-center status">
                <small>{{ comment.createdAt }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>   
</template>




<script>
export default {
     name:'purchase',
 data(){
      return {
           sub:'',
  id:'',
  paymentHandler: null,
  courseId : '',
  title : '',
  owner : '',
  object : '',
  ownerPicture : '',
  comments : [],
  createdAt : '',
  views : 0,
  likes : 0,
  category : '',
  price : 0,
  PDF : true,
  data:  '',

      }
 },
 created:function(){


 },
 methods:{
      
  addPaidCourse() {
    var y = localStorage.getItem('session') 
    var userId = JSON.parse(y)._id;
    var url2 = `http://localhost:5000/students/addToPannel/${this.courseId}/${userId}`;
    this.http.post(url2, {}).subscribe((data) => {
      console.log(data);
    });
    this.makePayment(this.price);
  },

  makePayment(amount) {
    const paymentHandler = (window).StripeCheckout.configure({
      key: 'pk_test_51K83lCJQO1zWvBTQKlHabQ70a8M07LWiKHKvYq8CjEccQALmAefnTJxhcoHIWlx2x0zCAC3TEC8YjOX0ihUBWAEH00w23vnYsV',
      locale: 'auto',
      token: function (stripeToken) {
        alert('Course added to your pannel !');
      },
    });
    paymentHandler.open({
      name: 'Pay with visa',
      description: '3 widgets',
      amount: amount * 100,
    });
  },
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (window).StripeCheckout.configure({
          key: 'pk_test_51K83lCJQO1zWvBTQKlHabQ70a8M07LWiKHKvYq8CjEccQALmAefnTJxhcoHIWlx2x0zCAC3TEC8YjOX0ihUBWAEH00w23vnYsV',
          locale: 'auto',
          token: function (stripeToken) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
 }
}
</script>























<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
/* *{
  border: red solid 2px;
} */
body {
    background-color: #eee;
    font-family: "Poppins", sans-serif;
    font-weight: 300
}
.fas {
    margin-right: 10px;
    margin-left: 10px;
  
}
#redPrice{
  color: red;
}
#btnUpdate{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}
#titleUpdate{
    width: 50%;
    margin-left: 240px;
}
#descriptionUpdate{
    width: 50%;
    margin-left: 240px;
}
#priceUpdate{
    width: 50%;
    margin-left: 240px;
}
.ownerSpan{
    font-size: 20px;
}
#ownerHead{
    margin-left: 15px;
}
.card {
    border: none;
    width: 1000px;
    position: relative;
    left: 0px;
}

.ellipsis {
    color: #a09c9c
}

hr {
    color: #a09c9c;
    margin-top: 4px;
    margin-bottom: 8px
}

.muted-color {
    color: #a09c9c;
    font-size: 13px
}

.ellipsis i {
    margin-top: 3px;
    cursor: pointer
}

.icons i {
    font-size: 25px
}

.icons .fa-heart {
    color: red
}

.icons .fa-smile-o {
    color: yellow;
    font-size: 29px
}

.rounded-image {
    border-radius: 50% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px
}

.name {
    font-weight: 600
}

.comment-text {
    font-size: 12px
}

.status small {
    margin-right: 10px;
    color: blue
}

.form-control {
    border-radius: 26px
}

.comment-input {
    position: relative
}

.fonts {
    position: absolute;
    right: 13px;
    top: 8px;
    color: #a09c9c
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #8bbafe;
    outline: 0;
    box-shadow: none
}



* {box-sizing: border-box}

/* Set a style for all buttons */
.alldeleteButtons {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  height: 100px;
  opacity: 0.9;
}

.alldeleteButtonsDiv{
    height: 100px;
}

button:hover {
  opacity:1;
}

/* Float cancel and delete buttons and add an equal width */
.cancelbtn, .deletebtn {
 margin-left: 20px;
 margin-top: 25px;
  width: 20%;
  height: 50px;
}

/* Add a color to the cancel button */
.cancelbtn {
  background-color: #ccc;
  color: black;
}

/* Add a color to the delete button */
.deletebtn {
  background-color: #f44336;
}

/* Add padding and center-align text to the container */
.container {
  padding: 16px;
  text-align: center;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* The Modal Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and delete button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .deletebtn {
    width: 100%;
  }
}
</style>