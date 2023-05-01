import {createSlice} from '@reduxjs/toolkit'
interface homeSliceTypes{
     url: {
   base:string
   poster:string
   backdrop:string
    },
    genres:object
}
const initialState: homeSliceTypes = {
    url: {
        base: 'https://example.com/',
        poster: 'https://example.com/posters/',
        backdrop: 'https://example.com/backdrops/',
    },
    genres:{}
  };

const homeSlice=createSlice({
    name:"home",
    initialState,
    reducers:{
       getConfirmation:(state,action)=>{
          state.url=action.payload        
       }, 
       getGenres:(state,action)=>{
          state.genres=action.payload        
       } 
    }

})

export const { actions:{getConfirmation,getGenres}, reducer } = homeSlice;
 
  