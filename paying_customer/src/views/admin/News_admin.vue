<template>
  <div class="container-fluid">
    <div class="row">
      <adminNavi />
      <div class="col-md-4"></div>
      <div class="col-md-7">
        <div class="row">
          <newsCard
            class="alignCard"
            v-for="news in displayNews"
            :key="news.id"
            :name="news.name"
            :tekst="news.tekst"
            :date="news.date"
          ></newsCard>
        </div>
        <div class="mt-2">
          <b-pagination
            pills
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            @input="paginate(currentPage)"
            align="center"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import admin_navi from "@/components/admin_navi.vue";
import newsCard from "@/components/newsCard";

export default {
  name: "NewsAdmin",
  components: {
    adminNavi: admin_navi,
	"newsCard": newsCard	
	},
  mounted(){
    this.fetchData();
  },
  data(){
    return {
      news: [],
      displayNews: [],
      currentPage: 1,
      rows: 1,
      perPage: 3
    };
  },
  methods:{
    async fetchData(){
      const res = await fetch("news.json");
      const val = await res.json();
      this.news = val;
      this.displayNews = val.slice(0, 3);

      this.rows = this.news.length;
      console.log(val);
    },
    paginate(currentPage){
      const start = (currentPage -1) * this.perPage;
      this.displayNews = this.news.slice(start, start + 3);
    }
  }
};
</script>
