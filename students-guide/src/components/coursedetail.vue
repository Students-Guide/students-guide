<template>


<div class="container mt-5 mb-5">
  <div class="row d-flex align-items-center justify-content-center">
    <div class="card">
      <div class="d-flex justify-content-between p-2 px-3">
        <div class="d-flex flex-row align-items-center">
          <img
            :src= "ownerPicture" 
            width="50"
            class="rounded-circle"
          />
          <div id="ownerHead" class="d-flex flex-column ml-2">
            <span class="ownerSpan">{{this.owner}} </span>
            <small class="text-muted">{{this.createdAt}} </small>
          </div>
        </div>
        <div class="d-flex justify-content-around mt-2 ellipsis">
          <button   id='b' v-on:click="toggleUpdate()">📝</button>
          <button  id='b' v-on:click="toggleDelete()">x</button>
        </div>
      </div>

      <div v-if="delet" class="alldeleteButtonsDiv">
        <button
          type="button"
          class="alldeleteButtons"
          id="cancelbtn"
          v-on:click="toggleDelete()"
        >
          Cancel
        </button>
        <button
          type="button"
          class="alldeleteButtons"
          id="deletebtn"
          v-on:click="removeCourse()"
        >
          Confirm
        </button>
      </div>

      <div v-if="update">
        <div id="titleUpdate" class="mb-3">
          <label id="Title" for="Title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="Title"
            v-model="updatedTitle"

          />
        </div>
        <div id="descriptionUpdate" class="mb-3">
          <label id="Description" for="Description">Description</label>
          <input
            type="text"
            class="form-control"
            v-model="updatedDescription"
          />
        </div>
        <div id="priceUpdate" class="mb-3">
          <label id="Price" for="Description">Price</label>
          <input
            type="text"
            class="form-control"
            v-model="updatedPrice"
          />
        </div>

        <div>
          <button
            id="btnCancelUpdate"
            type="submit"
            class="btn btn-primary"
            v-on:click="toggleUpdate()"
          >
            Cancel
          </button>
          <button
            id="btnUpdate"
            type="submit"
            class="btn btn-primary"
            v-on:click="updateCourse()"
          >
            Update
          </button>
        </div>
      </div>

      <video v-if="!PDF" width="100%" height="600px" controls>
        <source :src="object " type="video/mp4" />
      </video>

      <embed
        v-if="PDF"
        :src="object"
        width="100%"
        height="600px"
      />
      <div class="d-flex justify-content-between p-2 px-3">
        <h1>
          {{this.title}}  <small>{{this.category}} </small>
        </h1>
        <h2 id="redPrice">{{this.price }}$</h2>
      </div>

      <p>{{this.description}} </p>
      <div class="p-2">
        <hr />
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex flex-row icons d-flex align-items-center">
             
          </div>
          <div class="d-flex flex-row muted-color">
            <span class="mx-2"> {{this.comments.length }} comments </span>
            <span class="mx-2"> {{this.views}}  views </span>
            <span class="mx-2"> {{this.likes}}  likes </span>
          </div>
        </div>
        <hr />
        <div class="comments">
          <div class="d-flex flex-row mb-2" v-for="comment in comments" :key='comment.comment'>
            <img
              :src= "comment.profilePicture"
              width="40"
              class="rounded-image"
            />
            <div class="d-flex flex-column ml-2">
              <span class="name"> {{comment.student}} </span>
              <small class="comment-text"> {{comment.comment}} </small>
              <div class="d-flex flex-row align-items-center status">
                <small> {{now(comment.createdAt)}} </small>
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

import axios from 'axios';
import moment from 'moment';

export default {
    name :'detail',
    props:['cours'],
  data(){
       return{  
courseId : this.cours._id,
title : this.cours.title,
owner : this.cours.owner,
object : this.cours.object,
ownerPicture:this.cours.ownerPicture,
comments:this.cours.comments,
createdAt:moment(this.cours.createdAt).fromNow(),
views:this.cours.views,
likes:this.cours.likes,
category:this.cours.category,
price:this.cours.price,
description:this.cours.description,
PDF:true,
delet:false,
update:false,
updatedTitle:'',
updatedDescription:'',
updatedPrice:'',


  }},
  methods:{
  
  now(time){
    return(moment(time).fromNow())
  },
 toggleDelete(){
   this.delet=!this.delet
   
 },
 toggleUpdate(){
   this.update=!this.update
 },
 removeCourse(){
     this.$router.go()
console.log(this.coursId);
    var url = `http://localhost:5000/courses/deleteCourse/${this.courseId}`;
    axios.delete(url).then((res) => {
      console.log(res)
  })
 },
 updateCourse(){
   var id = this.courseId
  var data={
    title:this.updatedTitle,
    description:this.updatedDescription,
    price:this.updatedPrice
  }
  axios.put(`http://localhost:5000/courses/editCourse/${id}`, data)

  .then(({data}) => {
    this.title=data.title;
    this.description=data.description;
    this.price=data.price;
    this.toggleUpdate()
  });
 }
  }
}
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"); */
/* *{
  border: red solid 2px;
} */
body {
  background-color: #eee;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}
.fas {
  margin-right: 10px;
  margin-left: 10px;
}
#redPrice {
  color: red;
}
#btnUpdate {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: large;
  color: #ffffff;
  background-color: #3662f4;
}
#titleUpdate {
  width: 50%;
  margin-left: 240px;
}
#btnCancelUpdate {
  font-size: large;
  color: #020202;
  background-color: #b3b3b3;
}
#descriptionUpdate {
  width: 50%;
  margin-left: 240px;
}
#priceUpdate {
  width: 50%;
  margin-left: 240px;
}
.ownerSpan {
  font-size: 20px;
}
#ownerHead {
  margin-left: 15px;
}
.card {
  border: none;
  width: 1000px;
  position: relative;
  left: 0px;
}

.ellipsis {
  color: #a09c9c;
}

hr {
  color: #a09c9c;
  margin-top: 4px;
  margin-bottom: 8px;
}

.muted-color {
  color: #a09c9c;
  font-size: 13px;
}

.ellipsis i {
  margin-top: 3px;
  cursor: pointer;
}

.icons i {
  font-size: 25px;
}

.icons .fa-heart {
  color: red;
}

.icons .fa-smile-o {
  color: yellow;
  font-size: 29px;
}
#b{
  background-color: #ffffff;
  margin: 5px;
}
.rounded-image {
  border-radius: 50% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
}

.name {
  font-weight: 600;
}

.comment-text {
  font-size: 12px;
}

.status small {
  margin-right: 10px;
  color: blue;
}

.form-control {
  border-radius: 26px;
}

.comment-input {
  position: relative;
}

.fonts {
  position: absolute;
  right: 13px;
  top: 8px;
  color: #a09c9c;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #8bbafe;
  outline: 0;
  box-shadow: none;
}

* {
  box-sizing: border-box;
}

/* Set a style for all buttons */
.alldeleteButtons {
  color: white;
  padding: 0px 0px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  height: 50px;
  opacity: 0.9;
}

.alldeleteButtonsDiv {
  height: 100px;
}

button:hover {
  opacity: 1;
}

/* Float cancel and delete buttons and add an equal width */
.cancelbtn,
.deletebtn {
  margin-left: 20px;
  margin-top: 25px;
  width: 20%;
  height: 50px;
 
}

/* Add a color to the cancel button */
#cancelbtn {
  background-color: #ccc;
  color: black;
}

/* Add a color to the delete button */
#deletebtn {
  background-color: #f43636 !important;
  color: white
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
  .cancelbtn,
  .deletebtn {
    width: 100%;
  }
}

</style>
