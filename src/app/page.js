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
   <div className="container pt-24 md:pt-30 mx-auto px-3">
    <h1 className="text-2xl md:text-3xl font-bold mb-4">Trending Movies</h1>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {movies?.results?.map((movie) => (
            <Link
                href={`/movie/${movie.id}`}
                key={movie.id}
                className="bg-slate-700 p-2 md:p-4 rounded-2xl md:rounded-3xl shadow-lg shadow-blue-600/50 hover:scale-105 transition"
            >
                
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        className="w-full h-auto rounded-xl md:rounded-2xl"
                    />
              
            </Link>
        ))}
    </div>
</div>  );
}
