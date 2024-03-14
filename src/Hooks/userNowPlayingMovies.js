import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const NowPlaying = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      const json = await data?.json()
    //   console.log(json);
      dispatch(addNowPlayingMovies(json?.results))
    }

    
  
    useEffect(() => {
      NowPlaying();
    },[]);
  
}

export default useNowPlayingMovies