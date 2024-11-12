import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Components/Header/Header'
import ProductCard from '../Components/ProductCard/ProductCard'
import CardIcon from '../Assets/CardIcon.svg'
import SweetResistance from '../Assets/SweetResistanceIcon.svg'
import MenTrackSuit from '../Assets/MenTrackSuit.svg'
import Kidssuit from '../Assets/KidsTracksuit.svg'
import HalawaWax from '../Assets/Halawa Wax.svg'
import RICEDEAL from '../Assets/RICEDEAL.svg'
import earings from '../Assets/earings.svg'
import Copybook from '../Assets/Copybook.svg'
import Collection from '../Components/Collection/Collection'
import Featured from '../Components/Featured/Featured'
import Click from '../Assets/Click.svg'
import Pick from '../Assets/Pick.svg'
import Earn from '../Assets/Earn.svg'
import Blogs from '../Components/Blogs/Blogs'
const Home = () => {
  return (
    <div>
      <Header/>
      <div className='container mx-auto mt-[120px]'>
        <div className='flex justify-between items-center '>
           <h2 className='text-xl text-primary'>Today’s Deals</h2>
           <NavLink to="/" className="flex items-center">
              <button className="bg-primary text-xs rounded-full hover:bg-primary text-white text-xs py-[10px] px-[20px]">
                View All Products
              </button>        
            </NavLink>
        </div>
        <div className='flex gap-[30px]'>
          <ProductCard  cardIcon={CardIcon} cardReviews='(1000+ reviews)' cardTitle="Wall Decoration 3 Frame Subhan Allah, Allhamdulillah, Allahu Akbar Art D2" cardPrice="PKR 960" cardOff="1,500"/>
          <ProductCard  cardIcon={SweetResistance} cardReviews='(1000+ reviews)' cardTitle="12 Hrs Sweet Resistance N5 CHANEL PARIS P..." cardPrice="PKR 1,760" cardOff="2,500"/>
          <ProductCard  cardIcon={MenTrackSuit} cardReviews='(1000+ reviews)' cardTitle="Men Track Suit For Winter Collection" cardPrice="PKR 2,250" cardOff="2,500"/>
          <ProductCard  cardIcon={Kidssuit} cardReviews='(1000+ reviews)' cardTitle="Winter Tracksuit For Kid's By Capasia" cardPrice="PKR 1,600" cardOff=""/>
        </div>
          
      </div>


      <div className='container mx-auto mt-[120px]'>
        <div className='flex justify-between items-center '>
           <h2 className='text-xl text-primary'>Latest Products</h2>
           <NavLink to="/" className="flex items-center">
              <button className=" text-xs border border-light-grey rounded-full hover:bg-primary hover:text-white text-xs py-[10px] px-[20px]">
                View All Products
              </button>        
            </NavLink>
        </div>
        <div className='flex gap-[30px]'>
          <ProductCard  cardIcon={HalawaWax} cardReviews='(1000+ reviews)' cardTitle="Ecrin Halawa Wax" cardPrice="PKR 1,050" cardOff="2,000"/>
          <ProductCard  cardIcon={RICEDEAL} cardReviews='(1000+ reviews)' cardTitle="NTS RICE DEAL" cardPrice="PKR 3,250" cardOff="4,000"/>
          <ProductCard  cardIcon={earings} cardReviews='(1000+ reviews)' cardTitle="New hanging Pearl studs earings for Girls" cardPrice="PKR 500" cardOff="1,000"/>
          <ProductCard  cardIcon={Copybook} cardReviews='(1000+ reviews)' cardTitle="Magic Practice Copybook,(4BOOKS+10 REFILL)" cardPrice="PKR 900" cardOff=""/>
        </div>
          
      </div>

     
      <Collection/>

      <div className='container mx-auto mt-[120px]'>
        <div className='flex justify-between items-center '>
           <h2 className='text-xl text-primary'>Featured Shops</h2>
           <NavLink to="/" className="flex items-center">
              <button className="bg-primary text-white text-xs border border-light-grey rounded-full hover:bg-primary hover:text-white text-xs py-[10px] px-[20px]">
                View All Shops
              </button>        
            </NavLink>
        </div>
        <div className='flex gap-[30px]'>
          <Featured cardImage={Click} ShopsTitle="Click ,Pick & Earn" products="512 Products   |   Joined On 17 Oct, 2023" reviews="(24 reviews)"/>
          <Featured cardImage={Pick} ShopsTitle="Click ,Pick & Earn" products="212 Products   |   Joined On 27 Nov, 2024" reviews="(24 reviews)"/>
          <Featured cardImage={Earn} ShopsTitle="Click ,Pick & Earn" products="322 Products   |   Joined On 01 Jan, 2024" reviews="(24 reviews)"/>
        </div>
        
      </div>
      
      <Blogs/>
    </div>
  )
}

export default Home
