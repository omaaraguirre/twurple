import { JSONFilePreset } from 'lowdb/node'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { TWCONF } from '../config.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
export const dbFile = join(__dirname, '../db/db.json')
export const tokensFile = join(__dirname, `../tokens/${TWCONF.BOT}.json`)

export const db = await JSONFilePreset(dbFile, {
  typos: {
    count: 0,
    last: 0,
    lapseRecord: 0,
    words: []
  }
})

export const tokens = await JSONFilePreset(tokensFile, {
  accessToken: '',
  refreshToken: '',
  expiresIn: 0
})
