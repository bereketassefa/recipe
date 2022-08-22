<template>
  <div style="background-color: #f6f6f6">
    <div class="p-4 mt-4">
      <div
        class="container flex justify-start flex-col h-16 mx-auto"
        style="padding-left: 20px"
      >
        <h1 style="font-weight: bold; font-size: 18px" class="py-4">
          Recipe Name
        </h1>
        <!-- <H1 style="font-size: 40px;">This is the title of the recipe</H1> -->
        <div class="flex justify-center">
          <input
            type="search"
            v-model="title"
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            style="font-size: 40px"
            placeholder="Name of recipe"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
        </div>

        <h1 style="font-weight: bold; font-size: 18px" class="py-4">
          Desciption
        </h1>
        <div class="flex">
          <div class="mb-3 xl:w-96">
            <textarea
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              id="exampleFormControlTextarea1"
              rows="3"
              cols="80"
              v-model="description"
              placeholder="Recipe Description"
            ></textarea>
          </div>
        </div>
            <h1 style="font-weight: bold; font-size: 18px" class="py-4">
              Category
            </h1>
        <input
          list="browsers"
          name="browser"
          id="browser"
          placeholder="add category"
          class="py2"
          v-model="this.category"
          
        />
        <div v-if="loading">aa</div>
        <!-- <div v-else-if="result">
          {{result}}
        </div> -->
        <datalist id="browsers" v-else-if="result">
          <option v-for="data in result.categories" :data-main="data.category_id" :value="data.category_id">{{data.name}}</option>
          
        <!-- {{result}} -->
        </datalist>
        <button @click="dataset">show</button>
        <h1 style="font-weight: bold; font-size: 18px" class="py-4">Images</h1>

        <div class="hello">
          <h1>{{ msg }}</h1>
          <div class="w-full">
            <button
              type="button"
              class="flex justify-start ml-2 rounded-md border px-3 py-2 text-green-600"
              style="border: 1px solid green"
              @click="addImage()"
            >
              Add More
            </button>
            <div v-for="(image, index) in images" :key="index">
              <div class="flex justify-start ml-2 mt-4">
                <input
                  v-model="image.link"
                  placeholder="Add image link"
                  class="w-full py-2 border rounded"
                />
                <button
                  type="button"
                  class="ml-2 rounded-md border px-3 py-2 bg-red-500 text-white"
                  @click="remove(index)"
                  v-show="index != 0"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
        <h1 style="font-weight: bold; font-size: 18px" class="py-4">Step</h1>

        <div class="hello">
          <h1>{{ msg }}</h1>
          <div class="w-full">
            <button
              type="button"
              class="flex justify-start ml-2 rounded-md border px-3 py-2 text-green-600"
              style="border: 1px solid green"
              @click="addMore()"
            >
              Add More
            </button>
            <!-- <button
              type="button"
              class="flex justify-start ml-2 rounded-md border px-3 py-2 bg-green-600 text-white"
              @click="showmessage()"
            >
              showmes
            </button> -->
            <div v-for="(step, index) in steps" :key="index">
              <div class="flex justify-start ml-2 mt-4">
                <input
                  v-model="step.desc"
                  placeholder="Add steps"
                  class="w-full py-2 border rounded"
                />
                <button
                  type="button"
                  class="ml-2 rounded-md border px-3 py-2 bg-red-500 text-white"
                  @click="removeSteps(index)"
                  v-show="index != 0"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 style="font-weight: bold; font-size: 18px" class="py-4">
          Duration
        </h1>
        <input
          type="number"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleNumber0"
          placeholder="recipe duration"
        />

        <button
          type="button"
          @click="
            this.state = !this.state;
            sendMessage({
              discription: this.description,
              recipe_title: this.title,
              duration: this.duration,
              user_id: '9b0efe50-1ea7-4b09-9a80-9b7c437a8016',
              category_id:this.category
            }).then((res) => {
              this.recipe_id = res.data.insert_recipe_one.recipe_id;
              returnImageArr();
              for (z = 0; z < this.wantedimages.length; z++) {
                sendphoto({
                  photos: this.wantedimages[z].link,
                  recipe_id: this.recipe_id,
                });
              }
              for (z = 0; z < this.wantedsteps.length; z++) {
                sendstep({
                  recipe_order: z + 1,
                  description: this.wantedsteps[z].desc,
                  recipe_id: this.recipe_id,
                });
              }
              this.state = !this.state;
            });
          "
          class="px-6 py-2 font-semibold rounded lg:block my-4"
          style="
            background: #0aaf60;
            color: white;
            width: 11.5rem;
            display: inline;
          "
        >
          <button
            v-if="!this.state"
            class="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-white"
          ></button>
          <!-- @click="sendMessage({ photos: this.images })" -->
          Add Recipe
        </button>
        <div class="flex justify-center"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import mainHeaderVue from "../components/mainHeader.vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useQuery } from '@vue/apollo-composable'
