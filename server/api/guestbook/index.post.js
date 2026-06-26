import { readJson, writeJson } from "../../utils/json"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const guestbook = await readJson("guestbook.json")

  const newGuest = {
    id: Date.now(),
    name: body.name,
    email: body.email,
    message: body.message,
    createdAt: new Date().toISOString(),
  }

  guestbook.push(newGuest)

  await writeJson("guestbook.json", guestbook)

  return {
    success: true,
    data: newGuest,
  }
})