// src/utils/date.ts
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

export const getRelativeTime = (dateString: string) => {
  const date = new Date(dateString)
  
  try {
    const relativeTime = formatDistanceToNow(date, { 
      addSuffix: true,
      locale: ko 
    })
    
    return relativeTime
      .replace('약 ', '')
      .replace('이상', '')
      .replace('미만', '')
  } catch (error) {
    return dateString
  }
}