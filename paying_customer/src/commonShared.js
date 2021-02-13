import { db } from "@/firebase";
export default {
  fetchNewsData() {
    console.log("Evo mene moji ljudi"); // niti mi ne pozove ovaj dio
    let query = db.collection("news").orderBy("date", "desc");

    let displayNews = [];
    query.get().then(result => {
      result.forEach(doc => {
        const data = doc.data();
        displayNews.push({
          id: data.id,
          name: data.name,
          tekst: data.text,
          date: data.date,
        });
      });
    });
    return displayNews; //a forši i ne tako
  },
};
