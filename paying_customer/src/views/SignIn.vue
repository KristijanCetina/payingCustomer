<template>
  <div class="container-fluid">
    <div class="blueLine"></div>
    <div class="row">
      <div class="col-xs-6 col-md-6">
        <br /><br />
        <img
          style="width: 400px; margin-left: 53px; border-radius: 83px"
          src="@/assets/logoPC.png"
          class="img-fluid"
          alt="Logo"
        />
        <div style="margin-left: 27%; margin-top: 10px">
          <a href="#" class="mx auto fa fa-facebook"></a>&nbsp;
          <a href="#" class="fa fa-linkedin"></a>&nbsp;
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
      <div class="col-xs-6 col-md-4 col">
        <br />
        <h1>Create new account</h1>
        <br />
        <form>
          <div class="form-group">
            <label for="emailAdress">Full name</label>
            <input
              type="text"
              class="form-control"
              id="Name"
              placeholder="Enter your full name"
            />
          </div>
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
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div class="form-group">
            <label for="Re-Password">Repeat Password</label>
            <input
              type="password"
              class="form-control"
              id="Re-Password"
              placeholder="Enter your password once again"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              I have read and accept the terms and conditions
            </label>
          </div>
          <br />
          <button type="button" class="btn btn-primary btn-lg btn-block">
            Sign In
          </button>
          <br />
          <button type="button" class="btn btn-secondary btn-lg btn-block">
            Ovo ce biti GOOGLE
          </button>
        </form>
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
</style>  