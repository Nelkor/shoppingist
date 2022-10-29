import { Context, Markup } from 'telegraf'

export const removeInlineKeyboard = (ctx: Context) =>
  ctx.editMessageReplyMarkup(Markup.inlineKeyboard([]).reply_markup)
