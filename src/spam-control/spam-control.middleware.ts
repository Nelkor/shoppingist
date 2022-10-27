import { MiddlewareFn, Context } from 'telegraf'

import { users } from './users'
import { warningMessage } from './messages'
import { PASS_DELAY, WARNING_DELAY } from './constants'
import { User } from './types'

const createUser = (id: number): User => ({
  id,
  lastMessageTime: 0,
  lastDelayWarningTime: 0,
})

const getUserById = (id: number) => {
  const existingUser = users.get(id)

  if (!existingUser) {
    const user = createUser(id)

    users.set(id, user)

    return user
  }

  return existingUser
}

export const spamControlMiddleware: MiddlewareFn<Context> = (ctx, next) => {
  const { message } = ctx

  if (!message) {
    next().then()

    return
  }

  const now = Date.now()
  const user = getUserById(message.from.id)
  const timeFromLastMessage = now - user.lastMessageTime

  user.lastMessageTime = now

  if (timeFromLastMessage < PASS_DELAY) {
    if (now - user.lastDelayWarningTime > WARNING_DELAY) {
      user.lastDelayWarningTime = now

      ctx.reply(warningMessage).then()
    }

    return
  }

  next().then()
}
