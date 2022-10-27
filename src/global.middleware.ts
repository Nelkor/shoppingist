import { MiddlewareFn, Context } from 'telegraf'

import { checkLanguage } from '@/i18n'
import { preventSpam } from '@/spam-control'

export const globalMiddleware: MiddlewareFn<Context> = (ctx, next) => {
  const { message, callbackQuery } = ctx
  const payload = message || callbackQuery

  if (!payload) {
    return
  }

  const { id, language_code: lang } = payload.from

  checkLanguage(id, lang)

  if (preventSpam(ctx, id)) {
    next().then()
  }
}
