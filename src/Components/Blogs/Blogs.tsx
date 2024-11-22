
import React from 'react';
import { NavLink } from 'react-router-dom';
import OnlineRetail from '../../Assets/OnlineRetail.svg';
import LuxuriousItems from '../../Assets/luxuriousitems.svg';
import Covid19 from '../../Assets/Covid19.svg';

const Blogs = () => {
    return (
        <div className="container mx-auto mt-[123px]">
            <div className='flex justify-between items-center '>
              <h2 className='text-xl text-primary'>Latest Products</h2>
              <NavLink to="/" className="flex items-center">
                  <button className=" text-xs border border-light-grey rounded-full hover:bg-primary hover:text-white text-xs py-[10px] px-[20px]  transition duration-300 ease-in-out">
                    View All Products
                  </button>        
                </NavLink>
            </div>

            <div className="flex gap-[30px] mt-8">
                <div className=" overflow-hidden">
                    <img src={OnlineRetail} alt="Online Retail" className="w-full h-64 object-cover rounded-lg" />
                    <div className="pt-[15px]">
                        <p className="text-sm text-grey">17 Oct, 2023 | E-Commerce</p>
                        <h2 className="text-base overflow-hidden text-ellipsis whitespace-nowrap">
                            The Future of Online Retail
                        </h2>
                        <p className="pt-[7px] text-xs text-light-grey line-clamp-2">
                            Online retail is continually evolving day by day, this enrichment in the online retail sector is driven by technological advancement and changing consumer preferences and behaviors.
                        </p>
                        <NavLink to="/" className="pt-[7px] text-xs text-grey hover:underline">Read More</NavLink>
                    </div>
                </div>

                <div className=" overflow-hidden">
                    <img src={LuxuriousItems} alt="Luxurious Items" className="w-full h-64 object-cover rounded-lg" />
                    <div className="pt-[15px]">
                        <p className="text-sm text-grey">22 Nov, 2022 | Online Shopping</p>
                        <h2 className="text-base overflow-hidden text-ellipsis whitespace-nowrap">
                            Online Shopping for Luxurious Items
                        </h2>
                        <p className="pt-[7px] text-xs text-light-grey line-clamp-2">
                            Online retail is continually evolving day by day, this enrichment in the online retail sector is driven by technological advancement and changing consumer preferences and behaviors.
                        </p>
                        <NavLink to="/" className="pt-[7px] text-xs text-grey hover:underline">Read More</NavLink>
                    </div>
                </div>

                <div className=" overflow-hidden">
                    <img src={Covid19} alt="COVID-19 Impact" className="w-full h-64 object-cover rounded-lg" />
                    <div className="pt-[15px]">
                        <p className="text-sm text-grey">17 Oct, 2023 | E-Commerce</p>
                        <h2 className="text-base  overflow-hidden text-ellipsis whitespace-nowrap">
                            Exploring how COVID-19 crisis created...
                        </h2>
                        <p className="pt-[7px] text-xs text-light-grey line-clamp-2">
                            Online retail is continually evolving day by day, this enrichment in the online retail sector is driven by technological advancement and changing consumer preferences and behaviors.
                        </p>
                        <NavLink to="/" className="pt-[7px] text-xs text-grey hover:underline transition-all">Read More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
