<template>
  <div class="container-fluid">
    <div class="blueLine"></div>
    <div class="row">
      <div class="col-xs-6 col-md-6 imgH">
        <br><br>
        <img
          style="width: 400px; margin-left: 53px; border-radius: 83px"
          src="@/assets/logoPC.png"
          class="img-fluid"
          alt="Logo"
        />
        <div class="socialM" style="margin-left: 27%; margin-top: 10px">
          <a href="#" class="mx auto fa fa-facebook"></a>&nbsp;
          <a href="#" class="fa fa-linkedin"></a>&nbsp;
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
      <div class="col-xs-6 col-md-4 col">
        <br>
        <h1>Login to your account</h1>
        <br>
        <form>
          <div class="form-group">
            <label for="emailAdress">Email address</label>
            <input
              type="email"
              class="form-control"
              id="emailAdress"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="row">
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div class="col">
              <!-- //treba sloziti nesto  -->
              <a href="forgot-password">Forgot password</a>
            </div>
          </div>
          <br />
          <button type="button" class="btn btn-primary btn-lg btn-block">
            Login now
          </button>
          <br />
          <button type="button" class="btn btn-secondary btn-lg btn-block">
            Ovo ce biti GOOGLE
          </button>
        </form>
        <br />
        <a href="signin" > Don't have an account? Create new!</a>
        <br />
        <br />
        <a href="admin-login" class="font-weight-bold">Admin login</a>
      </div>
    </div>
  </div>
</template>


<style scoped>
.btn {
  transition: box-shadow 0.3s;
}
.btn:hover {
  box-shadow: 20px 20px 40px 0px #384f7b;
}
@media (max-width: 991px){    /* za sakrivanje prilikom smanjvanja window-a */
  .imgH { display: none; }
  .blueLine { display: none; }
  .socialM { display: none; }
  .col-xs-6 { margin: auto; }                                            
}   
</style>
