
export class Movie {
  constructor(data) {
    this.id = data.id
    this.title = data.title || data.original_title
    this.overview = data.overview
    this.releaseDate = data.releaseDate || data.release_date
    this.score = data.score || data.vote_average * 10
    this.poster = data.poster || 'https://image.tmdb.org/t/p/w500' + data.poster_path
    // TODO append path to rest of url
    this.backdrop = data.backdrop || 'https://image.tmdb.org/t/p/w500' + data.backdrop_path
  }
}
