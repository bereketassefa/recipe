<template>
  <div v-if="loading">
    <div
      class="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-400"
    ></div>
  </div>
  <div v-else-if="result">
    <div style="background-color: #f6f6f6">
      <div class="p-4 mt-4">
        <div
          class="container flex justify-start flex-col h-16 mx-auto"
          style="padding-left: 20px"
        >
          <H1 style="font-size: 40px">{{
            result.recipe_by_pk.recipe_title
          }}</H1>

          <div class="flex flex-row justify-between items-center pt-5">
            <div class="flex items-center">
              <img
                alt=""
                class="w-8 h-8 rounded-full ring-2 ring-offset-4 ring-green-400"
                :src="result.recipe_by_pk.user.profile_pic"
              />
              <span style="font-size: 20px; padding-left: 20px">{{
                result.recipe_by_pk.user.full_name
              }}</span>
            </div>
            <div class="flex items-center">
              <div>
                <button
                  @click="
                    if (result.recipe_by_pk.user_favorites.length == 0) {
                      addFavorite({
                        user_id: this.user_id,
                        id: $route.params.id,
                      }).then((data) => {
                        this.$router.go();
                      });
                    } else {
                      removeFavorite({
                        user_id: this.user_id,
                        id: $route.params.id,
                      }).then((data) => {
                        this.$router.go();
                      });
                    }
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    v-if="!result.recipe_by_pk.user_favorites.length"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    v-else
                  >
                    <path
                      d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                    />
                  </svg>
                </button>
              </div>
              <button
                style="padding: 0 5px"
                @click="
                  check(result.recipe_by_pk.recipe_likes);
                  if (this.like == false) {
                    toggleLike({ user_id: this.user_id, like: true }).then(
                      (data) => {
                        this.$router.go();
                      }
                    );
                  } else if (result.recipe_by_pk.recipe_likes.length == 0) {
                    toggleLike({ user_id: this.user_id, like: true }).then(
                      (data) => {
                        this.$router.go();
                      }
                    );
                  } else if (this.like == true) {
                    toggleLike({ user_id: this.user_id, like: false }).then(
                      (data) => {
                        this.$router.go();
                        // result.recipe_by_pk.recipe_likes[0].like = false
                        // this.like = false
                      }
                    );
                  }
                "
              >
                <!-- {{result.recipe_by_pk.recipe_likes.like[0]}} -->
                <div v-if="!result.recipe_by_pk.recipe_likes.length == 0">
                
                <!-- {{result.recipe_by_pk.recipe_likes.length}} -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  v-if="result.recipe_by_pk.recipe_likes[0].like || this.like"
                >
                  <path
                    d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                  />
                </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  v-else
                >
                  
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </button>
              {{ result.recipe_by_pk.recipe_likes_aggregate.aggregate.count }}
            </div>
          </div>
          <h1 style="font-weight: bold; font-size: 18px" class="py-4">
            Desciption
          </h1>
          <p>
            {{ result.recipe_by_pk.discription }}
          </p>
          <h1 style="font-weight: bold; font-size: 18px" class="py-4">
            Duration
          </h1>
          <p>{{ result.recipe_by_pk.duration }} minute</p>
          <h1 style="font-weight: bold; font-size: 18px" class="py-4">
            Images
          </h1>
          <section class="">
            <div class="container flex flex-col justify-center p-4">
              <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img
                  v-for="images in result.recipe_by_pk.recipe_photos"
                  class="object-cover w-full dark:bg-gray-500 aspect-square"
                  :src="images.link"
                />
              </div>
            </div>
          </section>
          <h1 style="font-weight: bold; font-size: 18px" class="py-4">Step</h1>

          <section class="">
            <div class="container max-w-5xl py-2">
              <div class="grid gap-4 mx-4 sm:grid-cols-12">
                <div class="relative col-span-12 space-y-6 sm:col-span-9">
                  <div
                    class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700"
                  >
                    <div
                      v-for="(step, index) in result.recipe_by_pk.recipe_steps"
                      class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400"
                    >
                      <h3 class="text-xl font-semibold tracking-wide">
                        Step {{ index + 1 }}
                      </h3>

                      <p class="mt-3">
                        {{ step.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <h1 style="font-weight: bold; font-size: 18px" class="py-4">
            Comments
          </h1>
          <div x-show="open" class="flex justify-between items-center">
            <input
              type="text"
              v-model="this.comment"
              class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
            />

            <div class="flex justify-center items-center space-x-2">
              <button
                type="button"
                @click="
                // console.log(this.comment)
                  addComment({
                    comment: this.comment,
                    user_id: this.user_id,
                    id: $route.params.id,
                  }).then((data) => {
                    this.$router.go()
                  })
                "
                class="btn bg-green-600 text-white px-4 py-2 font-medium rounded"
              >
                Comment
              </button>
            </div>
          </div>
          <ul class=" " style="margin: 30px 0 30px 0">
            <li class="space-y-1" v-for="comment in result.recipe_by_pk.recipe_comments">
              <div class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-4 h-4 fill-current dark:text-violet-400"
                >
                  <path
                    d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
                  ></path>
                  <polygon
                    points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
                  ></polygon>
                </svg>
                <h4 class="font-medium">{{comment.user.full_name}}</h4>
              </div>
              <p class="ml-7 dark:text-gray-400">
                {{comment.comment}}
              </p>
            </li>
          </ul>
          <div class="flex justify-center" style="height:50px;width:50px"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import mainHeaderVue from "../components/mainHeader.vue";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
export default {
  name: "app",
  // components: {
  //   mainHeaderVue,
  // },

  data: function () {
    return {
      comment: "",
      id: "",
      user_id: "",
      like: false,
      recipe_id: "",
    };
  },
  created() {
    let a = localStorage.getItem("user-id");
    this.user_id = a;
    // this.recipe_id = route.params.id;
  },
  methods: {
    check(data) {
      console.log(data);
      if (data[0].like == false) {
        this.like = false;
      } else if (data[0].length == 0) {
        this.like = false;
      } else {
        this.like = true;
      }
    },
  },
  setup() {
    const route = useRoute();
    const { result, loading } = useQuery(
      gql`
        query getUsers($id: uuid!, $user_id: uuid!) {
          recipe_by_pk(recipe_id: $id) {
            discription
            duration
            recipe_likes_aggregate(where: { like: { _eq: true } }) {
              aggregate {
                count
              }
            }
            recipe_title
            recipe_comments {
              comment
              user {
                full_name
              }
            }
            user {
              full_name
              profile_pic
            }
            recipe_photos {
              link
            }
            recipe_steps(order_by: { recipe_order: asc }) {
              recipe_order
              description
            }
            recipe_likes(where: { user_id: { _eq: $user_id } }) {
              user_id
              like
            }
            user_favorites(
              where: { recipe_id: { _eq: $id }, user_id: { _eq: $user_id } }
            ) {
              recipe_id
            }
          }
        }
      `,
      { id: route.params.id, user_id: localStorage.getItem("user-id") }
    );

    const { mutate: toggleLike } = useMutation(gql`
      mutation toggleLike($user_id: uuid!, $like: Boolean!) {
        update_recipe_like(
          _set: { like: $like }
          where: { user_id: { _eq: $user_id } }
        ) {
          affected_rows
          returning {
            like
          }
        }
      }
    `);

    const { mutate: addFavorite } = useMutation(gql`
      mutation addFavorite($id: uuid!, $user_id: uuid!) {
        insert_user_favorite(objects: { recipe_id: $id, user_id: $user_id }) {
          returning {
            recipe_id
          }
        }
      }
    `);
    const { mutate: removeFavorite } = useMutation(gql`
      mutation removeFavorite($id: uuid!, $user_id: uuid!) {
        delete_user_favorite(
          where: { recipe_id: { _eq: $id }, user_id: { _eq: $user_id } }
        ) {
          returning {
            recipe_id
          }
        }
      }
    `);

    const { mutate: addComment } = useMutation(gql`
      mutation addComment($comment:String! , $id: uuid!, $user_id: uuid!) {
        insert_recipe_comment_one(
          object: { comment: $comment, recipe_id: $id, user_id: $user_id }
        ) {
          user_id
        }
      }
    `);

    return {
      addComment,
      removeFavorite,
      addFavorite,
      toggleLike,
      result,
      loading,
    };
  },
};
</script>
