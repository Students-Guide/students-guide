<template>
    <html>
<body>
    <div class="editProfile">
 <router-link to="/edit" class="profile-edit-btn"></router-link>
    
<div class="container mt-5" style="margin-left:20%; ">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <div class="card px-5 py-5" id="form1">
                <div class="form-data" v-if="!submitted">
                    <div class="forms-inputs mb-5"> <span>old Password</span> <input placeholder="Current Password" type="password" v-model="oldPassword" v-bind:class="{'form-control':true && passwordBlured}" v-on:blur="passwordBlured = true">
                    </div>
                    <div class="forms-inputs mb-4"> <span> New Password</span> <input placeholder="New Password" type="password" v-model="newPassword" v-bind:class="{'form-control':true, 'is-invalid' : !validPassword(newPassword) && passwordBlured}" v-on:blur="passwordBlured = true">
                    </div>
                    <div class="mb-3"> <button v-on:click="changePassword()" class="btn btn-dark w-30" style="margin-left:85%">save</button>
                    </div>
                </div>
                <div class="success-data" v-else>
                    <div class="text-center d-flex flex-column"> <i class='bx bxs-badge-check'></i> <span class="text-center fs-1">Password Saved <br></span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="kouba">
        <img
                  alt=""
                  class="rounded-circle"
                  src="https://icon-library.com/images/reset-password-icon/reset-password-icon-29.jpg"
                />
    </div>
     
</div>
</div>
</body>
</html>
</template>

<script>


export default ({
   name:"studentChangePassword",
})
</script>
<style scoped>

</style>
