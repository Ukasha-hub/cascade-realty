import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useEffect } from "react";
import { IoIosPricetags } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineBedroomChild } from "react-icons/md";
import { FaRestroom } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2'


const Details = () => {

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

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []); // Runs only once after the component mounts
    
    
    const residence= useLoaderData();
    const {id}= useParams();

    
   
    const reside= residence.find(res=> res.id===parseInt(id));
    return (
        <div>
            <Helmet><title>Details</title></Helmet>
            

            <>
            <div className="carousel w-auto h-[500px] lg:mx-20">
                <div id="item1" className="carousel-item w-full">
                    <img src={reside.images[0]} className="w-full" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src={reside.images[1]} className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src={reside.images[2]} className="w-full" />
                </div> 
                
                </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-lg">1</a> 
                <a href="#item2" className="btn btn-lg">2</a> 
                <a href="#item3" className="btn btn-lg">3</a> 
                
                </div>
      
    </>
           <div className="flex lg:flex-row flex-col-reverse mb-10 bg-slate-100 py-10" data-aos='fade-up'>
              <div className="mx-20">
                  
                  <ul className="space-y-5">
                    <li><button className="btn btn-lg"><IoIosPricetags />{reside.price}</button></li>
                    <li><span className="font-bold"><IoHome />Status</span> {reside.status}</li>
                    <li><span className="font-bold"><FaLocationDot />Location</span> {reside.location}</li>
                    <li><span className="font-bold"><FaChartArea />Area</span> {reside.area}</li>
                    <li><span className="font-bold"><AiFillHeart />Segment</span> {reside.segment_name}</li>
                    <li><span className="font-bold"><MdOutlineBedroomChild />Rooms</span> {reside.number_of_rooms}</li>
                    <li><span className="font-bold"><FaRestroom />Bathrooms</span> {reside.number_of_washroom}</li>
                  </ul>
                  <div className="divider"></div> 
                  
                  <div className="border-4 rounded-lg p-10">
                  <h1 className="flex flex-row gap-4 justify-center text-3xl font-bold mb-3"><span><FaCoffee /></span>Facilities</h1>
                  <ul className="space-y-5 list-disc ">
                    {reside.facilities.map(res=>
                    <>
                      <li>{res}</li>
                    </>
                    )}
                  </ul>
                  </div>
              </div>
              <div className="divider lg:divider-horizontal"></div> 
              <div>
                <h1 className="lg:text-5xl text-2xl font-extrabold mb-10">{reside.estate_title}</h1>
                <h3 className="text-xl font-bold">Description</h3>
                <p>{reside.description}</p>
                <p>{reside.description}</p>
                <p>{reside.description}</p>
                <p>{reside.description}</p>
              </div>
           </div>

        </div>
    );
};

export default Details;