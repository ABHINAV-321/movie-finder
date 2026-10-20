export default function About() {
    return (
    <div className="bg-black-600 flex overflow-auto shadow-md h-full" >
<div className="bg-gray-600 mt-21 h-full flex overflow-auto shadow-md">
            <div className="p-4 h-[calc(100vh-100px)]">
                <h1 className="text-white text-3xl  font-serif semi-bold m-3 pt-6 ">About MovieFinder</h1>
                <p className="text-white-500 text-xl m-3">MovieFinder is a web application that allows users to search for movies and discover new ones. It uses the TMDB API to fetch movie data and display it in a user-friendly interface.</p>
                <br />
                <p className="text-white-400 m-3">This project was built using Next.js, React, and Tailwind CSS. It is designed to be responsive and works well on both desktop and mobile devices.</p>
            </div>
        </div>
    </div>
    )
}