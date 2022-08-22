<template>
  <header class="p-4" style="border: 1px solid black">
    <div class="container flex justify-between h-16 mx-auto">
      <ul class="items-stretch hidden space-x-3 lg:flex">
        <li class="flex">
          <a
            style="font-size: 33px"
            rel="noopener noreferrer"
            href="#"
            class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >Gebeta <span style="color: #0aaf60">Explore</span></a
          >
        </li>
      </ul>
     
      <div class="flex items-center md:space-x-4">
        <button
          type="button"
          class="hidden px-6 py-2 font-semibold rounded lg:block"
          style="background: #0aaf60; color: white"
          @click="this.$router.push('/new')"
        >
          Add Recipe
        </button>
        <router-link to="/profile">

        
        <img
          alt=""
          class="w-12 h-12 rounded-full ring-2 ring-offset-4 ring-green-400"
          
        />
</router-link>
        

      </div>
      <button title="Open menu" type="button" class="p-4 lg:hidden">
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
    </div>
  </header>
  <div style="background-color: #f6f6f6">
    <div class="p-4 mt-4">
      <h1 class="pl-8">sorry for the inconvenience you have to refresh after clicking each category </h1>
      
      <div
        class="container flex justify-start h-16 mx-auto"
        style="padding-left: 20px"
      >
        <div v-if="loading">loading categories</div>
        <button
          type="button"
          class="px-8 py-3 font-semibold"
          style="
            border: 3px solid #0aaf60;
            border-radius: 15px;
            background-color: #f3fbf6;
            margin-right: 10px;
            font-weight: 600;
          "
          v-else-if="result"
          v-for="category in result.categories"
          @click="this.$router.push({ path: `/loged/${category.category_id}` })"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
    <!-- <button @click="refetch()">Refresh</button> -->
    <section class="py-1">
      <div class="container p-6 mx-auto space-y-8">
        <!-- <div >loading result</div> -->
        <!-- v-if="loading" -->
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
        <div
          class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
          v-else
        >
          <!-- v-else="result" -->
          <!-- <h1 v-if="result.recipe == []">There is no recipe in this category</h1> -->
          
          <article
            class="flex flex-col"
            style="background-color: white"
            v-for="recipe in result.recipe"
          >
           
              <img
                alt=""
                class="object-cover w-full h-52 dark:bg-gray-500"
                :src="recipe.recipe_photos[0].link"
              />
            
            <div class="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <span
                rel="noopener noreferrer"
                href="#"
                class="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
              >
                #{{ recipe.recipe_categories[0].category.name }}
                <!-- {{recipe.}} -->
              </span>
              <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">
                <button
                  type="button"
                  
                  @click="
                    this.$router.push({
                      path: `/recipe/${recipe.recipe_id}`,
                    })
                  "
                >
                  {{ recipe.recipe_title }}
                </button>
                
              </h3>
              <div
                class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400"
              >
                <span
                  >{{
                    recipe.recipe_comments_aggregate.aggregate.count
                  }}
                  Comments</span
                >
                <span
                  >{{
                    recipe.recipe_likes_aggregate.aggregate.count
                  }}
                  Likes</span
                >
                <!-- <span>{{recipe.recipe_title }} nn</span> -->
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import mainHeaderVue from "../components/mainHeader.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";
import { watch } from "vue";
export default {
  name: "app",
  // components: {
  //   mainHeaderVue,
  // },
  data: function () {
    return {};
  },
  created() {
    localStorage.setItem("stat", "fre");
  },
  setup(props) {
    const route = useRoute();
    let routerr = route.params.id;
    const { result, loading, error, refetch } = useQuery(
      gql`
        query getUsers($id: uuid!) {
          recipe(
            order_by: {}
            limit: 20
            where: { recipe_categories: { category_id: { _eq: $id } } }
          ) {
            duration
            recipe_id
            recipe_title
            user {
              full_name
            }
            recipe_likes(order_by: { like: asc }) {
              like
            }
            recipe_likes_aggregate(where: { like: { _eq: true } }) {
              aggregate {
                count
              }
            }
            recipe_photos {
              link
            }
            recipe_categories {
              category {
                name
              }
            }
            recipe_comments_aggregate {
              aggregate {
                count
              }
            }
          }
          categories(limit: 10) {
            category_id
            name
          }
        }
      `,
      { id: routerr }
    );

    watch(
      () => route.params.id,
      async () => {
        refetch();
        // this.$router.go()
        // routerr = route.params.id
        // console.log(routerr)
      }
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
