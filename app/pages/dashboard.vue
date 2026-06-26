<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
})
</script>

<template>

<div class="container-fluid">

  <h2 class="mb-4">

    Dashboard

  </h2>

  <div class="row">

    <div class="col-md-4">

      <div class="card shadow-sm">

        <div class="card-body">

          <small class="text-muted">
            Total Buku Tamu
          </small>

          <h1 class="display-5">

            0

          </h1>

        </div>

      </div>

    </div>

  </div>

</div>

</template>