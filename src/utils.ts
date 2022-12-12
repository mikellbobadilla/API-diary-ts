import { Visibility, Weather } from './enums'
import { NewDiaryEntry } from './types'

const isString = (param: any): boolean => {
  if (typeof param === 'string' || param instanceof String) {
    return true
  }
  return false
}

const isDate = (param: string): boolean => {
  return Boolean(Date.parse(param))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibily = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

//  --------------------- Parsers ------------------------------------------

const parseComment = (comment: any): string => {
  if (!isString(comment)) {
    throw new Error('Incorrect or missing comment')
  }
  return comment
}

const parseDate = (date: string): string => {
  if (!isDate(date) || !isString(date)) {
    throw new Error('Incorrect or mission date')
  }
  return date
}

const parseWeather = (weather: any): Weather => {
  if (!isWeather(weather) || !isString(weather)) {
    throw new Error('Incorrect or mission weather')
  }
  return weather
}

const parseVisivility = (visibility: any): Visibility => {
  if (!isVisibily(visibility)) {
    throw new Error('Incorrect or mission visibility')
  }

  return visibility
}



export const toNewDiaryEntry = (obj: any): NewDiaryEntry => {
  const newDairy: NewDiaryEntry = {
    comment: parseComment(obj.comment),
    date: parseDate(obj.date),
    weather: parseWeather(obj.weather),
    visibility: parseVisivility(obj.visibility)
  }
  return newDairy
}