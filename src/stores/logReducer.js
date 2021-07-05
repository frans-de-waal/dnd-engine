export const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      const newEntries = [...state.entries]
      newEntries.push(action.payload)
      return {
        ...state,
        entries: newEntries
      }
    }

    default:
      return state
  }
}

export const initialState = {
  entries: []
}
