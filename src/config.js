import { error } from './utils.js'

export const channels = ['omaaraguirre']
export const defaultColor = '#a970ff' // For users who do not have a color

export const TWCONF = {
  BOT: process.env.BOT,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  REDIRECT_URI: process.env.REDIRECT_URI,
  AUTH_CODE: process.env.AUTH_CODE
}

if (Object.keys(TWCONF).some(key => TWCONF[key] === undefined)) {
  error('Missing environment variables')
  process.exit(1)
}
