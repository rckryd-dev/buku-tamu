import { readJson } from "../../utils/json"

export default defineEventHandler(async () => {
  const guestbook = await readJson("guestbook.json")

  return guestbook
})