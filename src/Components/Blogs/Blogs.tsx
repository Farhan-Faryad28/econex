import React from 'react';
import { NavLink } from 'react-router-dom';
import OnlineRetail from '../../Assets/OnlineRetail.svg';
import luxuriousitems from '../../Assets/luxuriousitems.svg';
import Covid19 from '../../Assets/Covid19.svg';

const Blogs = () => {
  return (
    <div className='container mx-auto mt-[121px]'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl text-primary'>Blogs</h2>
        <NavLink to="/" className="flex items-center">
          <button className="bg-primary text-white text-xs border border-light-grey rounded-full hover:bg-primary hover:text-white text-xs py-[10px] px-[20px]">
            View All Blogs
          </button>
        </NavLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-8">
        
        <div className="max-w-[350px] mx-auto  p-4">
          <img src={OnlineRetail} alt="" className="w-full h-64  " />
          <p className="text-grey text-xs font-[500] flex items-center gap-[4px] mt-2">
            17 Oct, 2023   |   E-Commerce                                
          </p>
          <h2 className="text-base text-primary truncate pt-[15px]">
            The Future of Online Retail
          </h2>    
          <p className="text-xs text-secondary font-[500] truncate">
            Online retail is continually evolving day by day, this enrichment in the online retail sector is driven by technological advancement and changing consumer preferences and behaviors.
          </p>
          <NavLink to="/">
            <button className='text-xs text-grey font-[500] mt-2'>Read More</button>
          </NavLink>
        </div>
        
        <div className="max-w-[350px] mx-auto  p-4 ">
          <img src={luxuriousitems} alt="" className="w-full h-64 object-cover" />
          <p className="text-grey text-xs font-[500] flex items-center gap-[4px] mt-2">
            22 Nov, 2022   |   Online Shopping                              
          </p>
          <h2 className="text-base text-primary truncate pt-[15px]">
            Online shopping for luxurious items
          </h2>    
          <p className="text-xs text-secondary font-[500] truncate">
            Online retail is continually evolving day by day, this enrichment in the online retail sector is driven by technological advancement and changing consumer preferences and behaviors.
          </p>
          <NavLink to="/">
            <button className='text-xs text-grey font-[500] mt-2'>Read More</button>
          </NavLink>
        </div>
        
        <div className="max-w-[350px] mx-auto  p-4 ">
          <img src={Covid19} alt="" className="w-full h-64 object-cover " />
          <p className="text-grey text-xs font-[500] flex items-center gap-[4px] mt-2">
            17 Oct, 2023   |   E-Commerce                               
          </p>
          <h2 className="text-base text-primary truncate pt-[15px]">
            Exploring how COVID-19 crisis created new opportunities
          </h2>    
          <p className="text-xs text-secondary font-[500] truncate">
            Online retail is continually evolving day by day, this enrichment in the online retail sector is driven by technological advancement and changing consumer preferences and behaviors.
          </p>
          <NavLink to="/">
            <button className='text-xs text-grey font-[500] mt-2'>Read More</button>
          </NavLink>
        </div>
        
      </div>
    </div>
  );
};

export default Blogs;
