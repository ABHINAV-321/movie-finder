

export default function Nav(){
 return (
    <nav className="bg-gray-800 text-white flex p-4 fixed top-0 left-0 right-0 z-0">
        <div className="max-w-6xl mx-auto  items-center justify-between px-4 py-3">
            <h1 className="text-xl font-bold text-yellow-400 text-heading semi-bold">🎬 MovieFinder</h1>
        </div>
        <div className="max-w-6xl mx-auto flex items-center justify-end px-4 py-3">
            <ul className="flex  space-x-4">
                <li>
                    <a href="/" className="text-white hover:text-yellow-400">Home</a>
                </li>
                <li>
                    <a href="/search" className="text-white hover:text-yellow-400">Search</a>
                </li>
                 <li>
                    <a href="/about" className="text-white hover:text-yellow-400">About</a>
                </li>
            </ul>
        </div>

        
    </nav>
 )
}