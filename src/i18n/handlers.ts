import { Telegraf, Markup, Context } from 'telegraf'

import { removeInlineKeyboard } from '@/general'

import {
  DEFAULT_LANGUAGE,
  LANG_CANCEL_ACTION,
  LANG_RU_ACTION,
  LANG_EN_ACTION,
} from './constants'
import { t } from './t'
import { usersLanguages } from './store'
import { Language } from './types'

const createLangChangeHandler = (lang?: Language) => (ctx: Context) => {
  if (!ctx.from) {
    return
  }

  if (lang) {
    usersLanguages.set(ctx.from.id, lang)
  }

  Promise.all([
    removeInlineKeyboard(ctx),
    ctx.reply(t(lang ? 'LANGUAGE_CHANGED' : 'LANGUAGE_CONTINUE', ctx.from.id)),
  ]).then(() => ctx.answerCbQuery())
}

const createMarkupForUser = (userId: number) => {
  const lang = usersLanguages.get(userId) || DEFAULT_LANGUAGE

  const buttons = [
    Markup.button.callback(t('CANCEL', userId), LANG_CANCEL_ACTION),
  ]

  buttons.unshift(
    lang === 'ru'
      ? Markup.button.callback('🇺🇸 English', LANG_EN_ACTION)
      : Markup.button.callback('🇷🇺 Русский', LANG_RU_ACTION)
  )

  return Markup.inlineKeyboard(buttons)
}

export const registerI18nHandlers = (bot: Telegraf) => {
  bot.command('lang', ctx => {
    ctx.reply(
      t('CURRENT_LANGUAGE', ctx.from.id),
      createMarkupForUser(ctx.from.id)
    )
  })

  bot.action(LANG_CANCEL_ACTION, createLangChangeHandler())
  bot.action(LANG_EN_ACTION, createLangChangeHandler('en'))
  bot.action(LANG_RU_ACTION, createLangChangeHandler('ru'))
}
