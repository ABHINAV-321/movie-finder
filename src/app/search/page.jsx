'use client'
import { useState, useEffect } from "react";
import axios from "axios"
import Image from "next/image";
import Link from "next/link";

export default function search() {
    const [loading , setLoading] = useState(true)
    const [movies, setMovies] = useState([""])
    const [query, setQuery] = useState("")


    const fetchMovies = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    query: query,
                    api_key: "4f5c1f7ca6ac445718f7659ba7cc101c"
                }
            })
            setMovies(response.data)
            console.log(movies)
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchMovies()
    }, [])
    const searchMovies = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    query: query,
                    api_key: "4f5c1f7ca6ac445718f7659ba7cc101c"
                }
            })
            setMovies(response.data)
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        searchMovies()
        //setQuery(e.target.value)
        //  console.log(e.target.movie.value)
        console.log(query)
    }
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="loader">
                <p className="text-white text-lg">Loading...</p>
            </div>
        </div>
    }

    return (
        <div>

            <div className="mt-25 justify-center items-center-safe flex-col flex h-50 ">
                <span className="text-gray-400 text-lg ">Search for your favorite movies and discover new ones!</span>
                <form onSubmit={handleSearch} className="mt-4 flex items-center">
                    <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search for movies..." className="mt-4 p-2 rounded-xl text-black bg-indigo-300  shadow-2xl hover:bg-indigo-400 shadow-indigo-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
                    <button type="submit" className="ml-2 mt-4 px-4 py-2 bg-yellow-400 text-black rounded-xl shadow-2xl shadow-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">Search</button>
                </form>
                <p className="text-gray-400 mt-10 mr-5">Showing results for: {query}</p>
            </div>
            <div className="container pt-3 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {movies?.results?.map((movie) => {
                        return (
                             <Link href={`/movie/${movie.id}`} key={movie.id} className="">
                            <div className="bg-slate-700 flex width-auto m-3 p-4  rounded-xl shadow-lg overflow-x-auto shadow-blue-600/50" key={movie.id}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={500}
                                    height={750}
                                    className="w-full h-auto"
                                />

                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}