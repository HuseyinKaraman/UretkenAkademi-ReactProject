import {configureStore} from '@reduxjs/toolkit'   

import coinReducer from './coinSlice.js'

export const store = configureStore({
    reducer:{
        coins: coinReducer
    },
});