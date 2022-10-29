import { DEFAULT_LANGUAGE } from './constants'
import { usersLanguages } from './store'
import { Language } from './types'

const allowedLanguages: Language[] = [DEFAULT_LANGUAGE, 'ru']

export const checkLanguage = (id: number, lang: string = DEFAULT_LANGUAGE) => {
  if (usersLanguages.has(id)) {
    return
  }

  usersLanguages.set(
    id,
    allowedLanguages.includes(lang as Language)
      ? (lang as Language)
      : DEFAULT_LANGUAGE
  )
}
