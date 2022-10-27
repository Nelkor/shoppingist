import { Telegraf } from 'telegraf'

import { spamControlMiddleware } from '@/spam-control'

export const setBot = (bot: Telegraf) => {
  bot.use(spamControlMiddleware)

  bot.start(ctx => {
    ctx.reply('Ответ на /start')
  })

  bot.launch().then()
}
