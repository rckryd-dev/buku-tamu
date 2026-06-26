<script setup>
definePageMeta({
  middleware: "guest",
})

const form = reactive({
  username: "",
  password: "",
})

const loading = ref(false)
const error = ref("")

async function login() {
  error.value = ""
  loading.value = true

  try {
    await $fetch("/api/login", {
      method: "POST",
      body: form,
    })

    await navigateTo("/dashboard")
  } catch (err) {
    error.value = err?.statusMessage || "Login gagal"
  }

  loading.value = false
}
</script>

<template>
  <div class="container py-5">

    <div class="row justify-content-center">

      <div class="col-md-4">

        <div class="card shadow">

          <div class="card-header">
            Login Buku Tamu
          </div>

          <div class="card-body">

            <div
              v-if="error"
              class="alert alert-danger"
            >
              {{ error }}
            </div>

            <div class="mb-3">

              <label class="form-label">
                Username
              </label>

              <input
                v-model="form.username"
                class="form-control"
              >

            </div>

            <div class="mb-3">

              <label class="form-label">
                Password
              </label>

              <input
                v-model="form.password"
                type="password"
                class="form-control"
              >

            </div>

            <button
              class="btn btn-primary w-100"
              @click="login"
              :disabled="loading"
            >
              {{ loading ? "Loading..." : "Login" }}
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>