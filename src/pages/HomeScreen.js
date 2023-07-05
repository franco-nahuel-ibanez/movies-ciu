import React from 'react'
import MoviesByCategories from '../components/MoviesByCategories'
import Divider from '../components/Divider'
import { POPULAR_MOVIES, POPULAR_TV, TOP_RATED_MOVIES, TOP_RATED_TV } from '../constants/categories'
import { MOVIE, SERIE } from '../constants/type'

const HomeScreen = () => {
  return (
    <>
      <MoviesByCategories
        section="Peliculas populares"
        category={POPULAR_MOVIES}
        type={MOVIE}
      />

      <Divider />

      <MoviesByCategories
        section="Series populares"
        category={POPULAR_TV}
        type={SERIE}
      />

      <Divider />
      
      <MoviesByCategories
        section="Peliculas mejor puntuadas"
        category={TOP_RATED_MOVIES}
        type={MOVIE}
      />

      <Divider />

      <MoviesByCategories
        section="Series mejor puntuadas"
        category={TOP_RATED_TV}
        type={SERIE}
      />

    </>
  )
}

export default HomeScreen