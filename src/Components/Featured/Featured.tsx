import React from 'react'
import { NavLink } from 'react-router-dom';

interface featuredcardprops{
    cardImage:string;
    ShopsTitle:string;
    products:string;

    reviews:string;
}
const Featured:React.FC<featuredcardprops> = ({cardImage, ShopsTitle, products,  reviews}) => {
  return (
        <NavLink to="/" className=""> 
            <img src={cardImage} alt="" className="" />
            <div className="">
                <h2 className="text-base text-primary overflow-hidden text-ellipsis whitespace-nowrap pt-[15px]">{ShopsTitle}</h2>
                <div className="flex justify-between">
                    <p className="text-secondary text-xs flex items-center gap-[4px] ">
                        {products}                                
                    </p>    
                </div>
                <p className=" text-sm text-[#FCC93D]">★★★★★
                    <span className="text-secondary text-xs">
                        {reviews}
                    </span>
                </p>
            </div>
        </NavLink>


  )
}

export default Featured