export default {
  name: "app",
  // components: {
  //   mainHeaderVue,
  // },
  data: function () {
    return {
      category:"",
      state: true,
      recipe_id: "",
      title: "",
      description: "",
      duration: 0,
      images: [
        {
          link: "",
          recipe_id: "d2453ed3-b63b-4417-82c2-4c554e512433",
        },
      ],
      wantedimages: [],
      wantedsteps: [],
      steps: [
        {
          desc: "",
        },
      ],
    };
  },

  methods: {
    dataset(){
        console.log(this.category)
    },
    returnImageArr() {
      let steps = JSON.parse(JSON.stringify(this.images));
      let wsteps = JSON.parse(JSON.stringify(this.steps));

      this.wantedimages = steps;
      this.wantedsteps = wsteps;
    },
    returnStepArr() {
      let newarr = [];
      for (let x = 0; x < this.images.length; x++) {
        newarr.push(this.steps[x].desc);
        console.log();
      }
      console.log(newarr);
      // return newarr
    },
    addRecipe() {
      let steps = JSON.parse(JSON.stringify(this.steps));

      let image = JSON.parse(JSON.stringify(this.images));

      console.log(this.title, this.description, this.duration, steps, image);
    },

    remove(index) {
      this.images.splice(index, 1);
      // console.log(this.steps)
    },
    addImage() {
      this.images.push({
        link: "",
        recipe_id: "d2453ed3-b63b-4417-82c2-4c554e512433",
      });
    },
    addMore() {
      this.steps.push({
        link: "",
      });
    },

    removeSteps(index) {
      this.steps.splice(index, 1);
    },
    showmessage() {
      let myTarget = JSON.parse(JSON.stringify(this.steps));
      console.log(myTarget);
    },
  },
  setup() {
    const { mutate: sendMessage } = useMutation(gql`
      mutation sendMessage(
        $discription: String!
        $duration: numeric!
        $recipe_title: String!
        $user_id: uuid!
        $category_id: uuid!
      ) {
        insert_recipe_one(
          object: {
            discription: $discription
            duration: $duration
            recipe_title: $recipe_title
            user_id: $user_id
            recipe_categories: {data: {category_id: $category_id}}
          }
        ) {
          recipe_id
        }
      }
    `);
    const { mutate: sendphoto } = useMutation(gql`
      mutation sendphoto($photos: String!, $recipe_id: uuid!) {
        insert_recipe_photo(objects: { link: $photos, recipe_id: $recipe_id }) {
          affected_rows
        }
      }
    `);

    const { mutate: sendstep } = useMutation(gql`
      mutation sendstep(
        $description: String!
        $recipe_order: numeric!
        $recipe_id: uuid!
      ) {
        insert_recipe_steps(
          objects: {
            recipe_order: $recipe_order
            description: $description
            recipe_id: $recipe_id
          }
        ) {
          affected_rows
        }
      }
    `);

      const { result , loading } = useQuery(gql`
       {
          categories{
            category_id
            name
          }
      }
    ` );
    return {
      result,
      loading,
      sendMessage,
      sendphoto,
      sendstep,
    };
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
