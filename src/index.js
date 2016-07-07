import request from 'axios'

const defaultOptions = {
  'timeout': 3000
}

const types = [
  'json',
  'jsonp',
  'xml'
]

class YTS {

  constructor (options = defaultOptions, type = types[0]) {
    this.request = request.create(options)
    this.baseUrl = 'https://yts.ag/api/v2'
    this.type = type
  }

  movies = async (params = {}) => {
    let endpoint = `${this.baseUrl}/list_movies.${this.type}`

    if (typeof params !== 'object')
      throw Error('Not a valid Query.')

    return (await this.request.get(endpoint, {params})).data
  }

  details = async (id, params = {}) => {
    let endpoint = `${this.baseUrl}/movie_details.${this.type}`

    if (!id)
      throw Error('Movie id not provided.')

    if (typeof params !== 'object')
      throw Error('Not a valid Query.')

    params.movie_id = id
    return (await this.request.get(endpoint, {params})).data
  }

  reviews = async (id, params = {}) => {
    let endpoint = `${this.baseUrl}/movie_reviews.${this.type}`

    if (!id)
      throw Error('Movie id not provided.')

    params.movie_id = id
    return (await this.request.get(endpoint, {params})).data
  }

  upcoming = async () => {
    let endpoint = `${this.baseUrl}/list_upcoming.${this.type}`
    return (await this.request.get(endpoint, {params})).data
  }

}

module.exports = YTS
