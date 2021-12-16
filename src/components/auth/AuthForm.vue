<template>
  <section class="wrapper">
    <div class="container">
      <header>
        <h1 class="date">{{ name }}</h1>
      </header>
      <!-- 제출 이벤트가 페이지를 다시 로드 하지 않습니다 -->
      <!-- <form v-on:submit.prevent="onSubmit"></form> -->
      <form @submit="onSubmit">
        <div class="inputBox">
          <BaseInput v-model="id" required />
          <span></span>
          <label>아이디</label>
        </div>
        <div class="inputBox">
          <BaseInput type="password" v-model="password" required />
          <span></span>
          <label>비밀번호</label>
        </div>
        <div v-if="type === 'register'" class="inputBox">
          <BaseInput type="password" v-model="passwordConfirm" required />
          <span></span>
          <label>비밀번호 확인</label>
        </div>
        <!-- {error && <ErrorMessage>{error}</ErrorMessage>} -->
        <input type="submit" :value="name" />
      </form>
      <footer>
        <router-link v-if="type === 'register'" to="/login">로그인</router-link>
        <router-link v-else to="/register">회원가입</router-link>
      </footer>
    </div>
  </section>
</template>

<script>
import BaseInput from '@/components/common/BaseInput.vue';
import { authMap } from '@/global.js';

export default {
  props: {
    type: {
      type: String,
      default: 'login',
    },
    onSubmit: {
      type: Function,
      default: () => {},
    },
  },
  components: {
    BaseInput,
  },
  data() {
    return {
      id: '',
      password: '',
      passwordConfirm: '',
      name: authMap[this.type],
    };
  },
  methods: {
    tmp() {
      console.log('123');
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: aliceblue;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 400px;
    background: white;
    border-radius: 10px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);

    header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid silver;
    }

    form {
      padding: 0 40px;
    }

    .inputBox {
      position: relative;
      border-bottom: 2px solid #adadad;
      margin: 30px 0;

      input {
        width: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
      }

      label {
        position: absolute;
        top: 50%;
        left: 5px;
        color: #adadad;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: 0.5s;
      }

      span:before {
        content: '';
        position: absolute;
        top: 40px;
        left: 0;
        width: 0%;
        height: 2px;
        background: #2691d9;
        transition: 0.5s;
      }

      input:focus ~ label,
      input:valid ~ label {
        top: -5px;
        color: #2691d9;
      }

      input:focus ~ span::before,
      input:valid ~ span::before {
        width: 100%;
      }
    }

    input[type='submit'] {
      width: 100%;
      height: 50px;
      border: 1px solid;
      background: #2691d9;
      border-radius: 25px;
      font-size: 18px;
      color: #e9f4fb;
      font-weight: 700;
      cursor: pointer;
      outline: none;

      &:hover {
        background: black;
        transition: 0.5s;
      }
    }

    footer {
      margin: 30px 40px;
      text-align: right;
      font-size: 16px;

      a {
        color: #666666;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
        color: #2691d9;
      }
    }
  }
}
</style>
