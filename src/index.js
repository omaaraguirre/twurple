import { ChatClient } from '@twurple/chat'
import { Bot } from '@twurple/easy-bot'
import { channels } from './config.js'
import { authProvider } from './services/twurple.js'
import * as commands from './twurple/commands.js'
import createEvents from './twurple/events.js'

const client = new ChatClient({
  authProvider,
  channels
})
createEvents(client)
client.connect()

const bot = new Bot({
  authProvider,
  channels,
  commands: [...Object.values(commands)]
})
