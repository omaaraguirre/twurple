import chalk from 'chalk'
import { channels } from '../config.js'
import { noti, quack } from '../services/sounds.js'
import { info } from '../utils.js'
import getMessageInfo from './getMessageInfo.js'

const createEvents = client => {
  client.onAction((channel, user, text, msg) => {
    console.log('Action:', { channel, user, text, msg })
  })

  client.onAnnouncement((channel, user, announcementInfo, msg) => {
    console.log('Announcement:', { channel, user, announcementInfo, msg })
  })

  client.onAuthenticationFailure((text, retryCount) => {
    console.log('Authentication failure:', { text, retryCount })
  })

  client.onAuthenticationSuccess(() => {
    info('Authentication success!')
  })

  client.onBan((channel, user, msg) => {
    console.log('Ban:', { channel, user, msg })
  })

  client.onBitsBadgeUpgrade((channel, user, upgradeInfo, msg) => {
    console.log('Bits badge upgrade:', { channel, user, upgradeInfo, msg })
  })

  client.onChatClear((channel, msg) => {
    console.log('Chat clear:', { channel, msg })
  })

  client.onCommunityPayForward((channel, user, forwardInfo, msg) => {
    console.log('Community pay forward:', { channel, user, forwardInfo, msg })
  })

  client.onCommunitySub((channel, user, subInfo, msg) => {
    console.log('Community sub:', { channel, user, subInfo, msg })
  })

  client.onConnect(() => {
    info(`Connected to ${channels}!`)
    noti()
  })

  client.onDisconnect((manually, reason) => {
    console.log('Disconnected from chat:', { manually, reason })
  })

  client.onEmoteOnly((channel, enabled) => {
    console.log('Emote only:', { channel, enabled })
  })

  client.onFollowersOnly((channel, enabled, delay) => {
    console.log('Followers only:', { channel, enabled, delay })
  })

  client.onGiftPaidUpgrade((channel, user, subInfo, msg) => {
    console.log('Gift paid upgrade:', { channel, user, subInfo, msg })
  })

  client.onJoin((channel, user) => {
    console.log('Join:', { channel, user })
  })

  client.onJoinFailure((channel, reason) => {
    console.log('Join failure:', { channel, reason })
  })

  client.onMessage((channel, user, text, msg) => {
    const data = getMessageInfo(msg)
    console.log(`${chalk.hex(data.userInfo.color).bold(user)}: ${chalk.white(text)}`)

    if (text.toLowerCase().includes('*quack*')) {
      quack()
    }
  })

  client.onMessageFailed((channel, reason) => {
    console.log('Message failed:', { channel, reason })
  })

  client.onMessageRatelimit((channel, text) => {
    console.log('Message ratelimit:', { channel, text })
  })

  client.onMessageRemove((channel, messageId, msg) => {
    console.log('Message remove:', { channel, messageId, msg })
  })

  client.onNoPermission((channel, text) => {
    console.log('No permission:', { channel, text })
  })

  client.onPart((channel, user) => {
    console.log('Part:', { channel, user })
  })

  client.onPrimeCommunityGift((channel, user, subInfo, msg) => {
    console.log('Prime community gift:', { channel, user, subInfo, msg })
  })

  client.onPrimePaidUpgrade((channel, user, subInfo, msg) => {
    console.log('Prime paid upgrade:', { channel, user, subInfo, msg })
  })

  client.onRaid((channel, user, raidInfo, msg) => {
    console.log('Raid:', { channel, user, raidInfo, msg })
  })

  client.onRaidCancel((channel, msg) => {
    console.log('Raid cancel:', { channel, msg })
  })

  client.onResub((channel, user, subInfo, msg) => {
    console.log('Resub:', { channel, user, subInfo, msg })
  })

  client.onRewardGift((channel, user, rewardGiftInfo, msg) => {
    console.log('Reward gift:', { channel, user, rewardGiftInfo, msg })
  })

  client.onRitual((channel, user, ritualInfo, msg) => {
    console.log('Ritual:', { channel, user, ritualInfo, msg })
  })

  client.onSlow((channel, enabled, delay) => {
    console.log('Slow:', { channel, enabled, delay })
  })

  client.onStandardPayForward((channel, user, forwardInfo, msg) => {
    console.log('Standard pay forward:', { channel, user, forwardInfo, msg })
  })

  client.onSub((channel, user, subInfo, msg) => {
    console.log('Sub:', { channel, user, subInfo, msg })
  })

  client.onSubExtend((channel, user, subInfo, msg) => {
    console.log('Sub extend:', { channel, user, subInfo, msg })
  })

  client.onSubGift((channel, user, subInfo, msg) => {
    console.log('Sub gift:', { channel, user, subInfo, msg })
  })

  client.onSubsOnly((channel, enabled) => {
    console.log('Subs only:', { channel, enabled })
  })

  client.onTimeout((channel, user, duration, msg) => {
    console.log('Timeout:', { channel, user, duration, msg })
  })

  client.onTokenFetchFailure((error) => {
    console.log('Token fetch failure:', { error })
  })

  client.onUniqueChat((channel, enabled) => {
    console.log('Unique chat:', { channel, enabled })
  })

  client.onWhisper((user, text, msg) => {
    console.log('Whisper:', { user, text, msg })
  })
}

export default createEvents
