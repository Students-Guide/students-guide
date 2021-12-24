<template>
<div>
 
<div class="container mt-5 mb-5">
  <div class="row d-flex align-items-center justify-content-center">
    <div class="card">
      <div class="d-flex justify-content-between p-2 px-3">
        <div class="d-flex flex-row align-items-center">
          <img
            :src=" ownerPicture"
            width="50"
            class="rounded-circle"
          />
          <div id="ownerHead" class="d-flex flex-column ml-2">
            <span class="ownerSpan">{{ owner }} </span>
            <small class="text-muted">{{ createdAt }}</small>
          </div>
        </div>
        <!-- <button type="button" class='alldeleteButtons' class="cancelbtn"(click)="addtopannel()" >add to pannel</button> -->
        <button  v-on:click="addtopannel()" class="save">
          <i >Save</i> 
        </button>
      </div>

      <video v-if="!PDF" width="100%" height="600px" controls>
        <source :src="object" type="video/mp4" />
      </video>

      <embed
        v-if="PDF"
        :src="object"
        width="100%"
        height="600px"
      />
      <div class="p-2">
        <hr />
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex flex-row icons d-flex align-items-center">
            <button  v-on:click="react()">like</button>
            
          </div>
          <div class="d-flex flex-row muted-color">
            <span class="mx-2"> {{ comments.length }} comments </span>
            <span class="mx-2"> {{ views }} views </span>
            <span class="mx-2"> {{ likes }} likes </span>
          </div>
        </div>
        <hr />
        <div class="comments">
          <div class="d-flex flex-row mb-2" v-for=" comment in comments" :key='comment.comment'>
            <img
              :src=" comment.profilePicture "
              width="40"
              class="rounded-image"
            />
            <div class="d-flex flex-column ml-2">
              <span class="name">{{ comment.student }}</span>
              <small class="comment-text">{{ comment.comment }}</small>
              <div class="d-flex flex-row align-items-center status">
                <small>{{ time(comment.createdAt) }}</small>
              </div>
            </div>
          </div>
          <div class="comment-input">
            <input
              type="text"
              placeholder="write your comment here"
             @keyup.enter='addComment()'
              v-model="text"
              class="form-control"
              onfocus=this.value
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
import moment from 'moment'
import axios from 'axios'
import StudentNavbar from "./studentNavbar.vue";;
export default ({
  components:{
    StudentNavbar
  },
     name:'addcourse',
     props:['course'],
   data(){
        return {
  id: this.course._id,
  user: '',
  courseId : '',
   title : this.course.title,
   owner : this.course.owner,
   object : this.course.object, 
   ownerPicture : this.course.ownerPicture,
   comments : this.course.comments,
   createdAt : moment(this.course.createdAt).fromNow(),
   views : this.course.views,
   likes : this.course.likes,
   category : this.course.category,
   price : this.course.price,
  PDF : true,
  delete : false,
  edit : false,
  color : 'black',
  text : '',

        }
   } ,
   methods:{
     addtopannel(){
  var url = `http://localhost:5000/courses/addtopannel/${this.id}/${this.user}`;
 axios.post(url,{}).then(data=>{
    console.log(data);
  })

},

  addComment(){
    var comment={text : this.text}
    var url = `http://localhost:5000/courses/comment/${this.id}/${this.user}`;
   axios.post(url,comment).then(({data}) => {
      this.comments=data 
  
    })
  },

 time(now){
   return(moment(now).fromNow())
 },

  react() {
    if (this.color === 'black') {
      this.like();
    } else if (this.color === 'red') {
      this.unlike();
    }
  },
  unlike() {
    var url = `http://localhost:5000/courses/unlike/${this.id}/${this.user}`;

   axios.get(url).then(({data}) => {
      this.liked();
      this.likes = data.likes;
    });
  },
  like() {
    var url = `http://localhost:5000/courses/like/${this.id}/${this.user}`;
   axios.get(url).then(({data}) => {
        console.log(data);
      this.likes = data.likes;
      this.liked();
    });
  },

  liked() {
    var url = `http://localhost:5000/courses/liked/${this.id}/${this.user}`;
   axios.get(url).then(({data}) => {
      if (data) {
        this.color = 'red';
      } else {
        this.color = 'black';
      }
    });
  },
   },
   created:function(){
    var y = localStorage.getItem('_id') 
    this.user = y;
console.log(this.user);
//     this.sub = this.route.params.then((params) => {
//       this.id = params['id'];
//     });
//     var url = `http://localhost:5000/courses/view/${this.id}`;
//     axios.post(url, {}).then((res) => {
//       this.title = res.data.title;
//       this.owner = res.data.owner;
//       let url = res.data.object;
//       this.object = url;
//       this.ownerPicture = res.data.ownerPicture;
//       this.comments = res.data.comments;
//       this.createdAt = moment(res.data.createdAt).fromNow();
//       this.views = res.data.views;
//       this.likes = res.data.likes;
//       this.category = res.data.category;
//       this.price = res.data.price;
//       if (res.data.type === 'PDF') {
//         this.PDF = true;
//       } else {
//         this.PDF = false;
//       }
//     });
//     this.liked();

//     console.log(this.comments);
 console.log(this.course)
   }
})
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
.ownerSpan {
  font-size: 20px;
}
.save {
  background-color: rgb(55, 76, 194);
  color: white;
  border-radius: 5px;
  padding-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.save:hover {
  background-color: rgb(73, 94, 216);
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
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Float cancel and delete buttons and add an equal width */
.cancelbtn,
.deletebtn {
  float: left;
  width: 50%;
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
  .cancelbtn,
  .deletebtn {
    width: 100%;
  }
}

</style>