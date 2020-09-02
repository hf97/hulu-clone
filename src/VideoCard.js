import React, { forwardRef, useState } from 'react';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons'
import { Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './VideoCard.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: '#042727',
    border: '2px solid #000',
    color: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

const VideoCard = forwardRef(({ movie }, ref) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal className='videoCard__modal'
        open={open}
        onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
          <h3>{movie.title || movie.original_title}</h3>
          <p>{movie.release_date || movie.first_air_date}</p>
          <p>{movie.overview}</p>
        </div>
      </Modal>

      <div ref={ref} className='videoCard'>
        <img
          src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
          alt={`${movie.title || movie.original_title} poster`}
        />
        <TextTruncate
          line={1}
          element='p'
          truncateText='...'
          // textTruncateChild={<Button className='videoCard__info' onClick={e => setOpen(true)} variant='contained' color='default'>Info</Button>}
          text={movie.overview}
        />
        <div className='videoCard__title'>
          <h2>{movie.title || movie.original_title}</h2>
          <button onClick={e => setOpen(true)}>Info</button>
        </div>
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
    </>
  )
});

export default VideoCard
