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
              v-model="fullName"
              type="text"
              class="form-control"
              id="Name"
              placeholder="Enter your full name"
            />
          </div>
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
            <label for="password">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div class="form-group">
            <label for="Re-Password">Repeat Password</label>
            <input
              v-model="repeatedPassword"
              type="password"
              class="form-control"
              id="repeatedPassword"
              placeholder="Enter your password once again"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="TermsCheck"
              id="TermsCheck"
              v-model="TermsCheck"
            />
            <label class="form-check-label" for="TermsCheck">
              I have read and accept the terms and conditions
            </label>
          </div>
          <br />
          <div>
            <stripe-checkout
              ref="checkoutRef"
              mode="subscription"
              :pk="publishableKey"
              :line-items="lineItems"
              :success-url="successURL"
              :cancel-url="cancelURL"
              @loading="(v) => (loading = v)"
            />
            <button
              type="button"
              @click="signup()"
              class="btn btn-primary btn-lg btn-block"
            >
              Sign In
            </button>
          </div>
          <br />
          <button
            type="button"
            @click="loginWithGoogle()"
            class="btn btn-secondary btn-lg btn-block"
          >
            Login with Google
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

<script>
import { firebase } from "@/firebase";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "Signup",
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      "pk_test_51I3s13B4jY1Sj3hi06G2QtPl71f6XPgMMxcrOFSPxTdsx6hKo0HmtyXXmTd7D4gCVuJgI8FLctz69epCWCuGyFON0018bChwHC";
    return {
      fullName: "",
      email: "",
      password: "",
      repeatedPassword: "",
      TermsCheck: {
        accept: true,
      },
      loading: false,
      lineItems: [
        {
          price: store.subsType, // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "https://payingcustomer.netlify.app/subscription", //moram napraviti succes page - ili baciti na neku ulogiranu stranicu
      cancelURL: "https://payingcustomer.netlify.app/cancel",
    };
  },
  methods: {
    signup() {
      if (this.password != this.repeatedPassword) {
        alert("The passwords do not match!");
      }
      if (this.TermsCheck == false) {
        alert("You have to accept Terms of service!");
      } else {
        //ako je forma ispunjena krece verifikacija i registracija
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function () {
            console.log("Uspješna registracija");
          })
          .then(() => {
            firebase
              .auth()
              .currentUser.updateProfile({ displayName: this.fullName });
          })
          //slanje verifikacijskog maila
          .then(() => {
            firebase
              .auth()
              .currentUser.sendEmailVerification()
              .then(function () {
              });
          })
          //spremanje korisnika s pretplatom u firebase
          .then(() => {
            this.regUser();
          })
          .then(() => {
            if (store.subsType !== null) {
              // ako je korisnik došao sa stranice s paketa šaljemo ga na placanje
              alert ('Bit ce te presumjereni na stanicu za placanje te vam je poslan verifikacijski email')
              this.pay();
            } else {
              //ako se samo išao registrirati
              firebase
                .auth()
                .signOut()
                .then(() => {
                  alert(
                    "Potrebno je verificirati e-mail prije korištenja aplikacije pomoću poslanog linka."
                  );
                });
            }
          })
          .catch(function (error) {
            console.error("Došlo je do greške: ", error);
            if (error.message) {
              alert(error.message);
            }
          });
      }
    },
    loginWithGoogle() {
      console.log("Login with google");
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.regUser();
          if (store.subsType !== null) {
            this.pay();
          } else {
            this.$router.replace({ name: "Subscription" });
          }
        })
        .catch(function (error) {
          this.errorMessage = error.message;
        });
    },
    pay() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    regUser() {
      alert("upisujem");
      db.collection("users").add({
        name: this.fullName,
        email: this.email,
        posted_at: Date.now(),
        subscription: store.subsType,
      });
    },
  },
};
</script>

// naplata preuzeto sa https://vuestripe.com/stripe-checkout/recurring-payment
