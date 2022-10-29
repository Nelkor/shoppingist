import { ru } from './dictionaries/ru'
import { en } from './dictionaries/en'
import { DEFAULT_LANGUAGE } from './constants'
import { usersLanguages } from './store'
import { D } from './types'

const dictionaries = { ru, en }

export const t = (key: D, userId: number) => {
  const lang = usersLanguages.get(userId) || DEFAULT_LANGUAGE
  const dictionary = dictionaries[lang]

  return dictionary[key]
}
