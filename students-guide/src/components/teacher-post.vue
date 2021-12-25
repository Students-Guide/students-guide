<template>
<div>
  <teacher-navbar />
<div id="up" class="container card-0 justify-content-center">
  <div class="card-body px-sm-4 px-0">
    <div class="row justify-content-center mb-5">
      <div class="col-md-10 col">
        <h3 class="font-weight-bold ml-md-0 mx-auto text-center text-sm-left">
          Post Course
        </h3>
        <p class="mt-md-4 ml-md-0 ml-2 text-center text-sm-left">
          `Teaching is the profession that teaches all the other professions`.
        </p>
      </div>
    </div>
    <div class="row justify-content-center round">
      <div class="col-lg-10 col-md-12">
        <div class="card shadow-lg card-1">
          <div class="card-body inner-card">
            <div class="row">
              <div id="postCourseInfo" class="col-lg-5 col-md-6 col-sm-12">
                <div class="form-group">
                  <label for="title">Title :</label
                  ><input
                    type="text"   
                    class="form-control"
                    id="titlePost"
                  placeholder="Type Course title"
                  v-model="title"
                  />
                </div>
                <div class="form-group">
                  <label for="category">Category :</label>
                  <input
                    type="text"
                    class="form-control"
                    id="categoryPost"
                    
                    placeholder=""
                    v-model="category"
                  />
                </div>
                <div class="form-group">
                  <label for="price">Price :</label>
                  <input
                    type="text"
                    class="form-control"
                    id="pricePost"
        
                    placeholder=""
                    v-model="price"
                  />
                </div>
                <div class="form-group">
                  <label for="description">Description :</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea2"
                
                    rows="3"
                    v-model="description"
                  ></textarea>
                </div>
                <div
                  class="form-group"
                  action=""
                  method="post"
                  enctype="multipart/form-data"
                >
                  <label for="thumbnail">Thumbnail Image :</label>
                  <input type="file" @change="thumbnailimg" />
                   <button class="btn btn-primary" v-on:click="upload" >upload thumbnail</button>
                </div>
                <div class="form-group">
                  <label for="type">Course Type :</label>
                  <select class="form-control" >
                    <option>PDF</option>
                    <option>Video</option>
                  </select>
                </div>
              </div>
              <div id="media">
                <img id="thumbnailImg"  alt="" />
                <div class="form-group files">
                  <label class="my-auto">Upload File </label>
                  <input
                    id="file"
                    type="file"
                    class="form-control"
                   @change="fileup"
                  />
                  <button class="btn btn-primary"  v-on:click="uploadfile" > upload course</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div id="descriptionCourse" class="col-md-12 col-lg-10 col-12">
                <div class="mb-2 mt-4">
                  <div class="text-right">
                    <button
                      type="button"
                      id="postButton"
                      class="btn btn-primary"
                      v-on:click="postCourse"
                    >
                      <small class="font-weight-bold">Post Course</small>
                    </button>
                  </div>
                </div>
              </div>
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
import axios from "axios";
import teacherNavbar from "./teacherNavbar.vue";
export default {
  components: { teacherNavbar },
    data(){
     return{
  file:null,
  selectedFile:null,
  title:'',
   owner:'',
   ownerPicture:'',
   category:'',
   type:'',
   object:'',
   price:'',
   views:0,
   likes:0,
   description:'',
   comments:[],
   thumbnail:'https://face-pro.net/wp-content/plugins/penci-pennews-portfolio/images/no-thumbnail.jpg',
   buyers:[],
   createdAt:Date.now(),
   updatedAt:Date.now(),
    }
   
    },
    methods:{
 
        postCourse(){
    let y = localStorage.getItem('session') ;
    var owner = JSON.parse(y).username;
    var ownerPicture = JSON.parse(y).profilePicture
        let daata={
      
      title: this.title,
      owner: owner,
      category : this.category,
      type:this.type,
      object:this.object,
      price: this.price,
      views: this.views,
      likes : this.likes,
      description : this.description,
      comments : this.comments,
      thumbnail : this.thumbnail,
      buyers : this.buyers,
      createdAt : this. createdAt,
      updatedAt : this.updatedAt,
      ownerPicture : ownerPicture
        }
    // console.log(data)
        let url = "http://localhost:5000/courses/post"
        axios.post(url,daata).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
        .catch(err => {
          console.log(err);
        });
    },
    upload(){
      const formData= new FormData()
       formData.append("file",this.selectedFile);
       formData.append('upload_preset', 'lsom30en');
       console.log(formData)
       axios.post('https://api.cloudinary.com/v1_1/ben-arous/upload',formData).then((response)=>{
       console.log(response)
       this.thumbnail=response.data.url
       console.log( this.thumbnail)
       }
       )
   } ,
   fileup(event){
   console.log(event)
   this.file=event.target.files[0]
   console.log(this.file)
   },
     uploadfile(){
      const formData= new FormData()
       formData.append("file",this.file);
       formData.append('upload_preset', 'lsom30en');
       console.log(formData)
       axios.post('https://api.cloudinary.com/v1_1/ben-arous/upload',formData).then((response)=>{
       console.log(response.data.url)
       this.object=response.data.url
       }
       )
   } 
    },
    upload() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.append("upload_preset", "lsom30en");
      console.log(formData);
      axios
        .post("https://api.cloudinary.com/v1_1/ben-arous/upload", formData)
        .then(response => {
          console.log(response);
          this.thumbnail = response.data.url;
          console.log(this.thumbnail);
        });
    },
    fileup(event) {
      console.log(event);
      this.file = event.target.files[0];
      console.log(this.file);
    },
    uploadfile() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("upload_preset", "lsom30en");
      console.log(formData);
      axios
        .post("https://api.cloudinary.com/v1_1/ben-arous/upload", formData)
        .then(response => {
          console.log(response.data.url);
        });
    },
  name: "TeacherPost"
  }
