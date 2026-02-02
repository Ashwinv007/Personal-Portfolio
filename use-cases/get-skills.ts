import { db } from "@/lib/db"

export async function getSkills() {
  const res = await db.query(
    "SELECT id, title, description, icon FROM skills ORDER BY id"
  )
  return res.rows
}
