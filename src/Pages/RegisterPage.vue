<script>
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  data() {
    return {
      full_name: "",
      email: "",
      password: "",
      state: false,
    };
  },
  methods: {
    returndata() {
      console.log(
        this.firstname,
        this.fathername,
        this.email,
        this.password,
        this.phoneno
      );
    },
    registerstatusdata(data) {
      this.result = data;

      console.log(this.result.data.Register.Message);
      if (this.result.data.Register.Message === "registered succesfully") {
        this.$router.push("/login");
      } else if ((data.data.Register.Message = "email exist")) {
        this.loginerror = "The email is already registered";
        document.getElementById("alert").style.display = "block";
        function alertShow() {
          this.loginerror = "";
          document.getElementById("alert").style.display = "none";
        }
        setTimeout(alertShow, 4000);
      }
    },
  },
  setup() {
    const { mutate: RegisterStatus } = useMutation(gql`
      mutation RegisterStatus(
        $email: String!
        $password: String!
        $full_name: String!
      ) {
        Register(email: $email, password: $password, full_name: $full_name) {
          Message
        }
      }
    `);

    return {
      RegisterStatus,
    };
  },
};
</script>
<template>
  <div
    style="
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    "
    class="dark:bg-gray-900 dark:text-gray-100"
  >
    <div
      class="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-900 dark:text-gray-100"
    >
      <div
        id="alert"
        class="hidden p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
        role="alert"
      >
        {{ this.loginerror }}
        <!-- sometext -->
      </div>
      <h1 class="text-3xl font-semibold">Sign Up</h1>
      <router-link class="text-sm dark:text-gray-400" to="/login"
        >I have an account</router-link
      >
      <form
        novalidate=""
        class="space-y-4 ng-untouched ng-pristine ng-valid"
        autocomplete="off"
      >
        <div class="flex flex-col">
          <label for="email" class="sr-only my-6 py-2">Full Name</label>
          <input
            id="email"
            type="text"
            placeholder="username"
            v-model="full_name"
            class="my-6 py-2 rounded-t-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2"
          />

          <label for="password" class="sr-only my-6 py-2">Email</label>
          <input
            id="password"
            type="text"
            placeholder="Email "
            v-model="email"
            class="-mt-1 my-6 py-2 rounded-b-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2"
          />
          <label for="password" class="sr-only my-6 py-2">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password "
            v-model="password"
            class="-mt-1 my-6 py-2 rounded-b-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2"
          />
        </div>

        <button
          type="button"
          @click="
            this.state = !this.state
            RegisterStatus({
              full_name: this.full_name,
              email: this.email,
              password: this.password,
            }).then((data) => {
              this.state = !this.state
              registerstatusdata(data);
            });
          "
          class="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
        >
          <button
            v-if="this.state"
            class="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-white"
          ></button>
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>
