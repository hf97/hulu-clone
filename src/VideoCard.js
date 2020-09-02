import React, { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons'
import './VideoCard.css';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className='videoCard'>
      <img
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt={`${movie.original_title} poster`}
      />
      <TextTruncate
        line={1}
        element='p'
        truncateText='...'
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_title}</h2>
      <div className='videoCard__stats'>
        <p className='videoCard__data'>
          {movie.media_type && `${movie.media_type} `} 
          {movie.release_date || movie.first_air_date}
        </p>
        <p className='videoCard__likes'>
          <ThumbUpSharp />{" "}
          {movie.vote_count}
        </p>
      </div>
    </div>
  )
});

export default VideoCard
