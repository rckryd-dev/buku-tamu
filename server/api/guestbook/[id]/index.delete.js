import { readJson, writeJson } from "../../../utils/json"

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params.id)

  const guestbook = await readJson("guestbook.json")

  const filtered = guestbook.filter((item) => item.id !== id)

  await writeJson("guestbook.json", filtered)

  return {
    success: true,
  }
})