import { Context } from 'telegraf'
import { Update } from 'telegraf/types'

import { t } from '@/i18n'

import { PASS_DELAY, WARNING_DELAY } from './constants'
import { usersData } from './store'
import { UserData } from './types'

const createUser = (): UserData => ({
  lastMessageTime: 0,
  lastDelayWarningTime: 0,
})

const getUserById = (id: number) => {
  const existingUser = usersData.get(id)

  if (!existingUser) {
    const user = createUser()

    usersData.set(id, user)

    return user
  }

  return existingUser
}

export const preventSpam = (ctx: Context<Update>, id: number) => {
  const now = Date.now()
  const user = getUserById(id)
  const timeFromLastMessage = now - user.lastMessageTime

  user.lastMessageTime = now

  if (timeFromLastMessage < PASS_DELAY) {
    if (now - user.lastDelayWarningTime > WARNING_DELAY) {
      user.lastDelayWarningTime = now

      ctx.reply(t('SPAM_WARNING', id)).then()
    }

    return false
  }

  return true
}
