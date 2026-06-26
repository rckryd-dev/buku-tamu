import { readJson, writeJson } from "../../../utils/json"

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params.id)

  const body = await readBody(event)

  const guestbook = await readJson("guestbook.json")

  const index = guestbook.findIndex((item) => item.id === id)

  if (index === -1) {
    throw createError({
      statusCode: 404,
      statusMessage: "Data tidak ditemukan",
    })
  }

  guestbook[index] = {
    ...guestbook[index],
    name: body.name,
    email: body.email,
    message: body.message,
  }

  await writeJson("guestbook.json", guestbook)

  return {
    success: true,
  }
})