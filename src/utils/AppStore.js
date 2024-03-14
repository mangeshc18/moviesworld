import {configureStore} from "@reduxjs/toolkit"
import UserSliceReducer from "./UserSlice";
import movieReducer from "./MovieSlice"
const AppStore =  configureStore({
    reducer : {

        user : UserSliceReducer,
        movies : movieReducer
    }

})

export default AppStore;