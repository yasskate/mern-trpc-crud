import { trpc } from '../trpc'

function NotesList() {

  const notes = trpc.note.get.useQuery()

  return (
    <div>
      NotesList
      {JSON.stringify(notes.data)}
    </div>
  )
}

export default NotesList

