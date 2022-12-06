import { AppState } from "../AppState.js"
import { Movie } from "../models/Movie.js"
import { logger } from "../utils/Logger.js"
import { movieApi } from "./AxiosService.js"


class MoviesService {

  async getMovies(page = 1) {
    const res = await movieApi.get('discover/movie?page=' + page)
    logger.log('[Got Movies]', res.data)
    // keep movies
    AppState.movies = res.data.results.map(m => new Movie(m))
    // keep page
    AppState.page = res.data.page
    AppState.maxPage = res.data.total_pages
  }


  async getMovieById(id) {
    const res = await movieApi.get('movie/' + id)
    logger.log('[Movie Details]', res.data)
    AppState.activeMovie = new Movie(res.data)
  }

  async searchMovies(search) {
    // -----------------------------------      search = {query: 'lego'}
    const res = await movieApi.get('search/movie', { params: search })
    logger.log('[Search Movies]', res.data)
    AppState.movies = res.data.results.map(m => new Movie(m))
    AppState.page = res.data.page
    AppState.maxPage = res.data.total_pages

    // special sauce just for this app
    AppState.query = search.query
  }

  async changePage(page) {
    const query = AppState.query
    const endpoint = query ? 'search' : 'discover'
    const res = await movieApi.get(`${endpoint}/movie`, { params: { page, query } })
    AppState.movies = res.data.results.map(m => new Movie(m))
    AppState.page = res.data.page
    AppState.maxPage = res.data.total_pages
  }
}

export const moviesService = new MoviesService()
