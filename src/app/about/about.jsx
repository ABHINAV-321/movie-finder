<div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-yellow-400">{movie.title}</h2>
              <p className="text-gray-300">{movie.release_date}</p>
            </div>
          </div>
        