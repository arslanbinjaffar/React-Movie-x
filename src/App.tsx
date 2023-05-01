import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { fetchDateFromApi } from "./utils/Api/api"
import { useDispatch, useSelector } from 'react-redux';
import { getConfirmation, getGenres } from "./reducers/reducers";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import heroBanner from './pages/home/banner/heroBanner';
import HeroBanner from "./pages/home/banner/heroBanner";
import Expoxe from "./pages/Explore/Expoxe";
import Detail from "./pages/Detail/Detail";


const App = () => {
  type url={
    poster:string
    backDrop:string
    profile:string
     }
  const dispatch = useDispatch()
  useEffect(() => {
    dataFetch();
    genresAll();
  }, [])
  const dataFetch = async () => {
    try {
      const res = await fetchDateFromApi('/configuration')
      const url:url={
        backDrop:res.images.secure_base_url+"original",
        profile:res.images.secure_base_url+"original",
        poster:res.images.secure_base_url+"original"
      }
      dispatch(getConfirmation(url))
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const genresAll=async()=>{
    let endPoints=["tv","movie"]
    const allGenres: {[key: number]: any} = {};
    const generesPromise=endPoints.map((item)=>{
      return fetchDateFromApi(`/genre/${item}/list`).then((data)=>data)
    })  
const data = await Promise.all(generesPromise);
    data.map((value, index, array) => {
      const genres = value.genres;
      return genres.map((item: any) => {
        return allGenres[item.id] = item;
      });
    });
    dispatch(getGenres(allGenres));
  }

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Detail/>}/>
      <Route path="/search/:query" element={<h1>search</h1>}/>
      <Route path="/explore/:mediaType" element={<h1>as</h1>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App