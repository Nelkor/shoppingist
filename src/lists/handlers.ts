import { Telegraf, Markup } from 'telegraf'

import { t } from '@/i18n'
import { removeInlineKeyboard } from '@/general'

import { LISTS_COUNT_LIMIT, LISTS_CREATE_ACTION } from './constants'
import { usersLists } from './store'

export const registerListsHandlers = (bot: Telegraf) => {
  bot.command('lists', ctx => {
    const { id } = ctx.from
    const lists = usersLists.get(id) || []

    if (!lists.length) {
      ctx.reply(
        t('LISTS_ENTRY_EMPTY', id),
        Markup.inlineKeyboard([
          Markup.button.callback(t('LISTS_CREATE', id), LISTS_CREATE_ACTION),
        ])
      )
    }
  })

  bot.action(LISTS_CREATE_ACTION, async ctx => {
    if (!ctx.from) {
      return
    }

    await removeInlineKeyboard(ctx)
    await ctx.answerCbQuery()

    const { id } = ctx.from
    const lists = usersLists.get(id) || []

    if (lists.length >= LISTS_COUNT_LIMIT) {
      return
    }

    ctx.reply(t('LISTS_NAME_OF_NEW', id))
  })
}
