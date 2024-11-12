import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Collection/Collection.css'
function Collection() {
  return (
    <div className='Mens-Trending h-[556px] rounded-[40px] mt-[117px] container mx-auto flex flex-col  justify-center'>
      <div className='max-w-[549px] text-white ps-[30px]'>
        <h2 className='text-xl'>Men’s Trending Activewear</h2>
        <p className='text-sm pt-[9px]'>Indulge in our curated selection of best-selling products, carefully chosen for their exceptional quality, outstanding value, and customer satisfaction.</p>
        <NavLink to="/" className="flex items-center pt-[30px]">
            <button className=" border border-white rounded-full hover:bg-primary hover:text-white hover:border-primary  text-base py-[10px] px-[20px] transition-all">
                View Collection
            </button>        
        </NavLink>
      </div>
    </div>
  )
}

export default Collection;
