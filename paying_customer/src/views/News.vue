<template>
  <div>
    <div class="blueLine"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-5 imgH">
          <br /><br />
          <img
            style="width: 400px; margin-left: 53px; border-radius: 83px"
            src="@/assets/logoPC.png"
            class="img-fluid"
            alt="Logo"
          />
          <div style="margin-left: 32%; margin-top: 10px">
            <a href="#" class="mx auto fa fa-facebook"></a>&nbsp;
            <a href="#" class="fa fa-linkedin"></a>&nbsp;
            <a href="#" class="fa fa-instagram"></a>
          </div>
        </div>
        <div class="col-sm">
          <h1 style="color: #384F7B;">NEWS</h1>
          <br />
          <div class="row">
            <newsCard
              class="alignCard"
              v-for="news in displayNews" :key="news.id" :name="news.name" :tekst="news.tekst" :date="news.date"
            ></newsCard>
          </div>
          <div class="mt-3">
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
  </div>
</template>

<script>
import newsCard from "@/components/newsCard";
import { fetchNewsData } from "@/commonShared";
import store from "@/store";

export default {
  name: "app",
  components: {
    newsCard: newsCard,
  },
  async mounted() {
    await fetchNewsData();
    this.displayNews = store.displayNews;
  },
  data() {
    return {
      news: [],
      displayNews: [],
      currentPage: 1,
      rows: 1,
      perPage: 2,
    };
  },
  methods: {
    async fetchNewsData(){
      this.rows = this.displayNews.store.length;
    },
    
    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage;
      this.displayNews = this.news.slice(start, start + 2);
    },
  },
};
</script>

<style scoped>
@media (max-width: 1000px) {
  .imgH {
    display: none;
  }
  .blueLine {
    display: none;
  }
  .alignCard {
    margin: auto;
  }
  h1 {
    margin-top: 15px;
  }
}
</style>
