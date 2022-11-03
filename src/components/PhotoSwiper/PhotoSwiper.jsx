import React from 'react'
import { Navigation, Thumbs } from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import {GiCancel} from 'react-icons/gi'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'



const PhotoSwiper = ({link, setVisibleSwiper}) => {
	return (
		<div>
			<div className='fixed w-full h-full  z-20 top-0 left-0 bg-black/50 rounded-xl '>
<GiCancel onClick={() => setVisibleSwiper(false)} size={30} className='fixed top-[10%] right-[10%] cursor-pointer'/>
			<div className='fixed sm:w-[70%] w-[100%]  z-30 sm:top-[15%] top-[30%] sm:left-[15%]'>
        <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        >
          
            {link.map(item => (
              <SwiperSlide>
              <img src={item.image} className='rounded-xl' />
              </SwiperSlide>
            ))}
         
        </Swiper>
      </div>
      </div>
		</div>
	)
}

export default PhotoSwiper
