
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cards from './Cards';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide ><img src="https://i.ibb.co/RTSLYRf/Rendu-Ext-rieur-4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    
                </Swiper>
            </>
             
             <h1 className='bg-gray-300 text-4xl flex justify-center'>Our residence </h1>

             <Cards></Cards>

        </div>
    );
};

export default Home;