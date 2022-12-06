import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Movie.js').Movie[]} */
  movies: [],
  page: 1,
  maxPage: 10,

  activeMovie: null,

  // NOTE just for handling pages on movie api (not great reference)
  query: ''
})
