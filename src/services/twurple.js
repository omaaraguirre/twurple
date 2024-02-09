import { RefreshingAuthProvider } from '@twurple/auth'
import { TWCONF } from '../config.js'
import { error, info } from '../utils.js'
import { tokens } from './lowdb.js'
import { verifyTokens } from './twitch.js'

await verifyTokens()

info(`Authenticating as ${TWCONF.BOT}...`)
export const authProvider = new RefreshingAuthProvider({
  clientId: TWCONF.CLIENT_ID,
  clientSecret: TWCONF.CLIENT_SECRET
})

authProvider.onRefresh(async (userId, newTokenData) => {
  info(`Refreshing tokens.for ${TWCONF.BOT}..`)
  tokens.data = newTokenData
  await tokens.write()
})

try {
  await authProvider.addUserForToken(tokens.data, ['chat'])
} catch (e) {
  error(e.message)
  process.exit(1)
}
