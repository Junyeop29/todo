import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { firestore } from './firebase';

export const createItem = async ({ content }) => {
  const result = await addDoc(collection(firestore, 'category'), {
    content,
    createDate: new Date(),
  });
  return result;
};

export const readList = async () => {
  const categoryQuery = query(collection(firestore, 'category'), orderBy('createDate'));
  const querySnapshot = await getDocs(categoryQuery);
  const result = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return result;
};

export const updateItem = async ({ id, content }) => {
  const result = await updateDoc(doc(firestore, 'category', id), {
    content,
  });
  return result;
};

export const deleteItem = async ({ id }) => {
  const result = await deleteDoc(doc(firestore, 'category', id));
  return result;
};
