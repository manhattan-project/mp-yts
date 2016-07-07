const YTS = require('../lib/mp-yts.js')
const yts = new YTS()

const movies = yts.movies({
  limit: 30,
  sort_by: 'year',
  order_by: 'desc'
})

movies.then((result) => console.log(result))
movies.catch((err) => console.log(err))
