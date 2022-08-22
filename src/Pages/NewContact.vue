<script>
import EmployeeService from "../EmployeeService";
export default {

  mounted() {
    if (localStorage.getItem("user-id")) {
		let a = localStorage.getItem("user-id")

      this.user_id = a;
	
    }
  },
  date() {
    return {
      name: "zzz",
      email: "zzz",
      phone_number: "zzz",
      address: "zzz",
      tag: "",
      user_id: "1",
    };
  },
    created() {
    var value = localStorage.getItem("role");
    if (value == null) {
      this.$router.push("/login");
    } 
  },
  methods: {
    show() {
      console.log(this.user_id, this.tag);
    },
    addcont(contact){
      return EmployeeService.createcontacts(contact)
    },
    display() {
      console.log({
        address: this.address,
        email: this.email,
        phone_number: this.phone_number,
        name: this.name,
        tag: this.tag,
        user_id: this.user_id,
      });
    },
  },
  
};
</script>
<template>
  <section class="p-6 dark:bg-gray-800 dark:text-gray-50 h-screen">
    <form
      novalidate=""
      action=""
      class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
    >
      <fieldset
        class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900"
      >
        <div class="space-y-2 col-span-full lg:col-span-1">
          <p class="font-medium">Profile</p>
          <p class="text-xs">Please add some contact</p>
        </div>
        <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div class="col-span-full sm:col-span-3">
            <label for="username" class="text-sm">Name</label>
            <input
              id="username"
              v-model="this.name"
              type="text"
              placeholder="Full name"
              class="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-3">
            <label for="username" class="text-sm">Phone number</label>
            <input
              id="username"
              v-model="this.phone_number"
              type="text"
              placeholder="phone number"
              class="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-3">
            <label for="username" class="text-sm">Email</label>
            <input
              id="username"
              v-model="this.email"
              type="text"
              placeholder="Email"
              class="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-3">
            <label for="website" class="text-sm">Address</label>
            <input
              id="website"
              v-model="this.address"
              type="text"
              placeholder="Address"
              class="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-3" style="color: black">
            <label for="website" class="text-sm text-white px-3">Tag</label>
            <select id="cars" v-model="this.tag">
              <option value="Family">
                Family
              </option>
              <option value="Work">Work</option>
              <option value="School">
                School
              </option>
            </select>
          </div>

          <div class="col-span-full">
            <div class="flex items-center space-x-2">
              <button
                type="button"
                class="px-4 py-2 border rounded-md dark:border-gray-100"
                @click="
                  addcont({
                    name: this.name,
                    email: this.email,
                    phone: this.phone_number,
                    address: this.address,
                    tag: this.tag,
                    cemail: this.user_id,
                    // user_id: '21b44389-3317-4376-bd4b-e4fa62f67685',
                  }).then()
                    this.$router.push('/dashboard');
                "
              >
                <!-- @click="show()" -->
                Add
                <!-- @click="display()" -->
              </button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </section>
</template>
