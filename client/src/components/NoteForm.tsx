import { ChangeEvent, FormEvent, useState } from 'react'
import { trpc } from '../trpc'

function NoteForm() {
  const [note, setNote] = useState({ title: '', description: '' })

  const addNote = trpc.note.create.useMutation()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("NOTE: ", note)
    addNote.mutate(note, {
      onSuccess: () => {
        console.log("Note added successfully")
      }
    })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        name="title"
        autoFocus
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}>
      </textarea>
      <button>
        Save
      </button>
    </form>
  )
}

export default NoteForm

