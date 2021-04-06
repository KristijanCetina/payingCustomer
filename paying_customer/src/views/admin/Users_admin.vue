<template>
  <div class="container-fluid">
    <div class="row">
      <adminNavi />
      <div class="col-md-3"></div>
      <div class="col-md-9">
        <h1>Trenutno registrirani korisnici:</h1>
        <div>
          <b-table striped hover sticky-header="800px" head-variant="light" :items="usersReg" :fields="fields"></b-table>
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
      fields: ['user', 'email', 'subs', 'time'],
      usersReg: [],
    };
  },
  mounted() {
    this.userRegList();
  },
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
              time: moment(data.posted_at).format("DD/MM/YYYY"),
              user: data.name,
              email: data.email,
              subs: data.subscription,
            });
          });
        });
    },
  },
};
</script>

