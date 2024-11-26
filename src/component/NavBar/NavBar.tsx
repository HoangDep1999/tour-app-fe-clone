function NavBar(){
    return(
        <div className="w-full h-[2rem] flex justify-between items-center text-neutral-50 font-medium mt-4 ">
            <div className="w-[15rem] flex justify-between items-center ">
                <button className="hover:text-blue-500 cursor-pointer flex justify-between items-center">
                    <svg className="h-8 w-8 text-current"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />  <line x1="3" y1="21" x2="21" y2="21" /></svg>
                    <span>Find Flight</span>    
                </button>
                <button className="hover:text-blue-500 cursor-pointer flex justify-between items-center">
                    <svg className="h-8 w-8 text-current"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />  <circle cx="7" cy="10" r="1" /></svg>
                    <span>Find Stays</span>
                </button>
            </div>
            <div>
                <span>Logo</span>
            </div>
            <div className="flex justify-between items-center w-[10rem]">
                <button className="hover:text-blue-500 cursor-pointer">Login</button>
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign up</button>
            </div>
        </div>
    )
}

export default NavBar 