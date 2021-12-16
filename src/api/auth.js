import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { firestore, authService } from './firebase';

export const login = async ({ username, password }) => {
  //중복확인
  const userQuery = query(collection(firestore, 'user'), where('username', '==', username));
  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.docs.length === 1) {
    const result = querySnapshot.docs[0].data();

    if (result.password === password) {
      return result.username;
    } else {
      return '비밀번호가 일치하지 않습니다.';
    }
  } else {
    return '없는 아이디';
  }
};

export const register = async ({ username, password }) => {
  //중복확인
  const userQuery = query(collection(firestore, 'user'), where('username', '==', username));
  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.docs.length === 0) {
    const result = await addDoc(collection(firestore, 'user'), {
      username,
      password,
      createDate: new Date(),
    });
    return result;
  } else {
    return '아이디 중복';
  }
};

//Email로 가입하는 함수
//동작이 이루어지면 앞서 작성한 로그인 상태 감지 함수로 인해 user정보가 변수에 저장되고 setState가 발생
export async function registerWithEamil(email, password) {
  try {
    await createUserWithEmailAndPassword(authService, email, password).then(e => {});
  } catch (e) {
    return e.message.replace('Firebase: Error ', '');
  }
}

//Email로 로그인하는 함수
export async function loginWithEamil(email, password) {
  try {
    await signInWithEmailAndPassword(authService, email, password);
  } catch (e) {
    return e.message.replace('Firebase: Error ', '');
  }
}

//Google
export async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(authService, provider);
    console.log(result);

    // await new signInWithRedirect(authService, provider);
    // const result = await getRedirectResult(authService);
    // if (result) {
    //   // const user = result.user;
    // }
    return;
  } catch (e) {
    return e;
  }
}

//Logout 하는 함수
export async function logout() {
  await signOut(authService);
  return;
}
