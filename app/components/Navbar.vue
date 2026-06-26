<script setup>
defineEmits(["logout"])
</script>

<template>

<nav class="navbar bg-white border-bottom px-4 shadow-sm">

  <h5 class="mb-0">
    Dashboard
  </h5>

  <div>

    <span class="me-3">
      Admin
    </span>

    <button
      class="btn btn-danger btn-sm"
      @click="$emit('logout')"
    >
      <i class="bi bi-box-arrow-right"></i>

      Logout
    </button>

  </div>

</nav>

</template>