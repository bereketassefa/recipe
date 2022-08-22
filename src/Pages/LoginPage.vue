<template>
  <div
    style="
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    "
    class="dark:bg-gray-900 dark:text-gray-100"
  >
    <div
      v-show="this.loginErrorShow"
      id="alert"
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      {{ this.loginerror }}
    </div>
    <div
      class="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100"
    >
      <div class="mb-8 text-center">
        <h1 class="my-3 text-4xl font-bold">Sign in</h1>
        <p class="text-sm dark:text-gray-400">Sign in to access your account</p>
      </div>
      <form action="" class="space-y-12 ng-untouched ng-pristine ng-valid">
        <div class="space-y-4">
          <div>
            <label for="email" class="block mb-2 text-sm">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              v-model="this.email"
              class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <div class="flex justify-between mb-2">
              <label for="password" class="text-sm">Password</label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              v-model="this.password"
              class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div class="space-y-2">
          <div>
            <button
              type="button"
              @click="
                // showdata
                this.state = !this.state
                loginstatus({
                  email: this.email,
                  password: this.password,
                }).then((data) => {
                  this.state = !this.state
                  loginstatusresult(data);
                })
              "
              class="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              <button
                v-if="this.state"
                class="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-white"
              ></button>
              Sign in
            </button>
          </div>
          <p class="px-6 text-sm text-center dark:text-gray-400">
            Don't have an account yet?
            <router-link
              to="/signup"
              class="hover:underline dark:text-violet-400"
              >Sign up</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>

  <!-- <h1>{{ result }}</h1> -->
</template>
<script>
// import { useQuery } from "@vue/apollo-composable";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { routerKey } from "vue-router";
import axios from "axios";
import { toRaw } from "vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      result: "",
      loginerror: "",
      loginErrorShow: false,
      state: false,
    };
  },
  // created(){
  //   var value = localStorage.getItem("role")
  //   if(value == "user"){
  //     this.$router.push("/dashboard")
  //   }
  //   else if(value == "admin"){
  //     this.$router.push("/adashboard")
  //   }
  // },
  methods: {
    showdata() {
      console.log(this.email, this.password);
    },
    loginstatusresult(data) {
      this.result = data;
      // console.log( a.data.Login.Message)
      // console.log(this.result.data.Login.Message);
      if (this.result.data.Login.Message == "login succesfully") {
        // console.log(this.result.data.Login.Message == "login succesfully")

        localStorage.setItem("apollo-token", this.result.data.Login.Token);

        localStorage.setItem("user-id", this.result.data.Login.Id);

        // console.log(this.result.data.Login.role);
        // this.$router.go()

        this.$router.push("/loged/6b57e448-240e-4d89-a229-6a8fb0f1fe6f");
      } else if (this.result.data.Login.Message == "incorrect password") {
        this.loginerror = "The password is inccorect";
        document.getElementById("alert").style.display = "block";
        function alertShow() {
          this.loginerror = "";
          document.getElementById("alert").style.display = "none";
        }
        setTimeout(alertShow, 4000);
      } else {
        this.loginerror = "The email does't exist";
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
    const { mutate: loginstatus } = useMutation(gql`
      mutation loginstatus($email: String!, $password: String!) {
        Login(email: $email, password: $password) {
          Message
          Token
          Id
        }
      }
    `);

    return {
      loginstatus,
    };
  },
};
</script>
