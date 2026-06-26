<script setup>
definePageMeta({
  middleware: "guest",
})

const form = reactive({
  username: "",
  password: "",
  confirmPassword: "",
})

const loading = ref(false)
const error = ref("")
const success = ref("")

async function register() {
  error.value = ""
  success.value = ""

  if (!form.username || !form.password || !form.confirmPassword) {
    error.value = "Semua field wajib diisi."
    return
  }

  if (form.password !== form.confirmPassword) {
    error.value = "Konfirmasi password tidak sesuai."
    return
  }

  loading.value = true

  try {
    await $fetch("/api/register", {
      method: "POST",
      body: {
        username: form.username,
        password: form.password,
      },
    })

    success.value = "Registrasi berhasil. Mengalihkan ke halaman login..."

    setTimeout(() => {
      navigateTo("/login")
    }, 1500)

  } catch (err) {
    error.value = err?.statusMessage || "Registrasi gagal"
  }

  loading.value = false
}
</script>

<template>
  <div class="container min-vh-100 d-flex align-items-center justify-content-center">

    <div class="col-lg-4 col-md-6">

      <div class="card border-0 shadow-lg">

        <div class="card-body p-5">

          <div class="text-center mb-4">

            <h3 class="fw-bold mb-1">
              Buku Tamu
            </h3>

            <p class="text-muted mb-0">
              Buat akun baru untuk melanjutkan
            </p>

          </div>

          <div
            v-if="error"
            class="alert alert-danger"
          >
            <i class="bi bi-exclamation-circle-fill me-2"></i>
            {{ error }}
          </div>

          <div
            v-if="success"
            class="alert alert-success"
          >
            <i class="bi bi-check-circle-fill me-2"></i>
            {{ success }}
          </div>

          <div class="mb-3">

            <label class="form-label fw-semibold">
              Username
            </label>

            <div class="input-group">

              <span class="input-group-text">
                <i class="bi bi-person"></i>
              </span>

              <input
                v-model="form.username"
                class="form-control"
                placeholder="Masukkan username"
              >

            </div>

          </div>

          <div class="mb-3">

            <label class="form-label fw-semibold">
              Password
            </label>

            <div class="input-group">

              <span class="input-group-text">
                <i class="bi bi-lock"></i>
              </span>

              <input
                v-model="form.password"
                type="password"
                class="form-control"
                placeholder="Masukkan password"
              >

            </div>

          </div>

          <div class="mb-4">

            <label class="form-label fw-semibold">
              Konfirmasi Password
            </label>

            <div class="input-group">

              <span class="input-group-text">
                <i class="bi bi-lock"></i>
              </span>

              <input
                v-model="form.confirmPassword"
                type="password"
                class="form-control"
                placeholder="Masukkan kembali password"
                @keyup.enter="register"
              >

            </div>

          </div>

          <button
            class="btn btn-primary btn-lg w-100"
            @click="register"
            :disabled="loading"
          >

            <span
              v-if="loading"
              class="spinner-border spinner-border-sm me-2"
            ></span>

            {{ loading ? "Memproses..." : "Daftar" }}

          </button>

          <div class="text-center mt-4">

            <small class="text-muted">
              Sudah punya akun?
            </small>

            <NuxtLink
              to="/login"
              class="text-decoration-none fw-semibold ms-1"
            >
              Masuk
            </NuxtLink>

          </div>

          <hr>

          <p class="text-center text-muted small mb-0">
            Sistem Informasi Buku Tamu
          </p>

        </div>

      </div>

    </div>

  </div>
</template>