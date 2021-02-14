import { db } from "@/firebase";
import store from "@/store";

export async function fetchNewsData() {
  console.log("Evo mene moji ljudi, došao sam vam pročitati obavijesti");
  let displayNews = [];

  let query = db.collection("news").orderBy("date", "desc");
  await query.get().then(result => {
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
  store.displayNews = displayNews;
}
