import { translationKeys } from './dictionary-keys'

export type Language = 'ru' | 'en'

export type D = typeof translationKeys[number]

export type Dictionary = Record<D, string>
