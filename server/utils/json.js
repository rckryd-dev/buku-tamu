import { readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"

export async function readJson(file) {
  const path = join(process.cwd(), "data", file)

  const content = await readFile(path, "utf8")

  return JSON.parse(content)
}

export async function writeJson(file, data) {
  const path = join(process.cwd(), "data", file)

  await writeFile(path, JSON.stringify(data, null, 2))
}