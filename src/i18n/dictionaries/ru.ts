import { LISTS_COUNT_LIMIT } from '@/lists'

import { Dictionary } from '../types'

export const ru: Dictionary = {
  // General
  CANCEL: 'Отмена',

  // Spam control
  SPAM_WARNING:
    'Если будешь отправлять сообщения слишком часто, я не буду на них отвечать',

  // I18n
  CURRENT_LANGUAGE: 'Текущий язык — русский. Желаете сменить язык?',
  //
  LANGUAGE_CHANGED: 'Язык изменён на русский',
  LANGUAGE_CONTINUE: 'Продолжим на русском',

  // Lists
  LISTS_ENTRY: [
    'Выберите список, с которым хотите поработать или создайте новый.',
    `Максимальное количество списков — ${LISTS_COUNT_LIMIT}`,
  ].join(' '),
  LISTS_ENTRY_EMPTY: 'Создайте свой первый список!',
  LISTS_ENTRY_FULL: [
    'Вы достигли максимального количества списков.',
    'Выберите один, чтобы редактировать его или удалить',
  ].join(' '),
  LISTS_CREATE: '➕ Создать новый список',
  LISTS_NAME_OF_NEW: 'Напишите имя нового списка',

  // Start
  HELLO: 'Приветствую!',
}
