import {  useSelector } from "react-redux"
import useMovieTrailer from "../Hooks/useMovieTrailer";


const VideoBackground = ({id}) => {

    const trailer = useSelector(store => store.movies.movieTrailer)
    console.log(trailer);

    useMovieTrailer(id)


    if(!trailer) return

    const vidtrailer = trailer[0];
    console.log(vidtrailer.key);

  return (
    <div className="absolute top-0 "><iframe className="w-screen h-auto aspect-video" src={`https://www.youtube.com/embed/${vidtrailer.key}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1`}  width="560" height="315"  frameBorder="0" allowfullscreen></iframe>

    </div>
  )
}

// https://www.youtube.com/embed/-SFcIUEvNOQ?autoplay=1&mute=1&enablejsapi=1

export default VideoBackground;
