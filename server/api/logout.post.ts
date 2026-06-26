export default defineEventHandler((event) => {
  deleteCookie(event, "auth")

  return {
    success: true,
  }
})