<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
})

const route = useRoute()

const { data } = await useFetch(`/api/guestbook/${route.params.id}`)

const form = reactive({
  name: data.value.name,
  email: data.value.email,
  message: data.value.message,
})

const loading = ref(false)

async function update() {
  loading.value = true

  await $fetch(`/api/guestbook/${route.params.id}`, {
    method: "PUT",
    body: form,
  })

  loading.value = false

  navigateTo("/guestbook")
}
</script>

<template>

<div class="container-fluid">

<h2 class="mb-4">
Edit Buku Tamu
</h2>

<div class="card shadow-sm">

<div class="card-body">

<div class="mb-3">

<label class="form-label">
Nama
</label>

<input
v-model="form.name"
class="form-control"
/>

</div>

<div class="mb-3">

<label class="form-label">
Email
</label>

<input
v-model="form.email"
class="form-control"
/>

</div>

<div class="mb-3">

<label class="form-label">
Pesan
</label>

<textarea
v-model="form.message"
rows="5"
class="form-control"
/>

</div>

<button
class="btn btn-primary"
@click="update"
:disabled="loading"
>

Simpan

</button>

<NuxtLink
to="/guestbook"
class="btn btn-secondary ms-2"
>

Kembali

</NuxtLink>

</div>

</div>

</div>

</template>