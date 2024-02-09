import { createBotCommand } from '@twurple/easy-bot'
import getMessageInfo from './getMessageInfo.js'
import { db } from '../services/lowdb.js'

export const ping = createBotCommand('ping', (params, bot) => {
  const message = getMessageInfo(bot.msg)
  if (!message.userInfo.isBroadcaster && !message.userInfo.isMod) return
  console.log(message)
  bot.reply('Pong!')
})

export const clear = createBotCommand('clear', (params, bot) => {
  const message = getMessageInfo(bot.msg)
  if (!message.userInfo.isBroadcaster && !message.userInfo.isMod) return
  bot.reply('Clearing...')
  bot.clear()
})

export const typo = createBotCommand('typo', async (params, bot) => {
  if (!params.length) return

  const message = getMessageInfo(bot.msg)
  if (!message.userInfo.isBroadcaster && !message.userInfo.isMod) return

  const { count, last, words, lapseRecord } = db.data.typos

  const isFirst = count === 0
  const quantity = params.length // Number of typos in the message
  const now = Date.now()
  const currentLapse = isFirst
    ? 0
    : Math.floor((now - last) / 1000) // Seconds since last typo

  if (!isFirst && currentLapse < 10) return // If less than 10 seconds since last typo, don't count

  const isNewLapseRecord = lapseRecord > currentLapse // Is new record if new time lapse since last typo is shorter than last record. Does not apply to first typo since no record yet (lapseRecord = 0)

  db.data.typos = {
    count: count + quantity, // Add number of typos in the message
    last: now, // Use current time for last typo
    lapseRecord: lapseRecord === 0 || isNewLapseRecord ? currentLapse : lapseRecord // Use current time lapse if is new record or no record yet (lapseRecord = 0)
  }
  const newTypos = params
    .filter(word => !words.includes(word.toLowerCase())) // Filter typos that already exist in words (database)

  db.data.typos.words = [...words, ...newTypos]
  await db.write()

  if (isFirst) {
    bot.reply('Primer error! FBtouchdown')
  } else {
    let message = 'Han pasado '
    if (currentLapse < 60) {
      message += `${currentLapse} segundos`
    } else if (currentLapse < 3600) {
      message += `${Math.floor(currentLapse / 60)} minutos`
    }
    message += ` desde el último error. ${isNewLapseRecord ? '¡NUEVO RECORD! OhMyDog' : ''}`
    bot.reply(message)
  }
})

export const typos = createBotCommand('typos', (params, bot) => {
  const { count } = db.data.typos
  switch (count) {
    case 0:
      bot.reply('Aún sin errores! GlitchCat')
      break
    case 1:
      bot.reply('Va sólo 1 error! SeriousSloth')
      break
    default:
      bot.reply(`Van ${count} errores! ${count < 5 ? 'GlitchNRG' : (count < 10 ? 'NotLikeThis' : 'WutFace')}`)
  }
})

export const listTypos = createBotCommand('ltypos', (params, bot) => {
  const { words } = db.data.typos
  bot.reply(`Typos hasta el momento -> ${words.join(', ')}`)
})

export const resetTypos = createBotCommand('rtypos', async (params, bot) => {
  const message = getMessageInfo(bot.msg)
  if (!message.userInfo.isBroadcaster && !message.userInfo.isMod) return

  db.data.typos = {
    count: 0,
    last: 0,
    lapseRecord: 0,
    words: []
  }
  await db.write()
  bot.reply('Typos reseteados')
})
