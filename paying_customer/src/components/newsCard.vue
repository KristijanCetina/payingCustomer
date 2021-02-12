<template>
  <div>
    <b-col>
      <b-card
        :title="name"
        tag="news"
        class="mb-3 kartica"
        :header="date | dateTime"
        header-class="header"
      >
        <b-text-card v-text="tekst"> </b-text-card>
      </b-card>
    </b-col>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["name", "tekst", "date"],

  filters: {
    dateTime: function(value) {
      return moment(value).format("D.M.YYYY hh:mm");
    },
  },
};
</script>

<style scoped>
.kartica {
  max-width: 680px;
  width: auto;
  margin-left: 6%;
  border-color: #384f7b;
  color: #384f7b;
}
.header {
  margin-bottom: -14px;
  text-align: right;
  line-height: 2px;
  background: linear-gradient(0.25turn, #384f7b, #8c9cb9, #384f7b);
  color: #ffffff;
}
</style>
