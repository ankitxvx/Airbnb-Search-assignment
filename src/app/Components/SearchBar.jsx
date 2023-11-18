import React from 'react'

export default function
   () {
   return (
      <>
         <div className='flex justify-center'>
            <nav className=' border-2 h-14 mt-4 flex justify-center rounded-2xl bg-gray-300 '>
               <div className='  flex flex-col pl-2 hover:scale-110 hover:bg-white duration-300 hover:rounded-full  appearance-none border-none bg-transparent focus:outline-none'>
                  <label htmlFor="">Where</label>
                  <input type="text" className = " bg-gray-300 hover:scale-110 hover:bg-white duration-300   hover:rounded-full border-none" placeholder='Search Destination'   />
               </div>
               <div className=' flex flex-col pl-2 hover:scale-110 hover:bg-white duration-300 hover:rounded-full'>
                  <label htmlFor="">CheckIn</label>
                  <input type="date" className = "  bg-gray-300 hover:scale-110 hover:bg-white duration-300 hover:rounded-full appearance-none border-none bg-transparent focus:outline-none " placeholder="Add dates" />
               </div>
               <div className='flex flex-col pl-2 hover:scale-110 hover:bg-white duration-300 hover:rounded-full' >
                  <label htmlFor="">CheckOut</label>
                  <input type="date" className = "  bg-gray-300 hover:scale-110 hover:bg-white duration-300 hover:rounded-full hover:relative appearance-none border-none bg-transparent focus:outline-none" placeholder="Add dates" />
               </div>
               <div className='flex  pl-2'>

                  <button className=''>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F5385D" className="w-10 h-10">
                        <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
                     </svg>

                  </button>




               </div>
            </nav>
         </div>

      </>
   )
}
