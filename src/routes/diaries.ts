import express from 'express'
import * as diaryServices from '../services/diaryServices'
import { toNewDiaryEntry } from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id) // "+" parse to number
  res.send(diary)
})

router.post('/', (req, res) => {
  try {
    const newDiary = toNewDiaryEntry(req.body)
    const diaryAdded = diaryServices.addEntry(newDiary)
    res.send(diaryAdded)
  } catch (e: any) {
    res.status(400).json({
      error: e.message
    })
  }
})

export default router
