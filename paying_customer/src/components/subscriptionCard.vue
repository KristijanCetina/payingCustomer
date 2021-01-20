<template>
<div style="padding-left: 35px;" >
    <b-card  
      style="width: 200px; height: 345px"
      body-class="text-center"
      :title="suma"
      :img-src="require(`@/assets/Plans/${slika}`)"
      :img-alt="naziv"
      img-top
    >
    <!-- ako budemo htjeli dodavati za nekakv bolji izgled kartice -->
    <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" img-top></b-card-img> -->   
      <b-card-text v-text="tekst">
        Za sve koji žele isporbati
      </b-card-text>

      <stripe-checkout
      ref="checkoutRef"
      mode="subscription"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      
      @loading="v => loading = v"
    />
      <b-button
       @click="submitr"
       style="background-color: #384F7B; border-color: #384F7B; bottom: 20px;"
       block
       pill
       bottom
       >Choose plan</b-button>
    </b-card>
    </div>
</template>


<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  props: ["suma","slika","naziv","tekst","price"],
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51I3s13B4jY1Sj3hi06G2QtPl71f6XPgMMxcrOFSPxTdsx6hKo0HmtyXXmTd7D4gCVuJgI8FLctz69epCWCuGyFON0018bChwHC";
    return {
      loading: false,
          lineItems: [
        {
          price: this.price, // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,    //ovo je kolicina proizvoda, tipa kada zelimo u web-shopu uzeti 3 proizvoda pa stsnemo na +
        },
      ],
      successURL: 'https://payingcustomer.netlify.app/',//moram napraviti succes page - ili baciti na neku ulogiranu stranicu 
      cancelURL: 'https://payingcustomer.netlify.app/cancel',
    };
  },
  // You will be redirected to Stripe's secure checkout page
  methods: {submitr () {
    this.$refs.checkoutRef.redirectToCheckout();
  },
  }
};
//  preuzeto sa https://vuestripe.com/stripe-checkout/recurring-payment
</script>



