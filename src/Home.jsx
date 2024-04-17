
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
    
   const {user}= useContext(AuthContext)

   
   useEffect(() => {
    const userLogIn = sessionStorage.getItem('LogIn');
    if (user && !userLogIn) {
      
        sessionStorage.setItem('LogIn', true);

      Swal.fire({
        title: "Login Successful!",
        text: "You have signed in!",
        icon: "success"
      });
    }
  }, []);

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
                    className="mySwiper lg:h-[500px]"
                >
                    <SwiperSlide >
                      <div className='absolute m-5 flex flex-col lg:top-[20vh] top-[5vh] left-[5vw] text-black font-semibold lg:gap-5  z-10 text-xl p-5 rounded-lg  bg-slate-100/75'><h1 className='text-gray-500 lg:text-3xl'>Time to meet your</h1><h1 className='lg:text-7xl font-extrabold'>NEW SWEET HOME</h1></div>  
                   
                        <img className='w-full h-30 ' src="https://www.brightonhomes.net.au/sites/default/files/styles/acreage_home_image_style/public/zayn-facade-double-storey-house-designs.jpg?itok=2cwPFYtC" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='absolute m-5 flex flex-col lg:top-[20vh] top-[5vh] left-[5vw] text-black font-semibold lg:gap-5  z-10 text-xl p-5 rounded-lg  bg-slate-100/75'><h1 className='lg:text-7xl font-extrabold'>TOMMOROW, BUILD TODAY</h1><h1 className='text-gray-500 lg:text-3xl'>We are the investors, asset manager and builder of asset teams</h1></div>
                        <img className='w-full h-30 '  src="https://media.istockphoto.com/id/1337285643/photo/residential-community-in-western-usa-with-modern-homes-at-sunrise.jpg?s=612x612&w=0&k=20&c=SKOlYudoH0mOgGQ5mPFgGhD4WlW6ir9wAoN7fMZOHV8=" alt="" /></SwiperSlide>
                    <SwiperSlide>
                    <div className='absolute m-5 flex flex-col lg:top-[20vh] top-[5vh] left-[5vw] text-black font-semibold lg:gap-5  z-10 text-xl p-5 rounded-lg  bg-slate-100/75'><h1 className='lg:text-7xl font-extrabold'>MODERN LIVING FOR EVERYONE</h1><h1 className='text-gray-500 lg:text-3xl'>We provide a complete service for the purchase or rental of real estate.</h1></div>
                        <img className='w-full h-30 ' src="https://media.istockphoto.com/id/1352834390/photo/aerial-top-down-view-of-houses-in-england.jpg?b=1&s=612x612&w=0&k=20&c=tEVF5w5Y8GsTHpxSBAUY15xQGdCrOxir0P3OI_qch_s=" alt="" /></SwiperSlide>
                    
                    
                </Swiper>
            </>
             
             <h1 className='bg-gray-200 rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-center'>Our residence </h1>

             <Cards></Cards>
              
        </div>
    );
};

export default Home;