'use client'
import Image from "next/image";
import axios from "axios"
import {useState, useEffect} from "react";
import Link from "next/link";




export default function Home() {
  const [movies ,setMovies] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/trending/movie/week",{
        params: {
          //s: "batman",
          api_key: "4f5c1f7ca6ac445718f7659ba7cc101c"
        }
      })
      
    setMovies(response.data)
    console.log(response.data)
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  useEffect(() => {
    fetchMovies()
  },[])
 
  return (
    <div className="container pt-30 mx-auto">
       <h1 className="text-3xl font-bold mb-4">Trending Movies</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies?.results.map((movie) => {
          return(
            <Link href={`/movie/${movie.id}`} key={movie.id} className="bg-slate-700 flex width-auto m-3 p-4  rounded-3xl shadow-lg overflow-x-auto shadow-blue-600/50">
            <div className="bg-slate-700 flex   rounded-2xl  overflow-x-auto " key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={750}
                height={1000}
                className="w-full h-auto rounded-2xl"
              />
              
            </div>
            </Link>
          )
        })}
      </div>          
    </div>
  );
}
