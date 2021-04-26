<template>
  <div class="welcome container">
    <h2>Welcome</h2>
    <div v-if="haveAccount">
      <h3>Log in</h3>
      <LoginForm />
      <p>Don't have account? <span @click="toggleForm">Sign up here.</span></p>
    </div>
    <div v-else>
      <h3>Sign up</h3>
      <SignupForm />
      <p>Already have account? <span @click="toggleForm">Log in here</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "@vue/reactivity";

export default {
  components: {
    SignupForm,
    LoginForm,
  },
  setup() {
    const haveAccount = ref(true);

    const toggleForm = () => {
      haveAccount.value = !haveAccount.value;
    };

    return { haveAccount, toggleForm };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.welcome span {
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  margin: 20px auto;
}
</style>
