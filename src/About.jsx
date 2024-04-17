//import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import 'animate.css';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from './AuthProvider';
import { useEffect } from 'react';



import Swal from 'sweetalert2'

import Aos from 'aos'
import 'aos/dist/aos.css'





const About = () => {
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

    useEffect(()=>{
      Aos.init({duration: 1000})
     },[])
    
    
    return (
      
      <div className="p-5" style={{backgroundImage:"url('https://img.freepik.com/free-photo/office-buildings-out-focus_1194-1205.jpg')",backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <Helmet>
        <title>About</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row gap-5 pt-10" data-aos='fade-zoom-in'>
           <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold">About Us: Your trusted partner of real estates</h1>
              <p>Welcome to [Company Name], where your journey to finding your dream home begins. With a deep understanding of the profound significance of buying or renting a home, we stand as your reliable and dedicated partner in the quest for your perfect abode. At [Company Name], we are committed to offering unparalleled service, expert guidance, and a personalized approach to every client. With a legacy of excellence spanning several years in the real estate industry, our team of seasoned professionals brings a wealth of experience and expertise to the table. We recognize that each client is unique, with their own set of preferences, needs, and aspirations. Therefore, our approach is tailored to provide bespoke solutions that align perfectly with your individual requirements.Our mission is clear: to exceed your expectations at every turn. We achieve this by prioritizing your needs above all else and delivering results that speak for themselves. By fostering an environment of trust, transparency, and integrity, we have earned the reputation of being a trusted advisor and partner in your real estate journey.</p>

           </div>
           <img className="w-[500px]" src="https://www.unicomcorp.com/wp-content/uploads/2019/02/real-estate-customer-service-ideas.jpg" alt="" />
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-5 pt-10">
           <div className="flex flex-col gap-5" data-aos='fade-zoom-in'>
              
              <p>At [Company Name], we believe that the key to success lies in our unwavering commitment to serving our clients with the highest standards of professionalism and excellence. From your initial consultation to the final closing, we are with you every step of the way, providing guidance, support, and expert advice to ensure a smooth and stress-free transaction. Our comprehensive approach to real estate encompasses every aspect of the buying or renting process. Whether you're searching for a cozy apartment in the heart of the city, a spacious family home in the suburbs, or a luxurious waterfront estate, we have the resources and expertise to turn your vision into reality. Our extensive network and in-depth market knowledge enable us to identify opportunities that meet your specific criteria and negotiate the best possible terms on your behalf. But our commitment to you doesn't end with the sale or lease agreement. We understand that moving into a new home is just the beginning of a new chapter in your life, and we are here to support you every step of the way. Whether you need recommendations for local service providers, advice on home maintenance, or assistance with future real estate endeavors, we're always just a phone call away. At [Company Name], we take great pride in the relationships we've built with our clients over the years. We are honored to have played a role in helping countless individuals and families find their perfect home, and we look forward to the opportunity to do the same for you.</p>

           </div>
           <img className="w-[500px]" src="https://www.helpnri.org/blog/wp-content/uploads/2018/08/senior-citizen-care-service-in-bhubaneswar-1.jpg" alt="" />
      </div>

      <>
      <div className=" py-10 bg-base-200 w-full mt-10" data-aos='fade-zoom-in'>
  <div className="flex justify-center items-center flex-col   gap-5">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Us!</h1>
      <p className="text-center mt-5"><span className='font-bold'>Hotline:</span>+000111000111</p>
      
    </div>
    
    <div className="flex justify-center  lg:w-[50%] border-4 p-10 rounded-lg">
            <div className=" w-full ">
            <h1 className='text-center font-semibold text-2xl'>Email Us</h1>
            <form className=''>
             <div className="flex-flex-col space-y">
             <label className="input input-bordered flex items-center gap-2 mb-4">
                 
                 <input type="email" value={user.email} name="email" className="grow" placeholder="Email" />
             </label>

                 <label className="input input-bordered flex items-center gap-2 mb-4">
                 
                 <input type="email" value='@gmail.com' name='password' className="grow" placeholder="password" />
             </label>
             <label className="input input-bordered flex items-center gap-2 mb-4">
                 
                 <input type="text" required name='subject' className="grow" placeholder="Subject" />
             </label>
             <textarea className="textarea textarea-bordered w-full" placeholder="Your Message Body"></textarea>
             <div className="flex justify-center"><button className="btn btn-neutral btn-wide  mt-5 ">Send</button></div>
             </div>
             
             
            </form>


        
         
        
            </div>
    </div>
  </div>
</div>
      </>
      
  </div>
    );
};

export default About;