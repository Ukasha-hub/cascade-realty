import { useState } from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Cards = () => {
    const [residence, setResidence]= useState([]);

    useEffect(()=>{
        Aos.init({})
       },[])

    useEffect(()=> {
        fetch("residence.json")
        .then(res => res.json())
        .then(data=> setResidence(data))
    }, [])

    return (
        <div className="pb-10" style={{backgroundImage:"url('https://as2.ftcdn.net/v2/jpg/01/81/84/23/1000_F_181842351_XCzj7EczazkUJlq1dKkH9EtSjJb3zRkN.jpg')", backgroundAttachment:'fixed', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            
           

            <div className="grid justify-center content-center  justify-items-center items-center gap-5 ">
                {
                    residence.map(res=>
                    <>
                       <div className="card lg:card-side w-full  bg-base-200 border-2 lg:m-3" data-aos='fade-down'>
                            <figure className="px-10 pt-10 lg:py-3 w-30">
                                <img src={res.cover_image} alt="Shoes" className="rounded-xl w-96" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h1 className="flex justify-center font-bold text-2xl">{res.estate_title}</h1>
                                <div className="">
                                <div className=" shadow">
  
                                    <div className="stat border-b-2">
                                        <div className="stat-figure text-secondary">
                                        <span className="text-2xl text-black"><FaHome /> </span>
                                        

                                        </div>
                                        <div className="stat-title">Status</div>
                                        <div className=" text-2xl font-semibold">{res.status}</div>
                                        
                                    </div>
                                    
                                    <div className="stat border-b-2">
                                        <div className="stat-figure text-secondary">
                                        <span className="text-2xl text-black"><IoIosPricetag /> </span>   
                                       
                                        </div>
                                        <div className="stat-title">Price</div>
                                        <div className="text-2xl font-semibold">{res.price}</div>
                                        
                                    </div>
                                    
                                    <div className="stat">
                                        <div className="stat-figure text-secondary">
                                        <span className="text-2xl text-black"><CiLocationOn /> </span>   
                                       
                                        </div>
                                        <div className="stat-title">Location</div>
                                        <div className="text-2xl font-semibold">{res.location}</div>
                                        
                                    </div>
  
</div>
                                </div>
                                
                                <div className="card-actions">
                                <Link to={`/details/${res.id}`}><button className="btn btn-neutral">View Details</button></Link>    
                                
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>

        </div>
    );
};

export default Cards;