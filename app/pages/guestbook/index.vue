<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
})

const { data: guestbook, refresh } = await useFetch("/api/guestbook")

function formatDate(date) {
  const d = new Date(date)

  const tanggal = d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const waktu = d.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).replace(":", ".")

  return `${tanggal}, ${waktu} WIB`
}

async function destroy(id) {
  const confirmed = confirm("Yakin ingin menghapus data ini?")

  if (!confirmed) return

  try {
    await $fetch(`/api/guestbook/${id}`, {
      method: "DELETE",
    })

    refresh()
  } catch {
    alert("Gagal menghapus data")
  }
}
</script>

<template>
  <div class="container-fluid">

    <div class="d-flex justify-content-between align-items-center mb-4">

      <div>

        <h2 class="mb-1">
          Buku Tamu
        </h2>

        <small class="text-muted">

          Total Data :
          <strong>{{ guestbook?.length || 0 }}</strong>

        </small>

      </div>

      <NuxtLink
        to="/guestbook/create"
        class="btn btn-primary"
      >
        <i class="bi bi-plus-lg me-1"></i>

        Tambah Data
      </NuxtLink>

    </div>

    <div class="card shadow-sm">

      <div class="table-responsive">

        <table class="table table-hover align-middle mb-0">

          <thead class="table-light">

            <tr>

              <th width="70">
                No
              </th>

              <th width="200">
                Nama
              </th>

              <th width="220">
                Email
              </th>
              
              <th>
                Pesan
              </th>

              <th width="220">
                Tanggal
              </th>

              <th width="170">
                
              </th>

            </tr>

          </thead>

          <tbody>

            <tr
              v-for="(item,index) in guestbook"
              :key="item.id"
            >

              <td>
                {{ index+1 }}
              </td>

              <td>
                {{ item.name }}
              </td>

              <td>
                {{ item.email }}
              </td>

              <td>
                {{ item.message }}
              </td>

              <td>
                {{ formatDate(item.createdAt) }}
              </td>

              <td>

                <NuxtLink
                  :to="`/guestbook/edit/${item.id}`"
                  class="btn btn-warning btn-sm me-2"
                >
                  Ubah
                </NuxtLink>

                <button
                  class="btn btn-danger btn-sm"
                  @click="destroy(item.id)"
                >
                  Hapus
                </button>

              </td>

            </tr>

            <tr
              v-if="guestbook?.length===0"
            >

              <td
                colspan="5"
                class="text-center text-muted py-4"
              >

                Belum ada data.

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>