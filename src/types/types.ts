export interface State {
    home: { url: object }
  }
  export interface Url {
    total_results?: number;
  }
  export interface MyImageComponentProps{
   src?:string;
   className?:string;
  }
 export interface MovieData{
    results: 
      {
      key?:string;
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: any;
      id?: number;
      media_type?: string;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_Date?:string;
      title?: string;
      video?: boolean;
      vote_average?:any;
      vote_count?: number;
      name?: string;
    }[]
    backdrop_path?: string;
}