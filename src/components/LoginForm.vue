<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup() {
    const { login, error } = useLogin();
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      await login(email.value, password.value);
    };
    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
