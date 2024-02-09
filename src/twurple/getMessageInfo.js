import { defaultColor } from '../config.js'

const getMessageInfo = msg => {
  let {
    bits,
    channelId,
    date,
    emoteOffsets,
    hypeChatAmount,
    hypeChatCurrency,
    hypeChatDecimalPlaces,
    hypeChatIsSystemMessage,
    hypeChatLevel,
    hypeChatLocalizedAmount,
    id,
    isCheer,
    isFirst,
    isHighlight,
    isHypeChat,
    isRedemption,
    isReply,
    isReturningChatter,
    parentMessageId,
    parentMessageText,
    parentMessageUserDisplayName,
    parentMessageUserId,
    parentMessageUserName,
    rewardId,
    threadMessageId,
    threadMessageUserId,
    userInfo: {
      badgeInfo,
      badges,
      color,
      displayName,
      isArtist,
      isBroadcaster,
      isFounder,
      isMod,
      isSubscriber,
      isVip,
      userId,
      userName,
      userType
    }
  } = msg

  if (!color) {
    color = defaultColor
  }

  return {
    bits,
    channelId,
    date,
    emoteOffsets,
    hypeChatAmount,
    hypeChatCurrency,
    hypeChatDecimalPlaces,
    hypeChatIsSystemMessage,
    hypeChatLevel,
    hypeChatLocalizedAmount,
    id,
    isCheer,
    isFirst,
    isHighlight,
    isHypeChat,
    isRedemption,
    isReply,
    isReturningChatter,
    parentMessageId,
    parentMessageText,
    parentMessageUserDisplayName,
    parentMessageUserId,
    parentMessageUserName,
    rewardId,
    threadMessageId,
    threadMessageUserId,
    userInfo: {
      badgeInfo,
      badges,
      color,
      displayName,
      isArtist,
      isBroadcaster,
      isFounder,
      isMod,
      isSubscriber,
      isVip,
      userId,
      userName,
      userType
    }
  }
}

export default getMessageInfo
