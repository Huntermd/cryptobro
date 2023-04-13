import React from 'react'
import './AdRow.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay]);

export const AdRow = ({data}) => {

  return (
    <div className='container'>
        <div className='Leftside'>
        <div className='titleLeft'>
        <h2>Top {data.length} coins</h2>
        </div>
        <div className='ApiRow'>
            <h3 id='Button'>
                Api stuff
            </h3>
        </div>
        </div>
        <div className='AdContainer'>
        <div className='title'>
            <h2>Top 3 News</h2>
        </div>
        <div className='swiperRow'>
            <Swiper
            
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}>
                <SwiperSlide>
                    <div className='adBox'>
                <h3>
                    New ad 
                </h3>
                <p className='author'>Name </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='adBox'>
                    <h3>
                    New ad 
                </h3>
                <p className='author'>Name </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='adBox'>
                    <h3>
                    New ad 
                </h3>
                <p className='author'>Name </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className='adBox'>
                    <h3>
                    New ad 
                </h3>
                <p className='author'>Name </p>
                    </div>

                </SwiperSlide>

            
    

            </Swiper>
        </div>
    </div>
    </div>
  )
}
