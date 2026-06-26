<script setup>
const route = useRoute()
</script>

<template>

<aside
  class="bg-dark text-white p-3"
  style="width:260px;min-height:100vh;"
>

<h4 class="mb-4">
  Buku Tamu
</h4>

<ul class="nav flex-column">

<li class="nav-item">

<NuxtLink
to="/dashboard"
class="nav-link"
:class="route.path==='/dashboard'
?'active text-white bg-primary rounded'
:'text-white'"
>

<i class="bi bi-house me-2"></i>

Dashboard

</NuxtLink>

</li>

<li class="nav-item mt-2">

<NuxtLink
to="/guestbook"
class="nav-link"
:class="route.path.startsWith('/guestbook')
?'active text-white bg-primary rounded'
:'text-white'"
>

<i class="bi bi-book me-2"></i>

Buku Tamu

</NuxtLink>

</li>

</ul>

</aside>

</template>