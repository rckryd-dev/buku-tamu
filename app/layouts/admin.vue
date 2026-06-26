<script setup>
async function logout() {
  await $fetch("/api/logout", {
    method: "POST",
  })

  await navigateTo("/login")
}
</script>

<template>
  <div class="d-flex">

    <Sidebar />

    <div class="flex-grow-1">

      <Navbar @logout="logout" />

      <main class="p-4 bg-light min-vh-100">

        <slot />

      </main>

    </div>

  </div>
</template>