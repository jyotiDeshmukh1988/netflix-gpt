import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    if(!posterPath) return;
  return (
    <div className="w-48 md:w-55 pr-6 cursor-pointer hover:scale-110"><img className="rounded-lg" alt="Movie Card" src={IMG_CDN_URL+posterPath}/></div>
  )
}

export default MovieCard;