import { publicProcedure, router } from '../trpc'
import { z } from 'zod'
import Note from '../models/note'

const getNotes = publicProcedure.query(async () => (await Note.find()))

const createNote = publicProcedure.input(z.object({
  title: z.string(),
  description: z.string()
})).mutation(async ({ input }) => {
  const newNote = new Note({ title: input.title, description: input.description })
  const savedNote = await newNote.save()

  return savedNote
})

export const notesRouter = router({
  get: getNotes,
  create: createNote
})
