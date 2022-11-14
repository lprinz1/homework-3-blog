// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from "../firebaseConfig";
import { collection, query, getDocs, doc, addDoc, orderBy, limit, Timestamp, deleteDoc } from "firebase/firestore";

export async function createArticle({ title, body, author }) {
  const data = { title, body, author, date: Timestamp.now() };
  const docRef = await addDoc(collection(db, "articles"), data);
  return { id: docRef.id, ...data };
}

export async function deleteArticle(id) {
  const docRef = doc(db, "articles", id);
  await deleteDoc(docRef);
}

// NOT FINISHED: This only gets the first 20 articles. In a real app,
// you implement pagination.
export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
  );
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}