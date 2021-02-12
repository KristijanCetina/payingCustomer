<template>
  <div class="container-fluid">
    <div class="row">
      <adminNavi />
      <div class="col-md-4"></div>
      <div class="col-md-7">
        <div class="newPost">
          <form
            @submit.prevent="postNewImage"
            class=" mb-3 justify-content-center"
          >
            <div class="form-group">
              <label for="postNewNews">objavi novu obavijest:</label>
              <input
                v-model="newsTitle"
                type="text"
                class="form-control ml-2"
                placeholder="Naslov vijesti"
                id="postNewNews"
              />
              <textarea
                v-model="newsText"
                type="text"
                rows="4"
                class="form-control ml-2"
                placeholder="Obavijest"
                id="postNewNews"
              />
            </div>
            <button
              id="buttonPost"
              :disabled="pendingRequest"
              type="submit"
              class="btn btn-primary ml-2"
            >
              Objavi obavijest
            </button>
            <br />
            <div v-show="errorMessage" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>
          </form>
        </div>
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
import { db } from "@/firebase";

export default {
  name: "NewsAdmin",
  components: {
    adminNavi: admin_navi,
    newsCard: newsCard,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      displayNews: [],
      currentPage: 1,
      rows: 1,
      perPage: 10,
      newsTitle: "",
    };
  },
  methods: {
    async fetchData() {
      let query = db
        .collection("news")
        .orderBy("date", "desc")
        .limit(this.perPage);

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
      this.displayNews = this.news.slice(start, start + this.perPage);
    },
  },
};
</script>
