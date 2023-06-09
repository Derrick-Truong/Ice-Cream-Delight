import { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getRestaurants } from '../../../store/restaurants'
import { getReviews } from '../../../store/review'
import OpenModalButton from '../../../OpenModalButton'
import './AllRestaurants.css'
import CreateReview from '../../Reviews/CreateReview'
import { NavLink } from 'react-router-dom'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper';
import banner from '../../../assets/banner-derrick.jpg'

// SwiperCore.use([EffectCoverflow, Pagination]);
const AllRestaurants = () => {
    SwiperCore.use([EffectCoverflow, Pagination]);
    const dispatch = useDispatch()
    const history = useHistory()
    const restaurants = useSelector(state => state?.restaurants)
    const restaurantsValues = Object?.values(restaurants)

    useEffect(() => {
        dispatch(getRestaurants())
    }, [dispatch, JSON.stringify(restaurantsValues)])

    if (!restaurants) {
        return <div>Loading...</div>;
    }


    return (
        <>
          {/* <div className='banner-welcome'><img className="banner-welcome-2" src={banner} /></div> */}
            <div className='All-Restaurants-Feed'>


                <div className='container-swipe'>
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        pagination={true}
                        spaceBetween={5}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                        }}
                        className="mySwiper"
                    >
                        <div className='swiping-corner'>
                            <>
                        <mySwiper>
                            {restaurantsValues?.sort((a, b) => b.avgRating - a.avgRating)?.map(restaurant => {
                                const rating = restaurant?.avgRating;
                                const imageUrl =
                                    'https://icecreamfinder.s3.us-west-1.amazonaws.com/' + restaurant?.previewImage
                                // const imageUrl = "https://yelp-capstone.s3.us-west-1.amazonaws.com/" + restaurant?.objects[0]?.key
                                return (
                                    <SwiperSlide className='pictures-slide' key={restaurant?.id}>
                                        <NavLink exact to={`/restaurants/${restaurant?.id}`}>
                                            <div className='home-page-restaurant-container'>
                                                <span className='home-page-restaurant-card'>
                                                    <img
                                                        className='all-restaurants-preview-image'
                                                        src={imageUrl}
                                                        alt='preview-image'
                                                    />
                                                    <div className='home-page-restaurant-card-content'>
                                                        <div className="restaurant-card-title">
                                                            <span>{restaurant?.title}</span><span>{restaurant?.city},{restaurant?.state}</span></div>
                                                            <div className="restaurant-card-rating-price">
                                                            <span>  <i style={(rating >= 5) ? { color: '#43a700' } : (5 > rating && rating >= 4) ? { color: '#6aff07' } : (4 > rating && rating >= 3) ? { color: '#f1ed12' } : (3 > rating && rating >= 2) ? { color: '#f19812' } : (2 > rating && rating >= 1) ? { color: '#d11b0a' } : { color: '#fff' }} className="fa-solid fa-ice-cream" ></i>
                                                                <i style={(rating >= 5) ? { color: '#43a700' } : (5 > rating && rating >= 4) ? { color: '#6aff07' } : (4 > rating && rating >= 3) ? { color: '#f1ed12' } : (3 > rating && rating >= 2) ? { color: '#f19812' } : { color: '#fff' }} className="fa-solid fa-ice-cream"></i>
                                                                <i style={(rating >= 5) ? { color: '#43a700' } : (5 > rating && rating >= 4) ? { color: '#6aff07' } : (4 > rating && rating >= 3) ? { color: '#f1ed12' } : { color: '#fff' }} className="fa-solid fa-ice-cream"></i>
                                                                <i style={(rating >= 5) ? { color: '#43a700' } : (5 > rating && rating >= 4) ? { color: '#6aff07' } : { color: '#fff' }} className="fa-solid fa-ice-cream"></i>
                                                                <i style={(rating >= 5) ? { color: '#43a700' } : { color: '#fff' }} className="fa-solid fa-ice-cream"></i></span>
                                                                <span>${restaurant.price}/scoop</span>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </NavLink>
                                    </SwiperSlide>

                                );
                            })}
                                </mySwiper>
                            </>
                            </div>
                    </Swiper>
                </div>

                <div className='filler-information'>
                          <div className='our-dairy-filler'>
                            <h4 className='title-filler'>Our Mission</h4>
<div className="inside-text-filler">
                         <span className="instructions">Welcome to Ice Cream Delight, in order to scroll through the ice cream shops, please right click and drag one of the images either left or right.</span> Step into a world where every scoop is a delightful journey of flavors and textures, crafted with the utmost care and at various stores helped ranked by other fellow members. From classics like creamy vanilla and decadent chocolate to tantalizing twists like caramel swirl and fresh fruit sorbets, we will help you find the flavor that will give you a sense of euphoria. Each batch is meticulously handcrafted by highly regarded chefs, ensuring that every spoonful delivers a burst of pure delight.
We invite you to embark on a magical ice cream adventure. Discover the harmonious fusion of exceptional dairy, passion-infused craftsmanship, and an unrelenting pursuit of frozen perfection. Your taste buds will thank you as you experience the captivating allure of our extraordinary ice cream flavors. Welcome to a world where dreams are transformed into frozen realities—welcome to Ice Cream Delight by Derrick Truong.</div>
                          </div>
                          {/* <div className='ingredients-filler'><h4 className='title-filler'>Our Users</h4>
                          At Ice Cream Delight by Derrick Truong, we take pride in complementing our high-quality dairy with the very best ingredients. From scratch, we cook and bake an array of delectable treats in-house, ensuring that every guest is served the freshest and most exceptional ingredients. Our commitment to quality shines through in every scoop, creating an unforgettable ice cream experience.
                          </div>
                          <div className='our-passion-filler'><h4 className='title-filler'>Our Passion</h4>Rooted in a shared love for ice cream and the cherished memories it invokes, Through meticulous ingredient selection, refined processes, and a passionate team, their aim was not just to craft delightful flavors but to foster togetherness. Whether it's a family outing, a moment of solace, a reunion, or simply indulging your sweet cravings, we believe that any occasion is perfect for savoring our creations and hope you find the same joy in our flavors as we do in creating them.</div> */}
                </div>
            </div>
        </>
    );

}

export default AllRestaurants
