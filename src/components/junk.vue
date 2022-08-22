
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="w-full mt-4 p-10">
      <button
        type="button"
        class="flex justify-start ml-2 rounded-md border px-3 py-2 bg-pink-600 text-white"
        @click="addMore()"
      >
        Add More
      </button>
      <button
        type="button"
        class="flex justify-start ml-2 rounded-md border px-3 py-2 bg-pink-600 text-white"
        @click="showmessage()"
      >
        showmes
      </button>
      <div v-for="(course, index) in courses" :key="index">
        <div class="flex justify-start ml-2 mt-4">
          <input
            v-model="course.courseName"
            placeholder="enter you course name"
            class="w-full py-2 border border-indigo-500 rounded"
            
          />
          <button
            type="button"
            class="ml-2 rounded-md border px-3 py-2 bg-red-600 text-white"
            @click="remove(index)"
            v-show="index != 0"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      courses: [
        {
          courseName: "",
          
        },
      ],
    };
  },
  methods: {
    addMore() {
      this.courses.push({
        courseName: "",
      });
    },
    remove(index) {
      this.courses.splice(index, 1);
    },
    showmessage(){
        let myTarget = JSON.parse(JSON.stringify(this.courses))
        console.log(myTarget)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
<!-- <template>
  <div style="background-color: #f6f6f6">
    <div class="p-4 mt-4">
      <div
        class="container flex justify-start flex-col h-16 mx-auto"
        style="padding-left: 20px"
      >
        <H1 style="font-size: 40px">This is the title of the recipe</H1>

        <div class="flex flex-row items-center pt-5">
          <img
            alt=""
            class="w-8 h-8 rounded-full ring-2 ring-offset-4 ring-green-400"
            src="https://source.unsplash.com/40x40/?portrait?1"
          />
          <span style="font-size: 20px; padding-left: 20px"
            >Bereket Assefa</span
          >
        </div>
        <h1 style="font-weight: bold; font-size: 18px" class="py-4">
          Desciption
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          eligendi pariatur? Ut vero doloremque aspernatur vel ipsam nisi
          laboriosam, ex nam enim consequuntur itaque optio esse modi explicabo
          iusto molestias! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ex harum mollitia, asperiores voluptas quos officiis inventore
          officia maiores! Dolorem sed impedit quis at alias ducimus recusandae?
          Quia accusantium tempora id vero reiciendis rerum, asperiores
          officiis, quis inventore rem aliquam quasi soluta provident illum
          expedita? Eos et nulla iste consequatur voluptatibus.
        </p>
        <h1 style="font-weight: bold; font-size: 18px" class="py-4">
          Duration
        </h1>
        <p>25 Minut</p>
        <h1 style="font-weight: bold; font-size: 18px" class="py-4">Images</h1>
        <p>25 Minut</p>
        <h1 style="font-weight: bold; font-size: 18px" class="py-4">Step</h1>

        <section class="">
          <div class="container max-w-5xl px-4 py-2 mx-auto">
            <div class="grid gap-4 mx-4 sm:grid-cols-12">
              <div class="relative col-span-12 space-y-6 sm:col-span-9">
                <div
                  class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700"
                >
                  <div
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400"
                  >
                    <h3 class="text-xl font-semibold tracking-wide">Step 1</h3>

                    <p class="mt-3">
                      Pellentesque feugiat ante at nisl efficitur, in mollis
                      orci scelerisque. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                  <div
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400"
                  >
                    <h3 class="text-xl font-semibold tracking-wide">Step 2</h3>

                    <p class="mt-3">
                      Morbi vulputate aliquam libero non dictum. Aliquam sit
                      amet nunc ut diam aliquet tincidunt nec nec dui. Donec
                      mollis turpis eget egestas sodales.
                    </p>
                  </div>
                  <div
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400"
                  >
                    <h3 class="text-xl font-semibold tracking-wide">Step 3</h3>

                    <p class="mt-3">
                      Suspendisse tincidunt, arcu nec faucibus efficitur, justo
                      velit consectetur nisl, sit amet condimentum lacus orci
                      nec purus. Mauris quis quam suscipit, vehicula felis id,
                      vehicula enim.
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
            class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
          />

          <div class="flex justify-center items-center space-x-2">
            <button
              type="button"
              @click="open = false"
              class="btn bg-green-600 text-white px-4 py-2 font-medium rounded"
            >
              Comment
            </button>
          </div>
        </div>
        <ul class=" " style="margin: 30px 0 30px 0;">
          <li class="space-y-1">
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
              <h4 class="font-medium">
                Bereket Assefa
              </h4>
            </div>
            <p class="ml-7 dark:text-gray-400">
              This is the best recipe ever that  i have tested before
            </p>
          </li>
         
        </ul>
        <div class="flex justify-center"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import mainHeaderVue from "../components/mainHeader.vue";
export default {
  name: "app",
  // components: {
  //   mainHeaderVue,
  // },
  data: function () {
    return {};
  },
};
</script> -->
