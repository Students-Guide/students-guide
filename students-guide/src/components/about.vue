<template>
  <!-- <app-student-navbar></app-student-navbar> -->
  <div>
    <student-navbar />
     <div id="container">
        <div id="heading">
            <h1>OUR TEAM</h1>
        </div>
       
         <div class="item">
            <div class="front"> <img id="team1" class="team" src="https://ca.slack-edge.com/T02E5DNSTR6-U02K996LJQ1-554beb755deb-512"/> </div>
            <div class="back">
                <p class="title">REZGUI Mohamed</p>
                <p class="job">full stack developer</p> <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> <a href="#"><i class="fab fa-github-square social fa-2x"></i></a>
            </div>
        </div>

         <div class="item">
            <div class="front"> <img id="team1" class="team" src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F79FG8-67d5c3ca178d-512"/> </div>
            <div class="back">
                <p class="title">wassim el fen</p>
                <p class="job">full stack developer</p> <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> <a href="#"><i class="fab fa-github-square social fa-2x"></i></a>
            </div>
        </div>

         <div class="item">
            <div class="front"> <img id="team1" class="team" src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F7BN00-9d79b99ed1c3-512"/> </div>
            <div class="back">
                <p class="title">jouini bilel</p>
                <p class="job">full stack developer</p> <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> <a href="#"><i class="fab fa-github-square social fa-2x"></i></a>
            </div>
        </div>

         <div class="item">
            <div class="front"> <img id="team1" class="team" src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F78D6U-dcec32b49f0a-512"/> </div>
            <div class="back">
                <p class="title">Shayma Naffeti</p>
                <p class="job">full stack developer</p> <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> <a href="#"><i class="fab fa-github-square social fa-2x"></i></a>
            </div>
        </div>

         <div class="item">
            <div class="front"> <img id="team1" class="team" src="https://ca.slack-edge.com/T02E5DNSTR6-U02E5F7GGJC-a1840b5c4aa2-512"/> </div>
            <div class="back">
                <p class="title">Amir Hammami</p>
                <p class="job">full stack developer</p> <a href="#"><i class="fab fa-facebook-square social fa-2x"></i></a> <a href="#"><i class="fab fa-linkedin social fa-2x"></i></a> <a href="#"><i class="fab fa-github-square social fa-2x"></i></a>
            </div>
        </div>

       </div> 
       <div class="footer" >
      <Footer />
       </div>
    </div>
</template>
<script>
import studentNavbar from "./studentNavbar.vue";
import Footer from "./footer.vue"
export default {
  components: { studentNavbar , Footer }
};
</script>

<style scoped>
.footer{
    margin-top: 200mm;
}
#container {
     width: 87%;
  
  border-radius: 20px;
  padding: 5%;
  height: 100%;
  margin-left: 100px;
  margin-top: 70px;
}

#heading {
    width: 100%;
    height: 80px;
    background-color: cadetblue;
    color: white;
    position: relative;
    top: -20px
}

h1 {
    font-family: 'Noto Sans HK', sans-serif;
    text-align: center;
    position: relative;
    top: 25px
}

.team {
    width: 350px;
    height: 330px;
    border-radius: 8px
}

.item {
    overflow: hidden;
    width: 33.33335%;
    float: left;
    height: 330px;
    margin-bottom: 20px;
    cursor: pointer;
    border-radius: 8px
}

.front {
    float: left;
    backface-visibility: hidden;
    transform: perspective(600px) rotateX(0deg);
    transition: 1.5s;
    overflow: hidden;
    backface-visibility: hidden;
    border-radius: 8px
}

.back {
    width: 97%;
    height: 350px;
    background-color: #bcaaa4;
    position: relative;
    top: -350px;
    transform: perspective(600px) rotateX(180deg);
    transition: 1.5s;
    overflow: hidden;
    backface-visibility: hidden;
    box-shadow: 0 0 35px brown;
    border-radius: 8px
}

.title {
    position: relative;
    top: 110px;
    text-align: center;
    font-size: 30px;
    color: #f4511e
}

.job {
    position: relative;
    top: 90px;
    text-align: center;
    font-size: 25px
}

@keyframes move {
    0% {
        position: relative;
        top: 0px
    }

    100% {
        position: relative;
        top: 80px
    }
}

.social {
    position: relative;
    top: 90px;
    color: black;
    margin-right: 10px;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: relative;
    left: 34%
}

.fa-facebook-square:hover {
    color: #3B558D
}

.fa-linkedin:hover {
    color: #007BB6
}

.fa-twitter-square:hover {
    color: #2CAAE1
}

.item:hover>.front {
    transform: perspective(600px) rotateX(-180deg)
}

.item:hover>.back {
    transform: perspective(600px) rotateX(0deg)
}

@media only screen and (max-width:900px) {
    .item {
        width: 49%;
        position: relative;
        left: 3.5%
    }

    .front,
    .back {
        width: 90%
    }
}

@media only screen and (max-width:650px) {
    .item {
        width: 100%;
        position: relative;
        left: 0
    }

    .front,
    .back {
        width: 100%
    }

    .team {
        width: 600px
    }
}
</style>
