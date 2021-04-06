<template>
  <div class="registration">
    <form action="" class="registration-form" @submit.prevent="submitHandler">
      <h3 class="title">Registration</h3>
      <input
        type="text"
        name="user-name"
        id="userName"
        placeholder="Name"
        v-model.trim="userName"
        :class="{
          invalid: ($v.userName.$dirty && !$v.userName.required) || ($v.userName.$dirty && !$v.userName.minLength),
          valid: $v.userName.$dirty && $v.userName.required && $v.userName.minLength
        }"
      />
      <small v-if="$v.userName.$dirty && !$v.userName.required"
        >Enter your name</small
      >
      <small v-else-if="$v.userName.$dirty && !$v.userName.minLength"
        >Minimum {{ this.$v.userName.$params.minLength.min }} symbols</small
      >
      <small v-else></small>
      <input
        type="text"
        placeholder="Email"
        v-model.trim="email"
        :class="{
          invalid:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
          valid: $v.email.$dirty && $v.email.email && $v.email.required,
        }"
      />
      <small v-if="$v.email.$dirty && !$v.email.required"
        >Enter your email</small
      >
      <small v-else-if="$v.email.$dirty && !$v.email.email"
        >This is not email</small
      >
      <small v-else></small>
      <input
        :type="passwordFieldType"
        placeholder="Password"
        v-model.trim="password"
        :class="{
          invalid:
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength),
          valid:
            $v.password.$dirty && $v.password.minLength && $v.password.required,
        }"
      />
      <small v-if="$v.password.$dirty && !$v.password.required"
        >Enter password</small
      >
      <small v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Minimum {{ this.$v.password.$params.minLength.min }} symbols</small
      >
      <small v-else></small>
      <input
        :type="passwordFieldType"
        placeholder="Repeat password"
        v-model.trim="confirm"
        :class="{
          invalid:
            ($v.confirm.$dirty && !$v.confirm.required) ||
            ($v.confirm.$dirty && !$v.confirm.sameAs),
          valid: $v.confirm.$dirty && $v.confirm.sameAs && $v.confirm.required,
        }"
      />
      <small v-if="$v.confirm.$dirty && !$v.confirm.required"
        >Repeat password</small
      >
      <small v-else-if="$v.confirm.$dirty && !$v.confirm.sameAs"
        >Password mismatch</small
      >
      <small v-else></small>
      <div class="btn-block">
        <button type="button" @click="passShowHide">{{ this.passbtn }}</button>
        <button type="submit" class="submit">Registration</button>
      </div>

      <router-link to="/login">Already have an account?</router-link>
    </form>
  </div>
</template>

<script>
import { email, required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "Registration",
  data: () => ({
    userName: "",
    email: "",
    password: "",
    confirm: "",
    passbtn: "Show password",
    passwordFieldType: "password",
  }),
  validations: {
    userName: { required, minLength: minLength(2) },
    email: { email, required },
    password: { required, minLength: minLength(6) },
    confirm: { required, sameAs: sameAs("password") },
  },
  methods: {
    passShowHide() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.passbtn =
        this.passbtn === "Hide password" ? "Show password" : "Hide password";
    },
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.userName,
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("registration", formData);
        this.$router.push("/");
      } catch (e) {}
    },
  },
};
</script>

<style scoped>
.registration {
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
  margin-bottom: 10px;
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
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
  width: 100%;
}
.btn-block {
  margin-bottom: 15px;
}
a {
  color: rgb(16, 133, 88);
}
.invalid {
  color: rgb(8, 3, 3);
  background: #c27777;
}
.valid {
  color: green;
  background: rgb(98, 196, 98);
}
</style>