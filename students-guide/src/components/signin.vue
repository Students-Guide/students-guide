<template>
    <div class="flex items-center min-h-screen bg-gray-50">
  <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
    <div class="flex flex-col md:flex-row">
      <!-- <div class="h-32 md:h-auto md:w-1/2">
        <img
          class="object-cover w-full h-full"
          src="https://bit.ly/3qe05Cx"
          alt="img"
        />
      </div> -->
      <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div class="w-full">
          <div class="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-20 h-20 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <h1 id="up" class="mb-4 text-2xl font-bold text-center text-gray-700">
            Welcome <br /><br /><br /><br />
            Login as :
          </h1>
           <div class="parent">
            <div>
              <input
                v-model="userRole"
                type="radio"
                name="fav_language"
                value="true"
              />
              <label class="radio">Student</label><br />
            </div>
            <div>
              <input
                v-model="userRole"
                type="radio"
                id="css"
                name="fav_language"
                value="false"
              />
              <label class="radio">Teacher</label><br />
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm"> Email </label>
            <input
              v-model="mail"
              type="email"
              class="
                w-full
                px-4
                py-2
                text-sm
                border
                rounded-md
                focus:border-blue-400
                focus:outline-none
                focus:ring-1
                focus:ring-blue-600
              "
              placeholder="Email Address"
            />
            <label class="block text-sm" style="color: red">
              {{ error }}
            </label>
          </div>
          <div>
            <label class="block mt-4 text-sm"> Password </label>
            <input
              v-model="password"
              class="
                w-full
                px-4
                py-2
                text-sm
                border
                rounded-md
                focus:border-blue-400
                focus:outline-none
                focus:ring-1
                focus:ring-blue-600
              "
              placeholder="Password"
              type="password"
            />
            <label class="block text-sm" style="color: red">
              {{ error }}
            </label>
          </div>
          <button
            v-on:click="login()"
            class="
              block
              w-full
              px-4
              py-2
              mt-4
              text-sm
              font-medium
              leading-5
              text-center text-white
              transition-colors
              duration-150
              bg-blue-600
              border border-transparent
              rounded-lg
              active:bg-blue-600
              hover:bg-blue-700
              focus:outline-none focus:shadow-outline-blue
            "
            href="#"
          >
            Login
          </button>

          <div class="mt-4 text-center">
            <p class="text-sm">Don't have an account yet ?</p>

            <p
             
              routerLink="/"
              routerLinkActive="active"
              class="text-blue-600 hover:underline"
            ><a href="http://localhost:4200" class="">
              Sign up.
              </a>


            <br>
            <br>
            <a href="http://localhost:4200/forgetpassword">reset password</a>
            </p>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</div>

</template>
<script>


export default{
    name:"signin" ,
    data: function () {

        return {
            mail:  '',
            password: '',
            userRole: '',
            error : '',
            res : { _id: 0 },
        } 
    } ,
    methods: {
        login: function() {
    var data = {
      username_or_email: this.mail,
      password: this.password,
      userRole: this.userRole,
    };
    console.log(data);
    if (data.username_or_email !== '' && data.password !== '') {
      if (this.userRole === 'true') {
        let url = 'http://localhost:5000/auth/student/signin';
        this.http.post(url, data).subscribe(
          (res) => {
            let myResponse = JSON.parse(JSON.stringify(res));
            console.log(myResponse);

            let session = {
              username: myResponse.data.username,
              _id: myResponse.data._id,
            };
            console.log('HTTP response', res, 'THIS A RES');
            localStorage.setItem('session', JSON.stringify(session));
            this.setCookie(myResponse.jwt);

            //let y = localStorage.getItem('session') as string;
            if (!y.includes('error')) {
              this.router.navigate(['/studentHome']);
            }
            this.error = 'you are so stupid you missed a password';
          },
          (err) => console.log('HTTP Error', err),
          () => console.log('HTTP request completed.')
        );
      } else if (this.userRole === 'false') {
        let url = 'http://localhost:5000/auth/teacher/signin';
        this.http.post(url, data).subscribe(
          (res) => {
            let myResponse = JSON.parse(JSON.stringify(res));
            let session = {
              username: myResponse.data.username,
              _id: myResponse.data._id,
            };
            console.log('HTTP response', res, 'THIS A RES');
            localStorage.setItem('session', JSON.stringify(session));
            this.setCookie(myResponse.jwt);

            //let y = localStorage.getItem('session') as string;
            if (!y.includes('error')) {
              this.router.navigate(['/home']);
            }
            this.error = 'you are so stupid you missed a password';
          },
          (err) => console.log('HTTP Error', err),
          () => console.log('HTTP request completed.')
        );
      }
      // let role = this.userRole ? 'student' : 'teacher';
      // let loginDirection = this.userRole ? 'studentHome' : 'home';
    }
  }

    }
}
</script>
<style scoped>
.parent {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr)!important;
  grid-template-rows: 1fr !important;
  grid-column-gap: 0px !important;
  grid-row-gap: 0px !important;
}
.radio {
  color: rgb(38, 131, 218) !important;
}
#up {
  margin-top: -90px !important;
}

</style>

