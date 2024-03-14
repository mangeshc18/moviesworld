import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    const movies = useSelector((store) => store?.movies?.nowPlayingMovies)
    if(!movies) return;
    // console.log(movies);
    const title = movies[1];
    // console.log(title);



    return(
        <div>

            <VideoTitle title={title}/>
            <VideoBackground id ={title.id}/>
            <div className="w-screen aspect-video bg-black/45 absolute z-10"></div>
            
        </div>
    )
}

export default MainContainer;