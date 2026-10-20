'use client'
import axios from 'axios'
import Image from 'next/image'
import { Suspense, use, useState, useEffect } from 'react'

function MovieContent({ params }) {
    const { id } = use(params)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}`,
                    { params: { api_key:"4f5c1f7ca6ac445718f7659ba7cc101c"  } }
                )
                setMovie(response.data)
            } catch (error) {
                console.error('Error fetching movie:', error)
            }
        }

        fetchMovie()
    }, [id])

    if (!movie) return <p className="p-6 text-gray-400">Loading...</p>

    return (
        <div className="bg-black mt-21 flex overflow-auto shadow-md">
            <div className="p-4 h-[calc(100vh-100px)] shrink-0">
                {movie.poster_path && (
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        className="rounded-lg h-full w-auto shadow-md"
                    />
                )}
            </div>
            <div>
                <h1 className="text-white text-3xl font-semibold m-3 pt-6">{movie.title}</h1>
                <p className="text-gray-300 m-3">{movie.overview}</p>
                <p className="text-gray-400 m-3">Release Date: {movie.release_date}</p>
                <p className="text-gray-400 m-3">Rating: {movie.vote_average}</p>
                <p className="text-gray-400 m-3">Genres: {movie.genres?.map((g) => g.name).join(', ')}</p>
                <p className="text-gray-400 m-3">Runtime: {movie.runtime} minutes</p>
                <p className="text-gray-400 m-3">Language: {movie.original_language}</p>
                <p className="text-gray-400 m-3">Status: {movie.status}</p>
            </div>
        </div>
    )
}

export default function Page({ params }) {
    return (
        <Suspense fallback={<p className="p-6 mt-25 text-gray-400">Loading...</p>}>
            <MovieContent params={params} />
        </Suspense>
    )
}