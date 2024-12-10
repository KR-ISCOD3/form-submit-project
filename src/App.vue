<template>
  <div>
    <header>
      <NavbarContent/>
    </header>
    <RouterView/>
    
  </div>
</template>

<script setup>
  import FormSubmit from './components/FormSubmit.vue';
  import NavbarContent from './components/NavbarContent.vue';
  import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>

</style>