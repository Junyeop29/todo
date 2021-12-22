<template>
  <div class="example-modal-window">
    <p>버튼을 누르면 모달 대화 상자가 열립니다.</p>
    <button @click="openModal">열기</button>

    <ContentModal @close="closeModal" v-if="modal" />
  </div>
</template>

<script>
import ContentModal from './ContentModal.vue';

export default {
  components: {
    ContentModal,
  },
  data() {
    return {
      modal: false,
      message: '',
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message);
        this.message = '';
        this.closeModal();
      } else {
        alert('메시지를 입력해주세요.');
      }
    },
  },
};
</script>
