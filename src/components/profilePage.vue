<template>
  <header class="p-4 ">
    <div class="container flex justify-between h-16 mx-auto">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Back to homepage"
        class="flex items-center p-2"
      >
      </a>
      <ul class="items-stretch hidden space-x-3 lg:flex">
        <li class="flex">
          <a
            rel="noopener noreferrer"
            href="#"
            class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-green-400 dark:border-green-400"
            >Likes</a
          >
        </li>
        <!-- <li class="flex">
          <a
            rel="noopener noreferrer"
            href="#"
            class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >Favorite</a
          >
        </li> -->
      </ul>
      <button class="p-4 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 dark:text-gray-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div class="items-center flex-shrink-0 hidden lg:flex">
        <button
          class="self-center px-8 py-3 text-white font-semibold rounded dark:bg-green-400 dark:text-gray-900"
          style="color:white;"
          @click="logout"
        >
          Log Out
        </button>
      </div>
    </div>
  </header>
  <section class="py-1">
      <div class="container p-6 mx-auto space-y-8">
        
      <!-- <div >loading result</div> -->
      <!-- v-if="loading" -->

      <div
        class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-if="loading"
          class="flex flex-col m-0 rounded shadow-md w-60 sm:w-80 animate-pulse h-60"
        >
          <div class="h-48 rounded-t dark:bg-gray-700"></div>
          <div class="flex-1 px-4 py-4 space-y-4 sm:p-8 dark:bg-gray-900">
            <div class="w-full h-3 rounded dark:bg-gray-700"></div>
            <div class="w-full h-3 rounded dark:bg-gray-700"></div>
            <div class="w-3/4 h-3 rounded dark:bg-gray-700"></div>
          </div>
        </div>
        <!-- <h1 v-if="result.recipe == []">There is no recipe in this category</h1> -->
        
        <article

          class="flex flex-col"
          style="background-color: white"
          v-else-if="result"
          v-for="recipe in result"
        >
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <!-- <img
              alt=""
              class="object-cover w-full h-52 dark:bg-gray-500"
              :src="recipe.recipe.recipe_photos[0].link"
            /> -->
          </a>
          <div class="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                class="object-cover w-full h-52 dark:bg-gray-500"
                :src="recipe[0].recipe.recipe_photos[0].link"
              />
            </a>
            <span
              rel="noopener noreferrer"
              href="#"
              class="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
            >
              #{{ recipe[0].recipe.recipe_title}}
            </span>
            <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">
              {{ recipe[0].recipe.recipe_title }}
            </h3>
            <div
              class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400"
            >
              <span
                >
                {{  recipe[0].recipe.recipe_comments_aggregate.aggregate.count     }}
                Comments</span
              >
              <span
                >
                {{ recipe[0].recipe.recipe_likes_aggregate.aggregate.count }}
                Likes</span
              >
            </div>
          </div>
        </article> 
        
      </div>
    </div>
  </section>
</template>

<script>
// import mainHeaderVue from "../components/mainHeader.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";
import { watch } from "vue";
export default {
  data: function () {
    return {};
  },
  methods:{
    logout(){
        localStorage.clear()
        this.$router.push("/login")
    }
  },
  created() {
    localStorage.setItem("stat", "fre");
  },
  setup(props) {
    const route = useRoute();
    let userid = localStorage.getItem("user-id")

 const { result, loading, error, refetch } = useQuery(
      gql`
        query getUsers($id: uuid!) {
         user_favorite(where: {user_id: {_eq: $id}}) {
            recipe_id
            recipe {
              recipe_id
              recipe_title
              duration
              recipe_photos {
                link
              }
              recipe_comments_aggregate {
                aggregate {
                  count
                }
              }
              recipe_likes_aggregate {
                aggregate {
                  count
                }
              }
            }
          }
        }
      `,
      { id: userid }
    );

    return {
      result,
      loading,
      error,
      refetch,
    };
  },
};
</script>
