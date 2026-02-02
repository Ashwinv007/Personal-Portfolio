import { db } from "@/lib/db"

export async function getCategories() {
  const res = await db.query(
    "SELECT * FROM categories ORDER BY order_index"
  )
  return res.rows
}
