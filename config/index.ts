import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Zero A.I',
  description: 'Hãy chia sẻ với tôi về những gì bạn quan tâm, hoặc chúng ta có thể bắt đầu với một chủ đề cụ thể nếu bạn muốn. Tôi mong rằng cuộc trò chuyện của chúng ta sẽ hữu ích và thú vị! \n\nĐể bắt đầu trò chuyện, hãy ấn bắt đầu',
  copyright: 'Zero AI',
  privacy_policy: '',
  default_language: 'vi',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
