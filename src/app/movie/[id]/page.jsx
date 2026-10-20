'use client'
import axios from 'axios'
import Image from 'next/image'
import { use , useState ,useEffect } from 'react'

export default  function movie({params}) {
    const { id } =  use(params);
   // const [loading , setLoading] = useState(true)
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        
                        api_key: "4f5c1f7ca6ac445718f7659ba7cc101c"
                }
            })
            setMovie(response.data)
            return response.data 
        } catch (error) {
            console.error("Error fetching movie:", error);
        }
    }

        fetchMovie()
    }, [id]);
   // const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f5c1f7ca6ac445718f7659ba7cc101c`);
    //const mv = await res.json();

    return(
    <div>
        <div className="bg-black-600 mt-21 flex overflow-auto shadow-md">
            <div className="p-4  h-[calc(100vh-100px)] ">
                <Image 
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.title}
                width={750}
                height={1000}
                className="rounded-lg h-full w-[750px]  overflow-hidden shadow-md"
            ></Image>
            </div>
            <div>
                <h1 className="text-white text-3xl  semi-bold m-3 pt-6 ">{movie?.title}</h1>

                <p className="text-white-500 m-3">{movie?.overview}</p>
                <p className="text-white-400 m-3">Release Date: {movie?.release_date}</p>
                <p className="text-white-400 m-3">Rating: {movie?.vote_average}</p> 
                <p className="text-white-400 m-3">Genres: {movie?.genres?.map((genre) => genre.name).join(', ')}</p>
                <p className="text-white-400 m-3">Runtime: {movie?.runtime} minutes</p>
                <p className="text-white-400 m-3">Language: {movie?.original_language}</p>  
                <p className="text-white-400 m-3">Status: {movie?.status}</p>

            </div>
            
        </div>

    </div>
    )
}