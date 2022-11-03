import React from 'react'
import {  EffectCoverflow, Navigation, Thumbs } from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import {GiCancel} from 'react-icons/gi'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'



const PhotoSwiper = ({link, setVisibleSwiper}) => {
	return (
		<div>
			<div className='fixed w-full h-full  z-20 top-0 left-0 bg-black/50 rounded-xl flex justify-center items-center '>
<GiCancel onClick={() => setVisibleSwiper(false)} size={30} className='fixed top-[10%] right-[10%] cursor-pointer'/>
			<div className='fixed   z-30 lg:max-w-[1000px] md:max-w-[800px] sm:max-w-[600px] max-w-[400px] '>
        <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Thumbs, EffectCoverflow]}
        effect='coverflow'
        grabCursor={true}
        >
          
            {link.map(item => (
              <SwiperSlide >
              <img src={item.image} className='rounded-xl ' />
              </SwiperSlide>
            ))}
         
        </Swiper>
      </div>
      </div>
		</div>
	)
}

export default PhotoSwiper
