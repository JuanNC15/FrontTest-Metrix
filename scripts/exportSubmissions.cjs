// scripts/exportSubmissions.cjs
const fs = require('fs')
const fetch = require('node-fetch')  // si usas node-fetch v2

const API = 'https://retoolapi.dev/rmm3TD/data'
const OUT = 'submissions.json'

async function exportData() {
  try {
    const res = await fetch(API)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    fs.writeFileSync(OUT, JSON.stringify(data, null, 2))
    console.log(`✔️  Wrote ${data.length} submissions to ${OUT}`)
  } catch (e) {
    console.error('Error fetching submissions:', e)
    process.exit(1)
  }
}

exportData()
