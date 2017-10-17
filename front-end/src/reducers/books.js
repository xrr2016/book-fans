import { createSelector } from 'reselect'

const initialState = {}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

export const booksSelector = state => state.books

export const allBooksSelector = createSelector(booksSelector, booksHash =>
  Object.values(booksHash)
)
