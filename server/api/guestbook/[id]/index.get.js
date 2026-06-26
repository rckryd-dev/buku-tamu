import { readJson } from "../../../utils/json"

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params.id)

  const guestbook = await readJson("guestbook.json")

  const guest = guestbook.find((item) => item.id === id)

  if (!guest) {
    throw createError({
      statusCode: 404,
      statusMessage: "Data tidak ditemukan",
    })
  }

  return guest
})