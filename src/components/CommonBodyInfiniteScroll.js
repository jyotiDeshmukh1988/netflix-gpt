import React from 'react'
import Shimmer from './Shimmer'
import MovieCard from './movie/MovieCard'

const CommonBodyInfiniteScroll = ({ card, title }) => {
  return (
    <div className="bg-black flex flex-col items-center w-full">
      <h1 className=" m-3 p-2 text-3xl font-bold text-red-700 pt-24">{title}</h1>
      {card?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap gap-8 items-center justify-center my-3">
          {card?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} title={movie?.original_title} desc={movie?.overview} movieId={movie?.id}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default CommonBodyInfiniteScroll