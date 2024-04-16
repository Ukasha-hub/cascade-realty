
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cards from './Cards';


import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { useEffect } from 'react';

const Home = () => {
    
   const {islogIn}= useContext(AuthContext)

   
   useEffect(() => {
    const userLogIn = localStorage.getItem('LogIn');
    if (!userLogIn) {
      
      localStorage.setItem('LogIn', true);

      Swal.fire({
        title: "Login Successful!",
        text: "You have signed in!",
        icon: "success"
      });
    }
  }, [islogIn]);

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