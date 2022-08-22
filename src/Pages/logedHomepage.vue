<template>

  <mainHeaderVue />
  <!-- <addRecipeVue/> -->
  
  <!-- <recipeDetailVue/> -->



</template>
<script>
import mainHeaderVue from "../components/mainHeader.vue";
import addRecipeVue from "../components/addRecipe.vue";
import recipeDetailVue from "../components/recipeDetail.vue";
export default {
  name: "app",
    components: {
      mainHeaderVue,
      addRecipeVue,
      recipeDetailVue
    },
  data: function () {
    return {};
  },
};
</script>
