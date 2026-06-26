import { readJson } from "../utils/json"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const users = await readJson("users.json")

  const user = users.find(
    (u) =>
      u.username === body.username &&
      u.password === body.password
  )

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Username atau password salah",
    })
  }

  setCookie(event, "auth", user.username, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  })

  return {
    success: true,
    user: {
      username: user.username,
    },
  }
})