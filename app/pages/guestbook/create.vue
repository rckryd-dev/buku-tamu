<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
})

const form = reactive({
  name: "",
  email: "",
  message: "",
})

const loading = ref(false)

async function save() {
  loading.value = true

  try {
    await $fetch("/api/guestbook", {
      method: "POST",
      body: form,
    })

    await navigateTo("/guestbook")
  } catch (error) {
    alert("Gagal menyimpan data")
  }

  loading.value = false
}
</script>

<template>
  <div class="container-fluid">

    <h2 class="mb-4">
      Tambah Buku Tamu
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
          >

        </div>

        <div class="mb-3">

          <label class="form-label">
            Email
          </label>

          <input
            v-model="form.email"
            type="email"
            class="form-control"
          >

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
          @click="save"
          :disabled="loading"
        >
          {{ loading ? "Menyimpan..." : "Simpan" }}
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