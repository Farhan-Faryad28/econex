import React from 'react';
import CardIcon from '../../Assets/CardIcon.svg';
import { NavLink } from 'react-router-dom';
import Cart from '../../Assets/cardWishlist.svg';
import CompareProducts from '../../Assets/CompareProducts.svg'
import ProductOverview from '../../Assets/ProductOverview.svg'

interface CardProps {
    cardIcon: string,
    cardReviews: string,
    cardTitle: string,
    cardPrice: string,
    cardOff: string,
}
const ProductCard: React.FC<CardProps> = ({ cardIcon, cardReviews, cardTitle, cardPrice, cardOff }) => {
    return (

        <div className="container mx-auto relative group w-[354px] cursor-pointer overflow-hidden mt-4 ">
            <div>
                <div className=" relative" >
                <img src={cardIcon} alt="" />
                <nav className="flex flex-col gap-[5px] items-end absolute right-[10px] bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                    <NavLink  to="/">
                        <img src={Cart} alt="Wishlist" width={48} height={48}/>
                    </NavLink>
                    <NavLink  to="/">
                        <img src={CompareProducts} alt="Compare" width={48} height={48} />
                    </NavLink>
                    <NavLink  to="/">
                        <img src={ProductOverview} alt="Overview" width={48} height={48}/>
                    </NavLink>
                </nav>
            </div>

                <div className="">
                    <h2 className="text-sm overflow-hidden text-ellipsis whitespace-nowrap pt-[15px]">{cardTitle}</h2>
                    <p className=" text-sm text-[#FCC93D]">★★★★★
                        <span className="text-secondary text-xs">
                            {cardReviews}
                        </span>
                    </p>

                    <div className="flex justify-between">

                        <p className="text-grey text-sm font-semibold flex items-baseline gap-[4px]">
                            <span className="inline-block">PKR</span>
                            <span className="text-base font-semibold inline-block">{cardPrice}</span>
                            <span className="text-secondary text-xs font-medium line-through inline-block">{cardOff}</span>
                        </p>

                        <NavLink to="/" className="flex items-center">
                            <button className="bg-primary rounded-full hover:bg-primary text-white text-xs py-[10px] px-[20px]">
                                Add to Cart
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            

        </div>
    );
};

export default ProductCard;
