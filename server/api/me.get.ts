export default defineEventHandler((event) => {
  const auth = getCookie(event, "auth")

  if (!auth) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    })
  }

  return {
    username: auth,
  }
})