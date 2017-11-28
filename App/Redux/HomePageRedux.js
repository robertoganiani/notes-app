import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveNewNote: ['note']
})

export const NoteTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  notes: [],
}

/* ------------- Reducers ------------- */

export const saveNote = (state, { note }) => {
  if (note) {
    return { notes: [...state.notes, note] }
  }
  return state
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_NEW_NOTE]: saveNote
})
