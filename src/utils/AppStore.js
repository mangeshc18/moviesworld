import {configureStore} from "@reduxjs/toolkit"
import UserSliceReducer from "./UserSlice";
const AppStore =  configureStore({
    reducer : {

        user : UserSliceReducer
    }

})

export default AppStore;