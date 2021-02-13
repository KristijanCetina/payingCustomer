<template>
  <div class="container-fluid">
    <div class="row">
      <authNavi />
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
import authorized_navi from "@/components/authorized_navi.vue";
import newsCard from "@/components/newsCard";
import { db } from "@/firebase";
import { fetchNewsData } from "@/commonShared";

export default {
  name: "news_dash",
  components: {
    authNavi: authorized_navi,
    newsCard: newsCard,
  },
  mounted() {
    // this.fetchData();
    let displayNews = fetchNewsData();
    this.setData(displayNews);
  },
  data() {
    return {
      displayNews: [],
      currentPage: 1,
      rows: 1,
      perPage: 3,
    };
  },
  methods: {
    setData(data) {
      this.displayNews.push({
        id: data.id,
        name: data.name,
        tekst: data.text,
        date: data.date,
      });
    },
    async fetchData() {
      let query = db
        .collection("news")
        .orderBy("date", "desc")
        .limit(20);

      await query.get().then(result => {
        this.displayNews = [];
        result.forEach(doc => {
          const data = doc.data();
          this.displayNews.push({
            id: data.id,
            name: data.name,
            tekst: data.text,
            date: data.date,
          });
        });
      });
      this.rows = this.news.length;
    },
    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage;
      this.displayNews = this.news.slice(start, start + 3);
    },
  },
};
</script>
