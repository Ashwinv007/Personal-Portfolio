import { db } from "@/lib/db"

export async function getProjects() {
  const res = await db.query(`
    SELECT 
      p.id,
      p.name,
      p.description,
      p.image_url,
      p.demo_url,
      p.source_url,
      ARRAY_AGG(pt.tech_name) AS tech
    FROM projects p
    LEFT JOIN project_tech pt ON p.id = pt.project_id
    GROUP BY p.id
    ORDER BY p.created_at DESC
  `)

  return res.rows
}
