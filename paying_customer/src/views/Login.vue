<template>
  <div class="container-fluid">
    <div class="blueLine"></div>
    <div class="row">
      <div class="col-xs-6 col-md-6 imgH">
        <br /><br />
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
        <br />
        <h1>Login to your account</h1>
        <br />
        <form>
          <div class="form-group">
            <label for="emailAdress">Email address</label>
            <input
              v-model="email"
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
              v-model="password"
              v-on:keyup.enter="login()"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="row">
            <div class="col"></div>
          </div>
          <br />
          <button
            type="button"
            @click="login()"
            class="btn btn-primary btn-lg btn-block"
          >
            Login
          </button>
          <br />
          <button
            type="button"
            @click="loginWithGoogle()"
            class="btn btn-secondary btn-lg btn-block"
          >
            Login with Google
          </button>
        </form>
        <br />
        Don't have an account? <a href="signup"> Create new!</a>
        <div>
          <!-- //treba sloziti nesto  -->
          <a href="forgot-password">Forgot password?</a>
        </div>
        <!-- <br />
				<br />
				<a href="admin-login" class="font-weight-bold">Admin login</a> -->
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
@media (max-width: 991px) {
  /* za sakrivanje prilikom smanjvanja window-a */
  .imgH {
    display: none;
  }
  .blueLine {
    display: none;
  }
  .socialM {
    display: none;
  }
  .col-xs-6 {
    margin: auto;
  }
}
</style>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.email);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          if (firebase.auth().currentUser.emailVerified) {
            if (!store.userIsAdmin) {
              this.$router.replace({ name: "Subscription" });
            } else {
              this.$router.replace({ name: "Subscription_admin" });
            }
          } else {
            console.log("email is not verified");
            firebase
              .auth()
              .signOut()
              .then(() => {
                this.$router.push({ name: "Login" });
              });
          }
        })
        .catch(e => {
          console.error(e.message);
          this.errorMessage = e.message;
        });
    },
    loginWithGoogle() {
      console.log("Login with google");
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          if (!store.userIsAdmin) {
            this.$router.replace({ name: "Subscription" });
          } else {
            this.$router.replace({ name: "Subscription_admin" });
          }
          store.token = result.credential.accessToken; // mozda cu ga kasnije za nesto koristiti. za test neka ostane
        })
        .catch(function(error) {
          // Handle Errors here.
          // var errorCode = error.code;
          this.errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
        });
    },
  },
};
</script>
