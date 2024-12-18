<template>
  <div class="container-fluid d-grid align-content-center position-relative">
    <div class="position-absolute start-50 translate-middle col-5 text-center" style="top: 60%;" >
      <img src="../assets/congratulation.gif" alt="" class="w-75">
    </div>
    <div class="mx-auto">
      <div class="d-flex justify-content-center mb-3">
        <img src="../assets/tonton.gif" alt="" width="150px">
      </div>
      <h2 class="font-varela fw-bold text-center">Thanks for your submission!</h2>
      <p class="text-center font-varela">
        Good luck with your project.😇<br>
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
