import axios from 'axios'
const BaseURL="https://api.themoviedb.org/3"
    const headers={
        Authorization:`bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRiYjc1YWQ3MjUyMDFiODhkMjljY2M5MzA4M2ViMCIsInN1YiI6IjYzNmM4OGVkODEzODMxMDBkZDM1OGNiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vy_1shkOl-l9fXMUF2-crnfpiKKECUYTVUQKnBCoCa4`
    }

type Params = {
    const: any;
    // define any other needed properties
  }
export const fetchDateFromApi=async(url:string,params?:Params)=>{
    try {
        const {data}=await axios.get(BaseURL + url,{
            headers,params
        })
        return data;
    } catch (error) {
        console.log(error);
        
    }
}