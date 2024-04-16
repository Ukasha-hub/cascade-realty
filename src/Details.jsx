import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
const Details = () => {
    const residence= useLoaderData();
    const {id}= useParams();
   
    const reside= residence.find(res=> res.id===parseInt(id));
    return (
        <div>
            <Helmet><title>Details</title></Helmet>
            <h1>Book detail of : {reside.id}</h1>
            <h1>{reside.estate_title}</h1>
        </div>
    );
};

export default Details;