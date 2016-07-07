# Manhattan Project YTS api wrapper

## Install
### Unix and OS/X
- Fork or download this repository.
- `cd` to the project's location
- run `npm install`

## Running in development
- run `npm start`
- run `npm run start`

## Running in production
- run `npm run build`


## Usage
``` js
const YTS = require('../lib/mp-yts.js')
const yts = new YTS()

const movies = yts.movies({
  limit: 30,
  sort_by: 'year',
  order_by: 'desc'
})

movies.then((result) => console.log(result))
movies.catch((err) => console.log(err))
```
## API

``` js
const movies = yts.movies({/* query object */})
const details = yts.details({/* query object */})
const reviews = yts.reviews({/* query object */})
const upcoming = yts.upcoming({/* query object */})
```
