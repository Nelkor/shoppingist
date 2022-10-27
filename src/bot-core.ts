import { Telegraf } from 'telegraf'

import { t, registerI18nHandlers } from '@/i18n'

import { globalMiddleware } from './global.middleware'

export const setBot = (bot: Telegraf) => {
  bot.use(globalMiddleware)

  registerI18nHandlers(bot)

  bot.start(ctx => {
    ctx.reply(t('HELLO', ctx.from.id))
  })

  bot.launch().then()
}
