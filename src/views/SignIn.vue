<template>
<div class="partnership" id="partner">
  <div class="container-fluid">
    <div class="row">

      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="../assets/img/signin.png"
          alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: center;">
      </div>
      <div class="col-sm-6 text-black">

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
  
            <form style="width: 23rem;">

                <div class="heading my-5">
                    <h4 class="fw-bold">Sign in to<span style="color: #0d6efd"> iCargo</span> <span style="color:#ffc800"> Pacific</span></h4>
                    
                    <h5 class="fw-bold" style="font-size: 15px;">Sign in as</h5>
                </div>


            <div class="form-outline mb-4">
              <button type="button-group" class="btn btn-warning btn-md  m-2 text-white rounded-pill" style="width: 20rem;">
              <router-link class="route text-decoration-none text-white fw-bold" to="/customer-signin">Customer</router-link>
              </button>
            </div>

            <div class="form-outline mb-4">
              <button type="button-group" class="btn btn-warning btn-md  m-2 text-white rounded-pill" style="width: 20rem;">
              <router-link class="route text-decoration-none text-white fw-bold" to="/merchant-signin">Merchant</router-link>
              </button>
            </div>

            <div class="form-outline mb-4">
              <button type="button-group" class="btn btn-warning btn-md  m-2 text-white rounded-pill" style="width: 20rem;">
              <router-link class="route text-decoration-none text-white fw-bold" to="/partner-signin">Partner</router-link>
              </button>
            </div>


              <div class="pt-1 mb-4 d-flex justify-content-center">
                <p class="me-1">Don't have an accout?</p>
                  <router-link class="nav text-warning text-decoration-none fw-bold" to="/" exact> Sign up</router-link>
              </div>

              <div class="form-outline mb-4 pt-1 d-flex justify-content-center">
              <button type="button" class="btn btn-light shadow btn-sm  m-2 text-white px-4 rounded-pill">
              <router-link class="route text-decoration-none text-dark fw-bold" to="/">Back</router-link>
              </button>
            </div>
           </form>
          </div>
      </div>
    </div>
  </div>
</div>
   
</template>

<script>
</script>

<style>
</style>