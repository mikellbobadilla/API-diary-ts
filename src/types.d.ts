export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// We need return DiaryEntry without 'comments'

// Two ways

// export type NonSensitiveInfoDiaryEntry = Pick<
//   DiaryEntry, 'id', | 'date' | 'wheather' | 'visibility'
// >

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>