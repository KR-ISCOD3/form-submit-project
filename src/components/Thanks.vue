<template>
  <div class="container-fluid d-grid align-content-center">
    <div class="mx-auto">
      <div class="d-flex justify-content-center mb-3">
        <img src="../assets/tonton.gif" alt="" width="150px">
      </div>
      <h2 class="font-varela fw-bold text-center">Thank for submited!</h2>
      <p class="text-center font-varela">
        Good luck for you project!😇 <br>
     </p>
    </div>
  </div>
</template>

<script setup>
    import { onMounted } from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter();

    // Prevent access without submission
    onMounted(() => {
        if (!localStorage.getItem("formSubmitted")) {
            router.push("/"); // Redirect back to form if no submission
        }
    });
</script>

<style scoped>
.container-fluid {
  height: 80vh;
}
</style>
