import { useState } from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Cards = () => {
    const [residence, setResidence]= useState([]);

    useEffect(()=> {
        fetch("residence.json")
        .then(res => res.json())
        .then(data=> setResidence(data))
    }, [])

    return (
        <div className="pb-10">
            
           

            <div className="grid justify-center content-center  justify-items-center items-center gap-5 ">
                {
                    residence.map(res=>
                    <>
                       <div className="card w-full bg-base-100 border-4 lg:m-10">
                            <figure className="px-10 pt-10 w-30">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <div className="flex flex-row">
                                    <h4>{res.status}</h4>
                                    <h4>{res.price}</h4>
                                    <h4>{res.location}</h4>
                                </div>
                                <p>{res.description}</p>
                                <div className="card-actions">
                                <Link to={`/details/${res.id}`}><button className="btn btn-primary">Buy Now</button></Link>    
                                
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