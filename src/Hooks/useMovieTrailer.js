import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieTreailer } from '../utils/MovieSlice'
import { options } from '../utils/constants'

const useMovieTrailer = (id) => {
    const dispatch = useDispatch()
    const movievideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        const json = await data?.json()
        // console.log(json);
        
        const TrailerVid = json?.results.filter(vid => vid.type === "Trailer")
        // console.log(TrailerVid); 
        dispatch(addMovieTreailer(TrailerVid))

    }

    useEffect(() => {
        movievideos()
    },[]);


  
}

export default useMovieTrailer;
