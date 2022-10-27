import { Telegraf } from 'telegraf'

import { token } from '@/token'
import { setBot } from '@/bot-core'
import { startSpamControlCleaner } from '@/spam-control'

const bot = new Telegraf(token)

setBot(bot)
startSpamControlCleaner()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
