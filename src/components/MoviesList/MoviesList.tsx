import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/MovieCard';

import { Moovies } from '../types/Moovie';

type Props = {
  movies: Moovies[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(({
      title, description, imgUrl, imdbUrl, imdbId,
    }) => (
      <MovieCard
        key={imdbId}
        title={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
      />
    ))}
  </div>
);
