
import Header from './Header'

import useNowPlayingMovies from '../Hooks/userNowPlayingMovies'
import MainContainer from './MainContainer';

const Browse = () => {

useNowPlayingMovies();

  
  return (
    <div>
      <Header />
    
      <MainContainer />
    </div>
  )
}

export default Browse;
