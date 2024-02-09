import { TWCONF } from '../config.js'
import { error, info } from '../utils.js'
import { tokens } from './lowdb.js'

export const verifyTokens = async () => {
  if (Object.values(tokens.data).some(token => token === '')) {
    try {
      info(`Tokens for ${TWCONF.BOT} not found`)
      const data = await fetchToken()
      if (!data) return

      tokens.data = {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresIn: data.expires_in
      }
      await tokens.write()
      info('Tokens saved!')
    } catch (e) {
      error(e.message)
      process.exit(1)
    }
  } else {
    info(`Tokens for ${TWCONF.BOT} found`)
  }
}

const fetchToken = async () => {
  try {
    info('Fetching tokens...')
    const url = `
    https://id.twitch.tv/oauth2/token?client_id=${TWCONF.CLIENT_ID}&client_secret=${TWCONF.CLIENT_SECRET}&code=${TWCONF.AUTH_CODE}&grant_type=authorization_code&redirect_uri=${TWCONF.REDIRECT_URI}
  `
    const res = await fetch(url, {
      method: 'POST',
      redirect: 'follow'
    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data.message)
    }
    return data
  } catch (e) {
    error(e.message)
    process.exit(1)
  }
}
