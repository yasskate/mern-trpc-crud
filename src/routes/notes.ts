import { publicProcedure, router } from '../trpc'
import { z } from 'zod'

const getNotes = publicProcedure.query(() => {
  return [{
    id: 1,
    title: 'Note 1',
    content: 'Content 1'
  }]
})

const createNote = publicProcedure.input(z.object({
  title: z.string(),
  description: z.string()
})).mutation(({ input }) => {
  console.log("Input", input)
  return "recieved"
})

export const notesRouter = router({
  get: getNotes,
  create: createNote
})
