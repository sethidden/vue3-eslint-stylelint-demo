<script setup lang="ts">
defineProps<{
  msg: string;
}>();

// Intentional linting warning left over to see if prettier linting works correctly





</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <!-- Intentional linting error left over to see if vue linting works correctly -->
    <div v-for="(item, index) in [1, 2, 3]" />
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://v3.vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

/* intentional linting error to see if stylelint is working correctly */
/* in this case it's the "selector-type-no-unknown" rule */


div::v-this-doesnt-exist {
  width: 5px;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
