import { LISTS_COUNT_LIMIT } from '@/lists'

import { Dictionary } from '../types'

export const en: Dictionary = {
  // General
  CANCEL: 'Cancel',

  // Spam control
  SPAM_WARNING: 'If you send messages too often, I will not reply to them',
  //

  // I18n
  CURRENT_LANGUAGE:
    'The current language is English. Would you like to change the language?',
  LANGUAGE_CHANGED: 'Language changed to English',
  LANGUAGE_CONTINUE: 'Continue in English',

  // Lists
  LISTS_ENTRY: [
    'Select the list you want to work with or create a new one.',
    `The maximum number of lists is ${LISTS_COUNT_LIMIT}`,
  ].join(' '),
  LISTS_ENTRY_EMPTY: 'Create your first list!',
  LISTS_ENTRY_FULL: [
    'You have reached the maximum number of lists.',
    'Choose one to edit or delete',
  ].join(' '),
  LISTS_CREATE: '➕ Create a new list',
  LISTS_NAME_OF_NEW: 'Write the name for the new list',

  // Start
  HELLO: 'Hello!',
}
