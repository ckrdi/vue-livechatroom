<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <textarea placeholder="Type a message" v-model="message"></textarea>
      <button>Enter</button>
    </form>
    <div class="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { timestamp } from "../firebase/config";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";

export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { error, addDoc } = useCollection("message");

    const handleSubmit = async () => {
      const newChat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(newChat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  display: flex;
  margin: 6px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
  resize: none;
}
button {
  margin-left: 6px;
  margin-bottom: 6px;
}
</style>
