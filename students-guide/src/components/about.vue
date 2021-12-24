<template>
  <!-- <app-student-navbar></app-student-navbar> -->
  <div>
    <student-navbar />
    <div id="row" class="container">
      <div id="div1" class="col-md-4">
        <div class="content">
          <h1>Wassim ELFEN</h1>
          <a href="#">
            <div class="content-overlay"></div>
            <img
              class="content-image"
              src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/186572626_2869906569891817_1467226454376261652_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=VKBtASfpFXUAX-g3GcB&tn=AfLGEBQ5Zl-ykQpw&_nc_ht=scontent.ftun10-1.fna&oh=00_AT-G4BjBSibo5cfi21LoqGshvem-n81lwYukS5z6_Wnvyw&oe=61E6B943"
            />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">+216 50790136</h3>
              <p class="content-text">wassimelfen@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
      <div id="div2" class="col-md-4">
        <div class="content">
          <h1>Saddem AYDI</h1>

          <a href="#">
            <div class="content-overlay"></div>
            <img
              class="content-image"
              src="https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/255575281_4607849132591733_597344353766552623_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UkEAP61B7QYAX8tRJJz&_nc_ht=scontent.ftun10-1.fna&oh=00_AT80wT891caKCoN46o1V4rmElzUSJArFfbw1MNe489NZ0w&oe=61C58B8F"
            />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">+216 56120796</h3>
              <p class="content-text">sdouma91@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
      <div id="div2" class="col-md-4">
        <div class="content">
          <h1>Amine JELASSI</h1>

          <a href="#">
            <div class="content-overlay"></div>
            <img
              class="content-image"
              src="https://scontent.ftun4-1.fna.fbcdn.net/v/t39.30808-6/248023235_10215346462573249_509336240872393244_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9jTkSJQrtGEAX_QgyhS&_nc_ht=scontent.ftun4-1.fna&oh=00_AT-A6AGKKBv6m3uIXVO4a7XOD3Lmr5iDSkha17vlYxuYAw&oe=61C4E189"
            />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">+216 20669058</h3>
              <p class="content-text">aminejlassi95@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
      <div class="leftt">
        <div id="div4" class="col-md-4">
          <div class="content">
            <h1>Achref KARMOUS</h1>

            <a href="#">
              <div class="content-overlay"></div>
              <img
                class="content-image"
                src="https://ca.slack-edge.com/T02E5DNSTR6-U02D94AAZ62-1cbe9029bdb9-512"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">+216 54686858</h3>
                <p class="content-text">achraf.karmous@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
        <div id="div5" class="col-md-4">
          <div class="content">
            <h1>Sarra CHAARABI</h1>

            <a href="#">
              <div class="content-overlay"></div>
              <img
                class="content-image"
                src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/123486814_1060360594396739_2687984173334952824_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Vq-5Wk9FZ7cAX-XQkEt&_nc_oc=AQm_V_jkT5Yju8wb68nMwdhnf2MGPcwK2hYR_fy52_dzTvQJvcAkIRV9BNfNKMli9oQ&_nc_ht=scontent.ftun10-1.fna&oh=00_AT-oW7d_MeUep2Qaogc1mfohefLj-KxzSW_NKwyM6IENNg&oe=61E6E324"
              />
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">+216 58235894</h3>
                <p class="content-text">chaabanisarrra@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import studentNavbar from "./studentNavbar.vue";
export default {
  components: { studentNavbar }
};
</script>

<style scoped>
#parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

#div1 {
  padding: 5%;

  grid-area: 1 / 5 / 2 / 6;
}
#div2 {
  padding: 5%;

  grid-area: 1 / 3 / 2 / 4;
}
#div3 {
  padding: 5%;

  grid-area: 1 / 1 / 2 / 2;
}
#div4 {
  padding: 5%;

  grid-area: 2 / 2 / 3 / 3;
}
#div5 {
  padding: 5%;

  grid-area: 2 / 4 / 3 / 5;
}

/* .leftt {
  margin-right: 5%;
} */

body {
  font-size: 16px;
  font-family: "Raleway", sans-serif;
}

.container {
  margin-top: 200px;
  background: linear-gradient(
    90deg,
    rgb(111, 137, 255) 0%,
    rgb(175, 184, 226) 50%,
    rgb(219, 232, 255) 100%
  );
  margin: 10%;
  border-radius: 20px;
}

.title {
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
}

img {
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}
</style>
