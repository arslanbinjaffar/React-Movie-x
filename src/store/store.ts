import {configureStore} from '@reduxjs/toolkit';
import { reducer as home} from '../reducers/reducers';


const store=configureStore({
    reducer:{
        home:home
    }
})
export default store