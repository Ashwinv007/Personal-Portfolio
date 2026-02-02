"use server"

import { db } from "@/lib/db"

export async function createMessage(formData: FormData) {
  const name = formData.get("name")?.toString()
  const email = formData.get("email")?.toString()
  const message = formData.get("message")?.toString()

  if (!name || !email || !message) return

  await db.query(
    "INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)",
    [name, email, message]
  )
}
