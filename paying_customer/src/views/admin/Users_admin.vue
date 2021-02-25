<template>
  <div class="container-fluid">
    <div class="row">
      <adminNavi />
      <div class="col-md-3"></div>
      <div class="col-md-9">
        <h1>Trenutno registrirani korisnici:</h1>
        <!-- <subs_info /> za neka buduca vremena ako se bude koristilo-->
        <div class="table-responsive">
          <table class="table-hover">
            <thead>
              <tr>
                <!-- <th>Id</th> -->
                <th>Name</th>
                <th>Email</th>
                <th>Subscription</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usersReg in usersReg" :key="usersReg.user">
                <!-- <td>{{ usersReg.id }}></td> -->
                <td>{{ usersReg.user }}</td>
                <td>{{ usersReg.email }}</td>
                <td>{{ usersReg.subs }}</td>
                <td>{{ usersReg.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import admin_navi from "@/components/admin_navi.vue";
import { db } from "@/firebase";
import moment from "moment";
// import subs_info from "@/components/subs_info.vue"; //u nekom trenutku za prikaz korisnika ili pretplata

export default {
  name: "UsersAdmin",
  components: {
    adminNavi: admin_navi,
    // subs_info,
  },
  data() {
    return {
      usersReg: [],
    };
  },
  mounted() {
    this.userRegList();
    // this.fetchData();
  },
  // computed: {
  //   subsFromNow(){
  //     return moment(this.usersReg.time).format('DD MM YYYY')
  //   }
  // },
  methods: {
    userRegList() {
      db.collection("users")
        .get()
        .then((query) => {
          this.usersReg = [];
            query.forEach((doc) => {
              const data = doc.data();
              this.usersReg.push({
                id: doc.id,
                time: moment(data.posted_at).format('DD MM YYYY'),
                user: data.name,
                email: data.email,
                subs: data.subscription,
              });
            });
        });
    },
    // async fetchData() {
    //   await this.userReg.json();
    // },
  },
};
</script>
