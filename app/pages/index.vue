<script setup>
const auth = useCookie("auth")

if (auth.value) {
  await navigateTo("/dashboard")
} else {
  await navigateTo("/login")
}
</script>

<template></template>