</script>
<style scoped>
/* *{
    border: red solid 2px;
} */
#postButton {
  width: 120px;
  height: 40px;
  font-size: 100%;
}
#up {
  margin-top: 70px;
  padding: 20px;
}
.card-0 {
  /* min-height: 110vh; */
  /* background: linear-gradient(-20deg, #f8d6f9 20%, #561e79 100%); */
  background: linear-gradient(-20deg, #c8e0ff 20%, rgb(77, 112, 209) 100%);
  /* background: #c8e0ff; */

  color: white;
  margin-top: -40px;
  padding-left: -50px;
}

p {
  font-size: 15px;
  line-height: 25px !important;
  font-weight: 500;
}

.container {
  margin-top: 20px;
  /* padding-top: 0px !important; */
  border-radius: 20px;
}

.btn {
  letter-spacing: 1px;
}

select:active {
  box-shadow: none !important;
  outline-width: 0 !important;
}

select:after {
  box-shadow: none !important;
  outline-width: 0 !important;
}

input,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 0px !important;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
  resize: none;
}

select:focus,
input:focus {
  box-shadow: none !important;
  border: 1px solid #2196f3 !important;
  outline-width: 0 !important;
  font-weight: 400;
}

label {
  margin-bottom: 2px;
  font-weight: bolder;
  font-size: 14px;
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

.form-control {
  height: calc(2em + 0.75rem + 3px);
}

.inner-card {
  margin: 79px 0px 70px 0px;
}

.card-0 {
  margin-top: 100px;
  margin-bottom: 100px;
}

.card-1 {
  border-radius: 17px;
  color: black;
  box-shadow: 2px 4px 15px 0px rgb(0, 0, 0, 0.5) !important;
}

#file {
  border: none;
}

.color input {
  background-color: #f1f1f1;
}

.files:before {
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
  content: attr(data-before);
  color: #000;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

#file {
  border: none;
  width: 100%;
  padding: 95px 0 0 100%;
  background: url("https://www.lifewire.com/thmb/8MhWKwi4GEGiYRT6P56TBvyrkYA=/1326x1326/smart/filters:no_upscale()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg")
    top center no-repeat #fff;
  background-size: 80px 80px;
}
#postCourseInfo {
  position: relative;
  left: 40px;
}
.row {
  display: flex;
}

#thumbnailImg {
  height: 200px;
  width: 400px;
  margin-left: 0px;
}

#media {
  display: grid;
  justify-content: center;
  margin-left: 80px;
  width: 400px;
}
#descriptionCourse {
  position: relative;
  left: 40px;
}
</style>
