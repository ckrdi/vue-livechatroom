import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    // console.log(res);
    return res;
  } catch (err) {
    // console.log(err.message);
    error.value = "The password is invalid or the user does not exist.";
  }
};

const useLogin = () => {
  return { login, error };
};

export default useLogin;
