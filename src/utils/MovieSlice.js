import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        movieTrailer : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTreailer : (state, action) => {
            state.movieTrailer = action.payload;
        }
    }
});

export default MovieSlice.reducer;
export const {addNowPlayingMovies, addMovieTreailer} = MovieSlice.actions;
