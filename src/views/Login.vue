<template>
  <div class="login">
    <form action="" class="login-form" @submit.prevent="submitHandler">
      <h3 class="title">Login</h3>
      <input
        type="text"
        placeholder="Email"
        v-model.trim="email"
        :class="{
          invalid:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
      />
      <small v-if="$v.email.$dirty && !$v.email.required"
        >Please enter email</small
      >
      <small v-else-if="$v.email.$dirty && !$v.email.email"
        >Please enter correct email</small
      >
      <small v-else></small>
      <input
        type="text"
        placeholder="Password"
        v-model.trim="password"
        :class="{
          invalid:
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength),
        }"
      />
      <small v-if="$v.password.$dirty && !$v.password.required"
        >Please enter password</small
      >
      <small v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Minimum {{ this.$v.password.$params.minLength.min }} symbols.</small
      >
      <small v-else></small>
      <button type="submit" class="submit">Sign in!</button>
      <router-link class="reg-link" to="/registration"
        >Have no account yet?</router-link
      >
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {}
    },
  },
};
</script>

<style scoped>
.login {
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form {
  border: 3px solid rgb(16, 133, 88);
  border-radius: 30px;
  padding: 0 20px 50px;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: auto;
}
input {
  font-size: 20px;
  border: 2px solid rgb(16, 133, 88);
  border-radius: 5px;
  margin-bottom: 5px;
}
small {
  margin-bottom: 5px;
  align-self: flex-start;
  height: 16px;
}
button {
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px;
  align-self: center;
  border: 1px solid rgb(16, 133, 88);
  border-radius: 10px;
  background: rgb(16, 133, 88);
  margin: 30px 0 20px;
  outline: none;
  cursor: pointer;
  width: 100%;
}
a {
  color: rgb(16, 133, 88);
}
.invalid {
  color: rgb(8, 3, 3);
  background: #c27777;
}
</style>