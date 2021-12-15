import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { fireStore } from './firebase';

export const createItem = async ({ content, categoryId }) => {
  const result = await addDoc(collection(fireStore, 'todo'), {
    content,
    done: false,
    categoryId,
    createDate: new Date(),
  });
  return result;
};

export const readList = async ({ categoryId }) => {
  const q = query(collection(fireStore, 'todo'), where('categoryId', '==', categoryId));

  const querySnapshot = await getDocs(q);
  const result = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  // querySnapshot.forEach(doc => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, ' => ', doc.data());
  // });
  return result;
};

export const updateItem = async ({ id, content }) => {
  const result = await updateDoc(doc(fireStore, 'todo', id), {
    content,
  });
  return result;
};

export const deleteItem = async ({ id }) => {
  const result = await deleteDoc(doc(fireStore, 'todo', id));
  return result;
};

export const createItemChild = async ({ id, content }) => {
  console.log(id, content);
};

export const toggleItem = async ({ id, done }) => {
  const result = await updateDoc(doc(fireStore, 'todo', id), {
    done: !done,
  });
  return result;
};
