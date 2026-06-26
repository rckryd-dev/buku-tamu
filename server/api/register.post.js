import { readJson, writeJson } from "../utils/json"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const users = await readJson("users.json")

  const exists = users.find(
    (user) => user.username === body.username
  )

  if (exists) {
    throw createError({
      statusCode: 400,
      statusMessage: "Username sudah digunakan",
    })
  }

  users.push({
    id: Date.now(),
    username: body.username,
    password: body.password,
    createdAt: new Date().toISOString(),
  })

  await writeJson("users.json", users)

  return {
    success: true,
  }
})